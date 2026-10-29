import { siteCopy } from "@/lib/jktl/public-content";
import type { Metadata } from "next";
import React from "react";

const baseMetadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/corporate/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Corporate Law Services",
  description:
    "Expert corporate legal services in Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Corporate",
    "Corporate legal service ",
    "Corporate law service ",
    "Corporate law",
    "lawyer needed for Corporate law case",
    "Corporate legal court case lawyer",
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

const CorporateLaw = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.corporate.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.corporate.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.corporate.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.corporate.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.corporate.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.corporate.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>{t("pages.law.firm.services.corporate.field7")}</strong>{" "}
            {t("pages.law.firm.services.corporate.field8")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.corporate.field9")}</strong>{" "}
            {t("pages.law.firm.services.corporate.field10")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.corporate.field11")}</strong>{" "}
            {t("pages.law.firm.services.corporate.field12")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.corporate.field13")}</strong>{" "}
            {t("pages.law.firm.services.corporate.field14")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.corporate.field15")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.corporate.field16")}
        </p>
      </div>
    </>
  );
};

export default CorporateLaw;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.corporate.seo.title"),
    description: t("pages.law.firm.services.corporate.seo.description"),
    alternates: { canonical: "/law-firm-services/corporate" },
  };
}
