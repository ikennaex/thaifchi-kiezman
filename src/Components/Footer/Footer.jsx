import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../imports";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">

        {/* Logo & About */}
        <div className="col-span-1 lg:col-span-2">
          <Link to={"/"}>
            <img
              src={logo}
              alt="Thaifchi-Kiezman Ltd Logo"
              className="h-16 bg-white p-2 rounded-lg mb-5"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xl">
            Thaifchi-Kiezman Ltd is a diversified organization delivering 
            value-driven services across international trade, construction, 
            agribusiness, logistics, transportation, and retail sectors. 
            We are committed to excellence, reliability, and sustainable 
            business growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-customOrange">About Us</Link></li>
            <li><Link to="/services" className="hover:text-customOrange">Our Services</Link></li>
            <li><Link to="/advantages" className="hover:text-customOrange">Why Choose Us</Link></li>
            <li><Link to="/contact" className="hover:text-customOrange">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-white text-lg mb-4">Contact</h3>
          <p className="text-sm">B46 Marcus Gundiri Street, Sunshine Estate, Gwarimpa, Abuja Nigeria</p>

          <a href="mailto:thaifchikiezmanltd@gmail.com" className="block mt-2 hover:text-customOrange text-sm">
            thaifchikiezmanltd@gmail.com
          </a>

          <a href="tel:+2349091112210" className="block mt-4 hover:text-customOrange text-sm">
            +234 909 111 2210
          </a>

          <a href="tel:+2348038792439" className="block hover:text-customOrange text-sm">
            +234 803 879 2439
          </a>

          <div className="mt-5 flex items-center gap-5">
            <a href="" className="hover:text-customOrange"><FaFacebook size={18} /></a>
            <a href="" className="hover:text-customOrange"><FaInstagram size={18} /></a>
            <a href="" className="hover:text-customOrange"><FaLinkedinIn size={18} /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Bottom Section */}
      <div className="text-center mt-6 px-6">
        <p className="text-sm">&copy; {year} Thaifchi-Kiezman Ltd. All rights reserved.</p>
        <p className="text-xs mt-2 text-customOrange">
          Built by{" "}
          <a href="https://xmotivotechnologies.com/" target="_blank" className="underline">
            xMotivo Technologies Ltd
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
