import UseTitle from "../../Hooks/UseTitle";

const Blog = () => {
  UseTitle("Blog");

  return (
    <section className="my-16">
      <div className="container mx-auto grid grid-cols-1 ">
        {/* first question */}
        <div className="py-6 px-5 my-2 rounded-lg shadow-lg">
          <h1> 1. What is the Difference between SQL and NoSQL ?</h1>
          <p>
            {" "}
            <span className="font-bold text-red-500">{"=>"}</span> SQL databases
            are vertically scalable, while NoSQL databases are horizontally
            scalable. SQL databases are table-based, while NoSQL databases are
            document, key-value, graph, or wide-column stores. SQL databases are
            better for multi-row transactions, while NoSQL is better for
            unstructured data like documents or JSON.
          </p>
        </div>

        {/* second question */}

        <div>
          <h1> 2. What is JWT, and how does it work? ?</h1>
        </div>

        {/* third question */}
      </div>
    </section>
  );
};

export default Blog;
