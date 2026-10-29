import { siteCopy } from "@/lib/jktl/public-content";
import type { Metadata } from "next";
import React from "react";

const baseMetadata: Metadata = {
  alternates: {
    canonical:
      "https://www.kkubaniandco.com/law-firm-services/commercial-litigation/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Commercial Litigation law service",
  description:
    "Expert Commercial litigation  legal services Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Commercial Litigation",
    "Commercial Litigation legal service ",
    "Commercial Litigation law service ",
    "Commercial Litigation law",
    "lawyer needed for Commercial Litigation law case",
    "Commercial Litigation legal court case lawyer",
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

const CommercialLitigationLaw = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.commercial.litigation.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.commercial.litigation.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.commercial.litigation.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.commercial.litigation.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.commercial.litigation.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.commercial.litigation.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>
              {t("pages.law.firm.services.commercial.litigation.field7")}
            </strong>
            {t("pages.law.firm.services.commercial.litigation.field8")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.commercial.litigation.field9")}
            </strong>
            {t("pages.law.firm.services.commercial.litigation.field10")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.commercial.litigation.field11")}
            </strong>
            {t("pages.law.firm.services.commercial.litigation.field12")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.commercial.litigation.field13")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.commercial.litigation.field14")}
        </p>
      </div>
    </>
  );
};

export default CommercialLitigationLaw;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.commercial.litigation.seo.title"),
    description: t(
      "pages.law.firm.services.commercial.litigation.seo.description",
    ),
    alternates: { canonical: "/law-firm-services/commercial-litigation" },
  };
}
