import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";

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
  const [isToggleClick, setIsToggleClick] = useState(false);
  const handleToggleClick = () => {
    setIsToggleClick(!isToggleClick);
  };
  return (
    <HeaderContainer>
      <Image
        src="/logo.png"
        alt="icon"
        className="w-8"
        width={40}
        height={40}
      />
      <ul
        className={`flex-row justify-between gap-3 md:flex ${
          isToggleClick
            ? "absolute left-0 top-0 h-fit flex place-items-center flex-col py-12 w-1/2 mt-12 text-center bg-zinc-800"
            : "hidden"
        }`}>
        <li
          className="cursor-pointer hover:text-sky-400"
          onClick={handleToggleClick}>
          Home
        </li>
        <li
          className="cursor-pointer hover:text-sky-400"
          onClick={handleToggleClick}>
          About
        </li>
        <li
          className="fcursor-pointer hover:text-sky-400"
          onClick={handleToggleClick}>
          Contact
        </li>
        <li
          className="cursor-pointer hover:text-sky-400"
          onClick={handleToggleClick}>
          Product
        </li>
      </ul>
      <HiMenuAlt3
        onClick={handleToggleClick}
        className=" text-xl cursor-pointer md:hidden"
      />
    </HeaderContainer>
  );
};

export default Header;
