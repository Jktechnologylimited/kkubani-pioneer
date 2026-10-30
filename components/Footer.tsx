"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Importing Lucide icons
import SubFooter from "./SubFooter";

const Footer = () => {
  const t = useSiteCopy();

  return (
    <div className="site-footer py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          {t("components.Footer.field1")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Contact Details */}
          <div className="footer-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {t("components.Footer.field2")}
            </h3>
            <p className="text-lg">
              <strong>{t("components.Footer.field3")}</strong>{" "}
              {t("components.Footer.field4")}
            </p>
            <p className="text-lg">
              <strong>{t("components.Footer.field5")}</strong>{" "}
              {t("components.Footer.field6")}
            </p>
            <p className="text-lg">
              <strong>{t("components.Footer.field7")}</strong>{" "}
              {t("components.Footer.field8")}
            </p>
          </div>

          {/* Card 2: Office Hours */}
          <div className="footer-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {t("components.Footer.field9")}
            </h3>
            <p className="text-lg">
              <strong>{t("components.Footer.field10")}</strong>{" "}
              {t("components.Footer.field11")}
            </p>
            <p className="text-lg">{t("components.Footer.field12")}</p>
          </div>

          {/* Card 3: Follow Us */}
          <div className="footer-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              {t("components.Footer.field13")}
            </h3>
            <div className="flex space-x-4">
              <a
                href={t("components.Footer.field14")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="text-3xl hover:text-blue-200" />
              </a>
              <a
                href={t("components.Footer.field15")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="text-3xl hover:text-blue-200" />
              </a>
              <a
                href={t("components.Footer.field16")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="text-3xl hover:text-blue-200" />
              </a>
              <span>{t("components.Footer.field17")}</span>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
};

export default Footer;
