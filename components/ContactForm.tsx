"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const t = useSiteCopy();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(t("components.ContactForm.field1"));
    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus(t("components.ContactForm.field2"));
        setFormData({ name: "", email: "", number: "", message: "" });
      } else {
        setStatus(t("components.ContactForm.field3"));
      }
    } catch (error) {
      console.error(error);
      setStatus(t("components.ContactForm.field4"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto p-6 border rounded-xl shadow-md"
    >
      <div>
        <Label htmlFor="name">{t("components.ContactForm.field5")}</Label>
        <Input
          id="name"
          name="name"
          placeholder={t("components.ContactForm.field6")}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">{t("components.ContactForm.field7")}</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder={t("components.ContactForm.field8")}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="number">{t("components.ContactForm.field9")}</Label>
        <Input
          id="number"
          name="number"
          placeholder={t("components.ContactForm.field10")}
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="message">{t("components.ContactForm.field11")}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("components.ContactForm.field12")}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button className="text-orange-500" type="submit">
        {t("components.ContactForm.field13")}
      </Button>

      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  );
}
