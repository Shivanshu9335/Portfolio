import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import bgi from "../assets/Bgi.png";
import { Link } from "react-router-dom";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `HI, I'M <br /> <span class='text-cyan-600'>SHIVANSHU</span> <br/> I'M A <br /> <span class='text-cyan-600'>WEB DEVELOPER</span>`,
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
      backDelay: 1000,
    };

    const typed = new Typed(el.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Text & Button */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <div
          ref={el}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug"
        />
        <Link
          to="/about"
          className="inline-block mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          About Me
        </Link>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={bgi}
          alt="Background"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
