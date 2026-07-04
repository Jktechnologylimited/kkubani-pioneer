import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
import React from "react";

import { Metadata } from "next";
import ClientLogos from "@/components/clients";
import OurServices from "@/components/Services";

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
  title: "About",
  description:
    "About K.K. Ubani and Co. legal services in Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "About Law firm services",
    "About service",
    "About legal service ",
    "About law service ",
    "About law",
    "About a lawyer needed for law case",
    "About legal court case lawyer",
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
    <>


      <div className="pt-10">
        <AboutUs />
      </div>
      <Testimonials />
      <ClientLogos/>
      <Hero/>
      <OurServices/>

    </>
  );
};

export default page;
