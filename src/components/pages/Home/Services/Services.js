import React from "react";
import { useQuery } from "react-query";
import { getServices } from "../api/getServices";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  return (
    <div>
      {services?.map((item, index) => (
        <ServiceCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Services;
