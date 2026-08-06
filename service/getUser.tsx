"use server";

import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken");
  if (!accessToken) {
    throw new Error("User Not Logged In");
    // return {
    //   success: false,
    //   message: "User Not Logged In",
    // };
  }

  const res = await fetch(`${process.env.NEXT_BACKEN_URL}/api/user/me`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();
  return result;
};
