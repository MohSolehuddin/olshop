import React from "react";
import Image from "next/image";

const Wellcome = ({
  children = "Moh. Solehuddin",
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="wellcome bg-zinc-800 min-h-screen flex place-items-center gap-4 justify-center text-center flex-nowrap">
      <section className="layanan flex flex-col place-items-center">
        <Image
          src="/logo.png"
          alt="Logo toko"
          className="rounded-full mb-5"
          width="160"
          height="160"
        />
        <h1 className="text-[#00feff] text-5xl">{children}</h1>
        <p className="text-sky-50 w-2/3">
          Jasa pembuatan website sat set abisss, ga perlu mahal mulai 300rb aja
          udah bisa punya website
        </p>
      </section>
      <Image src="/coding.svg" width="300" height="300" alt="animation"></Image>
    </section>
  );
};

export default Wellcome;
