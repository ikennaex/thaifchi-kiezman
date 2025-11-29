import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lightbulb,
  Users,
  CheckCircle2,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    title: "Professionalism & Integrity",
    description:
      "We operate with complete transparency, ethical standards, and unwavering commitment to doing what’s right every single time.",
    icon: <Shield className="w-10 h-10" />,
  },
  {
    title: "Innovation-Driven Solutions",
    description:
      "We embrace cutting-edge ideas and modern technologies to deliver adaptive, forward-thinking solutions tailored to your needs.",
    icon: <Lightbulb className="w-10 h-10" />,
  },
  {
    title: "Diverse Expertise",
    description:
      "A true one-stop conglomerate seamlessly delivering excellence across trade, construction, agribusiness, logistics, and consumer goods.",
    icon: <Users className="w-10 h-10" />,
  },
  {
    title: "Compliance & Reliability",
    description:
      "Strict adherence to local and international regulations, backed by proven systems that guarantee on-time, high-quality delivery.",
    icon: <CheckCircle2 className="w-10 h-10" />,
  },
  {
    title: "Strong Partnerships",
    description:
      "We build long-term, trust-based relationships that drive mutual growth, shared success, and lasting value for all stakeholders.",
    icon: <Handshake className="w-10 h-10" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const card = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-orange-50 via-white to-white overflow-hidden">
      {/* Same radial background as About/Services */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#f97316,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#1e40af,transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-24"
        >
          <div className="flex justify-center mb-10">
            <p className="bg-customOrange text-white px-5 py-2 text-sm tracking-wide border border-gray-300 rounded-full font-medium shadow-sm">
              Why Partner With Us
            </p>
          </div>

          <h2 className="text-2xl lg:text-4xl font-black text-gray-900 leading-tight">
            Why Choose{" "}
            <span className="text-customOrange">Thaifchi-Kiezman</span>
          </h2>
          <p className="mt-6 base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Five core pillars that define our commitment to excellence and
            long-term success.
          </p>
        </motion.div>

        {/* Perfect 2-per-row layout on large screens */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={card}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-2xl border border-gray-200/50 transition-all duration-500 hover:-translate-y-4"
            >
              {/* Subtle hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-customOrange/20 to-customBlue/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-700" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                {/* Floating Gradient Icon */}
                <div className="p-6 bg-customOrange rounded-3xl shadow-2xl text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {reason.icon}
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {reason.title}
                </h3>

                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
