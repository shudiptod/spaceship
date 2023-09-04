import Home from "@/components/pages/Home/Home";
import { getServices } from "@/components/pages/Home/api/getServices";

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
    <main>
      <Home services={services} />
    </main>
  );
}
