import React from "react";
import { motion } from "framer-motion";
import "./herosection.css";

const textOverlay = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const Herosection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden mt-28 pt-24 rounded-b-3xl">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/cargo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY FOR LEGIBILITY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TOP RIGHT TEXT OVERLAY */}
      <motion.div
        variants={textOverlay}
        initial="hidden"
        animate="visible"
        className="absolute top-8 left-8 z-20 text-left"
      >
        <p className="text-[#9ecf4c] font-semibold tracking-widest text-sm lg:text-base">
        </p>

        <h2 className="text-white text-xl lg:text-5xl leading-snug max-w-lg">
          Providing Multi-sector Business Solutions
        </h2>
      </motion.div>

    </section>
  );
};

export default Herosection;
