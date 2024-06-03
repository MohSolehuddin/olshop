import React from "react";
import Image from "next/image";

const Wellcome = ({
  children = "Moh. Solehuddin",
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="wellcome bg-zinc-800 min-h-screen flex place-items-center gap-0 md:gap-4 justify-center text-center flex-wrap">
      <section className="layanan flex flex-col place-items-center w-1/2">
        <Image
          src="/logo.png"
          alt="Logo toko"
          className="rounded-full mb-5 mt-16 sm:mt-16 lg:mt-0"
          width="160"
          height="160"
        />
        <h1 className="text-[#00feff] lg:text-5xl md:text-4xl sm:text-2xl text-xl">
          {children}
        </h1>
        <p className="text-sky-50 w-full md:w-4/5 lg:w-2/3 gap-1">
          Jasa pembuatan website sat set abisss, ga perlu mahal mulai 300rb aja
          udah bisa punya website
        </p>
      </section>
      <Image src="/coding.svg" width="300" height="300" alt="animation"></Image>
    </section>
  );
};

export default Wellcome;
