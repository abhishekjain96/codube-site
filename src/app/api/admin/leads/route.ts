import { NextRequest, NextResponse } from "next/server";
import { getLeads, updateLeadStatus } from "@/lib/storage";

export async function GET() {
  const leads = getLeads();
  return NextResponse.json({ success: true, leads });
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "id and status required" }, { status: 400 });
    }

    const success = updateLeadStatus(id, status);
    return NextResponse.json({ success });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
