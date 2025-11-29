import { NextResponse } from "next/server"
import { cookies } from "next/headers"

/**
 * POST /api/auth/logout
 * Clears the auth session cookies
 */
export async function POST() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete("auth-session")
    cookieStore.delete("user-data")

    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    })
  } catch (error) {
    console.error("Logout error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    )
  }
}
