"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Materi", href: "#materi" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Cara Kerja", href: "#cara-kerja" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050508]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2L13 5V11L8 14L3 11V5L8 2Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V14M3 5L13 11M13 5L3 11"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">
            CryptoMastery
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-white/50 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#daftar"
          className="hidden md:flex btn-primary text-white text-sm font-medium px-5 py-2.5 rounded-full"
        >
          <span>Gabung Sekarang</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="bg-[#050508]/95 backdrop-blur-xl border-t border-white/5 px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-white transition-colors text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#daftar"
            className="btn-primary text-white text-sm font-medium px-5 py-2.5 rounded-full text-center mt-1"
            onClick={() => setMobileOpen(false)}
          >
            <span>Gabung Sekarang</span>
          </a>
        </div>
      </div>
    </header>
  );
}
