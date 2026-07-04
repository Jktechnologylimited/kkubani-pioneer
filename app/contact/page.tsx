import Moreabout from '@/components/Moreabout'
import Testimonials from '@/components/Testimonial'
import ContactForm from '@/components/ContactForm'
import React from 'react'

import { Metadata } from 'next';


export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  // openGraph: {
  //   images: '/og-image.png',
  // },
  title: "Contact",
  description:
    "Contact K.K. Ubani and Co. legal services in Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Contact Law firm services",
    "Contact service",
    "Contact legal service ",
    "Contact law service ",
    "Contact attorneys",
    "Contact a lawyer needed for law case",
    "Contact for legal court case lawyer",
  ],
  authors: [{ name: "John" }],
  creator: "John Uchendu",
  publisher: "John Uchendu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const page = () => {
  return (
    <div className='pt-25'>
      <ContactForm/>
        <Testimonials/>

    </div>
  )
}

export default page