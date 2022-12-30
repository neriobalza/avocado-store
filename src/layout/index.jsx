import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

const index = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default index;
