import React from "react";
import Services from "./Services/Services";
import Headline from "./Headline";
import { getServices } from "./api/getServices";
import { useQuery } from "react-query";

const Home = ({ services }) => {
  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    initialData: services,
  });
  return (
    <div
      className={`flex min-h-screen overflow-y-auto  flex-col items-center gap-20 py-16 px-10 md:px-0 md:py-24 w-full md:w-[700px] lg:w-[1000px] mx-auto `}
    >
      <Headline />
      <Services services={data} />
    </div>
  );
};

export default Home;
