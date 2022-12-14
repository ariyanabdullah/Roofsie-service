import React from "react";
import Banner from "./Banner/Banner";
import about from "../../assets/choose.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Testimonial from "./Testimonial/Testimonial";
import HomeService from "./HomeServices/HomeServices";
import UseTitle from "../../Hooks/UseTitle";
import PreFooter from "./PreFooter/PreFooter";
import PreService from "./PreService/PreService";
import AnimationCard from "./AnimationCard/AnimationCard";

const Home = () => {
  UseTitle("Home");

  return (
    <div>
      <Banner></Banner>

      {/* half card*/}
      <section className="container  my-5 mx-auto">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3">
          <div className="shadow-xl rounded-lg hover:bg-red-600 border border-red-600 hover:text-white py-8 px-6  w-[100%] bg-white">
            <h1 className="text-3xl font-bold">Quality Materials</h1>
            <p className="text-gray-400">
              I used very good Quality Materials by which your roof will not be
              destroy within 10 years
            </p>
          </div>
          <div className="shadow-xl rounded-lg hover:bg-red-600 border border-red-600 hover:text-white py-8 px-6  w-[100%] bg-white">
            <h1 className="text-3xl font-bold">Proffesional Work</h1>
            <p className="text-gray-400">
              As a Proffesional worker I have 10 years experience to building
              roof services .{" "}
            </p>
          </div>
          <div className="shadow-xl rounded-lg hover:bg-red-600 border border-red-600 hover:text-white py-8 px-6  w-[100%] bg-white">
            <h1 className="text-3xl font-bold">Free Estimate</h1>
            <p className="text-gray-400">
              At first I will see your project . I will give an estimated cost
              over your project for free.
            </p>
          </div>
        </div>
      </section>

      {/* about section */}

      <section className=" container mx-auto mb-2 mt-[80px]">
        <div className="  grid   grid-cols-1  lg:grid-cols-2 sm:gap-x-1 md:gap-x-4 lg:gap-x-16 ">
          <div className="relative ">
            <img
              className=" p-0 relative rounded-lg h-[70%] object-cover w-full"
              src={about}
              alt=""
            />
            <div className=" absolute top-0 p-3 rounded  bg-white  ">
              <div className=" bg-red-600 rounded-lg py-2 px-3 text-white">
                <h1 className="text-4xl font-bold">99%</h1>
                <p>Satisfied customers</p>
              </div>
            </div>
          </div>

          <div className="sm:text-center md:text-left lg:text-left ">
            <h1 className="text-xl my-3 sm:text-center md:text-center lg:text-left font-bold text-red-600">
              ABOUT MY ROOFSIE{" "}
            </h1>
            <h1 className="text-xl md:text-4xl lg:text-4xl font-bold my-5 ">
              Experienced & quality roofing services provider
            </h1>
            <p className="text-md font-semibold text-gray-500 mt-6 mb-8">
              As a Proffesional worker I have 10 years experience to building
              roof services .At first I will see your project I used very good
              Quality Materials by which your roof will not be destroy within 10
              years. I will give an estimated cost over your project for free.
            </p>

            <div>
              <ul>
                <li className="flex  md:justify-start lg:justify-start font-bold text-2xl items-center">
                  {" "}
                  <span className=" text-red-600 mr-4">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="text-gray-500"> Inovative Work</span>
                </li>
                <li className="flex  md:justify-start lg:justify-start  font-bold text-2xl items-center">
                  {" "}
                  <span className=" text-red-600 mr-4">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="text-gray-500"> Certified Guy </span>
                </li>
                <li className="flex  md:justify-start lg:justify-start font-bold text-2xl items-center">
                  {" "}
                  <span className=" text-red-600 mr-4">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="text-gray-500"> Quality Work</span>
                </li>
                <li className="flex  md:justify-start lg:justify-start font-bold text-2xl items-center">
                  {" "}
                  <span className=" text-red-600 mr-4">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="text-gray-500"> Reasonalble Cost</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* animation card  */}
      {/* 
      <section>
        <AnimationCard />
      </section> */}

      {/* pre service */}

      <section>
        <PreService></PreService>
      </section>

      {/* service section */}
      <section>
        <HomeService></HomeService>
      </section>
      {/* testimonial section  */}
      <section>
        <Testimonial></Testimonial>
      </section>
      <section>
        <PreFooter></PreFooter>
      </section>
    </div>
  );
};

export default Home;
