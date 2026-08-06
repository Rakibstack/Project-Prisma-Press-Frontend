import Navber from "@/components/shared/Navber";
import { getUser } from "@/service/getUser";
import React from "react";

const publicLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  return (
    <div className="bg-gray-100">
      <Navber user={user}></Navber>
      {children}
    </div>
  );
};

export default publicLayout;
