import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBAr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full shadow-xl shadow-gray-200 flex flex-col justify-center items-center">
      <nav className="Navbar p-6 fixed z-50 top-0 left-0 right-0 text-gray-600 shadow-md w-full bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-black text-4xl font-semibold ">Shivanshu</h1>
          <ul className="hidden md:flex gap-5 text-gray-700 font-semibold">
            <li>
              <Link
                to="/"
                className={`py-1 border-b-2 ${
                  isActive("/") ? "border-blue-500" : "border-transparent"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`py-1 border-b-2 ${
                  isActive("/about") ? "border-blue-500" : "border-transparent"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`py-1 border-b-2 ${
                  isActive("/portfolio")
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`py-1 border-b-2 ${
                  isActive("/contact")
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden bg-blue-500 text-white p-4 space-y-2 text-center">
            <li>
              <Link
                to="/"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBAr;
