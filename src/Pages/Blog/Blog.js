import React, { useContext } from "react";
import { authContext } from "../../Context/MainContext";
import UseTitle from "../../Hooks/UseTitle";

const Blog = () => {
  UseTitle("Blog");
  const { user } = useContext(authContext);

  return <div></div>;
};

export default Blog;
