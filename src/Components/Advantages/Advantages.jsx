import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    title: "Professionalism and Integrity",
    description: "We deliver with transparency and ethical standards.",
    icon: <FaShieldAlt size={22} />,
  },
  {
    title: "Innovation",
    description: "We deploy modern solutions that adapt to client and industry needs.",
    icon: <FaLightbulb size={22} />,
  },
  {
    title: "Diverse Expertise",
    description: "We are a one-stop company with services across multiple sectors.",
    icon: <FaUsers size={22} />,
  },
  {
    title: "Compliance and Reliability",
    description: "Strict adherence to regulations and timely delivery.",
    icon: <FaCheckCircle size={22} />,
  },
  {
    title: "Strong Partnerships",
    description: "Building long-term relationships that create mutual growth.",
    icon: <FaHandshake size={22} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-customBlue py-20 px-6 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-customOrange/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-customOrange/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div>
          <p className="inline-block border rounded-full px-5 py-2 text-sm font-semibold text-white bg-customOrange shadow-md">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-white mt-6 leading-tight">
            Experience Excellence Driven By Value And Commitment
          </h2>

          <p className="text-gray-200 mt-4 text-lg leading-relaxed">
            Our solutions are built on integrity, powered by innovation, and designed to support your growth with trust and unmatched expertise.
          </p>

          {/* IMAGE */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
            <img
              src="/images/intltruck.jpg"
              alt="Why choose us illustration"
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-md border border-gray-100 rounded-xl p-6 flex gap-5 items-start shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* ICON WRAPPER */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-customOrange/10 text-customOrange">
                {reason.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
