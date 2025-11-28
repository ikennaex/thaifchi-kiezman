import React from "react";
import { engineer } from "../../imports";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Appointment = () => {
  return (
    <div className="bg-blue-100">
      <div className="container mx-auto py-32 px-4 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-7 bg-customBlue rounded-3xl px-6 py-8 lg:py-12">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              className="object-cover h-60 w-full max-w-xs rounded-2xl"
              src={engineer}
              alt="Engineer"
            />
          </div>

          {/* Text + Button Section */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl lg:text-3xl font-bold leading-snug">
              Need help? Book a call at a time that suits you
            </h2>
            <p className="text-sm lg:text-base leading-relaxed">
              Our expertise spans across various disciplines, ensuring that our clients receive top-notch support for their operations.
            </p>

            <Link to={"/contact"}>
              <button className="flex flex-row items-center justify-center gap-3 bg-lime-400 w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-blue-950 hover:opacity-90 transition duration-300">
                Book Appointment
                <FaArrowRight size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
