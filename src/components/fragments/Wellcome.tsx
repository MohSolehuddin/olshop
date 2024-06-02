import React from "react";
import Image from "next/image";

const Wellcome = ({
  children = "Moh. Solehuddin",
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="wellcome min-h-screen flex flex-col place-items-center justify-center">
      <Image
        src="/solehuddin.png"
        alt="Moh Solehuddin"
        className="rounded-full mb-5"
        width="160"
        height="160"
      />
      <h1 className="text-center text-purple-600 text-5xl">{children}</h1>
      <p className="text-center text-gray-600">
        FullStuck Developerr || Belajar React dan Nextjs
      </p>
    </section>
  );
};

export default Wellcome;
