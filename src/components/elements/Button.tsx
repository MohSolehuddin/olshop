import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full py-2 transition duration-300 delay-75 ease-in-out text-favBlueSky bg-zinc-900 rounded-lg hover:bg-zinc-950 hover:scale-105">
      {children}
    </button>
  );
};
