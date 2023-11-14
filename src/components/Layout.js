import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { Children } = props;
  return (
    <>
      <Header></Header>
      {Children}
      <Footer></Footer>
    </>
  );
}
