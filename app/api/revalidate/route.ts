// http://localhost:3000/api/revalidate?path=/&secret=d0f13cd765e3312cd5981db09a4b8168

import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function GET(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get("secret")
	if (secret !== process.env.MY_SECRET_TOKEN) {
		return new NextResponse(JSON.stringify({ message: "Invalid token" }), {
			status: 401,
			statusText: "Unauthorized",
			headers: {
				"Content-Type": "application/json",
			},
		})
	}
	const path = request.nextUrl.searchParams.get("path") || "/"
	revalidatePath(path)
	return NextResponse.json({ revalidated: true })
}
