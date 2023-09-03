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
    <div>
      <Headline />
      <Services services={data} />
    </div>
  );
};

export default Home;
