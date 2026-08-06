"use server";

import { cookies } from "next/headers";

export const getUser = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;  

  if (!accessToken) {
    return {
      success: false,
      message: "User Not Logged In",
    };
  }

  const res = await fetch(`${process.env.NEXT_BACKEN_URL}/api/users/me`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  const result = await res.json();
  return result;
};
