import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, number, message } = await request.json()

  // Create transporter using Zoho's SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',  // Zoho SMTP server
    port: 465,  // Use 587 if you prefer TLS
    secure: true,  // Use SSL
    auth: {
      user: process.env.EMAIL_USER,  // Your Zoho email address
      pass: process.env.EMAIL_PASS   // Your Zoho app password (NOT your main password)
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender email (Zoho email)
    to: 'johnchnd195@gmail.com',   // Replace with your desired email
    subject: 'New Contact Form Message',
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${number}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })  // Send success response if email is sent
  } catch (error) {
    console.error(error)  // Log the error if sending fails
    return NextResponse.json({ success: false }, { status: 500 })  // Send error response
  }
}
