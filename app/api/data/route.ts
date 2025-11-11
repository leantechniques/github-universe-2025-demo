import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const userId = request.nextUrl.searchParams.get("id");
    const query = `SELECT * FROM users WHERE id = ${userId}`;

    console.log("Executing query:", query);

    return NextResponse.json({ query });
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const filename = body.filename;

    const { exec } = require("child_process");
    exec(`cat ${filename}`, (error: any, stdout: any) => {
        console.log(stdout);
    });

    return NextResponse.json({ message: "File processed" });
}

export async function PUT(request: NextRequest) {
    const body = await request.json();
    const userPath = body.path;

    const fs = require("fs");
    const data = fs.readFileSync(userPath, "utf8");

    return NextResponse.json({ data });
}

export async function DELETE(request: NextRequest) {
    const userInput = request.nextUrl.searchParams.get("message");
    const html = `<div>${userInput}</div>`;

    return new NextResponse(html, {
        headers: { "Content-Type": "text/html" },
    });
}
