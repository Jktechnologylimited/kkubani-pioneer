"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-gray-100">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/kkubani&cologo.png"
          alt="Kk Ubani & Co Logo"
          width={100}
          height={150}
          className="h-12 w-auto"
        />
      </motion.div>

      {/* Header */}
      <motion.h1
        className="text-4xl text-gray-700 font-bold mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to K.K. Ubani & Co.
      </motion.h1>

      {/* Gratias Deo Chambers */}
      <motion.p
        className="text-lg text-gray-600 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Gratias Deo Chambers
      </motion.p>

      {/* Dash Design */}
      <motion.div
        className="w-16 h-1 bg-black my-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.div>

      {/* Description */}
      <motion.p
        className="text-gray-700 text-[15px] md:text-xl mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        ...all round legal service at its optimum
      </motion.p>

      {/* Call to Action */}
      <motion.div
        className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-2xl text-gray-700 font-semibold">
          Get Your Consultation
        </p>
        <p className="text-2xl font-bold backdrop-blur-2xl bg-orange-600 border rounded-4xl p-3 text-white">
          (234) 809 9000 582
        </p>
        <p className="text-sm text-gray-500"></p>
      </motion.div>
    </div>
  );
}
