'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setStatus('Message sent successfully.')
        setFormData({ name: '', email: '', number: '', message: '' })
      } else {
        setStatus('Failed to send message.')
      }
    } catch (error) {
      console.error(error)
      setStatus('Error sending message.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 border rounded-xl shadow-md">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Ugo Ola Manga "
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
          placeholder="ugoolamanga@example.com"
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
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us how we can help you..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button className='text-orange-500' type="submit">Open A Case</Button>

      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </form>
  )
}
