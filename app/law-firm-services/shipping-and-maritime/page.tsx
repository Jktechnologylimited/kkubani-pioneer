import { siteCopy } from "@/lib/jktl/public-content";
import type { Metadata } from "next";
import React from "react";

const baseMetadata: Metadata = {
  alternates: {
    canonical:
      "https://www.kkubaniandco.com/law-firm-services/shipping-and-maritime/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },

  title: "Shipping and maritime law service ",
  description:
    "Expert shipping and maritime legal services Lagos, Port Harcourt and Abuja in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Shipping and maritime",
    "Shipping and maritime legal services",
    "Shipping and maritime law services",
    "Shipping and maritime law",
    "lawyer needed for Shipping and maritime law case",
    "Shipping and maritime court case lawyer",
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

const ShippingAndMaritime = async () => {
  const t = await siteCopy();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          {t("pages.law.firm.services.shipping.and.maritime.field1")}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          {t("pages.law.firm.services.shipping.and.maritime.field2")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.shipping.and.maritime.field3")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.shipping.and.maritime.field4")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.shipping.and.maritime.field5")}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.shipping.and.maritime.field6")}
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>
              {t("pages.law.firm.services.shipping.and.maritime.field7")}
            </strong>
            {t("pages.law.firm.services.shipping.and.maritime.field8")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.shipping.and.maritime.field9")}
            </strong>
            {t("pages.law.firm.services.shipping.and.maritime.field10")}
          </li>
          <li>
            <strong>
              {t("pages.law.firm.services.shipping.and.maritime.field11")}
            </strong>
            {t("pages.law.firm.services.shipping.and.maritime.field12")}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          {t("pages.law.firm.services.shipping.and.maritime.field13")}
        </h2>
        <p className="mt-2 text-gray-600">
          {t("pages.law.firm.services.shipping.and.maritime.field14")}
        </p>
      </div>
    </>
  );
};

export default ShippingAndMaritime;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.law.firm.services.shipping.and.maritime.seo.title"),
    description: t(
      "pages.law.firm.services.shipping.and.maritime.seo.description",
    ),
    alternates: { canonical: "/law-firm-services/shipping-and-maritime" },
  };
}
