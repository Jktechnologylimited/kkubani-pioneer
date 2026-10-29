import { siteCopy } from "@/lib/jktl/public-content";
import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

const KennethBio = async () => {
  const t = await siteCopy();

  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src={t("pages.our.attorneys.kenneth.kelechi.ubani.field1")}
            alt={t("pages.our.attorneys.kenneth.kelechi.ubani.field2")}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">
          {t("pages.our.attorneys.kenneth.kelechi.ubani.field3")}
        </h2>
        <p className="text-gray-500 text-center text-lg mb-6">
          {t("pages.our.attorneys.kenneth.kelechi.ubani.field4")}
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            {t("pages.our.attorneys.kenneth.kelechi.ubani.field5")}
            <br />
            <br /> {t("pages.our.attorneys.kenneth.kelechi.ubani.field6")}
            <br />
            <br /> {t("pages.our.attorneys.kenneth.kelechi.ubani.field7")}
            <br />
            <br />
            {t("pages.our.attorneys.kenneth.kelechi.ubani.field8")}
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default KennethBio;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    ...baseMetadata,
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.our.attorneys.kenneth.kelechi.ubani.seo.title"),
    description: t("pages.our.attorneys.kenneth.kelechi.ubani.seo.description"),
    alternates: { canonical: "/our-attorneys/kenneth-kelechi-ubani" },
  };
}
