import { cookies } from "next/headers";

export const getPremiumNews = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "User Not Logged In",
    };
  }

  const res = await fetch(`${process.env.NEXT_BACKEN_URL}/api/premium`, {
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