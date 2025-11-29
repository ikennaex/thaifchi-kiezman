import React from "react";
import { Link } from "react-router";
import FadeIn from "../fadein";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="container mx-auto px-7 lg:px-20 py-24">
      {/* SECTION BADGE */}
      <div className="flex justify-center mb-10">
        <p className="bg-customOrange text-white px-5 py-2 text-sm tracking-wide border border-gray-300 rounded-full font-medium shadow-sm">
          Who Are We
        </p>
      </div>

      <FadeIn duration={100}>
        {/* IMAGES ROW */}
        <div className="flex justify-center gap-6">
          <img
            src= "/images/parkedtrucks.jpg"
            alt="About Gropropak"
            className="w-44 lg:w-64 h-44 lg:h-64 object-cover rounded-3xl shadow-md hover:scale-[1.03] transition"
          />
          <img
            src= "/images/farmtruck.jpg"
            alt="About Gropropak 2"
            className="w-44 lg:w-64 h-44 lg:h-64 object-cover rounded-3xl shadow-md hover:scale-[1.03] transition"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="text-center max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-black">
            We deliver more than cargo,
            <span className="block font-normal text-gray-500 mt-1">
              we deliver trust, peace of mind, and exceptional value
            </span>
          </h2>

          <p className="mt-6 lg:text-xl leading-relaxed text-gray-600 px-2">
            Thaifchi-Kiezman Ltd. is a diversified company established to provide
            value-driven services across multiple sectors including
            international trade, construction, agribusiness, logistics,
            transportation, and consumer markets. By combining innovation,
            strategic partnerships, and professional expertise, the company is
            committed to delivering sustainable solutions that support
            businesses, strengthen communities, and contribute to economic
            growth in Nigeria and beyond.
          </p>

          {/* CTA BUTTON */}
          <div className="pt-10 flex justify-center">
            <Link to="/about">
              <button className="flex items-center gap-3 bg-customBlue px-7 py-4 rounded-full text-white font-semibold hover:bg-customBlue/95 transition-transform hover:scale-105 shadow-md">
                Read More <FaArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default About;
