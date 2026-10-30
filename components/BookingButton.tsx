"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OrangeButton() {
  const t = useSiteCopy();

  return (
    <div className="flex justify-center items-center py-10">
      <Link href={t("components.BookingButton.field1")} passHref>
        <Button className="bg-orange-700 hover:bg-orange-800 text-white">
          {t("components.BookingButton.field2")}
        </Button>
      </Link>
    </div>
  );
}
