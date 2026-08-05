"use server";

import { cookies } from "next/headers";

type prevState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (prevState: prevState, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const payload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.NEXT_BACKEN_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result: prevState = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24,
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
  }

  return result;
};
