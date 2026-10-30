"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientLogos() {
  const t = useSiteCopy();

  const logos = [
    t("components.clients.field1"),
    t("components.clients.field2"),
    t("components.clients.field3"),
    t("components.clients.field4"),
    t("components.clients.field5"),
    t("components.clients.field6"),
    t("components.clients.field7"),
    t("components.clients.field8"),
    t("components.clients.field9"),
    t("components.clients.field10"),
    t("components.clients.field11"),
  ];

  return (
    <div className="relative overflow-hidden bg-blue-50 py-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        {t("components.clients.field12")}
      </h2>
      <div className="w-full flex justify-center">
        <motion.div
          className="flex space-x-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 100, // Adjust speedrepeat: Infinity,
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={t("components.clients.field13")}
              width={400}
              height={400}
              className="object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
