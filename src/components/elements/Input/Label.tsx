import React from "react";

const Label = ({
  htmlFor = "input_password",
  children = "Password",
  className = "px-4 peer-hover:-top-2 text-favBlueSky z-10 relative top-3",
}: {
  children: React.ReactNode;
  className: string;
  htmlFor: string;
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
