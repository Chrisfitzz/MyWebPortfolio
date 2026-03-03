// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // 👉 TODO: replace this with real email logic (Resend / Nodemailer / etc.)
        console.log("New contact message:", { name, email, message });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}