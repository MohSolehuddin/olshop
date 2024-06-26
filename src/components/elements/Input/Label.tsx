import React from "react";

const Label = ({
  htmlFor,
  children,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-neutral-50 peer-hover:scale-150 px-1">
      {children}
    </label>
  );
};

export default Label;
