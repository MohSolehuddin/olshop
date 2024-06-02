import React, { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className="px-10 py-2 bg-zinc-800">{children}</button>;
};
