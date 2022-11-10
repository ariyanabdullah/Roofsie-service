import React, { useEffect, useState } from "react";
import UseTitle from "../../Hooks/UseTitle";
import Reload from "../Reload/Reload";
import Servicecard from "./Servicecard";

const Services = () => {
  UseTitle("Services");

  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://roofsie-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section>
      {service.length === 0 ? (
        <Reload></Reload>
      ) : (
        <div className="container sm:mx-[5%] md:mx-auto lg:mx-auto xl:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 py-20">
          {service.map((srvcCrd) => (
            <Servicecard key={srvcCrd._id} service={srvcCrd}></Servicecard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
