import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/commercial-litigation/",
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

const CommercialLitigationLaw = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Commercial Litigation
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Resolving Business Disputes Efficiently
        </h2>
        <p className="mt-2 text-gray-600">
          Our firm specializes in handling commercial disputes through
          litigation and alternative dispute resolution (ADR). We represent
          clients in high-stakes business disputes, contractual breaches, and
          corporate conflicts
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Commercial Litigation Matters
        </h2>
        <p className="mt-2 text-gray-600">
          Legal disputes can disrupt business operations and damage reputations.
          Our experienced litigators work to resolve disputes effectively while
          protecting our clients’ interests.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Contract Disputes</strong>
            Resolving breaches of business agreements and enforcement of
            contractual terms.
          </li>
          <li>
            <strong>Shareholder & Partnership Disputes </strong>
            Protecting stakeholder interests in corporate conflicts.
          </li>
          <li>
            <strong>Debt Recovery & Enforcemen</strong>
            Assisting clients in recovering outstanding debts through legal
            channels.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We prioritize cost-effective and timely dispute resolution strategies,
          ensuring minimal disruption to business operations.
        </p>
      </div>
    </>
  );
};

export default CommercialLitigationLaw;
