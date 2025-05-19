import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import image from "../assets/porfolioImage.jpg";

const About = () => {
  const details = [
    { label: "Birthday", value: "22 Jan 2008" },
    { label: "Age", value: "18" },
    { label: "Website", value: ".........." },
    { label: "Degree", value: "12th only" },
    { label: "Phone", value: "+91 9335103237" },
    { label: "Email", value: "shivanshuji50@gmail.com" },
    { label: "Freelance", value: "Available" },
    { label: "City", value: "Lucknow" },
  ];

  const skills = [
    { skill: "HTML", pct: 100 },
    { skill: "CSS", pct: 90 },
    { skill: "JavaScript", pct: 70 },
    { skill: "React", pct: 90 },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold border-b-4 border-blue-400 inline-block">
          About
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          I'm a Web Developer passionate about crafting clean, responsive, and
          user-friendly web experiences.
        </p>
      </div>

      {/* Profile & Details */}
      <div className="mt-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={image}
            alt="Profile"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-2/3 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Web Developer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.map((item) => (
              <div key={item.label} className="flex items-start">
                <IoIosArrowForward className="mt-1 text-blue-500" />
                <div className="ml-2">
                  <span className="font-semibold text-gray-800">
                    {item.label}:
                  </span>
                  <span className="ml-1 text-gray-700">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">
            I’m a passionate Web Developer with a focus on creating responsive,
            user-friendly websites. I specialize in HTML, CSS, JavaScript, and
            modern frameworks like React. I love building websites that not only
            look great but also work smoothly on all devices. I'm always
            learning new technologies to improve my skills and deliver better
            digital experiences.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center border-b-4 border-blue-400 inline-block">
          Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((item) => (
            <div key={item.skill} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">{item.skill}</span>
                <span className="text-gray-700 font-medium">{item.pct}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
