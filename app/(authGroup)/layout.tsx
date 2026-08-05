
import React from "react";

const authLayout = ({ children }:
   { children: React.ReactNode }) => {

  return <div className="bg-gray-100">
    {children}
    </div>;
};

export default authLayout;
