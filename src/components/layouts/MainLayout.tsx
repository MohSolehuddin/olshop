import React from "react";
import Header from "../fragments/Header";
import Footer from "../fragments/Footer";
import Main from "../fragments/Main";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
