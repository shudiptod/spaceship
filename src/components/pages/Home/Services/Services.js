import React from "react";

import ServiceCard from "./ServiceCard";
const Services = ({ services }) => {
  return (
    <div className="grid justify-start w-full grid-cols-1 mx-auto gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-4 ">
      {services?.map((item, index) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Services;
