import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    title: "Professionalism and Integrity",
    description: "We deliver with transparency and ethical standards.",
    icon: <FaShieldAlt size={40} className="text-blue-600" />,
  },
  {
    title: "Innovation",
    description: "We deploy modern solutions that adapt to client and industry needs.",
    icon: <FaLightbulb size={40} className="text-yellow-500" />,
  },
  {
    title: "Diverse Expertise",
    description: "We are a one-stop company with services across multiple sectors.",
    icon: <FaUsers size={40} className="text-green-500" />,
  },
  {
    title: "Compliance and Reliability",
    description: "Strict adherence to regulations and timely delivery.",
    icon: <FaCheckCircle size={40} className="text-indigo-600" />,
  },
  {
    title: "Strong Partnerships",
    description: "Building long-term relationships that create mutual growth.",
    icon: <FaHandshake size={40} className="text-red-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 text-lg">
          We are committed to delivering excellence and building lasting relationships.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
