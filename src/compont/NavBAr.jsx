import React, { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom'
import { Menu, X } from "lucide-react";

const NavBAr = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full  shadow-xl shadow-gray-200 flex flex-col justify-center items-center">
      <nav className="Navbar   p-6   fixed z-50 top-0 left-0 right-0 text-gray-600 shadow-md  w-full">
        <div className="container  mx-auto flex justify-between items-center">
          <h1 className="text-black text-2xl font-bold">My Portfolio</h1>
          <ul className="hidden md:flex gap-5 text-gray-700 font-semibold">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/portfolio"}>Projects</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isOpen && (
          <ul className="md:hidden bg-blue-500 text-white p-4 space-y-2 text-center">
            <li>
              <a href="#home" className="block py-2">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* ✅ Text Section with Line Height & Gap */}
    </div>
  );
};

export default NavBAr;
