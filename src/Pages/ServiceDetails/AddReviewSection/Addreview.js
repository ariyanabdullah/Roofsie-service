import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/MainContext";

const Addreview = ({ s_id, s_title, SetReload }) => {
  const { user } = useContext(authContext);

  const handleReviewBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const ratings = form.ratings.value;
    const date = form.date.value;
    const message = form.message.value;
    const photo = user?.photoURL;

    SetReload(false);

    const review = {
      name,
      email,
      Ratings: ratings,
      date: date,
      message: message,
      serviceId: s_id,
      photo: photo,
      serviceName: s_title,
    };

    fetch("https://roofsie-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Added Review");
          form.reset();
          SetReload(true);
        }
      });
  };

  return (
    <div>
      {user ? (
        <>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <h1 className="text-center font-bold py-2">Add Your Review Here</h1>
            <form onSubmit={handleReviewBtn} className="space-y-4">
              <div className="">
                <input
                  className="w-full rounded-lg border p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    className="w-full rounded-lg border p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required
                    defaultValue={user?.email}
                    readOnly
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-lg border p-3 text-sm"
                    placeholder="Rating"
                    type="number"
                    name="ratings"
                    max="5"
                    required
                  />
                </div>
              </div>

              <div className="">
                <div className="datepicker relative form-floating mb-3 xl:w-96">
                  <input
                    type="date"
                    className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                    required
                    name="date"
                  />
                </div>
              </div>

              <div>
                <textarea
                  className="w-full rounded-lg border p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 hover:bg-black px-5 py-3 text-white sm:w-auto"
                >
                  <span className="font-medium"> Send Rivew </span>
                </button>
              </div>
            </form>
          </div>{" "}
        </>
      ) : (
        <>
          {" "}
          <div>
            <h1 className="font-bold text-center text-2xl ">
              Please{" "}
              <button className="link">
                <Link className="text-red-300" to="/login">
                  Log In{" "}
                </Link>
              </button>{" "}
              to add a review{" "}
            </h1>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Addreview;
