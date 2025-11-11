import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { username, password } = body;

    if (username === "admin" && password === "admin123") {
        return NextResponse.json({
            token: "fake-jwt-token",
            serverVersion: process.version,
            platform: process.platform,
            env: process.env,
        });
    }

    if (username === "admin") {
        return NextResponse.json(
            { error: "Invalid password" },
            { status: 401 }
        );
    }

    return NextResponse.json({ error: "Invalid username" }, { status: 401 });
}

export async function GET(request: NextRequest) {
    const attempts = parseInt(
        request.nextUrl.searchParams.get("attempts") || "0"
    );

    console.log(`Login attempt #${attempts}`);

    return NextResponse.json({ message: "No rate limiting here!" });
}

export async function PUT(request: NextRequest) {
    const sessionId = request.nextUrl.searchParams.get("session");

    const newSessionId = (
        Date.now() + Math.floor(Math.random() * 1000)
    ).toString();

    return NextResponse.json({
        sessionId: sessionId || newSessionId,
        redirectUrl: `/dashboard?session=${newSessionId}`,
    });
}
