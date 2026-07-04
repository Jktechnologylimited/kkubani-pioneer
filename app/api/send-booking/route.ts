import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, number, date, time } = await request.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com', // Zoho SMTP host
    port: 465,             // Use 465 for SSL, or 587 for TLS
    secure: true,          // True for 465, false for 587
    auth: {
      user: process.env.ZOHO_USER, // Your Zoho email address
      pass: process.env.ZOHO_PASS  // Your Zoho app password
    }
  })

  const mailOptions = {
    from: process.env.ZOHO_USER,
    to: 'johnchnd195@gmail.com', // Replace with your law firm email
    subject: 'New Appointment Booking',
    html: `
      <h3>New Appointment Booking</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${number}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
