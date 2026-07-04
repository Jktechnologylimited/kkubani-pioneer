import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  // openGraph: {
  //   images: '/og-image.png',
  // },
  title: "Kenneth K. Ubani - Principal Partner ",
  description:
    "He has also been involved in a revenue case between the Rivers State Government and the Federal Government of Nigeria. ",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "K.K. Ubani ",
    "Attorneys Law firm services",
    "Attorneys service",
    "Attorneys legal service ",
    "Attorneys law service ",
    "Attorneys law",
    "Attorneys or a lawyer needed for law case",
    "Attorneys for legal court case lawyer",
    "Lawyers Law firm services",
    "Lawyers service",
    "Lawyers legal service ",
    "Lawyers law service ",
    "Lawyers law",
    "Attorneys or a lawyer needed for law case",
    "Lawyers for legal court case lawyer",
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

const KennethBio = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src="/kennethkelechiubani.PNG"
            alt="Kenneth Kelechi Ubani"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">
          Kenneth K. Ubani
        </h2>
        <p className="text-gray-500 text-center text-lg mb-6">
          Principal Partner
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            Kenneth is a member of the International Bar Association (IBA) and
            the Nigerian Bar Association NBA.
            <br />
            <br /> He is an astute commercial litigator who holds over two
            decades of erudite expertise and experience in the legal practice
            drawn from commercial transactions and dispute resolution in Nigeria
            Prior to joining the firm, he was an Associate and later Deputy
            Managing Solicitor at T. O. Waamah & Associates between 2003 -2008,
            and Partner at Sterling Law Alliance
            <br />
            <br /> He has variously applied his skills and expertise to the
            betterment of his clients’ businesses. He was recently involved in a
            claim of about =N3.5B= involving the Niger Delta Development
            Commission (NDDC). He was also recently involved in a debt recovery
            claim to the tune of over =N20B= involving Asset Management
            Corporation of Nigeria (AMCON) against her debtors. He has
            represented various financial institutions including Central Bank of
            Nigeria (CBN), defunct Skye Bank, Nigeria Deposit Insurance
            Corporation (NDIC) etc. Added to his archives are representations
            for the Federal and State Government agencies including Nigerian
            National Petroleum Corporation (NNPC), Port Harcourt Refining
            Company Limited, Pipeline Product Marketing Company Limited etc. He
            has also been involved in a revenue case between the Rivers State
            Government and the Federal Government of Nigeria. <br />
            <br />
            He has also negotiated and documented energy deals between a
            foremost Energy Company in the South/South part of Nigeria and has
            also been part of resolving commercial and labour disputes arising
            from such deals either by Alternative Dispute Resolution or
            Litigation. He had also recently represented the foremost gas
            exploration company in Nigeria, Nigeria Liquified Natural Gas
            Limited (NLNG) from the trial Court to the Supreme Court. He
            therefore, possess vast degree of commercial law experiences which
            he will deploy to our clients’ advantage.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default KennethBio;
