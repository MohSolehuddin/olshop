import React, { MutableRefObject } from "react";
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder: string;
}

const TextArea = ({ name, placeholder, ...rest }: TextAreaProps) => {
  return (
    <textarea
      id={`input_${name}`}
      title="message"
      name={name}
      placeholder={placeholder}
      className="px-4 my-2 py-2 rounded bg-zinc-900 hover:bg-zinc-950 focus:outline-none focus:scale-105 transition-all duration-300 delay-75 hover:scale-105 focus:bg-zinc-950 w-full h-16 placeholder:text-sky-200 text-favBlueSky"
      {...rest}></textarea>
  );
};

export default TextArea;
