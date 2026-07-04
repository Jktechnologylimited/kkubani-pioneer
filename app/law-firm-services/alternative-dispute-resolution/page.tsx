import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/alternative-dispute-resolution/",
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

const ADR = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Alternative Dispute Resolution (ADR) Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Effective & Strategic Conflict Resolution
        </h2>
        <p className="mt-2 text-gray-600">
          Litigation isn’t always the best option. Our ADR services help clients
          resolve disputes efficiently through mediation, arbitration, and
          negotiation.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why ADR Matters
        </h2>
        <p className="mt-2 text-gray-600">
          ADR offers a faster, cost-effective, and confidential way to settle
          disputes without resorting to litigation. It is particularly
          beneficial for commercial conflicts, contract disputes, and corporate
          disagreements.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Mediation & Arbitration</strong>
            Providing legally binding dispute resolution outside of court.
          </li>
          <li>
            <strong>Corporate Dispute Resolution </strong>
            Resolving conflicts in partnerships, contracts, and joint ventures.
          </li>
          <li>
            <strong>International Arbitration</strong>
            Handling cross-border commercial disputes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          Our ADR approach helps clients achieve favorable resolutions while
          avoiding lengthy court proceedings.
        </p>
      </div>
    </>
  );
};

export default ADR;
