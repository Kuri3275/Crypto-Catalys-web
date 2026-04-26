"use client";

import { useState } from "react";

type Outcome = {
  image: string;
  title: string;
  link?: string;
};

type Props = {
  outcomes: Outcome[];
};

export default function Slider({ outcomes }: Props) {
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
      <div className="result-card max-w-[500px] rounded-[1.5rem] overflow-hidden border border-white/10 bg-white/[0.02]">
        
        <a
          href={current.link || "#"}
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

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <span className="text-white text-sm">
                View material
              </span>
            </div>
          </div>
        </a>

        <div className="p-4 text-center">
          <p className="text-sm font-medium text-white">
            {current.title}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}