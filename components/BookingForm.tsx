"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

export default function BookingForm() {
  const t = useSiteCopy();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    time: "",
  });
  const [status, setStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  // In-memory list of booked dates (for MVP)
  const bookedDates = ["2025-05-07", "2025-05-08"];

  // Available times for each day
  const availableTimes = ["10:00 AM", "1:00 PM", "3:00 PM"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setFormData((prevData) => ({
      ...prevData,
      date: format(date, "yyyy-MM-dd"),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t("components.BookingForm.field1"));

    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus(t("components.BookingForm.field2"));
        setFormData({ name: "", email: "", number: "", date: "", time: "" });
        setSelectedDate(undefined);
      } else {
        setStatus(t("components.BookingForm.field3"));
      }
    } catch (error: unknown) {
      // Handle error with type guard
      if (error instanceof Error) {
        console.error("Error during form submission:", error.message);
      } else {
        console.error("An unknown error occurred during form submission");
      }
      setStatus(t("components.BookingForm.field4"));
    }
  };

  // Check if the date is booked
  const isDateBooked = (date: Date) => {
    return bookedDates.includes(format(date, "yyyy-MM-dd"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto p-6 border rounded-xl shadow-md"
    >
      <div>
        <Label htmlFor="name">{t("components.BookingForm.field5")}</Label>
        <Input
          id="name"
          name="name"
          placeholder={t("components.BookingForm.field6")}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">{t("components.BookingForm.field7")}</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder={t("components.BookingForm.field8")}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="number">{t("components.BookingForm.field9")}</Label>
        <Input
          id="number"
          name="number"
          placeholder={t("components.BookingForm.field10")}
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="date">{t("components.BookingForm.field11")}</Label>
        <DayPicker
          selected={selectedDate}
          onDayClick={handleDateChange}
          disabled={bookedDates.map((date) => new Date(date))}
          footer={
            selectedDate
              ? `You selected: ${format(selectedDate, "yyyy-MM-dd")}`
              : ""
          }
          className="w-full"
          classNames={{
            day: "m-1 p-2 rounded hover:bg-gray-200", // margin + padding + hover style
            table: "mx-auto", // center calendar
            caption: "text-center mb-2 text-lg font-semibold",
          }}
        />
      </div>

      <div>
        <Label htmlFor="time">{t("components.BookingForm.field12")}</Label>
        <select
          id="time"
          name="time"
          className="w-full border p-2"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">{t("components.BookingForm.field13")}</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <Button
        type="submit"
        className="bg-orange-500 text-black"
        disabled={!selectedDate || !formData.time}
      >
        {t("components.BookingForm.field14")}
      </Button>

      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  );
}
