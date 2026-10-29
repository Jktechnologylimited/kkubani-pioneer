import { siteCopy } from "@/lib/jktl/public-content";
import type { Metadata } from "next";
import React from "react";

const baseMetadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/taxation/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Taxation law service",
  description:
    "Expert taxation legal services in Lagos, Port Harcourt and Abuja Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Taxation",
    "Taxation legal services",
    "Taxation law services",
    "Taxation law",
    "lawyer needed for taxation case",
    "tax court case lawyer",
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

const TaxationLaw = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.taxation.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.taxation.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.taxation.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.taxation.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.taxation.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.taxation.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>{t("pages.law.firm.services.taxation.field7")}</strong>
            {t("pages.law.firm.services.taxation.field8")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.taxation.field9")}</strong>
            {t("pages.law.firm.services.taxation.field10")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.taxation.field11")}</strong>
            {t("pages.law.firm.services.taxation.field12")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.taxation.field13")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.taxation.field14")}
        </p>
      </div>
    </>
  );
};

export default TaxationLaw;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.taxation.seo.title"),
    description: t("pages.law.firm.services.taxation.seo.description"),
    alternates: { canonical: "/law-firm-services/taxation" },
  };
}
