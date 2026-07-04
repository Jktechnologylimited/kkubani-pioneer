import Link from "next/link";
import Image from "next/image";

const SubFooter = () => {
  return (
    <>
      <div className="bg-gray-900 text-white text-center py-4 text-sm">
        Copyright © 2025 K.K. Ubani & Co. All Rights Reserved.
      </div>

      <div className="bg-blue-950 text-center text-[6px] text-gray-400 py-3">
        Business Website acquired from{" "}
        <Link
          href="https://jktl.com.ng/services/website-systems"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 underline underline-offset-2 hover:text-orange-400 transition-colors"
        >
          JKTL
        </Link>
      </div>
    </>
  );
};

export default SubFooter;
