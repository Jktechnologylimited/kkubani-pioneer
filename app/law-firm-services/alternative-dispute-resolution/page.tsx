import { siteCopy } from "@/lib/jktl/public-content";
import type { Metadata } from "next";
import React from "react";

const baseMetadata: Metadata = {
  alternates: {
    canonical:
      "https://www.kkubaniandco.com/law-firm-services/alternative-dispute-resolution/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Alternative Dispute Resolution (ADR) law service",
  description:
    "Expert alternative dispute resolution (adr) legal services Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Alternative Dispute Resolution service",
    "Alternative Dispute Resolution legal service ",
    "Alternative Dispute Resolution law service ",
    "Alternative Dispute Resolution law",
    "lawyer needed for Alternative Dispute Resolution law case",
    "Alternative Dispute Resolution legal court case lawyer",
  ],
  authors: [{ name: "ECA" }],
  creator: "Eagle Contractor Agency",
  publisher: "Eagle Contractor Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const ADR = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.alternative.dispute.resolution.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.alternative.dispute.resolution.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.alternative.dispute.resolution.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.alternative.dispute.resolution.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.alternative.dispute.resolution.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.alternative.dispute.resolution.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>
              {t(
                "pages.law.firm.services.alternative.dispute.resolution.field7",
              )}
            </strong>
            {t("pages.law.firm.services.alternative.dispute.resolution.field8")}
          </li>
          <li>
            <strong>
              {t(
                "pages.law.firm.services.alternative.dispute.resolution.field9",
              )}
            </strong>
            {t(
              "pages.law.firm.services.alternative.dispute.resolution.field10",
            )}
          </li>
          <li>
            <strong>
              {t(
                "pages.law.firm.services.alternative.dispute.resolution.field11",
              )}
            </strong>
            {t(
              "pages.law.firm.services.alternative.dispute.resolution.field12",
            )}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.alternative.dispute.resolution.field13")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.alternative.dispute.resolution.field14")}
        </p>
      </div>
    </>
  );
};

export default ADR;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t(
      "pages.law.firm.services.alternative.dispute.resolution.seo.title",
    ),
    description: t(
      "pages.law.firm.services.alternative.dispute.resolution.seo.description",
    ),
    alternates: {
      canonical: "/law-firm-services/alternative-dispute-resolution",
    },
  };
}
