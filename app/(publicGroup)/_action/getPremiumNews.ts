"use server";
import { cookies } from "next/headers";

export const getPremiumNews = async ({
  search,
}: {
  search?: { [key: string]: string | string[] | undefined };
}) => {
  const searchTerm = `${search?.searchTerm ? `?searchTerm=${search!.searchTerm}` : ""}`;  
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "User Not Logged In",
    };
  }

  const res = await fetch(`${process.env.NEXT_BACKEN_URL}/api/premium${searchTerm}`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },

    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 6, // 6 hours,
      tags: ["premium-posts"],
    },
  });

  const result = await res.json();
  return result;
};


