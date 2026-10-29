import { siteCopy } from "@/lib/jktl/public-content";
// app/not-found.tsx
import React from "react";

const Custom404 = async () => {
  const t = await siteCopy();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-40 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-6">
          {t("notFound.field1")}
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {t("notFound.field2")}
        </h2>
        <p className="text-xl text-gray-600 mb-8">{t("notFound.field3")}</p>

        {/* Image or Icon */}
        <img
          src={t("notFound.field4")} // Use a gavel or any judicial-themed image
          alt={t("notFound.field5")}
          className="w-40 h-40 mb-6"
        />

        <div className="bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("notFound.field6")}
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li>{t("notFound.field7")}</li>
            <li>{t("notFound.field8")}</li>
            <li>{t("notFound.field9")}</li>
            <li>{t("notFound.field10")}</li>
            <li>{t("notFound.field11")}</li>
          </ul>
        </div>

        <div className="mt-6">
          <a
            href={t("notFound.field12")}
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
          >
            {t("notFound.field13")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
