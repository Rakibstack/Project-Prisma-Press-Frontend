import React from "react";
import RegisterFrom from "../_components/RegisterFrom";

const userRegisterPage = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md rounded-lg space-y-6 border p-8 shadow-lg">
          <div className="space-y-5 text-center">
            <h2 className="text-3xl font-bold">Register User!</h2>
            <p className="text-gray-500">
              Enter Your Information to Signup
            </p>
          </div>

            <RegisterFrom></RegisterFrom>
          
        </div>
      </div>
    </>
  );
};

export default userRegisterPage;
