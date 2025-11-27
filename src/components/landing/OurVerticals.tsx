"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";

// -----------------------------------------------------------
// MAIN SECTION
// -----------------------------------------------------------

export default function OurVerticalsSection() {
  return (
    <section className="w-full bg-white dark:bg-black py-24 px-8">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-black dark:text-white">
        Our Verticals
      </h2>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          max-w-7xl
          mx-auto
        "
      >
        {/* -------------------- ROW 1 (always 3 on desktop) -------------------- */}
        <VerticalCard
          title="Policy Research & Advisory"
          image="/vertical1.png"
          content={
            <>
              <p>
                We decode policy challenges through rigorous research and
                stakeholder mapping, helping governments and institutions design
                programs that are efficient, inclusive, and future-ready.
              </p>
              <p className="mt-4 text-sm opacity-80">
                Policy with purpose. Governance with clarity.
              </p>
              <ul className="mt-6 space-y-1 text-sm opacity-90">
                <li>A. Digital Infrastructure</li>
                <li>B. Media and Entertainment</li>
                <li>C. Cyber Security</li>
                <li>D. Clean Energy</li>
                <li>E. Rural Development</li>
                <li>F. Smart Village Solution</li>
              </ul>
            </>
          }
        />

        <VerticalCard
          title="Election & Campaign Management"
          image="/vertcial2.png"
          content={
            <>
              <p>
                From ground-level data to narrative strategy, we design
                end-to-end campaigns that resonate with people — not just
                voters.
              </p>
              <p className="mt-4 text-sm opacity-80">
                Emotion meets precision. Strategy meets trust.
              </p>
              <ul className="mt-6 space-y-1 text-sm opacity-90">
                <li>A. Candidate Profiling</li>
                <li>B. Surveys</li>
                <li>C. Events</li>
                <li>D. Audio Visual Communication</li>
                <li>E. Pain Point Analysis & Delivery</li>
                <li>F. Digital Media Amplification</li>
                <li>G. Public & Media Relation</li>
              </ul>
            </>
          }
        />

        <VerticalCard
          title="Data Intelligence & Analytics"
          image="/vertcial3.png"
          content={
            <>
              <p>
                We use behavioural data, surveys, and sentiment analysis to
                build predictive models for policy outcomes and campaign
                optimisation.
              </p>
              <p className="mt-4 text-sm opacity-80">Numbers with a heartbeat.</p>
            </>
          }
        />

        {/* -------------------- ROW 2 (always 2 centered on desktop) -------------------- */}
        <div className="
          col-span-1
          md:col-span-2
          lg:col-span-3
          flex flex-col md:flex-row justify-center items-center gap-10
        ">
          <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
            <VerticalCard
              title="Government Project Management"
              image="/vertical4.png"
              content={
                <>
                  <p>
                    We partner with ministries and agencies to manage and execute
                    projects that deliver tangible results — ensuring
                    accountability and long-term alignment.
                  </p>
                  <p className="mt-4 text-sm opacity-80">
                    Delivering governance that works.
                  </p>
                </>
              }
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
            <VerticalCard
              title="Strategic Communication Design"
              image="/vertical5.png"
              content={
                <>
                  <p>
                    We craft narratives that make governance relatable — simplifying
                    complexity through design, storytelling, and citizen-focused
                    communication.
                  </p>
                  <p className="mt-4 text-sm opacity-80">
                    Because good governance deserves good storytelling.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------
// CARD COMPONENT
// -----------------------------------------------------------

const VerticalCard = ({
  title,
  image,
  content,
}: {
  title: string;
  image: string;
  content: React.ReactNode;
}) => {
  const [active, setActive] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState(false);

  React.useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  const handleClick = () => {
    if (isTouch) setActive((prev) => !prev);
  };

  return (
    <div
      onMouseEnter={() => !isTouch && setActive(true)}
      onMouseLeave={() => !isTouch && setActive(false)}
      onClick={handleClick}
      className="relative border border-black/20 dark:border-white/20 h-[28rem] group/canvas-card overflow-hidden cursor-pointer rounded-xl w-full max-w-[26rem]"
    >
      <CornerIcons />

      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover transition-all duration-500 ${
          active ? "scale-110 brightness-[0.3]" : ""
        }`}
      />

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black/80"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: active ? 1 : 0,
          y: active ? 0 : 20,
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-30 flex flex-col items-start justify-center p-8 text-white pointer-events-none"
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="text-sm leading-relaxed">{content}</div>
      </motion.div>
    </div>
  );
};

// -----------------------------------------------------------
// CORNER ICONS
// -----------------------------------------------------------

const CornerIcons = () => (
  <>
    <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white drop-shadow-lg z-40" />
    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white drop-shadow-lg z-40" />
    <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white drop-shadow-lg z-40" />
    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white drop-shadow-lg z-40" />
  </>
);

const Icon = ({ className, ...rest }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
