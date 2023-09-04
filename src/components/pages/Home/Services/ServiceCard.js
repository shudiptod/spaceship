import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
const ServiceCard = ({ item }) => {
  return (
    <div className="mx-auto w-[210px] h-full  flex flex-col gap-4 relative">
      <Image
        width={100}
        height={100}
        src={item.thumbnail}
        alt="service image"
        className="w-[100px] h-[100px]"
      />
      <h1 className="w-[63%] font-bold text-base leading-6 text-black break-words">
        {item.title}
      </h1>
      <p className="text-sm text-gray-800 ">{item.subtitle}</p>
      <Link
        href={"#" + item.slug}
        className="flex items-center mt-auto text-sm font-semibold text-sky-500 hover:text-sky-800"
      >
        Learn More <BsArrowRightShort className="text-2xl" />
      </Link>
    </div>
  );
};

export default ServiceCard;
