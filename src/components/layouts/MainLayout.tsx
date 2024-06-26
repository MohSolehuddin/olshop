import React, { ReactNode } from "react";
import Header from "../fragments/Header";
import Footer from "../fragments/Footer";

interface mainType {
  children?: ReactNode;
}
const MainLayout = ({ children }: mainType) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
