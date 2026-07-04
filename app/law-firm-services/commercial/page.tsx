import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.kkubaniandco.com/law-firm-services/commercial/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
 

  title: "Commercial law service",
  description:
    "Expert corporate legal services in Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Law firm services",
    "Commercial  service",
    "Commercial  legal service ",
    "Commercial  law service ",
    "Commercial  law",
    "lawyer needed for Commercial  law case",
    "Commercial  legal court case lawyer",
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

const CommercialLaw = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Commercial Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Trusted Legal Advisors for Commercial Transactions
        </h2>
        <p className="mt-2 text-gray-600">
          Our commercial law services ensure smooth business transactions,
          contract enforcement, and legal risk mitigation for entrepreneurs and
          corporations. We assist clients in drafting, reviewing, and enforcing
          contracts, ensuring business operations run seamlessly
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Commercial Law is Important
        </h2>
        <p className="mt-2 text-gray-600">
          A strong commercial legal foundation is crucial for any business.
          Poorly drafted contracts, regulatory non-compliance, or business
          disputes can lead to significant financial losses. Our legal expertise
          helps businesses safeguard their interests and maintain competitive
          advantage
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Contract Drafting & Negotiation</strong>
            Creating legally sound agreements to protect business interests.
          </li>
          <li>
            <strong>Business Transactions & Dispute Resolution</strong>
            Assisting in corporate deals, supplier agreements, and dispute
            resolution.
          </li>
          <li>
            <strong>Trade & Commerce Regulations</strong>
            Ensuring businesses comply with Nigeria’s commercial and trade laws.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We offer tailored legal solutions that support businesses in achieving
          their commercial objectives while minimizing legal risks.
        </p>
      </div>
    </>
  );
};

export default CommercialLaw;
