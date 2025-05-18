import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-center m-auto text-4xl font-semibold h-15 w-15 border-b-4 border-b-blue-400">
        Portfolio
      </h1>

      <div className=" flex gap-8 p-10 h-[80vh]">
        {/* ✅ Amazon Image with Hover Effect */}
        <div className="relative group w-[350px] h-[60%]">
          <img
            className="w-full h-full object-cover cursor-pointer transform transition duration-500 group-hover:rotate-3 group-hover:scale-105"
            src="https://www.finplus.co.in/wp-content/uploads/2019/06/Amazon-is-growing-and-how.jpg"
            alt="Amazon Project"
          />
          <div className="absolute h-20 w-full top-[80%] rotate-[1deg] opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-black text-xl font-semibold whitespace-nowrap">
              Amazon page from HTML & CSS
            </p>
            <a
              href="https://amazon-git-main-shivanshu9335s-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center hover:text-2xl text-neutral-800 cursor-pointer"
            >
              Click
            </a>
          </div>
        </div>

        {/* ✅ Unsplash Image with Same Hover Effect */}
        <div className="relative group w-[450px] h-[100%]">
          <img
            className="w-full h-full object-cover cursor-pointer transform transition duration-500 group-hover:rotate-3 group-hover:scale-105"
            src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
            alt="Ecommerce Project"
          />
          <div className="absolute h-20 w-full flex flex-col gap-3 top-[80%] rotate-[1deg] opacity-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-black text-2xl text-center font-semibold whitespace-nowrap">
              E-commerce Page from React
            </p>
            <a
              href="https://e-commerce-git-main-shivanshu9335s-projects.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block font-semibold  text-center hover:text-4xl text-white cursor-pointer"
            >
              Click
            </a>
          </div>
        </div>

        {/* Third Image - Still Simple */}
        <div className="w-[350px] h-[60%]">
          <img
            className="w-full h-full object-cover"
            src="https://bootstrapmade.com/content/demo/Kelly/assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
