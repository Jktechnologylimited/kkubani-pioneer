"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import React from "react";

const Testimonials = () => {
  const t = useSiteCopy();

  const testimonials = [
    {
      quote: t("components.Testimonial.field1"),

      company: t("components.Testimonial.field2"),
    },
    {
      quote: t("components.Testimonial.field3"),

      company: t("components.Testimonial.field4"),
    },
    {
      quote: t("components.Testimonial.field5"),

      company: t("components.Testimonial.field6"),
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        {t("components.Testimonial.field7")}
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg">
            <p className="text-gray-700 italic mb-4">
              {t("components.Testimonial.field8")}
              {testimonial.quote}
              {t("components.Testimonial.field9")}
            </p>

            <p className="text-sm text-gray-500">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
