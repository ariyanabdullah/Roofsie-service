import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { authContext } from "../../Context/MainContext";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";

const MyReview = () => {
  UseTitle("My Review");
  const { user, LogOut } = useContext(authContext);

  const [myrev, setMyrev] = useState([]);

  useEffect(() => {
    fetch(`https://roofsie-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status !== 401 || !res.status !== 403) {
          return res.json();
        } else {
          toast.error("Unauthorize access");
          LogOut();
        }
      })
      .then((data) => setMyrev(data));
  }, [user?.email, LogOut]);

  const handleDelete = (id) => {
    fetch(`https://roofsie-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("successfully Deleted");
          const newdata = myrev.filter((d) => d._id !== id);
          setMyrev(newdata);
        }
      });
  };

  return (
    <div>
      {myrev?.length === 0 ? (
        <>
          <div className=" ">
            <div className="h-screen bg-white">
              <div className="flex justify-center items-center h-full">
                <h1 className="text-3xl font-bold text-red-500">
                  No reviews were added
                </h1>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <>
            <>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                      Your ALl Review Are Here
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                      You can Update and Delete Your Reviews
                    </p>
                  </div>
                  <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                            Services Name
                          </th>
                          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                            Review Messagae
                          </th>
                          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                            Review *
                          </th>
                          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                            Edit
                          </th>
                          <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {myrev?.map((e) => (
                          <tr key={e?._id}>
                            <td className="px-4 py-3">{e.serviceName}</td>
                            <td className="px-4 py-3">
                              {e.message.slice(0, 20)}...
                            </td>
                            <td className="px-4 py-3">{e?.Ratings}</td>
                            <td className="px-4 py-3 text-lg text-gray-900">
                              <Link to={`/review/${e._id}`}>
                                {" "}
                                <AiFillEdit className="text-blue-700 hover:text-blue-500 text-xl" />
                              </Link>
                            </td>

                            <td className="w-10 text-center">
                              <button onClick={() => handleDelete(e._id)}>
                                <AiFillDelete className="text-red-700 hover:text-red-500 text-xl" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <p className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Total Reviews {myrev.length}
                    </p>
                  </div>
                </div>
              </section>
            </>
          </>
        </>
      )}
    </div>
  );
};

export default MyReview;
