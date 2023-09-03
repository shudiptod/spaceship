import Home from "@/components/pages/Home/Home";
import { getServices } from "@/components/pages/Home/api/getServices";
import { QueryClient, dehydrate } from "react-query";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["services"], getServices);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function index() {
  return (
    <main
      className={`flex min-h-screen overflow-y-auto  flex-col items-center justify-between p-24 `}
    >
      <Home />
    </main>
  );
}
