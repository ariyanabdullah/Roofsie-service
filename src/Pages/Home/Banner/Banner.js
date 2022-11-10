import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="main-banner ">
      <div className=" conatiner grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:py-0 md:mb-0 md:mt-34 lg:py-12  py-5 ">
        <div className="flex flex-col justify-center sm:mx-auto xl:[4%] lg:ml-[3%] md:ml-[-4%] p-6 text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
          <h1 className="text-xl text-red-600 font-bold">
            {" "}
            Single Falt Services
          </h1>
          <h1 className="text-5xl font-bold leading-none text-white sm:text-6xl">
            Reliable Roofing & Fixing Service
          </h1>
          <p className="mt-6 mb-8 text-lg text-white font-bold sm:mb-12">
            I Provide a variety of roofing and maintainence Service for
            <br className="hidden md:inline lg:hidden" />
            all types of house make happy..
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/register"
              className="px-8 hover:bg-[black] hover:text-white py-3 text-lg font-semibold rounded bg-[#fd4e46] dark:text-white"
            >
              Register Now
            </Link>
            <Link
              to="/blog"
              className="px-8 py-3 text-lg hover:bg-[#fd4e46] hover:text-white hover:border-none font-semibold text-white border rounded dark:border-gray-100"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="assets/svg/Business_SVG.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
