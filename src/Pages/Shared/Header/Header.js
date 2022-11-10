import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo-bg.png";
import { authContext } from "../../../Context/MainContext";
const Header = () => {
  const { user, LogOut } = useContext(authContext);

  const handleOut = () => {
    LogOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar container   mx-auto bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className=" hover:text-black hover:btn-ghost" to="/">
                Home{" "}
              </Link>
            </li>

            <li>
              <Link
                className=" hover:text-black hover:btn-ghost"
                to="/services"
              >
                Services
              </Link>
            </li>

            <>
              {user ? (
                <>
                  <li>
                    <Link
                      className=" hover:text-black hover:btn-ghost"
                      to="/review"
                    >
                      My Reviews
                    </Link>
                  </li>

                  <li>
                    <Link
                      className=" hover:text-black hover:btn-ghost"
                      to="/addservice"
                    >
                      Add Service
                    </Link>
                  </li>
                </>
              ) : (
                <>{""}</>
              )}
            </>

            <li>
              <Link className=" hover:text-black hover:btn-ghost" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className=" normal-case  text-xl">
          <img style={{ width: "60px", height: "40px" }} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link
              className=" font-bold text-md hover:text-[#fd4e46] focus:bg-[white] hover:bg-[white]"
              to="/"
            >
              Home{" "}
            </Link>
          </li>

          <li>
            <Link
              className=" font-bold text-md hover:text-[#fd4e46] focus:bg-[white] hover:bg-[white]"
              to="/services"
            >
              Services
            </Link>
          </li>

          <>
            {user ? (
              <>
                <li>
                  <Link
                    className=" font-bold text-md hover:text-[#fd4e46] focus:bg-[white] hover:bg-[white]"
                    to="/review"
                  >
                    My Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    className=" font-bold text-md hover:text-[#fd4e46] focus:bg-[white] hover:bg-[white]"
                    to="/addservice"
                  >
                    Add Service
                  </Link>
                </li>
              </>
            ) : (
              <>{""}</>
            )}
          </>

          <li>
            <Link
              className=" font-bold text-md hover:text-[#fd4e46] focus:bg-[white] hover:bg-[white]"
              to="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {" "}
            <button
              onClick={handleOut}
              className="btn btn-md ml-5 border-none bg-[#fd4e46] "
            >
              Sign Out
            </button>{" "}
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-md border-none bg-[#fd4e46] ">
              Log In
            </Link>
            <Link
              to="/register"
              className="btn btn-md ml-5 border-none bg-[#fd4e46] "
            >
              Register
            </Link>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
