import { Imprima } from "next/font/google";
import React from "react";
import { FaInstagram, FaYoutube, FaGithub, FaTiktok } from "react-icons/fa";

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="w-screen px-20 py-12 bg-zinc-950 px-2 py-1 flex justify-center text-center flex-wrap place-items-center">
      <section className="w-[30%]">
        <p className="tentang-saya text-xl">Sosmad</p>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaInstagram />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaYoutube />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaTiktok />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaGithub />
        </a>
      </section>
      <section className="w-[30%]">
        <p className="tentang-saya text-xl">Sosmad</p>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaInstagram />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaYoutube />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaTiktok />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaGithub />
        </a>
      </section>
      <section className="w-[30%]">
        <p className="tentang-saya text-xl">Sosmad</p>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaInstagram />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-2xl">
          <FaYoutube />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaTiktok />
        </a>
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky block text-sm">
          <FaGithub />
        </a>
      </section>
      <section className="copyright w-screen">
        <a
          href="https://msytc.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-favBlueSky">
          Copyright &copy; Msytc || Moh Solehuddin
        </a>
      </section>
    </footer>
  );
};

export default Footer;
