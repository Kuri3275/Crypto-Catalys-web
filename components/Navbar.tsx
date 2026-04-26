"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Materi", href: "#materi" },
  { name: "Proof", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4 md:px-6 md:pt-6">
      <div
        className={`pointer-events-auto w-full max-w-6xl rounded-[1.75rem] border transition-all duration-300 ${
          isScrolled
            ? "border-[#67e8f9]/12 bg-[rgba(6,12,24,0.78)] shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
            : "border-white/8 bg-[rgba(6,12,24,0.36)] backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#67e8f9]/16 bg-[linear-gradient(145deg,rgba(103,232,249,0.24),rgba(129,140,248,0.16))] shadow-[0_12px_34px_rgba(96,165,250,0.16)]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M4 15l4-4 4 4 8-8" />
                <path d="M20 7v6h-6" />
              </svg>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/35">
                Crypto
              </p>
              <p className="text-base font-semibold tracking-tight text-white md:text-lg">
                Catalys
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] p-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/58 transition-colors duration-200 hover:bg-white/8 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://discord.gg/zmauuhKvuW" className="button-primary hidden md:inline-flex">
              Join Sekarang
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
              <div className="flex h-4 w-5 flex-col justify-between">
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 rounded-full bg-current transition ${
                    isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden px-4 transition-[max-height,opacity,padding] duration-300 lg:hidden ${
            isMobileMenuOpen
              ? "max-h-96 pb-4 opacity-100"
              : "max-h-0 pb-0 opacity-0"
          }`}
        >
          <div className="space-y-2 rounded-[1.5rem] border border-white/8 bg-[rgba(8,14,26,0.84)] p-3 backdrop-blur-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-sm text-white/68 transition-colors hover:bg-white/6 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#daftar"
              className="button-primary mt-2 flex justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
