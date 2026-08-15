"use server";
import { cookies } from "next/headers";

export const getPremiumNews = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {

  const param = new URLSearchParams();
  if (query?.searchTerm) {
    param.set("searchTerm", query.searchTerm as string);
  }

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "User Not Logged In",
    };
  }

  const res = await fetch(
    `${process.env.NEXT_BACKEN_URL}/api/premium?${param.toString()}`,
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },

      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 6, // 6 hours,
        tags: ["premium-posts"],
      },
    },
  );

  const result = await res.json();
  return result;
};
