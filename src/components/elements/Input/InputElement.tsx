import React from "react";

const InputElement = ({
  type,
  placeholder,
  name,
}: {
  type: string;
  placeholder: string;
  name: string;
}) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      className="peer px-4 py-2 mt-2 w-full bg-zinc-900 hover:bg-zinc-950 focus:outline-none focus:scale-105 transition-all duration-300 delay-75 hover:scale-105 focus:bg-zinc-950 text-favBlueSky placeholder:text-sky-100 rounded"
    />
  );
};

export default InputElement;
