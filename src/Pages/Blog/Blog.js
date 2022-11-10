import React, { useContext } from "react";

import UseTitle from "../../Hooks/UseTitle";

const Blog = () => {
  UseTitle("Blog");

  return (
    <section className="my-16">
      <div className="container mx-auto ">
        <h1>This is Blog Page </h1>
      </div>
    </section>
  );
};

export default Blog;
