import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    title: "Professionalism and Integrity",
    description: "We deliver with transparency and ethical standards.",
    icon: <FaShieldAlt size={24} className="text-blue-600" />,
  },
  {
    title: "Innovation",
    description: "We deploy modern solutions that adapt to client and industry needs.",
    icon: <FaLightbulb size={24} className="text-yellow-500" />,
  },
  {
    title: "Diverse Expertise",
    description: "We are a one-stop company with services across multiple sectors.",
    icon: <FaUsers size={24} className="text-green-500" />,
  },
  {
    title: "Compliance and Reliability",
    description: "Strict adherence to regulations and timely delivery.",
    icon: <FaCheckCircle size={24} className="text-indigo-600" />,
  },
  {
    title: "Strong Partnerships",
    description: "Building long-term relationships that create mutual growth.",
    icon: <FaHandshake size={24} className="text-red-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-customBlue py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
      <div className="flex justify-center mb-10">
        <p className="border rounded-full px-6 py-2 text-sm font-semibold text-white bg-customOrange shadow-sm">
          Our Core Values
        </p>
      </div>
          {/* Optional: placeholder for image */}
          <div className="mt-8 w-full h-64 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
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
