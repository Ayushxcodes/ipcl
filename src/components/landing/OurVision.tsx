"use client";
import React from 'react';
import { motion } from 'framer-motion';

const OurVision = ({ image = '/vision.png' }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 py-16 px-6 md:px-20">
      {/* Image on the left */}
      <motion.img
        src={image}
        alt="Our Vision"
        className="w-full md:w-1/2 rounded-2xl shadow-lg mb-8 md:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Text on the right */}
      <motion.div
        className="md:ml-12 w-full md:w-1/2 text-left"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-green-900">Our Philosophy</h2>
        <p className="text-lg text-gray-700 mb-4">
          Good governance is not an abstract idea — it’s a designed experience.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We see policies, campaigns, and communication as design systems that shape how people trust, engage, and believe in institutions.
        </p>
        <p className="text-lg text-gray-700">
          At Paper Theory Network, we are not consultants — we are co-creators of impact.
        </p>
      </motion.div>
    </div>
  );
};

export default OurVision;