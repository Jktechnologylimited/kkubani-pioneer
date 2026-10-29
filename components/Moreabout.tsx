"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import React from "react";
import AboutUs from "./AboutUs";

const Moreabout = () => {
  const t = useSiteCopy();

  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default Moreabout;
