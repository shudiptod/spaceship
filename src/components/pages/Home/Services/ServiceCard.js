import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
const ServiceCard = ({ item }) => {
  return (
    <div>
      <Image
        width={100}
        height={100}
        src={item.thumbnail}
        alt="service image"
      />
      <h1>{item.title}</h1>
      <p>{item.subtitle}</p>
      <Link href={item.slug}>
        Learn More <BsArrowRightShort />
      </Link>
    </div>
  );
};

export default ServiceCard;
