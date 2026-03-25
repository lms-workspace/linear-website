"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { RobotEye } from "./RobotEye";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/ai-tools", label: "Platform" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    const links = mobileMenuRef.current.querySelectorAll("[data-mobile-link]");
    if (mobileOpen) {
      gsap.fromTo(links,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", delay: 0.2 }
      );
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-8 md:px-12 lg:px-20 xl:px-32 h-20 md:h-24">
          {/* Logo — big, with robot eye */}
          <Link href="/" className="flex items-center gap-4 group">
            <span className="font-display font-bold text-text-primary text-3xl lg:text-4xl tracking-tight">
              LMS
            </span>
            <RobotEye />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative font-body text-base font-medium tracking-wide transition-colors duration-300 py-2 ${
                    isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="font-body text-base font-semibold text-bg bg-accent px-7 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(204,255,0,0.35)]"
            >
              Start a project
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center gap-2 w-10 h-10 items-center"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-text-primary rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 z-[999] bg-bg flex items-center justify-center transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-12">
          {[...NAV_LINKS, { href: "/contact", label: "Contact" }].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              data-mobile-link
              onClick={() => setMobileOpen(false)}
              className={`font-display font-bold text-5xl tracking-tight transition-colors duration-300 ${
                pathname === href ? "text-accent" : "text-text-primary hover:text-accent"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
