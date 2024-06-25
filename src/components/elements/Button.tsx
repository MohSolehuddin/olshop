import React, { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customStyle?: string;
}

export const Button = ({ children, customStyle, ...rest }: ButtonProps) => {
  return (
    <button
      className={`w-full py-2 transition duration-300 delay-75 ease-in-out text-favBlueSky bg-zinc-900 rounded-lg hover:bg-zinc-950 hover:scale-105 ${customStyle}`}
      {...rest}>
      {children}
    </button>
  );
};
