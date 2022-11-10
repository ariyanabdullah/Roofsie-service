import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateReveiw = () => {
  const data = useLoaderData();
  const { serviceName, message, Ratings, _id } = data;

  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const ratings = form.ratings.value;
    const message = form.textarea.value;

    const data = {
      Ratings: ratings,
      message: message,
      id: _id,
    };

    fetch("https://roofsie-server.vercel.app/reviews", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Updated");
          navigate("/review");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="flex items-center justify-center py-10 text-center dark:bg-red-200 dark:text-gray-100">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid"
        >
          <h1 className="text-center text-2xl text-white py-5 font-bold">
            {serviceName}
          </h1>
          <input
            placeholder={`Ratings:${Ratings}`}
            type="number"
            name="ratings"
            max="5"
            className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-red-400 focus:ring-red-400"
          />

          <textarea
            rows="5"
            cols="10"
            name="textarea"
            typeof="text"
            placeholder={`message:${message}`}
            className="flex items-center  px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-gray-900 focus:dark:border-red-400 focus:ring-red-400"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded   bg-red-400 hover:border-none dark:text-gray-900"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateReveiw;
