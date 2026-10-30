"use client";
import { useState } from "react";
import { CalendarDays, ArrowUpRight } from "lucide-react";
export default function BookingForm({
  compact = false,
  simulation = false,
}: {
  compact?: boolean;
  simulation?: boolean;
}) {
  const [busy, setBusy] = useState(false),
    [status, setStatus] = useState(""),
    [success, setSuccess] = useState(false);
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setBusy(true);
    setStatus("");
    setSuccess(false);
    if (simulation) {
      setSuccess(true);
      setStatus(
        `Simulation complete: a meeting request for ${data.date} at ${data.time} WAT would be emailed to info@kkubaniandco.com. No email was sent and no meeting was booked.`,
      );
      setBusy(false);
      return;
    }
    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok)
        throw Error(
          result.error ||
            "Your request could not be sent. Please contact the firm directly.",
        );
      setSuccess(true);
      setStatus(
        "Your meeting request has been sent. The firm will contact you to confirm a time. Your appointment is not yet confirmed.",
      );
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <form
      className={`meeting-form ${compact ? "compact" : ""}`}
      onSubmit={submit}
    >
      {!compact && (
        <>
          <p className="eyebrow">
            <CalendarDays size={16} /> YOUR NEXT STEP
          </p>
          <h2>Start a conversation.</h2>
          <p>
            Tell us when you would like to meet. Our team will be in touch to
            confirm availability.
          </p>
        </>
      )}
      {simulation && (
        <p className="simulation-notice">
          Demo only · use the sample details below. Nothing will be sent or
          saved.
        </p>
      )}
      <label>
        Full name
        <input
          name="name"
          defaultValue={simulation ? "Demo Visitor" : undefined}
          autoComplete={simulation ? "off" : "name"}
          required
          maxLength={100}
        />
      </label>
      <label>
        Email address
        <input
          name="email"
          defaultValue={simulation ? "visitor@example.com" : undefined}
          type="email"
          autoComplete="email"
          required
          maxLength={254}
        />
      </label>
      <label>
        Phone number
        <input
          name="number"
          defaultValue={simulation ? "08000000000" : undefined}
          type="tel"
          autoComplete="tel"
          required
          maxLength={40}
        />
      </label>
      <div className="meeting-row">
        <label>
          Preferred date
          <input name="date" type="date" min={today} required />
        </label>
        <label>
          Preferred time (WAT)
          <select name="time" required defaultValue="">
            <option value="" disabled>
              Select a time
            </option>
            <option>10:00 AM</option>
            <option>1:00 PM</option>
            <option>3:00 PM</option>
          </select>
        </label>
      </div>
      <p className="meeting-note">
        These are preferred times, not live calendar availability. Avoid sharing
        confidential information. Your contact details will be used to respond
        to this request.
      </p>
      <label className="meeting-consent">
        <input type="checkbox" required />{" "}
        {simulation
          ? "I understand this is a simulation only."
          : "I agree to be contacted about this meeting request."}
      </label>
      <button className="cta-button" disabled={busy}>
        {busy
          ? "Sending request…"
          : simulation
            ? "Simulate meeting request"
            : "Request a meeting"}
        <ArrowUpRight size={16} />
      </button>
      {status && (
        <p
          role={success ? "status" : "alert"}
          className={success ? "meeting-success" : "meeting-error"}
        >
          {status}
        </p>
      )}
    </form>
  );
}
