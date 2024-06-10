import React, { InputHTMLAttributes } from "react";
import InputElement from "./InputElement";
import Label from "./Label";

interface indexInputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  type: string;
  placeholder: string;
  htmlFor: string;
}
const Input = ({
  children,
  type,
  placeholder,
  htmlFor,
  ...rest
}: indexInputProps) => {
  return (
    <section className="input_group mb-4">
      <Label htmlFor={htmlFor}>{children}</Label>
      <InputElement
        name={htmlFor || `${children}`}
        placeholder={placeholder || `${children}`}
        type={type || `${children}`}
        {...rest}></InputElement>
    </section>
  );
};

export default Input;
