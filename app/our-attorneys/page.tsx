import { siteCopy } from "@/lib/jktl/public-content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonial";
import Hero from "@/components/Hero";

import { Metadata } from "next";

const baseMetadata: Metadata = {
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

const OurAttorneys = async () => {
  const t = await siteCopy();

  const attorneys = [
    {
      name: t("pages.our.attorneys.field1"),
      office: t("pages.our.attorneys.field2"),
      image: t("pages.our.attorneys.field3"),
      bioUrl: t("pages.our.attorneys.field4"),
      intro: t("pages.our.attorneys.field5"),
    },
    {
      name: t("pages.our.attorneys.field6"),
      office: t("pages.our.attorneys.field7"),
      image: t("pages.our.attorneys.field8"),
      bioUrl: t("pages.our.attorneys.field9"),
      intro: t("pages.our.attorneys.field10"),
    },
    {
      name: t("pages.our.attorneys.field11"),
      office: t("pages.our.attorneys.field12"),
      image: t("pages.our.attorneys.field13"),
      bioUrl: t("pages.our.attorneys.field14"),
      intro: t("pages.our.attorneys.field15"),
    },
    {
      name: t("pages.our.attorneys.field16"),
      office: t("pages.our.attorneys.field17"),
      image: t("pages.our.attorneys.field18"),
      bioUrl: t("pages.our.attorneys.field19"),
      intro: t("pages.our.attorneys.field20"),
    },
  ];

  return (
    <div>
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 pt-6">
          {t("pages.our.attorneys.field21")}
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
                    {t("pages.our.attorneys.field22")}
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

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.our.attorneys.seo.title"),
    description: t("pages.our.attorneys.seo.description"),
    alternates: { canonical: "/our-attorneys" },
  };
}
