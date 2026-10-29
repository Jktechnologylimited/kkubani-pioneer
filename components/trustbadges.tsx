"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import React from "react";

const Trustbadges = () => {
  const t = useSiteCopy();

  return <div>{t("components.trustbadges.field1")}</div>;
};

export default Trustbadges;
