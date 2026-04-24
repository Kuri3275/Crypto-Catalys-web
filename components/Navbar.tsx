"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Materi", href: "#materi" },
    { name: "Cara Kerja", href: "#cara-kerja" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 w-full flex justify-center ${
        isScrolled ? "py-3 md:py-4" : "py-6 md:py-8"
      }`}
    >
      {/* Container utama: Pakai w-[90%] agar tidak mepet pinggir saat scale 150% */}
      <div
        className={`w-[92%] max-w-6xl flex items-center justify-between px-5 md:px-8 py-3 rounded-2xl border transition-all duration-500 ${
          isScrolled
            ? "glass-card border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* ── LEFT: BRAND LOGO ── */}
        <div className="flex-1 flex justify-start">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-brand-violet flex items-center justify-center glow-violet group-hover:rotate-12 transition-all duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight text-white">
              Crypto<span className="text-brand-cyan">Mastery</span>
            </span>
          </a>
        </div>

        {/* ── CENTER: DESKTOP NAV (Hidden on Mobile) ── */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full p-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ── RIGHT: CTA & MOBILE TOGGLE ── */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a
            href="#daftar"
            className="hidden md:flex btn-primary px-7 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-brand-violet/20"
          >
            <span>Mulai Sekarang</span>
          </a>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU DROPDOWN ── */}
      <div
        className={`lg:hidden absolute top-full left-[4%] right-[4%] mt-3 glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 origin-top ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="p-6 flex flex-col gap-4 bg-[#0a0a0f]/95 backdrop-blur-2xl">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-brand-cyan text-lg font-medium transition-colors py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a className="btn-primary py-4 rounded-xl text-center font-bold text-white mt-2">
            <span>Gabung Sekarang</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
