import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/MainContext";
import UseTitle from "../../Hooks/UseTitle";

const LogIn = () => {
  UseTitle("Log In");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { LogForm, RegWithGoogle } = useContext(authContext);

  const [error, setError] = useState("");

  const handleLogInBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    LogForm(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Successfully Loged In ");
        form.reset();

        const currentUser = {
          email: user.email,
        };

        // get jwt Token

        fetch("https://roofsie-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
          });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;

        setError("wrong email/password .");
      });
  };

  const handleGoogleBtn = () => {
    RegWithGoogle()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <section>
      <div className="bg-[#f4f1ee]">
        <div className="p-8 lg:w-1/2 mx-auto">
          <div className="bg-white rounded-t-lg p-8">
            <p className="text-center text-sm text-gray-400 font-light">
              Log In with
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
              Or Log In with credentials{" "}
            </p>
            <form onSubmit={handleLogInBtn} className="mt-6">
              <div>
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

              <p className="mt-4 italic text-gray-500 font-light text-xs">
                <span className="font-bold text-red-400">{error}</span>
              </p>

              <div className="flex items-center justify-center mt-8">
                <button
                  type="submit"
                  className="text-white py-2 px-4 uppercase rounded bg-red-600 hover:bg-black shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Log In Now
                </button>
              </div>
            </form>

            <p className="mt-4  text-gray-500 font-bold text-xs">
              Don't Have an Account?
              <Link to="/register" className="font-bold text-red-400">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
