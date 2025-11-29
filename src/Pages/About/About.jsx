import React from "react";
import { Target, Eye, CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";
import CoreValues from "../../Components/CoreValues/CoreValues";

const aimsandobj = [
  "To facilitate seamless imports and exports of manufactured goods",
  "To establish reliable logistics and transportation systems",
  "To support food security and agribusiness development",
  "To promote industrial growth through construction and estate development",
  "To expand into global markets while maintaining quality and compliance standards",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-orange-50 via-white to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#f97316,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#1e40af,transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl py-24 lg:py-32">
        {/* WHO WE ARE */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-6 lg:space-y-8">
            <div className="flex mb-10">
              <p className="border rounded-full px-6 py-2 text-sm font-semibold text-white bg-customOrange shadow-sm">
                Who are We
              </p>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Building Tomorrow Through{" "}
              <span className="text-customOrange">Excellence</span> &{" "}
              <span className="text-customBlue">Innovation</span>
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Thaifchi-Kiezman Ltd. is a diversified conglomerate delivering
              value-driven solutions across international trade, construction,
              agribusiness, logistics, transportation, and consumer markets.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-customOrange to-customBlue rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000" />
            <img
              src="/images/cargo.jpg"
              alt="Thaifchi-Kiezman Operations"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-96 lg:h-[520px] transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* MISSION & VISION */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Mission */}
          <motion.div
            variants={fadeInUp}
            className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative overflow-hidden rounded-t-3xl">
              <video
                src="/videos/mission.mp4"
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="p-6 lg:p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-customBlue/10 rounded-2xl">
                  <Target className="w-8 h-8 text-customBlue" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-customBlue">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                To deliver high-quality products and services across diverse
                industries through innovation, professionalism, and strategic
                partnerships, while creating long-term value for clients,
                stakeholders, and communities.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative overflow-hidden rounded-t-3xl">
              <video
                src="/videos/vision.mp4"
                className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="p-6 lg:p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-customBlue/10 rounded-2xl">
                  <Eye className="w-8 h-8 text-customBlue" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-customBlue">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                To be recognized as a leading diversified conglomerate in
                Nigeria and Africa driving excellence, sustainability, and
                economic transformation.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* AIMS & OBJECTIVES */}
        <motion.div
          className="mt-24 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex justify-center mb-10">
            <p className="border rounded-full px-6 py-2 text-sm font-semibold text-white bg-customOrange shadow-sm">
              Aims and Objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aimsandobj.map((aim, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 lg:p-8 hover:bg-white hover:shadow-xl transition-all duration-400"
              >
                <div className="flex items-start gap-5">
                  <div className="mt-1 p-2 bg-customOrange/10 rounded-xl group-hover:scale-110 transition-transform">
                    <CircleCheckBig className="w-7 h-7 text-customOrange" />
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                    {aim}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CORE VALUES */}
        <div className="mt-32">
          <CoreValues />
        </div>
      </div>
    </section>
  );
};

export default About;
