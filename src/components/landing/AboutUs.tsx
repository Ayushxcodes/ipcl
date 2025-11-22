"use client";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-white"
    >
      {/* Section Header */}
      <div className="max-w-4xl mx-auto mb-20">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
          /About Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          We work at the intersection of governance, communication, and impact —
          turning complexity into clarity that is{" "}
          <span className="italic">thoughtful, timeless,</span> and impactful.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 — Image + About Text */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="relative h-60 w-full">
            <Image
              src="/img1.png"
              alt="About Visual"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We are a collective of strategists, data analysts, policy
              thinkers, designers, and storytellers working to create meaningful
              impact.
            </p>
          </div>
        </div>

        {/* Card 2 — About Part 2 */}
        <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            What We Do
          </h3>
          <div className="relative h-60 w-full">
            <Image
              src="/img1.png"
              alt="About Visual"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            We decode complex systems — political, administrative, or social —
            and transform them into actionable narratives, measurable impact,
            and scalable outcomes.
          </p>
        </div>

        {/* Card 3 — About Part 3 */}
        <div className="bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all space-y-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Our Philosophy
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            We combine human insight with scientific precision — a balance of
            empathy and evidence.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Because meaningful governance isn&apos;t built in spreadsheets alone —
            it’s built with people at its core.
          </p>
          
        </div>

        {/* Card 4 — Large Image Card */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all relative">
          <div className="relative h-80 w-full opacity-70">
            <Image
              src="/img1.png"
              alt="Impact Visual"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
          <div className="absolute bottom-6 left-6">
            <p className="text-white text-lg font-light leading-relaxed">
              Design with intent.
              <br />
              Impact with clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
