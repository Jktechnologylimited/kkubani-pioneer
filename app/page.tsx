import type { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";

import Welcome from "@/components/Welcome";


import React from "react";
import Testimonials from "../components/Testimonial";
import BookingButton from "../components/BookingButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kkubaniandco.com"),
  alternates: {
    canonical: "https://www.kkubaniandco.com",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  
  title: "K.K. Ubani & Co.",
  description: "Number 1 law firm with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: ["K.K. Ubani & Co.", "Gratias Deo Chambers"],
  authors: [{ name: "K.K. UBANI & CO" }],
  creator: "K.K. UBANI & CO",
  publisher: "K.K. UBANI & CO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutUs />
      <BookingButton />
      <OurServices />
      <Testimonials />
      {/* <Solution /> */}
      <ClientLogos />
    </div>
  );
};

export default page;
