"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/ecobank.png",
  "/logos/phed.png",
  "/logos/polaris.png",
  "/logos/nimasa.png",
  "/logos/fedmintrans.png",
  "/logos/itf.png",
  "/logos/crc.png",
  "/logos/railway.png",
  "/logos/4power.png",
  "/logos/indorama.png",
  "/logos/rinc.png",
];

export default function ClientLogos() {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-6">
        <h2 className="text-4xl font-bold text-center mb-10">Our Clients</h2>
      <div className="w-full flex justify-center">
        <motion.div
          className="flex space-x-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{  ease: "linear",
            duration: 100, // Adjust speedrepeat: Infinity,
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Client Logo"
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
