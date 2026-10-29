import { siteCopy } from "@/lib/jktl/public-content";
import OurServices from "@/components/Services";
import Testimonials from "@/components/Testimonial";
import React from "react";

import { Metadata } from "next";

const baseMetadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Law Firm Services",
  description: "Number 1 law firm services with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "K.K. Ubani & Co.",
    "Law firm services",
    "Corporate",
    "Commercial",
    "Energy and Natural Resources",
    "Telecommunication",
    "Aviation",
    "Taxation",
    "Commercial Litigation",
    "Alternative Dispute Resolution",
    "Project Finance",
    "Shipping and Maritime",
    "Foreign Investment",
    "Banking and Finance",
    "Real Estate",
    "Labour / Employment",
    "Intellectual Property",
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

const pages = async () => {
  const t = await siteCopy();

  return (
    <div>
      <OurServices />
      <Testimonials />
    </div>
  );
};

export default pages;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.seo.title"),
    description: t("pages.law.firm.services.seo.description"),
    alternates: { canonical: "/law-firm-services" },
  };
}
