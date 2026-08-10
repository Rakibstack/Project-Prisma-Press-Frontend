"use server";

import { cookies } from "next/headers";

export const getNewAccessToken = async () => {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refreshToken")?.value || null;
  if (!refreshToken) {
    return {
      success: false,
      message: "Refresh token not found",
    };
  }

  const res = await fetch(
    `${process.env.NEXT_BACKEN_URL}/api/auth/refresh-token`,
    {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },

      cache: "no-store",
    },
  );

  const result = await res.json();
  return result;
};
