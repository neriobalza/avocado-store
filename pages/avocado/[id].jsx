import React from "react";
import { useRouter } from "next/router";

import Loader from "@components/Loader";

const Avocado = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="main-container">
      <Loader />
    </main>
  );
};

export default Avocado;
