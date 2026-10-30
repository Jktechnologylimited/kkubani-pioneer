"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Scale } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const t = useSiteCopy();
  const reduced = useReducedMotion();
  return (
    <section className="legal-hero">
      <div
        className="hero-photo"
        style={{ backgroundImage: `url(${t("components.Hero.field1")})` }}
      />
      <div className="hero-shade" />
      <div className="hero-inner">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">
            <span /> GRATIAS DEO CHAMBERS
          </p>
          <h1>{t("heroTitle")}</h1>
          <p className="hero-description">{t("heroDescription")}</p>
          <div className="hero-actions">
            <Link className="brass-button" href="/booking">
              Arrange a consultation <ArrowUpRight size={18} />
            </Link>
            <Link className="hero-secondary" href="/law-firm-services">
              Explore our expertise <ArrowUpRight size={17} />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="hero-note"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Scale size={28} />
          <p>
            Clarity in complexity.
            <br />
            <strong>Confidence in every step.</strong>
          </p>
        </motion.div>
      </div>
      <div className="hero-bottom">
        <span>INTEGRITY. DILIGENCE. DEDICATION.</span>
        <a href="#welcome">
          Discover the firm <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
