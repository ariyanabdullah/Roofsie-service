import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/MainContext";
import UseTitle from "../../Hooks/UseTitle";

const AddService = () => {
  UseTitle("Add Service");

  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;
    const description = form.description.value;
    const title = form.name.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const date = form.date.value;

    const serveces = {
      title: title,
      image: photo,
      rating: ratings,
      Price: price,
      description: description,
      date: date,
    };

    fetch("https://roofsie-server.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serveces),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          form.reset();
          toast.success("Service Added succesfully");
          navigate("/");
        }
      });
  };

  return (
    <div className="container mx-auto my-16">
      <h1 className="text-center text-4xl text-red-600 font-bold my-4">
        Add A Service Here
      </h1>
      <div className=" xl:ml-[15%] xl:mr-[15%] lg:ml-[10%] lg:mr-[10%] md:ml-[5%] md:mr-[5%] ">
        <form
          onSubmit={handleAdd}
          className="space-y-4 shadow-sm py-4 px-10 rounded"
        >
          <div className="">
            <input
              className="w-full rounded-lg border p-3 text-sm"
              placeholder="Add A service Name"
              type="text"
              name="name"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Your service Image Link Here"
                type="text"
                name="photo"
                required
              />
            </div>
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Service Price Here"
                type="text"
                name="price"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Please provide a Date here"
                type="date"
                name="date"
                required
              />
            </div>
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Service Ratings Here"
                type="text"
                name="ratings"
                required
              />
            </div>
          </div>

          <div>
            <textarea
              className="w-full rounded-lg border p-3 text-sm"
              placeholder="Please Provide a Description of your services"
              rows="8"
              name="description"
              minLength="120"
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 hover:bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span className="font-medium"> Add Services </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
