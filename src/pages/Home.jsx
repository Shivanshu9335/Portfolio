import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import bgi from "../assets/Bgi.png";
import { Link } from "react-router-dom";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `HI, I'M <br /> <span class='border-b-2 border-yellow-300 text-cyan-600'>SHIVANSHU</span> <br/> I'M A <br /> WEB <span class='text-cyan-600' >DEVELOPER</span>`,
      ],
      typeSpeed: 100,
      // loop: true,
      // backSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="Image" className=" p-2   relative overflow-hidden">
      <div className="p-6 absolute top-30  left-20  rounded-lg shadow-lg  text-center space-y-3 leading-relaxed text-4xl font-bold text-gray-800">
        <span ref={el} />
      </div>
      <Link
        to={"/about"}
        className="bg-blue-500 hover:bg-blue-700  hover:text-white cursor-pointer absolute z-50 top-[70%] w-[150px] h-[45px] text-center flex justify-center items-center rounded-2xl text-xl font-semibold font-serif text-gray-800 left-35 mt50"
      >
        About me
      </Link>

      <div className="h-[100vh]  absolute right-10  top-[-100px]  w-[40%]">
        <img className="object-contain " src={bgi} alt="" />
      </div>
    </div>
  );
};

export default Home;
