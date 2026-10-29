"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useSiteCopy();

  const slides = [
    {
      image: t("components.Hero.field1"),
      title: t("heroTitle"),
      description: t("heroDescription"),
      buttonText: t("components.Hero.field4"),
      link: t("components.Hero.field5"), // Add your consultation page link here
    },
    {
      image: t("components.Hero.field6"),
      title: t("components.Hero.field7"),
      description: t("components.Hero.field8"),
      buttonText: t("components.Hero.field9"),
      link: t("components.Hero.field10"), // Add your services page link here
    },
    {
      image: t("components.Hero.field11"),
      title: t("components.Hero.field12"),
      description: t("components.Hero.field13"),
      buttonText: t("components.Hero.field14"),
      link: t("components.Hero.field15"), // Add your contact page link here
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-full h-[500px] relative">
      <CarouselContent>
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentIndex ? (
              <CarouselItem key={index} className="relative w-full h-[500px]">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center loading='lazy' "
                  style={{ backgroundImage: `url(${slide.image})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center px-10 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="max-w-lg">
                    <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-lg mb-6">{slide.description}</p>
                    <Link href={slide.link} passHref>
                      <Button className="bg-orange-500 hover:bg-yellow-200">
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </CarouselItem>
            ) : null,
          )}
        </AnimatePresence>
      </CarouselContent>
    </Carousel>
  );
}
