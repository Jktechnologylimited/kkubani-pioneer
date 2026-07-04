import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/aviation/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
 
  title: "Aviation law service ",
  description:
    "Expert aviation legal services Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Aviation service",
    "Aviation legal service ",
    "Aviation law service ",
    "Aviation law",
    "lawyer needed for Aviation law case",
    "Aviation legal court case lawyer",
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

const AviationLaw = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">Aviation Law</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Expert Legal Services for the Aviation Industry
        </h2>
        <p className="mt-2 text-gray-600">
          The aviation sector requires a deep understanding of regulatory
          policies, leasing arrangements, and operational agreements. Our firm
          provides comprehensive legal services to airlines, operators, and
          investors.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Aviation Law is Important
        </h2>
        <p className="mt-2 text-gray-600">
          Aviation law ensures the safety, security, and regulation of air
          travel. It governs aircraft operations, passenger rights, airport
          usage, and international airspace. With the complexity of global air
          transport, strong legal frameworks are essential for accident
          prevention, dispute resolution, and compliance with international
          aviation standards. It supports smooth airline operations and protects
          both carriers and passengers.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Aircraft Leasing & Financing</strong>
            Structuring agreements for aircraft acquisition and leasing.
          </li>
          <li>
            <strong>Regulatory Compliance </strong>
            Ensuring compliance with Nigerian and international aviation laws.
          </li>
          <li>
            <strong>Aviation Litigation & Dispute Resolution</strong>
            Representing clients in regulatory disputes and contractual
            disagreements.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We provide legal strategies that support seamless aviation operations
          while ensuring regulatory compliance and business efficiency.
        </p>
      </div>
    </>
  );
};

export default AviationLaw;
