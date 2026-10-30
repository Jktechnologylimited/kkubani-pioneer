import { NextResponse } from "next/server";
const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json(
      { error: "Request origin is not allowed." },
      { status: 403 },
    );
  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!data || typeof data !== "object")
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  const { name, email, number, date, time } = data;
  if (
    [name, email, number, date, time].some(
      (v) => typeof v !== "string" || !v.trim(),
    ) ||
    name.length > 100 ||
    email.length > 254 ||
    number.length > 40 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    /[\r\n]/.test(email) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !["10:00 AM", "1:00 PM", "3:00 PM"].includes(time)
  )
    return NextResponse.json(
      {
        error: "Please provide valid contact details, date and preferred time.",
      },
      { status: 400 },
    );
  const when = new Date(
    `${date}T${{ "10:00 AM": "10:00", "1:00 PM": "13:00", "3:00 PM": "15:00" }[time as string]}:00+01:00`,
  );
  if (
    !Number.isFinite(when.getTime()) ||
    when <= new Date() ||
    when.toLocaleDateString("en-CA", { timeZone: "Africa/Lagos" }) !== date
  )
    return NextResponse.json(
      { error: "Please choose a valid future date and time." },
      { status: 400 },
    );
  if (!process.env.RESEND_API_KEY)
    return NextResponse.json(
      {
        error:
          "Online meeting requests are temporarily unavailable. Please contact the firm at info@kkubaniandco.com or +234 809 900 0582.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        from:
          process.env.RESEND_FROM_EMAIL ||
          "K.K. Ubani & Co. <bookings@mail.ibiz.name.ng>",
        to: ["info@kkubaniandco.com"],
        reply_to: email,
        subject: "New consultation request — K.K. Ubani & Co.",
        text: `Meeting request (not confirmed)\nName: ${name}\nEmail: ${email}\nPhone: ${number}\nPreferred date: ${date}\nPreferred time: ${time} (Africa/Lagos)`,
        html: `<h2>Consultation request — awaiting confirmation</h2>${Object.entries(
          {
            Name: name,
            Email: email,
            Phone: number,
            Date: date,
            "Time (WAT)": time,
          },
        )
          .map(
            ([k, v]) =>
              `<p><strong>${k}:</strong> ${escapeHtml(v as string)}</p>`,
          )
          .join("")}`,
      }),
    });
    if (!response.ok) throw new Error("Email provider rejected request");
    const result = await response.json();
    if (typeof result.id !== "string" || !result.id)
      throw new Error("Email provider did not acknowledge request");
    return NextResponse.json({ success: true, status: "requested" });
  } catch {
    console.error("Meeting request email delivery failed");
    return NextResponse.json(
      {
        error:
          "Your request could not be delivered. Please contact the firm directly or try again later.",
      },
      { status: 502 },
    );
  }
}
