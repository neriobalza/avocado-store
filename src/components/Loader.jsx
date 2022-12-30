import React from "react";

import style from "./loader.module.css";

const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style.ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
