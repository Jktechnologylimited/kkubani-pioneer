import { siteCopy } from "@/lib/jktl/public-content";
import React from "react";

import { Metadata } from "next";

const baseMetadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/entertainment/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Entertainment law service ",
  description:
    "Expert Entertainment legal services in Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Entertainment ",
    "Entertainment legal service ",
    "Entertainment law service ",
    "Entertainment law",
    "lawyer needed for Entertainment law case",
    "Entertainment legal court case lawyer",
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

const entertainment = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.entertainment.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.entertainment.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.entertainment.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.entertainment.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.entertainment.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.entertainment.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>{t("pages.law.firm.services.entertainment.field7")}</strong>
            {t("pages.law.firm.services.entertainment.field8")}
          </li>
          <li>
            <strong>{t("pages.law.firm.services.entertainment.field9")}</strong>
            {t("pages.law.firm.services.entertainment.field10")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.entertainment.field11")}
            </strong>
            {t("pages.law.firm.services.entertainment.field12")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.entertainment.field13")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.entertainment.field14")}
        </p>
      </div>
    </>
  );
};

export default entertainment;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.entertainment.seo.title"),
    description: t("pages.law.firm.services.entertainment.seo.description"),
    alternates: { canonical: "/law-firm-services/entertainment" },
  };
}
