import { IconType } from "@react-icons/all-files";
import { Imprima } from "next/font/google";
import React from "react";
import { FaInstagram, FaYoutube, FaGithub, FaTiktok } from "react-icons/fa";

const DataFooter = {
  sosmad: [
    { link: "https://msytc.vercel.app", icon: FaGithub, text: "Msytc" },
    { link: "https://msytc.vercel.app", icon: FaYoutube, text: "Msytc" },
    { link: "https://msytc.vercel.app", icon: FaInstagram, text: "Msytc" },
    { link: "https://msytc.vercel.app", icon: FaTiktok, text: "Msytc" },
  ],
  coppyRight: { link: "https://msytc.vercel.app", name: "Msytc" },
};

const Footer = () => {
  return (
    <footer className="w-screen px-20 py-12 bg-zinc-800 flex justify-center text-center flex-wrap place-items-center">
      <section className="w-full md:w-[30%]">
        <p className="tentang-saya text-xl text-start">Sosmad</p>
        {DataFooter.sosmad.map(function (sosmad: {
          text: string;
          link: string;
          icon: IconType;
        }) {
          return (
            <a
              key={sosmad.text}
              href={sosmad.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-favBlueSky text-sm mb-2 flex place-items-center gap-2">
              <sosmad.icon />
              <p className="inline-block text-start">{sosmad.text}</p>
            </a>
          );
        })}
      </section>
      <section className="copyright w-screen">
        <a
          href={DataFooter.coppyRight.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky">
          Copyright &copy; {DataFooter.coppyRight.name}
        </a>
      </section>
    </footer>
  );
};

export default Footer;
