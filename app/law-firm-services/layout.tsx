"use client";

import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";

export default function ServiceAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      {children}

      <AboutUs />
      <Hero />
    </body>
  );
}
