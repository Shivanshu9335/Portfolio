import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Amazon page from HTML & CSS",
      img: "https://www.finplus.co.in/wp-content/uploads/2019/06/Amazon-is-growing-and-how.jpg",
      link: "https://amazon-git-main-shivanshu9335s-projects.vercel.app/",
      w: "w-full h-full",
    },
    {
      title: "E-commerce Page from React",
      img: "https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000",
      link: "https://e-commerce-git-main-shivanshu9335s-projects.vercel.app/login",
      w: "w-full h-full",
    },
    {
      title: "A wonderfull watch image ",
      img: "https://bootstrapmade.com/content/demo/Kelly/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
      link: null,
      w: "w-full h-full",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center  text-4xl sm:text-5xl font-semibold mb-8 border-b-4 border-blue-400 inline-block">
        Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="object-cover transform transition duration-500 group-hover:scale-105 w-full h-64 sm:h-72 md:h-80"
            />
            <div className="absolute inset-0 bg-[#000000a6] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-4">
              <p className="text-white text-lg sm:text-xl font-semibold text-center mb-2">
                {proj.title}
              </p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
                >
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
