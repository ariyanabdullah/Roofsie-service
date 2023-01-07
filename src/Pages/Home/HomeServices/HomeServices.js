import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const HomeService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://roofsie-server.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="mb-12 -mt-12 md:-mt-20 lg:-mt-44">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container  mx-auto gap-5">
        {service.map((srvc) => (
          <Card key={srvc._id} service={srvc}></Card>
        ))}
      </div>
    </div>
  );
};

export default HomeService;
