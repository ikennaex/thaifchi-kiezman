import React from "react";
import { Link } from "react-router-dom";
import FadeIn from "../fadein";

const services = [
  {
    heading: "International Trade and Representation",
    img: "./images/intltrade.jpg",
  },
  {
    heading: "Construction and Estate Development",
    img: "./images/construction.jpg",
  },
  {
    heading: "Wines, Beverages, and Retail Solutions",
    img: "./images/wines.jpg",
  },
  {
    heading: "Agribusiness and Agro-Processing",
    img: "./images/agriculture.jpg",
  },
  {
    heading: "Logistics, Haulage, and Transportation",
    img: "./images/logistics.jpg",
  },
];

const Services = () => {
  return (
    <section className="relative px-7 py-20 bg-gradient-to-b from-customBlue/10 to-customBlue/30 rounded-t-3xl">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-customOrange/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Tag */}
        <div className="flex justify-center mb-6">
          <p className="border rounded-full px-6 py-2 text-sm font-semibold text-white bg-customOrange shadow-md">
            Our Services
          </p>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold text-customBlue">
          Solutions Built for Growth
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-3 text-base">
          Explore our extensive range of specialized services designed to power businesses across diverse industries.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {services.map((service, index) => (
            <FadeIn key={index} duration={120}>
              <div
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.heading}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl text-customBlue font-semibold leading-tight">
                    {service.heading}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3">
                    Empowering organizations with tailored solutions to maximize operational efficiency and business performance.
                  </p>

                  {/* Decorative line */}
                  <div className="w-10 h-1 bg-customOrange mt-4 rounded-full"></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/services"
          className="inline-block mt-14 px-8 py-3 rounded-full bg-customBlue text-white font-semibold hover:scale-105 hover:shadow-xl transition-transform duration-300 shadow-md"
        >
          See Services in Detail
        </Link>
      </div>
    </section>
  );
};

export default Services;
