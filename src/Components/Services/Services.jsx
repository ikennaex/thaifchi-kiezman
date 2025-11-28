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
    <section className="px-7 py-16 bg-customBlue/20 text-[#1d4c08]">
      <div className="max-w-6xl mx-auto text-center">
      <div className="flex justify-center mb-10">
        <p className="border rounded-full px-6 py-2 text-sm font-semibold text-white bg-customOrange shadow-sm">
          Our Services
        </p>
      </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} duration={100}>
              <div
                className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.heading}
                  className="w-full h-58 object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.heading.split("&").map((part, i, arr) => (
                      <React.Fragment key={i}>
                        <span className="text-black">{part.trim()}</span>
                        {i < arr.length - 1 && (
                          <span className="text-customRed"> & </span>
                        )}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="text-gray-700 text-sm flex-grow">{service.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/services"
          className="inline-block mt-10 px-6 py-3 rounded-full bg-customBlue text-white font-semibold hover:scale-105 transition duration-300 shadow-md"
        >
          See Services in detail
        </Link>
      </div>
    </section>
  );
};

export default Services;
