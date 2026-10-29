import { siteCopy } from "@/lib/jktl/public-content";
import type { Metadata } from "next";
import React from "react";

const baseMetadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/real-estate/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Real estate law service | K.K. Ubani & Co. ",
  description:
    "Expert real estate legal services in Lagos, Port Harcourt and Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Real estate ",
    "Real estate legal services",
    "Real estate law service",
    "Real estate law ",
    "lawyer needed for Real estate law case",
    "Real estate court case lawyer",
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

const RealEstate = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.real.estate.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.real.estate.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.real.estate.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.real.estate.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.real.estate.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.real.estate.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>{t("pages.law.firm.services.real.estate.field7")}</strong>
            {t("pages.law.firm.services.real.estate.field8")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.real.estate.field9")}</strong>
            {t("pages.law.firm.services.real.estate.field10")}
          </li>
          <li>
            <strong> {t("pages.law.firm.services.real.estate.field11")}</strong>
            {t("pages.law.firm.services.real.estate.field12")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.real.estate.field13")}</strong>
            {t("pages.law.firm.services.real.estate.field14")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.real.estate.field15")}</strong>
            {t("pages.law.firm.services.real.estate.field16")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.real.estate.field17")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.real.estate.field18")}
        </p>
      </div>
    </>
  );
};

export default RealEstate;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.real.estate.seo.title"),
    description: t("pages.law.firm.services.real.estate.seo.description"),
    alternates: { canonical: "/law-firm-services/real-estate" },
  };
}
