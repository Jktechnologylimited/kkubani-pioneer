import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
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

const entertainment = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Entertainment Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Legal Protection for Creatives and Media Professionals
        </h2>
        <p className="mt-2 text-gray-600">
          K.K. Ubani & Co. offers specialized legal services for artists,
          musicians, filmmakers, producers, and digital creators, safeguarding
          intellectual property, managing contracts, and resolving
          entertainment-related disputes.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Entertainment Law Matters
        </h2>
        <p className="mt-2 text-gray-600">
          The entertainment industry is fast-paced and highly competitive.
          Creatives need legal protection to secure rights, profits, and
          creative control over their work. From contracts to copyright and
          licensing, strong legal guidance prevents exploitation and fosters
          career growth.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Contract Drafting & Negotiation</strong>
            Crafting agreements for talent, production, licensing, publishing,
            and endorsement deals.
          </li>
          <li>
            <strong>Copyright & IP Protection</strong>
            Securing intellectual property rights and managing royalties and
            licensing.
          </li>
          <li>
            <strong>Dispute Resolution </strong>
            Resolving conflicts related to ownership, royalties, and content
            distribution.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We understand the unique legal challenges of the entertainment
          industry and provide creatives with the legal tools to protect their
          work, manage contracts confidently, and thrive in their careers.
        </p>
      </div>
    </>
  );
};

export default entertainment;
