import React from "react";
import InputElement from "./InputElement";
import Label from "./Label";

const Input = ({
  children,
  type,
  placeholder,
  htmlFor,
}: {
  children: React.ReactNode;
  type: string;
  placeholder: string;
  htmlFor: string;
}) => {
  return (
    <section className="input_group mb-4">
      <Label htmlFor={htmlFor}>{children}</Label>
      <InputElement
        name={htmlFor || `${children}`}
        placeholder={placeholder || `${children}`}
        type={type || `${children}`}></InputElement>
    </section>
  );
};

export default Input;
