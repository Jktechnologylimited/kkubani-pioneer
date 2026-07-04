import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/shipping-and-maritime/",
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

const ShippingAndMaritime = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Shipping & Maritime Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Legal Solutions for the Maritime Industry
        </h2>
        <p className="mt-2 text-gray-600">
          K.K. Ubani & Co. provides expert legal services for shipping,
          admiralty, and maritime transactions, ensuring compliance with
          international and Nigerian maritime laws.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Shipping Law Matters
        </h2>
        <p className="mt-2 text-gray-600">
          Large-scale infrastructure projects require careful legal structuring
          to mitigate risks, ensure compliance, and secure funding.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Admiralty & Maritime Litigation</strong>
            Representing clients in shipping disputes and vessel claims
          </li>
          <li>
            <strong>Cargo & Freight Disputes </strong>
            Handling legal issues related to cargo damage and freight claims.
          </li>
          <li>
            <strong>Ship Financing & Registration</strong>
            Assisting with vessel acquisition, leasing, and compliance.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          Our maritime law experts provide strategic legal support to shipping
          companies, vessel owners, and port operators, ensuring compliance and
          business protection.
        </p>
      </div>
    </>
  );
};

export default ShippingAndMaritime;
