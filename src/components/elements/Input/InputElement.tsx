import React, { InputHTMLAttributes, MutableRefObject } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
}
const InputElement = ({ type, placeholder, name, ...rest }: InputProps) => {
  return (
    <input
      id={`input_${name}`}
      name={name}
      placeholder={placeholder}
      type={type}
      className="peer px-4 py-2 mt-2 w-full bg-zinc-900 hover:bg-zinc-950 focus:outline-none focus:scale-105 transition-all duration-300 delay-75 hover:scale-105 focus:bg-zinc-950 text-favBlueSky placeholder:text-sky-200 rounded"
      {...rest}
    />
  );
};

export default InputElement;
