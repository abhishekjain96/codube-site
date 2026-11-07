import { NextRequest, NextResponse } from "next/server";
import { getSiteContent, saveSiteContent } from "@/lib/storage";

export async function GET() {
  const content = getSiteContent();
  return NextResponse.json({ success: true, content });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { content } = body;

    if (!content) {
      return NextResponse.json({ error: "Content object required" }, { status: 400 });
    }

    const success = saveSiteContent(content);
    if (!success) {
      return NextResponse.json({ error: "Failed to write content" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Site content updated successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
