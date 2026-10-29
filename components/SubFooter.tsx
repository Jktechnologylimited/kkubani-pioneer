"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
const SubFooter = () => {
  const t = useSiteCopy();

  return (
    <>
      <div className="bg-gray-900 text-white text-center py-4 text-sm">
        {t("components.SubFooter.field1")}
      </div>
    </>
  );
};

export default SubFooter;
