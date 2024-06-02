import React, { useEffect, useState } from "react";
import Image from "next/image";

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        isScrolled ? "bg-slate-100 shadow-sm" : ""
      } flex fixed w-screen h-12 text-zinc-700 text-lg justify-between px-7 place-items-center`}>
      {children}
    </header>
  );
};

const Header = () => {
  return (
    <HeaderContainer>
      <Image src="/logo.png" alt="icon" className="w-8" />
      <ul className="flex flex-row justify-between gap-2">
        <li className="font-bold">Home</li>
        <li className="font-bold">About</li>
        <li className="font-bold">Contact</li>
        <li className="font-bold">Product</li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
