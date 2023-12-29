import { NextResponse } from "next/server"

export async function GET(request) {
    console.log(request)
    return NextResponse.json({ name: 'sai' })
}