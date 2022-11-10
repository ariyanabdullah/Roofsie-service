import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/MainContext";
import UseTitle from "../../Hooks/UseTitle";
import Reload from "../Register/Register";

const Register = () => {
  const { RegForm, RegWithGoogle, UpdateUSer } = useContext(authContext);

  UseTitle("Register");

  const navigate = useNavigate();

  const [load, setLoad] = useState(false);

  // submit button
  const handleRegBtn = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photourl = form.photourl?.value || "";
    const email = form.email.value;
    const password = form.password.value;
    setLoad(true);
    RegForm(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setLoad(false);
        UpdateUSer(name, photourl)
          .then((data) => {
            form.reset();

            toast.success("Successfully Registered");
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // handle google

  const handleGoogleBtn = () => {
    RegWithGoogle()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };

  return (
    <div>
      <>
        {load ? (
          <>
            {" "}
            <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
              <div class="border-t-transparent border-solid animate-spin  rounded-full border-red-700 border-8 h-64 w-64"></div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-[#f4f1ee]">
              <div className="p-8 lg:w-1/2 mx-auto">
                <div className="bg-white rounded-t-lg p-8">
                  <p className="text-center text-sm text-gray-400 font-light">
                    Sign up with
                  </p>
                  <div>
                    <div className="flex items-center justify-center space-x-4 mt-3">
                      <button
                        onClick={handleGoogleBtn}
                        className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100  border border-transparent hover:border-transparent hover:text-red-600 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      >
                        <span className="font-xl font-xl text-black  ml-1 ">
                          {" "}
                          <FaGoogle /> <hr />
                        </span>
                        <span className="font-bold"> oogle</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                  <p className="text-center text-sm text-gray-500 font-light">
                    {" "}
                    Or sign up with credentials{" "}
                  </p>
                  <form onSubmit={handleRegBtn} className="mt-6">
                    <div>
                      <input
                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                        type="text"
                        placeholder="Name"
                        name="name"
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                        type="text"
                        placeholder="Photo URL"
                        name="photourl"
                      />
                    </div>
                    <div className=" mt-3">
                      <input
                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className=" mt-3">
                      <input
                        className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </div>

                    <div className="flex items-center justify-center mt-8">
                      <button
                        type="submit"
                        className="text-white py-2 px-4 uppercase rounded bg-red-600 hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      >
                        Register Now
                      </button>
                    </div>
                  </form>

                  <p className="mt-4  text-gray-500 font-bold text-xs">
                    Already Have an Account?
                    <Link to="/login" className="font-bold text-red-400">
                      Log In{" "}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Register;
