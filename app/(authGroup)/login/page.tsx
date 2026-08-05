
import React from "react";
import LoginFrom from "../_components/loginFrom";

const userLoginPage = () => {
  return (
    <>
     <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg space-y-6 border p-8 shadow-lg ">
         <div className="space-y-5 text-center">
        <h2 className="text-3xl font-bold">Wellcome Back!</h2>
        <p className="text-gray-500">
          Enter Your Credentials To Access Your Account
        </p>
      </div>

      <LoginFrom></LoginFrom>
      </div>
     </div>
    </>
  );
};

export default userLoginPage;
