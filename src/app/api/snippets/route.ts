import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const snippets = await db.snippet.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({ snippets })
  } catch (error) {
    console.error("Error fetching snippets:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { title, code } = body

    if (!title || !code) {
      return NextResponse.json(
        { error: "Title and code are required" },
        { status: 400 }
      )
    }

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
        userId: session.user.id,
      },
    })

    return NextResponse.json({ snippet }, { status: 201 })
  } catch (error) {
    console.error("Error creating snippet:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
} 