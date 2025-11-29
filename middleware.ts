import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Middleware to protect routes
 * - Redirects unauthenticated users from /dashboard to /
 * - Redirects authenticated users from / to /dashboard
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = request.cookies.get("auth-session")?.value

  // Check if user is authenticated
  const isAuthenticated = !!session

  // Protect dashboard route
  if (pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      const url = new URL("/", request.url)
      return NextResponse.redirect(url)
    }
  }

  // Redirect authenticated users away from login page
  if (pathname === "/") {
    if (isAuthenticated) {
      const url = new URL("/dashboard", request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
}
