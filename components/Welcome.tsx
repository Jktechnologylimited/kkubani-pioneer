"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Welcome() {
  const t = useSiteCopy(),
    reduced = useReducedMotion();
  return (
    <section id="welcome" className="firm-welcome">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">A PERSONAL APPROACH TO THE LAW</p>
        <h2>{t("welcomeTitle")}</h2>
      </motion.div>
      <div>
        <p className="welcome-lead">{t("welcomeSubtitle")}</p>
        <p className="welcome-chambers">{t("components.Welcome.field4")}</p>
        <Link className="text-link" href="/about">
          Get to know our firm <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
