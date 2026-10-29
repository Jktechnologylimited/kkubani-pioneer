"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function OurServices() {
  const t = useSiteCopy();

  const services = [
    {
      title: t("components.Services.field1"),
      image: t("components.Services.field2"),
      description: t("components.Services.field3"),
      bioUrl: t("components.Services.field4"),
    },
    {
      title: t("components.Services.field5"),
      image: t("components.Services.field6"),
      description: t("components.Services.field7"),
      bioUrl: t("components.Services.field8"),
    },
    {
      title: t("components.Services.field9"),
      image: t("components.Services.field10"),
      description: t("components.Services.field11"),
      bioUrl: t("components.Services.field12"),
    },
    {
      title: t("components.Services.field13"),
      image: t("components.Services.field14"),
      description: t("components.Services.field15"),
      bioUrl: t("components.Services.field16"),
    },
    {
      title: t("components.Services.field17"),
      image: t("components.Services.field18"),
      description: t("components.Services.field19"),
      bioUrl: t("components.Services.field20"),
    },
    {
      title: t("components.Services.field21"),
      image: t("components.Services.field22"),
      description: t("components.Services.field23"),
      bioUrl: t("components.Services.field24"),
    },
    {
      title: t("components.Services.field25"),
      image: t("components.Services.field26"),
      description: t("components.Services.field27"),
      bioUrl: t("components.Services.field28"),
    },
    {
      title: t("components.Services.field29"),
      image: t("components.Services.field30"),
      description: t("components.Services.field31"),
      bioUrl: t("components.Services.field32"),
    },
    {
      title: t("components.Services.field33"),
      image: t("components.Services.field34"),
      description: t("components.Services.field35"),
      bioUrl: t("components.Services.field36"),
    },
    {
      title: t("components.Services.field37"),
      image: t("components.Services.field38"),
      description: t("components.Services.field39"),
      bioUrl: t("components.Services.field40"),
    },
    {
      title: t("components.Services.field41"),
      image: t("components.Services.field42"),
      description: t("components.Services.field43"),
      bioUrl: t("components.Services.field44"),
    },
    {
      title: t("components.Services.field45"),
      image: t("components.Services.field46"),
      description: t("components.Services.field47"),
      bioUrl: t("components.Services.field48"),
    },
    {
      title: t("components.Services.field49"),
      image: t("components.Services.field50"),
      description: t("components.Services.field51"),
      bioUrl: t("components.Services.field52"),
    },
    {
      title: t("components.Services.field53"),
      image: t("components.Services.field54"),
      description: t("components.Services.field55"),
      bioUrl: t("components.Services.field56"),
    },
    {
      title: t("components.Services.field57"),
      image: t("components.Services.field58"),
      description: t("components.Services.field59"),
      bioUrl: t("components.Services.field60"),
    },
    // {
    //   title: "Entertainment",
    //   image: "/areas/entertainment.jpg",
    //   description:
    //     "Legal counsel for media, entertainment, and creative industries.",
    //   bioUrl: "law-firm-services/entertainment",
    // },
  ];

  return (
    <div
      className="py-16 px-8"
      style={{
        backgroundImage: `url(${t("components.Services.field61")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl text-white font-bold text-center mb-10">
        {t("components.Services.field62")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-1/3">
              <Image
                src={service.image}
                alt={service.title}
                width={150}
                height={150}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <Link href={service.bioUrl} rel="noopener noreferrer ">
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 shadow-sm transition-colors">
                  {t("components.Services.field63")}
                </Button>
              </Link>
            </div>
            <div></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
