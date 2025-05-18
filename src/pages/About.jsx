import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import image from "../assets/porfolioImage.jpg";

const About = () => {
  return (
    <div>
      <div className="w-full max-h-max">
        <h1 className="text-3xl font-bold text-center max-w-max m-auto h-12 w-15 border-b-4 border-b-blue-400">
          About
        </h1>
        <p className="text-center mt-4 text-lg">
          "I'm a Web-developer passionate about crafting clean,
          responsive, and user-friendly web experiences."
        </p>

        <div className="w-[90%] m-auto flex gap-5   max-h-max mt-10">
          <div className="w-[35%] h-[400px] overflow-hidden bg-green-400">
            <img src={image} alt="" />
          </div>
          <div className="w-[65%] p-3">
            <h1 className="text-3xl font-bold ">Web Developer.</h1>
            
            <table className="max-h-max  leading-8  w-full m-auto mt-5 p-2">
              <tr className="">
                <td>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </td>
                <td className="flex gap-3">
                  <span>
                    <b>Birthday:</b>
                  </span>
                  <p>22 Jan 2008 </p>
                </td>
                <td>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </td>
                <td className="flex gap-3">
                  <span>
                    <b>Age:</b>
                  </span>
                  <p>18 </p>
                </td>
              </tr>
              <tr className="">
                <td>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </td>
                <td className="flex gap-3">
                  <span>
                    <b>Website:</b>
                  </span>
                  <p> .......... </p>
                </td>
                <td>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </td>
                <td className="flex gap-3">
                  <span>
                    <b>Degree:</b>
                  </span>
                  <p>12th only </p>
                </td>
              </tr>
              <tr className="">
                <td>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </td>
                <td className="flex gap-3">
                  <span>
                    <b>Phone:</b>
                  </span>
                  <p>+919335103237 </p>
                </td>
                <td>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </td>
                <td className="flex gap-3">
                  <span>
                    <b>Email:</b>
                  </span>
                  <p>shivanshuji50@gmail.com</p>
                </td>
              </tr>
              <tr className="">
                <td>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </td>
                <td className="flex gap-3">
                  <span>
                    <b>Freelance:</b>
                  </span>
                  <p>Available </p>
                </td>
                <td>
                  <span>
                    <IoIosArrowForward />
                  </span>
                </td>
                <td className="flex gap-3">
                  <span>
                    <b>City:</b>
                  </span>
                  <p>Lucknow </p>
                </td>
              </tr>
            </table>

            <p className="mt-2 font-medium font-serif text-gray-800">
              I’m a passionate Web Developer with a focus on creating
              responsive, user-friendly websites. I specialize in HTML, CSS,
              JavaScript, and modern frameworks like React. I love building
              websites that not only look great but also work smoothly on all
              devices. I'm always learning new technologies to improve my skills
              and deliver better digital experiences.
            </p>
          </div>
        </div>
      </div>

      <div className=" w-[90%]  m-auto max-h-max p-10 mt-10">
        <h1 className="text-3xl font-bold text-center max-w-max m-auto h-12 w-15 border-b-4 border-b-blue-400">
          Skills
        </h1>
        <div className="flex mt-10  justify-between">
          <div className="w-[45%] flex flex-col gap-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">HTML</span>
              <span className="text-sm font-medium text-gray-700">100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="w-[45%] flex flex-col gap-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">CSS</span>
              <span className="text-sm font-medium text-gray-700">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>

        <div className="flex  mt-5 justify-between">
          <div className=" w-[45%] flex flex-col gap-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                JAVASCRIPT
              </span>
              <span className="text-sm font-medium text-gray-700">70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "70%" }}
              />
            </div>
          </div>
          <div className="w-[45%]  flex flex-col gap-2">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">REACT</span>
              <span className="text-sm font-medium text-gray-700">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
