"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const subscripePremium = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "User Not Logged In",
    };
  }

  const res = await fetch(
    `${process.env.NEXT_BACKEN_URL}/api/subscription/checkout`,
    {
      method: "post",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const result = await res.json();

  if (result.success && result.data?.paymentUrl) {
    redirect(result.data.paymentUrl)
  }
  
};
