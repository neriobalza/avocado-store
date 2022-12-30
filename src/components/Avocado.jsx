import React from "react";
import Link from "next/link";
import Image from "next/image";

import style from "./avocado.module.css";

const Avocado = (props) => {
  const { data } = props;
  return (
    <li className="avocard">
      <Link href={`/avocado/${data.id}`} className={style.container}>
        <Image
          src={data.image}
          alt={data.name}
          width={333}
          height={333}
          className={style.image}
        />

        <div className={style.data}>
          <h2 className={style.name}>{data.name}</h2>
          <p className={style.price}>${data.price}</p>
        </div>
      </Link>
    </li>
  );
};

export default Avocado;
