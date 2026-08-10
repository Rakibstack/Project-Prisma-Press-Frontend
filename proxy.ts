import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import  { JwtPayload } from "jsonwebtoken";
import { jwtUtils } from "./app/utils/jwtUtils";

// This function can be marked `async` if using `await` inside
const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTE = ["/", "/news"];

export function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  const accessToken = request.cookies.get("accessToken")?.value;
  const decodedToken = accessToken
    ? jwtUtils.verifyToken(accessToken,process.env.JWT_ACCESS_SECRET as string)
    : null;

  let userRole = null;

  if(!decodedToken?.success){
    cookieStore.delete('accessToken')
  return NextResponse.redirect(new URL("/login", request.url));
  }

  if (decodedToken?.success && decodedToken.data ) {
    userRole = (decodedToken.data as JwtPayload).role
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
