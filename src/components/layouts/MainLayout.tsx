import React from "react";
import Header from "../fragments/Header";
import Footer from "../fragments/Footer";
import Main from "../fragments/Main";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <p>hai ini main</p>
      </Main>
      <Footer>
        <p>ini footer </p>
      </Footer>
    </>
  );
};

export default MainLayout;
