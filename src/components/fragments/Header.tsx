import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { MdClose } from "react-icons/md";

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
      } flex fixed w-screen h-16 md:h-12 text-[#00feff] text-lg justify-between px-16 place-items-center z-50`}>
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
        className={`flex-row justify-between gap-3 md:flex transition ease-in-out delay-75 duration-500 ${
          isToggleClick
            ? "absolute left-0 top-0 h-fit flex place-items-center flex-col py-12 w-screen mt-16 md:mt-12 text-center bg-zinc-800"
            : "h-0 md:h-fit -translate-y-full md:translate-y-0 overflow-hidden"
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
          className="cursor-pointer hover:text-sky-400"
          onClick={handleToggleClick}>
          Contact
        </li>
        <li
          className="cursor-pointer hover:text-sky-400"
          onClick={handleToggleClick}>
          <a href="#ScrollContainer" className="">
            Product
          </a>
        </li>
      </ul>
      {isToggleClick ? (
        <MdClose
          onClick={handleToggleClick}
          className=" text-xl cursor-pointer md:hidden transition duration-300 delay-75 hover:rotate-[720deg] hover:scale-125 hover:text-sky-400"
        />
      ) : (
        <HiMenuAlt3
          onClick={handleToggleClick}
          className=" text-xl cursor-pointer md:hidden transition duration-300 delay-75 hover:scale-110 hover:text-sky-400"
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
