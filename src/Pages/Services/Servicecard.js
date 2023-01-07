import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Serviceard = ({ service }) => {
  const { _id, title, description, image, Price } = service;
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg">
      {/* <img src={image} className="object-cover w-full h-64" alt="" /> */}

      <PhotoProvider>
        <PhotoView src={image}>
          <div className="relative pt-[50%]  rounded-t-xl overflow-hidden">
            <img
              className="object-cover w-full absolute   top-0 left-0  hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl  h-64"
              src={image}
              alt=""
            />
          </div>
        </PhotoView>
      </PhotoProvider>

      <div className="p-5  border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {title}
          </a>
          <span className="text-gray-600">— {}</span>
        </p>

        <p className="text-red-500 ">Price: ${Price}</p>

        <p className="inline-block  mb-4 text-sm leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
          {description.length > 100
            ? description.slice(0, 100) + ".."
            : description}
        </p>
        <Link
          to={`/services/${_id}`}
          className="px-4 py-2 mt-2 btn-xs hover:bg-[#fd4e46] hover:text-white text-lg font-semibold rounded bg-[black] dark:text-white"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Serviceard;
