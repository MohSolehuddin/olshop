import { Imprima } from "next/font/google";
import React from "react";
import Wellcome from "./Wellcome";
import Stat from "./Stat";
import Shape from "./shape";
import ScrollContainer from "./ScrollContainer";
import { CardContainer, CardItem } from "./Card";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-neutral-50 overflow-x-hidden">
      <Wellcome>Msytc Digital Solutions</Wellcome>
      <Stat></Stat>
      <ScrollContainer id="product">
        <CardContainer customStyle="min-h-fit">
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
          <CardItem></CardItem>
        </CardContainer>
      </ScrollContainer>
      Sc
      {children}
    </main>
  );
};

export default Main;
