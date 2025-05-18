import React from "react";

const Contacts = () => {
  return (
    <div className="p-4">
      <div className="p-8 mx-auto max-w-4xl bg-white shadow-md rounded-md">
        <h1 className="text-slate-900 text-3xl font-semibold mb-6">
          Let's Talk
        </h1>

        <div className="   p-6 rounded-md">
          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Address Section */}
            <div className="w-full mb-8 md:mb-0">
              <h2 className="text-slate-900 text-base font-semibold mb-4">
                Address
              </h2>
              <div className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <img
                    src="https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png"
                    alt=""
                    className="p-2"
                  />
                </div>
                <span className="text-sm ml-4 text-blue-600 font-medium">
                  Hanshkheda para, Lucknow
                </span>
              </div>
            </div>

            {/* Email Section */}
            <div className="w-full">
              <h2 className="text-slate-900 text-base font-semibold mb-4">
                Email
              </h2>
              <div className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                </div>
                <div className="ml-4 text-sm">
                  <small className="block text-slate-900">Mail</small>
                  <span className="text-blue-600 font-medium">
                    shivanshuji50@gmai.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-18 md:flex-row md:gap-6">
            {/* Address Section */}
            <div className="w-full mb-8 md:mb-0">
              <h2 className="text-slate-900 text-base font-semibold mb-4">
                Call
              </h2>
              <div className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <img
                    src="https://png.pngtree.com/element_our/png/20180905/call-icon-png-png_87589.jpg"
                    alt=""
                    className="p-2"
                  />
                </div>
                <span className="text-sm ml-4 text-blue-600 font-medium">
                  +9335103237
                </span>
              </div>
            </div>

            {/* Email Section */}
            <div className="w-full">
              <h2 className="text-slate-900 text-base font-semibold mb-4">
                Github
              </h2>
              <div className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10  overflow-hidden w-10 rounded-full flex items-center justify-center shrink-0">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRjsbDfKwshDzDKjHfdCyowb6BU7_bzdbaA&s"
                    alt=""
                    className="object-contain w-full h-full rounded-full"
                  />
                </div>
                <div className="ml-4 text-sm">
                  <small className="block text-slate-900">Mail</small>
                  <a
                    href="https://github.com/Shivanshu9335"
                    target="_blank"
                    className="text-blue-600 font-medium"
                  >
                    https://github.com/Shivanshu9335
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
