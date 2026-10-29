import { siteCopy } from "@/lib/jktl/public-content";
import type { Metadata } from "next";
import React from "react";

const baseMetadata: Metadata = {
  alternates: {
    canonical:
      "https://www.kkubaniandco.com/law-firm-services/intellectual-property/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Intellectual property law service ",
  description:
    "Expert Intellectual property services in Lagos, Port Harcourt and Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Intellectual property ",
    "Intellectual property legal services",
    "Intellectual property law service",
    "Intellectual property law ",
    "lawyer needed for Intellectual property law  case",
    "Intellectual property court case lawyer",
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

const IntellectualProperty = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.intellectual.property.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.intellectual.property.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.intellectual.property.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.intellectual.property.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.intellectual.property.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.intellectual.property.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>
              {t("pages.law.firm.services.intellectual.property.field7")}
            </strong>
            {t("pages.law.firm.services.intellectual.property.field8")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.intellectual.property.field9")}
            </strong>
            {t("pages.law.firm.services.intellectual.property.field10")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.intellectual.property.field11")}
            </strong>
            {t("pages.law.firm.services.intellectual.property.field12")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.intellectual.property.field13")}
            </strong>
            {t("pages.law.firm.services.intellectual.property.field14")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.intellectual.property.field15")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.intellectual.property.field16")}
        </p>
      </div>
    </>
  );
};

export default IntellectualProperty;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.intellectual.property.seo.title"),
    description: t(
      "pages.law.firm.services.intellectual.property.seo.description",
    ),
    alternates: { canonical: "/law-firm-services/intellectual-property" },
  };
}
