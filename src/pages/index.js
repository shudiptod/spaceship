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
    <main
      className={`flex min-h-screen overflow-y-auto  flex-col items-center justify-between p-24 `}
    >
      <Home services={services} />
    </main>
  );
}
