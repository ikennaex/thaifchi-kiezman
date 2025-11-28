import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { logo } from "../../imports";
import "./navbar.css"

const menuItems = [
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Why Choose Us", link: "/advantages" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 lg:h-20 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-14">
          {menuItems.map((menu) =>
            menu.link.includes("#") ? (
              <a key={menu.name} href={menu.link} className="nav-item">
                {menu.name}
              </a>
            ) : (
              <Link key={menu.name} to={menu.link} className="nav-item">
                {menu.name}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-900"
        >
          {open ? <IoClose size={36} /> : <IoIosMenu size={36} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden bg-white px-6 py-6 space-y-6 transform transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {menuItems.map((menu) =>
          menu.link.includes("#") ? (
            <a key={menu.name} href={menu.link} className="mobile-link">
              {menu.name}
            </a>
          ) : (
            <Link key={menu.name} to={menu.link} className="mobile-link">
              {menu.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
