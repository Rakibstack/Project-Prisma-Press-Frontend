import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JwtPayload } from "jsonwebtoken";
import { jwtUtils } from "./app/utils/jwtUtils";
import { getNewAccessToken } from "./service/refreshToken";
import { getSubscriptionStatus } from "./app/(publicGroup)/_action/getSubscriptionStatus";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTE = ["/", "/news"];
const protectedRoutes = [
  {
    path: "/dashboard",
    role: "USER",
  },
  {
    path: "/admin-Dashboard",
    role: "ADMIN",
  },
  {
    path: "/author-Dashboard",
    role: "AUTHOR",
  },
];

export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const cookieStore = cookies()

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decodedAccessToken = accessToken
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

      (await cookieStore).set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
      });
      

      accessToken = newAccessToken;
      decodedAccessToken = accessToken
        ? jwtUtils.verifyToken(
            accessToken,
            process.env.JWT_ACCESS_SECRET as string,
          )
        : null;
        
    }
  }

  let userRole = null;

  if (!decodedAccessToken?.success) {
    (await cookieStore).delete("accessToken");
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
    
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set('redirectTo',pathName)

    return NextResponse.redirect(loginUrl);
  }

  const restrictedRoute = protectedRoutes.find((route) =>
    pathName.startsWith(route.path),
  );

  if (restrictedRoute && userRole !== restrictedRoute.role) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
  
  if (pathName === "/premium") {
    const statusResult = await getSubscriptionStatus();
    const isActive = Boolean(
      statusResult.success && statusResult.data?.isSubscribed,
    );
    if (!isActive) {
      return NextResponse.redirect(new URL("/payment", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
};
