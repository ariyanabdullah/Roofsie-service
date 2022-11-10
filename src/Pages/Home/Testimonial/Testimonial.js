import React from "react";

import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="test">
      <div className=" lg:ml-[20%]  lg:mr-[20%]">
        <h1 className="text-xl text-center font-bold text-red-600">
          TESTIMONIALS{" "}
        </h1>
        <h1 className="text-center font-extrabold  text-6xl mt-1 mb-4">
          What They Are Talking About Me
        </h1>
      </div>
      <div className="container mt-16 gap-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto  ">
        <div className="relative lg:ml-[6%] border border-red-400 w-full md:w-[80%] lg:w-[80%] py-6 px-8 bg-white rounded-lg shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
            alt=""
            className="absolute rounded-full w-14 h-14 -left-6 -top-6"
          />
          <p className="text-[#5E6282]">
            “Extremely happy with our new Buddy, very professional and fair
            pricing. Most of the attention to doing it right the first time.
            Some of the hardest working people in the business. I couldn't
            recommend him enough. I'd give 10 stars if I could.”
          </p>
          <p className="mt-6 mb-2">Mike taylor</p>
          <p className="text-sm">USA, CA</p>
        </div>

        <div className="relative border border-red-400  w-full md:w-[80%] lg:w-[80%]  py-6 px-8 bg-white rounded-lg shadow-lg">
          <img
            src="https://i.ibb.co/g41rkc8/testimonial-1-4.jpg"
            alt=""
            className="absolute rounded-full w-14 h-14 -left-6 -top-6"
          />
          <p className="text-[#5E6282]">
            “Abdur Rahman is great-always responded to my questions in a very
            timely manner. His crew that came to work on replacing my siding was
            great. Very polite and trustworthy. I would definitely recommend
            him.”
          </p>
          <p className="mt-6 mb-2">David Coper</p>
          <p className="text-sm">USA, CA</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
