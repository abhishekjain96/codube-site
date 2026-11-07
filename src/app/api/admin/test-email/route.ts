import { NextRequest, NextResponse } from "next/server";
import { getSiteContent } from "@/lib/storage";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const siteContent = getSiteContent();

    const host = body.host || process.env.SMTP_HOST || siteContent?.smtp?.host || "smtp.gmail.com";
    const port = Number(body.port || process.env.SMTP_PORT || siteContent?.smtp?.port) || 587;
    const user = body.user || process.env.SMTP_USER || siteContent?.smtp?.user;
    const pass = body.pass || process.env.SMTP_PASS || siteContent?.smtp?.pass;
    const recipient =
      body.recipient ||
      process.env.CONTACT_NOTIFICATION_EMAIL ||
      siteContent?.smtp?.recipientEmail ||
      siteContent?.general?.notificationEmail ||
      "hello@codube.com";

    if (!user || !pass) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide SMTP Username (Email) and App Password.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Send a test email
    await transporter.sendMail({
      from: `"CODUBE Admin" <${user}>`,
      to: recipient,
      subject: `✅ CODUBE SMTP Test Email — Live Delivery Verified`,
      html: `
        <div style="font-family: sans-serif; background-color: #030604; color: #fff; padding: 30px; border-radius: 12px; border: 1px solid #B8FF00; max-width: 500px; margin: auto;">
          <h2 style="color: #B8FF00; margin-top: 0;">CODUBE SMTP Test Successful!</h2>
          <p style="color: #ccc; font-size: 14px;">This test confirms that your email notifications are configured correctly. Whenever a client submits the proposal form on CODUBE, you will receive their inquiry instantly at this inbox.</p>
          <div style="background: rgba(255,255,255,0.05); padding: 12px; border-radius: 8px; font-size: 12px; font-family: monospace; color: #B8FF00;">
            Status: 200 OK • Timestamp: ${new Date().toISOString()}
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: `Test email successfully delivered to ${recipient}!`,
    });
  } catch (error: any) {
    console.error("Test email error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to connect to SMTP server. Please verify your credentials.",
      },
      { status: 500 }
    );
  }
}
