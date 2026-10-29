import { siteCopy } from "@/lib/jktl/public-content";
import Moreabout from "@/components/Moreabout";
import Testimonials from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import React from "react";

import { Metadata } from "next";

const baseMetadata: Metadata = {
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

const page = async () => {
  const t = await siteCopy();

  return (
    <div className="pt-25">
      <ContactForm />
      <Testimonials />
    </div>
  );
};

export default page;
export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.contact.seo.title"),
    description: t("pages.contact.seo.description"),
    alternates: { canonical: "/contact" },
  };
}
