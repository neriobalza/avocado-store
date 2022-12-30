import React, { useEffect } from "react";

import Avocado from "./Avocado";

import style from "./avocadoList.module.css";

const AvocadoList = (props) => {
  const { data, error, lenght } = props;

  useEffect(() => {
    ScrollReveal().reveal(".avocard", {
      delay: 200,
      origin: "bottom",
      duration: 500,
      cleanup: true,
      distance: "50px",
    });
  }, []);

  return (
    <section className={style.container}>
      <ul className={style.list}>
        {data.map((avo) => (
          <Avocado key={avo.name} data={avo} />
        ))}
      </ul>

      <div className={style.lenght}>
        <p>
          {lenght} of {lenght} Items
        </p>
      </div>
    </section>
  );
};

AvocadoList.defaultProps = {
  data: [],
  error: null,
  length: 0,
};

export default AvocadoList;
