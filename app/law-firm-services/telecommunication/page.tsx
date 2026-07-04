import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/telecommunication/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  
  title: "Telecommunication law service ",
  description:
    "Expert telecommunication legal services in Lagos, Port Harcourt and Abuja Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Telecommunication",
    "Telecommunication legal services",
    "Telecommunication law services",
    "Telecommunication law",
    "lawyer needed for telecommunication case",
    "Telecommunication court case lawyer",
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

const TelecommunicationLaw = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Telecommunication Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Legal Support for Telecom Companies
        </h2>
        <p className="mt-2 text-gray-600">
          With the increasing reliance on digital communication, the
          telecommunications industry faces unique regulatory challenges. We
          provide expert legal guidance on licensing, compliance, and dispute
          resolution in Nigeria’s telecom sector.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Telecommunication Law is Important
        </h2>
        <p className="mt-2 text-gray-600">
          Important Telecommunication law ensures fair competition, protects
          consumer rights, and regulates licensing and spectrum use. It plays a
          key role in national security, emergency services, and the development
          of digital infrastructure. With telecom being the backbone of modern
          communication and commerce, clear legal frameworks are essential for
          innovation, investment, and connectivity.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Licensing & Regulatory Compliance </strong>
            Helping businesses secure necessary telecom licenses and approvals.
          </li>
          <li>
            <strong>Contract Negotiations</strong>
            Drafting agreements for infrastructure development and service
            provisions.
          </li>
          <li>
            <strong>Consumer Protection & Disputes</strong>
            Resolving telecom-related disputes and regulatory issues.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We have extensive knowledge of Nigeria’s telecommunications landscape,
          ensuring compliance with industry regulations and protecting business
          interests.
        </p>
      </div>
    </>
  );
};

export default TelecommunicationLaw;
