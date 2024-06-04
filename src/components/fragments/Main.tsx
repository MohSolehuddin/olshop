import { Imprima } from "next/font/google";
import React from "react";
import Wellcome from "./Wellcome";
import Stat from "./Stat";
import Shape from "./shape";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-neutral-50">
      <Wellcome>Msytc Digital Solutions</Wellcome>
      <Stat></Stat>
      {children}
    </main>
  );
};

export default Main;
