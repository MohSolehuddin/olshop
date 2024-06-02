import { Imprima } from "next/font/google";
import React from "react";
import Wellcome from "./Wellcome";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-[1000px] bg-gray-100 text-zinc-900 px-2">
      <Wellcome>hai</Wellcome>
      {children}
    </main>
  );
};

export default Main;
