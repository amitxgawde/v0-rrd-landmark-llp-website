import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const endpoint = process.env.GSHEET_WEBAPP_URL

    if (!endpoint) {
      return NextResponse.json({ ok: false, error: "Missing GSHEET_WEBAPP_URL" }, { status: 500 })
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "Failed to append to sheet" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 })
  }
}

