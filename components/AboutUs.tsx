"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import Image from "next/image";

const AboutUs = () => {
  const t = useSiteCopy();

  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold mb-8">
        {t("components.AboutUs.field1")}
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:gap-4 items-center">
        {/* Card 1: Principal Partner's Picture */}
        <div className="w-full md:w-1/3">
          <Image
            src={t("components.AboutUs.field2")} // replace with actual path to the image
            alt={t("components.AboutUs.field3")}
            width={300}
            height={300}
            className="object-cover mx-auto mb-4 "
          />
          <h3 className="text-xl font-semibold">
            {t("components.AboutUs.field4")}
          </h3>
        </div>
        <br />
        {/* Card 2: Description and Signature */}
        <div className="w-full md:w-1/3">
          <div className=" grid gap-5 text-md py-6 text-gray-700 mb-6">
            <p>{t("components.AboutUs.field5")}</p>
            <p>{t("components.AboutUs.field6")}</p>
            <p>{t("components.AboutUs.field7")}</p>
          </div>
          <div className="text-right">
            <p className="italic">{t("components.AboutUs.field8")}</p>
            <p className="italic">{t("components.AboutUs.field9")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
