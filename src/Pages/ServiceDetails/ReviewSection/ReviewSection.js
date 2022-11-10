// import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const ReviewSection = ({ reviews }) => {
  // const [reviews, setReviews] = useState([]);

  // // get all reviews for this service
  // useEffect(() => {
  //   fetch(`https://roofsie-server.vercel.app/reviews/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, [id]);

  return (
    <div>
      {reviews.map((r) => (
        <div className="mb-5" key={r._id}>
          <div className="container flex flex-col w-full max-w-lg  mx-auto divide-y rounded-lg bg-white p-8 shadow-lg dark:text-dark-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={r.photo}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{r.name}</h4>
                  <span className="text-xs dark:text-gray-400">
                    Date:{r.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
                <span>
                  <FaStar />
                </span>
                <span className="text-xl font-bold">{r.Ratings}</span>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
              <p>{r.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
