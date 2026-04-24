"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mapping arah animasi ke transform awal
    const directions = {
      up: "translateY(40px)",
      down: "translateY(-40px)",
      left: "translateX(40px)",
      right: "translateX(-40px)",
      none: "translate(0)",
    };

    // Setup style awal secara programmatik sebelum observasi dimulai
    el.style.opacity = "0";
    el.style.transform = directions[direction];
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.2, 0, 0.2, 1), transform ${duration}ms cubic-bezier(0.2, 0, 0.2, 1)`;
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Menjalankan animasi
          requestAnimationFrame(() => {
            el.style.opacity = "1";
            el.style.transform = "translate(0)";
          });
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15, // Muncul sedikit lebih lambat agar transisi terasa pas
        rootMargin: "0px 0px -50px 0px", // Trigger sedikit sebelum elemen benar-benar masuk viewport
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, duration]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
