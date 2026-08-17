"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

type prevState = {
  success: boolean | null;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  redirectTo: string,
  prevState: prevState,
  formData: FormData,
) => {
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
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;
    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ){
      redirect(redirectTo)
    }
    
      if (decodedToken.role === "USER") {
        redirect("/dashboard", "replace");
      } else if (decodedToken.role === "ADMIN") {
        redirect("/admin-Dashboard", "replace");
      } else if (decodedToken.role === "AUTHOR") {
        redirect("/author-Dashboard", "replace");
      }
  }

  return result;
};
