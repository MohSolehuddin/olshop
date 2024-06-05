import React from "react";
import Image from "next/image";
import Shape from "./shape";

const Wellcome = ({
  children = "Moh. Solehuddin",
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="wellcome overflow-hidden bg-zinc-800 h-[700px] md:h-screen flex place-items-center justify-center flex-wrap">
      <section className="mainContent flex place-items-center text-center h-screen w-full justify-center flex-wrap">
        <section className="layanan flex flex-col place-items-center justify-start  z-10 w-full md:w-2/5">
          <Image
            src="/logo.png"
            alt="Logo toko"
            className="rounded-full mb-2 mt-16 sm:mt-16 lg:mt-0 z-10"
            width="160"
            height="160"
          />
          <h1 className="text-[#00feff] text-start z-10 lg:text-5xl md:text-4xl sm:text-2xl text-xl">
            {children}
          </h1>
          <p className="text-sky-50 z-10 w-full w-8/12">
            Jasa pembuatan website sat set abisss, ga perlu mahal mulai 300rb
            aja udah bisa punya website
          </p>
        </section>
        <section className="containerImg w-full md:w-2/5 flex justify-center">
          <Image
            src="/coding.svg"
            width="300"
            height="300"
            alt="animation"
            className="z-10"></Image>
        </section>
      </section>
      <Shape></Shape>
    </section>
  );
};

export default Wellcome;
