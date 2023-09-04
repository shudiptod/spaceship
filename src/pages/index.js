import Home from "@/components/pages/Home/Home";
import { getServices } from "@/components/pages/Home/api/getServices";
import Head from "next/head";

export const getServerSideProps = async () => {
  const services = await getServices();
  return {
    props: {
      services,
    },
  };
};

export default function index({ services }) {
  return (
    <>
      <Head>
        <title>Spaceship</title>
      </Head>
      <main>
        <Home services={services} />
      </main>
    </>
  );
}
