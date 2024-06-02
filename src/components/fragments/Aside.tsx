import React from "react";

const Aside = ({ children }: { children: React.ReactNode }) => {
  return <aside className="px-5">{children}</aside>;
};

export default Aside;
