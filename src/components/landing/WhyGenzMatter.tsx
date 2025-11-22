"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyGenZMatter() {
  return (
    <section className="w-full mx-auto pt-20 pb-24 px-4 md:px-8 relative overflow-hidden">
      {/* Floating gradient blobs */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-pink-500/20 blur-[90px] rounded-full"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-500/20 blur-[110px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-full bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden"
      >
        {/* Image with parallax */}
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="relative w-full h-[260px] md:h-[330px] overflow-hidden"
        >
          <Image
            src="/genz.png"
            alt="Gen Z Concept"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="px-6 md:px-10 py-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6"
          >
            Why Gen Z Matters
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-black/80 dark:text-white/80 leading-relaxed max-w-3xl"
          >
            Gen Z is not just the audience of the future — they’re the
            architects of the present. At Paper Theory’s Policy Practice, we
            actively engage young minds through research fellowships, digital
            campaigns, and participatory governance models that empower them to
            question, co-create, and contribute.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-black/80 dark:text-white/80 mt-6 leading-relaxed max-w-3xl"
          >
            They demand authenticity, transparency, and purpose — and we’re here
            to shape systems that reflect those values. From online civic
            challenges to youth-driven election initiatives, we’re building the
            bridge between next-gen citizens and real-world impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-black dark:text-white font-semibold mt-8 max-w-3xl"
          >
            Because the future of governance deserves Gen Z’s voice.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
