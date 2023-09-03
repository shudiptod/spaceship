import React from "react";

import ServiceCard from "./ServiceCard";
const Services = ({ services }) => {
  return (
    <div>
      {services?.map((item, index) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Services;
