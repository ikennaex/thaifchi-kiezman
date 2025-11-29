import React from "react";
import { motion } from "framer-motion";
import "./herosection.css";

const textOverlay = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Herosection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden mt-20 pt-20 rounded-b-[40px]">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/trucks.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK GRADIENT FOR DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* CONTENT */}
      <motion.div
        variants={textOverlay}
        initial="hidden"
        animate="visible"
        className="absolute top-1/2 left-10 -translate-y-1/2 z-20 max-w-xl"
      >
        <p className="text-customOrange font-semibold tracking-widest text-sm lg:text-base mb-3">
          Multi-sector Excellence
        </p>

        <h2 className="text-white text-3xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
          Providing Multi-sector Business Solutions
        </h2>

        <p className="text-gray-200 mt-4 text-sm lg:text-lg leading-relaxed">
          Delivering trusted, innovative, and scalable services across trade,
          logistics, agriculture, real estate, and consumer markets.
        </p>

        <a
          href="mailto:thaifchikiezmanltd@gmail.com"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-customOrange text-white font-semibold shadow-lg hover:scale-105 transition scale duration-300"
        >
          Learn More
        </a>
      </motion.div>

      {/* CURVED BOTTOM SHADOW FOR PREMIUM LOOK */}
      <div className="absolute bottom-0 w-full h-28 bg-customBlue/10 blur-2xl" />
    </section>
  );
};

export default Herosection;
