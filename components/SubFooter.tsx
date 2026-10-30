"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
const SubFooter = () => {
  const t = useSiteCopy();

  return (
    <>
      <div className="site-subfooter text-center py-4 text-sm">
        {t("components.SubFooter.field1")}
      </div>
    </>
  );
};

export default SubFooter;
