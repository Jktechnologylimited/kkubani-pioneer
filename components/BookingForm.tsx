"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

export default function BookingForm() {
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
    >
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
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Booking successful.");
        setFormData({ name: "", email: "", number: "", date: "", time: "" });
        setSelectedDate(undefined);
      } else {
        setStatus("Failed to book.");
      }
    } catch (error: unknown) {
      // Handle error with type guard
      if (error instanceof Error) {
        console.error("Error during form submission:", error.message);
      } else {
        console.error("An unknown error occurred during form submission");
      }
      setStatus("Error occurred.");
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
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="number">Phone Number</Label>
        <Input
          id="number"
          name="number"
          placeholder="+234 801 234 5678"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="date">Select a Date</Label>
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
        <Label htmlFor="time">Select a Time</Label>
        <select
          id="time"
          name="time"
          className="w-full border p-2"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select Time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" className="bg-orange-500 text-black" disabled={!selectedDate || !formData.time}>
        Book Appointment
      </Button>

      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  );
}
