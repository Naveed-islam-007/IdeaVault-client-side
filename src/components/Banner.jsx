"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    badge: "🚀 Launch Your Vision",
    title: "Turn Your Idea Into The Next Big Thing",
    sub: "IdeaVault is where founders, makers, and dreamers share startup ideas and get real feedback.",
    bg: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80",
  },
  {
    id: 2,
    badge: "💡 Innovate Together",
    title: "The World's Best Ideas Start With One Person",
    sub: "Browse startup concepts across Tech, AI, Health, Education and more.",
    bg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80",
  },
  {
    id: 3,
    badge: "🌍 Community Driven",
    title: "Validate. Collaborate. Build the Future.",
    sub: "Share your idea, gather feedback, and refine your vision.",
    bg: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <div className="relative h-[620px] overflow-hidden text-white">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${slide.bg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        
        <span className="mb-4 rounded-full border border-orange-400/40 bg-orange-500/20 px-4 py-1 text-sm text-orange-300">
          {slide.badge}
        </span>

        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {slide.title}
        </h1>

        <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
          {slide.sub}
        </p>

        <Link
          href="/ideas"
          className="mt-8 rounded-lg bg-orange-500 px-8 py-3 font-semibold hover:bg-orange-600 transition"
        >
          Explore Ideas →
        </Link>

        {/* Dots */}
        <div className="mt-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-orange-400"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20"
      >
        ›
      </button>
    </div>
  );
}