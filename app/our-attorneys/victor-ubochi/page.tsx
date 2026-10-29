import type { Metadata } from "next";
import { siteCopy } from "@/lib/jktl/public-content";
import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const VictorBio = async () => {
  const t = await siteCopy();

  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src={t("pages.our.attorneys.victor.ubochi.field1")}
            alt={t("pages.our.attorneys.victor.ubochi.field2")}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">
          {t("pages.our.attorneys.victor.ubochi.field3")}
        </h2>
        <p className="text-gray-500 text-center text-lg mb-6">
          {t("pages.our.attorneys.victor.ubochi.field4")}
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            {t("pages.our.attorneys.victor.ubochi.field5")}
            <br />
            <br /> {t("pages.our.attorneys.victor.ubochi.field6")}
            <br />
            <br />
            {t("pages.our.attorneys.victor.ubochi.field7")}
            <br />
            <br /> {t("pages.our.attorneys.victor.ubochi.field8")}
            <br />
            <br /> {t("pages.our.attorneys.victor.ubochi.field9")}
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default VictorBio;

export async function generateMetadata(): Promise<Metadata> {
  const t = await siteCopy();
  return {
    metadataBase: new URL("https://www.kkubaniandco.com"),
    title: t("pages.our.attorneys.victor.ubochi.seo.title"),
    description: t("pages.our.attorneys.victor.ubochi.seo.description"),
    alternates: { canonical: "/our-attorneys/victor-ubochi" },
  };
}
