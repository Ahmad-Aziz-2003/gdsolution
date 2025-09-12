import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ✅ Basic validation: fields empty nahi hone chahiye
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Generate Submitted At timestamp
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(now);

    const payload = {
      ...data,
      submittedAt: formattedDate,
    };

    console.log("Payload sent to Zapier:", payload);

    const zapierWebhook = process.env.ZAPIER_WEBHOOK_URL;
    if (!zapierWebhook) {
      return NextResponse.json(
        { error: "Zapier webhook URL is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(zapierWebhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to send data to Zapier" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, submittedAt: formattedDate });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
