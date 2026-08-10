import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JwtPayload } from "jsonwebtoken";
import { jwtUtils } from "./app/utils/jwtUtils";
import { getNewAccessToken } from "./service/refreshToken";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTE = ["/", "/news"];

export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const cookieStore = await cookies()

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    const result = await getNewAccessToken();
    if (result.success) {
      const newAccessToken = result.data.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
      });
      accessToken = newAccessToken
    }
  }

  let userRole = null;

  if (!decodedAccessToken?.success) {
    cookieStore.delete("accessToken");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (decodedAccessToken?.success && decodedAccessToken.data) {
    userRole = (decodedAccessToken.data as JwtPayload).role;
  }

  if (accessToken && AUTH_ROUTES.includes(pathName)) {
    if (userRole === "USER") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/admin-Dashboard", request.url));
    } else if (userRole === "AUTHOR") {
      return NextResponse.redirect(new URL("/author-Dashboard", request.url));
    }
  }

  const isPublicRoute = PUBLIC_ROUTE.some(
    (route) => pathName === route || pathName.startsWith(route + "/"),
  );
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathName === route || pathName.startsWith(route + "/"),
  );

  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathName.startsWith("/dashboard") && userRole !== "USER") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  } else if (pathName.startsWith("/admin-Dashboard") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  } else if (
    pathName.startsWith("/author-Dashboard") &&
    userRole !== "AUTHOR"
  ) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
};
