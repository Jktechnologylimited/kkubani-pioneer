import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonial";
import Hero from "@/components/Hero";

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
  title: "Our Attorneys",
  description:
    "Attorneys/ Lawyers at K.K. Ubani and Co. legal services in Lagos, Port Harcourt, Abuja, Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
  generator: "",
  applicationName: "K.K.Ubani&Co.",
  referrer: "origin-when-cross-origin",
  keywords: [
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

const attorneys = [
  {
    name: "Kenneth K. Ubani",
    office: "Principal Partner",
    image: "/our-attorneys/kennethkelechiubani.PNG",
    bioUrl: "/our-attorneys/kenneth-kelechi-ubani",
    intro:
      "Kenneth K. Ubani is a seasoned corporate lawyer with 15+ years of experience in litigation, business law, and regulatory compliance.",
  },
  {
    name: "Victor Ubochi",
    office: "Senior Associate",
    image: "/our-attorneys/victor.PNG",
    bioUrl: "/our-attorneys/victor-ubochi",
    intro:
      "Throughout his career, he has been extensively involved in settling high-ranking and sensitive legal claims for multinational corporations",
  },
  {
    name: "Emeka M. Peters",
    office: "Senior Associate",
    image: "/our-attorneys/emeka.PNG",
    bioUrl: "/our-attorneys/emeka-peters",
    intro:
      "Emeka is a Member of the Firm’s Property Law and Real estate Practice.",
  },
  {
    name: "James E.Uro",
    office: "Litigation Manager",
    image: "/our-attorneys/james.PNG",
    bioUrl: "/our-attorneys/james-uro",
    intro:
      "James E. Uro is known for his dedication to his clients' interests, meticulous attention to detail, and ability to unravel complex legal challenges",
  },
];

const OurAttorneys = () => {
  return (
    <div>
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 pt-6">
          Our Attorneys
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-xl font-semibold">{attorney.name}</h3>
                <p className="text-gray-500">{attorney.office}</p>
                <p className="text-gray-700 text-sm mt-2">{attorney.intro}</p>
                <Link href={attorney.bioUrl} rel="noopener noreferrer">
                  <Button className="mt-4 w-full bg-blue-900">
                    Read Full Bio
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Testimonials />
      <Hero />
    </div>
  );
};

export default OurAttorneys;
