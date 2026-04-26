"use client";

import { useState } from "react";

export default function Slider({ outcomes }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % outcomes.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? outcomes.length - 1 : prev - 1
    );
  };

  const current = outcomes[index];

  return (
    <div className="flex flex-col items-center gap-4">
      
      {/* CARD */}
      <div className="result-card max-w-[500px] rounded-[1.5rem] overflow-hidden border border-white/10 bg-white/[0.02]">
        
        {/* LINK WRAPPER */}
        <a
          href={current.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="aspect-[3/4] w-full overflow-hidden relative">
            
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <span className="text-white text-sm">
                View material
              </span>
            </div>

          </div>
        </a>

        {/* TEXT */}
        <div className="p-4 text-center">
          <p className="text-sm font-medium text-white">
            {current.title}
          </p>
        </div>
      </div>

      {/* NAV */}
      <div className="flex gap-3">
        <button
          onClick={prev}
          className="px-4 py-2 text-sm border border-white/20 rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="px-4 py-2 text-sm bg-white text-black rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}