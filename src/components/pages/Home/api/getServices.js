import { axios } from "@/lib/axios";

export const getServices = async () => {
  const response = await axios.get("/data.json");

  return response;
};
