import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 1. Try local disk write first (for local dev & full disk environments)
    try {
      const uploadsDir = path.join(process.cwd(), "public", "uploads");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const safeName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
      const filePath = path.join(uploadsDir, safeName);

      fs.writeFileSync(filePath, buffer);

      const publicUrl = `/uploads/${safeName}`;

      return NextResponse.json({
        success: true,
        url: publicUrl,
        fileName: safeName,
      });
    } catch (diskError) {
      console.warn("Local disk write failed (read-only environment like Vercel). Using Base64 Data URL fallback:", diskError);

      // 2. Base64 Data URL fallback (works 100% on Vercel / serverless without disk writes!)
      const mimeType = file.type || "image/png";
      const base64 = buffer.toString("base64");
      const dataUrl = `data:${mimeType};base64,${base64}`;

      return NextResponse.json({
        success: true,
        url: dataUrl,
        fileName: file.name,
        isBase64: true,
      });
    }
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error?.message || "Failed to upload file" }, { status: 500 });
  }
}
