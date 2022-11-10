import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const HomeService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://roofsie-server.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="py-16">
      <div className="">
        <div className=" lg:ml-[20%]  lg:mr-[20%]">
          <h1 className="text-xl text-center font-bold text-red-600">
            MY SERVICES
          </h1>
          <h1 className="text-center font-extrabold  text-6xl mt-1 mb-4">
            I am providing quality roofing services
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container  mx-auto gap-5">
        {service.map((srvc) => (
          <Card key={srvc._id} service={srvc}></Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/services"
          className="px-8 hover:bg-[black] hover:text-white py-3 text-lg font-semibold rounded bg-[#fd4e46] dark:text-white"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
