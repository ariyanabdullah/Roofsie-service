import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";
import Reload from "../Reload/Reload";

import Addreview from "./AddReviewSection/Addreview";
import ReviewSection from "./ReviewSection/ReviewSection";

const ServiceDetails = () => {
  UseTitle("Service Details");

  const detils = useLoaderData();
  const { title, image, description, Price, rating, _id } = detils;

  const [reviews, setReviews] = useState([]);

  const [reload, SetReload] = useState(true);

  const handleGet = () => {
    toast.success("You got Acces");
  };

  // get all reviews for this service
  useEffect(() => {
    fetch(`https://roofsie-server.vercel.app/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, reload]);

  return (
    <section className="container mx-auto">
      <section className="text-gray-600 overflow-hidden">
        <div className="max-w-screen-lg px-5 py-24 mx-auto ">
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <div>
              <img className="w-full rounded-lg" src={image} alt="" />
            </div>

            <div className="pl-10 ">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{description}</p>
              <div className="my-5">
                <hr />
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${Price}
                </span>
                <span className="title-font flex items-center ml-auto font-medium  text-gray-900">
                  <span> Ratings:</span> {rating}{" "}
                  <span className="text-amber-500">
                    <FaStar />
                  </span>
                </span>
                <button
                  onClick={handleGet}
                  className="flex ml-auto text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded"
                >
                  Get Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* review section */}

      <section className="py-10">
        <div className="text-center py-10">
          <p className="text-2xl font-bold"> All Rivews</p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <>
            {reload ? (
              <>
                {" "}
                <ReviewSection key={_id} reviews={reviews}></ReviewSection>{" "}
              </>
            ) : (
              <>
                <Reload></Reload>
              </>
            )}
          </>

          <Addreview
            SetReload={SetReload}
            key={_id}
            s_title={title}
            s_id={_id}
          ></Addreview>
        </div>
      </section>
    </section>
  );
};

export default ServiceDetails;
