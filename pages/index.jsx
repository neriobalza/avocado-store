import React from "react";
import Head from "next/head";
import Image from "next/image";
import useFetch from "@hooks/useFetch";

import AvocadoList from "@components/AvocadoList";
import Loader from "@components/Loader";

import style from "../styles/home.module.css";

const index = () => {
  const avocados = useFetch();

  return (
    <>
      <Head>
        <title>Avocado Store</title>
      </Head>

      <main className="main-container">
        <section className={style.header}>
          <h1 className={style.title}>
            Avo
            <Image
              src="/images/avocado-1.png"
              alt="avocado"
              width={50}
              height={50}
            />
            Store
          </h1>
        </section>

        {!avocados.loading ? (
          <AvocadoList
            data={avocados.data.data}
            error={avocados.error}
            lenght={avocados.data.lenght}
          />
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
};

export default index;
