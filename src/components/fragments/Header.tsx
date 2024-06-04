import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "shadow-sm bg-zinc-800"
          : "shadow-sm bg-zinc-800 sm:shadow-inherit sm:bg-inherit"
      } flex fixed w-screen h-12 text-[#00feff] text-lg justify-between px-12 place-items-center z-50`}>
      {children}
    </header>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <Image
        src="/logo.png"
        alt="icon"
        className="w-8"
        width={40}
        height={40}
      />
      <ul className="flex flex-row justify-between gap-3">
        <li className="cursor-pointer hover:text-sky-400">Home</li>
        <li className="cursor-pointer hover:text-sky-400">About</li>
        <li className="fcursor-pointer hover:text-sky-400">Contact</li>
        <li className="cursor-pointer hover:text-sky-400">Product</li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
