"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // dalam milidetik
  width?: "fit-content" | "100%";
}

export default function ScrollReveal({
  children,
  delay = 0,
  width = "100%",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Sekali muncul, stop observe biar performa enteng
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15, // Muncul setelah 15% elemen masuk layar
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.8s cubic-bezier(0.21, 1.02, 0.73, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
