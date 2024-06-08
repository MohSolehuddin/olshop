import React from "react";

const InputElement = ({
  type = "password",
  placeholder = "********",
  name = "input_password",
  className = "px-4 peer py-2 mb-8 w-full bg-zinc-900 hover:bg-zinc-950 focus:outline-none focus:scale-105 transition-all duration-300 delay-75 hover:scale-105 focus:bg-zinc-950 text-favBlueSky placeholder:text-sky-100 rounded",
}: {
  type: string;
  placeholder: string;
  name: string;
  className: string;
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      className={className}
    />
  );
};

export default InputElement;
