import UseTitle from "../../Hooks/UseTitle";

const Blog = () => {
  UseTitle("Blog");

  return (
    <section className="my-16">
      <div className="container mx-auto grid grid-cols-1 ">
        {/* first question */}
        <div className="py-6 border px-5 my-2 rounded-lg shadow-lg">
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

        <div className="py-6 px-5 my-4 border rounded-lg shadow-lg">
          <h1> 2. What is JWT, and how does it work? ?</h1>
          <p>
            {" "}
            <span className="font-bold text-red-500">{"=>"}</span> JWT, or JSON
            Web Token, is an open standard used to share security information
            between two parties — a client and a server. Each JWT contains
            encoded JSON objects, including a set of claims. JWTs are signed
            using a cryptographic algorithm to ensure that the claims cannot be
            altered after the token is issued. A JWT is a string made up of
            three parts, separated by dots (.), and serialized using base64. In
            the most common serialization format, compact serialization, the JWT
            looks something like this: xxxxx.yyyyy.zzzzz.
          </p>
        </div>

        {/* third question */}

        <div>
          <h1> 3. What is the difference between javascript and NodeJS?</h1>
          <p>
            <span className="font-bold text-red-500">{"=>"}</span>
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
            <br />
            <span className="font-bold text-red-500">{"=>"}</span>
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
          </p>
        </div>

        {/* fourth quesion */}
      </div>
    </section>
  );
};

export default Blog;
