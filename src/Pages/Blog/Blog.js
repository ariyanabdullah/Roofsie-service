import UseTitle from "../../Hooks/UseTitle";

const Blog = () => {
  UseTitle("Blog");

  return (
    <section className="my-16">
      <div className="container mx-auto grid grid-cols-1 ">
        {/* first question */}
        <div>
          <h1>What is the Difference between SQL and NoSQL ?</h1>
        </div>

        {/* second question */}
      </div>
    </section>
  );
};

export default Blog;
