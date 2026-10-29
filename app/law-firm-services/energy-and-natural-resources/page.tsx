import { siteCopy } from "@/lib/jktl/public-content";
import type { Metadata } from "next";
import React from "react";

const baseMetadata: Metadata = {
  alternates: {
    canonical:
      "https://www.kkubaniandco.com/law-firm-services/energy-and-natural-resources/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Energy and Natural Resources",
  description:
    "Expert energy and natural resources legal services in Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",

    "energy and natural resources law service ",
    "energy and natural resources law",
    "lawyer needed for energy and natural resources law case",
    "energy and natural resources legal court case lawyer",
  ],
  authors: [{ name: "eca" }],
  creator: "eca",
  publisher: "eca",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const EnergyandNaturalResourcesLaw = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.energy.and.natural.resources.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.energy.and.natural.resources.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.energy.and.natural.resources.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.energy.and.natural.resources.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.energy.and.natural.resources.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.energy.and.natural.resources.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>
              {t("pages.law.firm.services.energy.and.natural.resources.field7")}
            </strong>
            {t("pages.law.firm.services.energy.and.natural.resources.field8")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.energy.and.natural.resources.field9")}
            </strong>
            {t("pages.law.firm.services.energy.and.natural.resources.field10")}
          </li>
          <li>
            <strong>
              {t(
                "pages.law.firm.services.energy.and.natural.resources.field11",
              )}
            </strong>
            {t("pages.law.firm.services.energy.and.natural.resources.field12")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.energy.and.natural.resources.field13")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.energy.and.natural.resources.field14")}
        </p>
      </div>
    </>
  );
};

export default EnergyandNaturalResourcesLaw;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.energy.and.natural.resources.seo.title"),
    description: t(
      "pages.law.firm.services.energy.and.natural.resources.seo.description",
    ),
    alternates: {
      canonical: "/law-firm-services/energy-and-natural-resources",
    },
  };
}
