import { IconType } from "@react-icons/all-files";
import { Imprima } from "next/font/google";
import React from "react";
import { FaInstagram, FaYoutube, FaGithub, FaTiktok } from "react-icons/fa";

const DataFooter = [
  {
    title: "Sosmad",
    data: [
      { link: "https://msytc.vercel.app", icon: FaGithub, text: "Msytc" },
      { link: "https://msytc.vercel.app", icon: FaYoutube, text: "Msytc" },
      { link: "https://msytc.vercel.app", icon: FaInstagram, text: "Msytc" },
      { link: "https://msytc.vercel.app", icon: FaTiktok, text: "Msytc" },
    ],
  },
  {
    title: "Contact",
    data: [
      { link: "https://msytc.vercel.app", icon: FaGithub, text: "Msytc" },
      { link: "https://msytc.vercel.app", icon: FaYoutube, text: "Msytc" },
      { link: "https://msytc.vercel.app", icon: FaInstagram, text: "Msytc" },
      { link: "https://msytc.vercel.app", icon: FaTiktok, text: "Msytc" },
    ],
  },
  {
    title: "Copyright",
    data: [{ link: "https://msytc.vercel.app", icon: FaGithub, text: "Msytc" }],
  },
];

const Footer = () => {
  return (
    <footer className="w-screen px-20 py-12 bg-zinc-800 flex justify-center md:justify-evenly text-center flex-wrap place-items-center gap-12">
      {DataFooter.map((data) => {
        if (data.title.toUpperCase() !== "COPYRIGHT") {
          return (
            <section
              className="w-full md:w-fit flex justify-center flex-col m-auto"
              key={data.title}>
              <p className="tentang-saya text-xl text-favBlueSky">
                {data.title}
              </p>
              {data.data.map(function (element: {
                text: string;
                link: string;
                icon: IconType;
              }) {
                return (
                  <a
                    key={element.text}
                    href={element.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-50 mb-2 flex place-items-center gap-2">
                    <element.icon />
                    <p className="inline-block text-center md:text-start">
                      {element.text}
                    </p>
                  </a>
                );
              })}
            </section>
          );
        } else {
          return (
            <section className="copyright w-screen" key={data.title}>
              <a
                href={data.data[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-favBlueSky">
                Copyright &copy; {data.data[0].text}
              </a>
            </section>
          );
        }
      })}
    </footer>
  );
};

export default Footer;
