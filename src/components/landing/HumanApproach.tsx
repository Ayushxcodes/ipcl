"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/Human1.png", "/vertcial2.png", "/vertcial3.png"]; // Add more images as needed

export default function CaseStudyHero() {
  const [index, setIndex] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setIndex((i) => (i + 1) % images.length);
  const prevImage = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="w-full mx-auto pt-10 pb-20 px-4 md:px-8">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 dark:border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden"
      >
        {/* Hero Image Slider */}
        <div className="relative w-full h-[260px] md:h-[340px] rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt="Case Study Image"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-2 rounded-full text-black hover:bg-black/60"
            onClick={prevImage}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/60"
            onClick={nextImage}
          >
            <ChevronRight size={22} />
          </button>

          {/* Title + Description */}
          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black drop-shadow">
              Border
            </h1>
            <p className="text-black mt-2 max-w-lg text-sm md:text-base">
              A premium audio brand crafting high-quality headphones for music
              enthusiasts and creative professionals.
            </p>
          </div>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-3 gap-4 md:gap-0 py-6 px-6 md:px-10 border-t border-black/40 dark:border-white/10">
          <div className="flex flex-col">
            <span className="text-xs text-black/50 dark:text-white/50">
              Category
            </span>
            <span className="font-semibold mt-1">Technology</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-black/50 dark:text-white/50">
              Platforms
            </span>
            <span className="font-semibold mt-1">📱 🖥️ 🎧</span>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-xs text-black/50 dark:text-white/50">
              Year
            </span>
            <span className="font-semibold mt-1">2025</span>
          </div>
        </div>
      </motion.div>

      {/* The Human Approach */}
      <div className="mt-16">
        <h3 className="text-sm uppercase tracking-wider text-black/40 dark:text-white/40">
          The Human Approach
        </h3>

        <p className="text-xl md:text-2xl font-semibold mt-3 leading-snug text-black dark:text-white max-w-3xl">
          We believe data must serve people, not the other way around. Every
          insight, every decision, every message — must lead to a better
          experience for citizens. Our work bridges policymakers and the public,
          turning governance into a living dialogue rather than a distant
          process.
        </p>
      </div>
    </section>
  );
}
