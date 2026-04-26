"use client";

import { useState } from "react";

export default function TestimonialSlider({ testimonials }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[index];

  return (
    <div className="flex flex-col items-center gap-6">
      
      {/* CARD */}
      <div className="max-w-[420px] w-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02]">

        {/* IMAGE */}
        <div className="aspect-[3/4] w-full overflow-hidden relative">
          <img
            src={current.image}
            alt="testimonial"
            className="w-full h-full object-cover"
          />

          {/* overlay subtle */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* TEXT */}
        <div className="p-5 text-center space-y-2">
          <p className="text-sm text-white/80">
            “{current.quote}”
          </p>

          <p className="text-xs text-white/40">
            {current.name}
          </p>
        </div>
      </div>

      {/* NAV */}
      <div className="flex items-center gap-4">
        
        <button
          onClick={prev}
          className="px-4 py-2 text-sm border border-white/20 rounded-lg text-white/70"
        >
          ←
        </button>

        {/* dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="px-4 py-2 text-sm bg-white text-black rounded-lg"
        >
          →
        </button>

      </div>
    </div>
  );
}