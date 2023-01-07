import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

const PreFooter = () => {
  return (
    <div className="bg-[#ff4f47] py-4  ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-3 mx-[6%] py-5 ">
          <div className="col-span-2 text-center lg:text-left ">
            <h1 className="text-white text-xl my-2 font-bold">
              QUALITY ROOFING PROVIDER
            </h1>
            <h2 className="text-6xl font-bold my-2 text-white">
              {" "}
              Need roofing services?
            </h2>
          </div>

          <div className=" place-self-center  lg:place-self-end my-4">
            <Link
              to="/services"
              className="btn btn-lg px-12  bg-black border-none hover:bg-white hover:text-[#ff4f47] "
            >
              <span className="font-bold mr-2">
                <BsArrowRightCircleFill />
              </span>{" "}
              Get A Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
