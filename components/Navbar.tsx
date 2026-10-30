"use client";
import { useSiteCopy } from "@/lib/jktl/site-copy";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
export default function Navbar() {
  const t = useSiteCopy(),
    path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="legal-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="/" className="firm-brand" onClick={() => setOpen(false)}>
          <Image
            src={t("components.Navbar.field12")}
            alt=""
            width={44}
            height={44}
          />
          <span>
            {t("components.Navbar.field14")}
            <small>GRATIAS DEO CHAMBERS</small>
          </span>
        </Link>
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <div
          id="site-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
        >
          {[1, 3, 5, 7, 9].map((i) => (
            <Link
              key={i}
              href={t(`components.Navbar.field${i}`)}
              aria-current={
                path === t(`components.Navbar.field${i}`) ? "page" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {t(`components.Navbar.field${i + 1}`)}
            </Link>
          ))}
          <Link
            className="nav-consult"
            href="/booking"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
