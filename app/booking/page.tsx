import Moreabout from "@/components/Moreabout";
import Testimonials from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import React from "react";

import { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

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
  title: "Book An Appointment with K.K. Ubani and Co.",
  description:
    "Book an appointment with K.K. Ubani and Co. legal services in Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Book an appointment for Law firm services",
    "Book an appointment for service",
    "Book an appointment for legal service ",
    "Book an appointment for law service ",
    "Book an appointment for attorneys",
    "Book an appointment for a lawyer needed for law case",
    "Book an appointment for legal court case lawyer",
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
    <div className="pt-25">
      <BookingForm/>
      <Testimonials />
    </div>
  );
};

export default page;
