import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Determine notification recipient email & SMTP credentials
    // (Agar aap .env.local mein SMTP details nahi daalna chahte, toh yahan direct bhi daal sakte hain)
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "hello@codube.com";
    const smtpHost = process.env.SMTP_HOST || "smtp.zoho.in";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || "";
    const smtpPass = process.env.SMTP_PASS || "";

    let emailSent = false;
    let mailErrorMsg = "";

    // Attempt email delivery via nodemailer if SMTP credentials exist
    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465, // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>New Project Inquiry — CODUBE</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #030604; color: #ffffff; padding: 40px 20px; margin: 0;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #080D0A; border: 1px solid rgba(184, 255, 0, 0.35); border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #0B120D 0%, #030604 100%); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                <h1 style="color: #B8FF00; margin: 0; font-size: 26px; font-weight: 900; letter-spacing: 2px;">CODUBE<span style="color: #ffffff;">.</span></h1>
                <p style="color: #A5ACA6; font-size: 11px; margin: 6px 0 0; text-transform: uppercase; letter-spacing: 3px; font-family: monospace;">SOFTWARE • AI • AUTOMATION</p>
                <div style="display: inline-block; margin-top: 15px; padding: 6px 14px; background: rgba(184, 255, 0, 0.12); border: 1px solid rgba(184, 255, 0, 0.4); border-radius: 20px; color: #B8FF00; font-size: 12px; font-weight: bold;">
                  ⚡ New Client Proposal Received
                </div>
              </div>

              <!-- Body Details -->
              <div style="padding: 30px;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                  <tr>
                    <td style="padding: 10px 0; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 130px;">Client Name</td>
                    <td style="padding: 10px 0; color: #ffffff; font-size: 15px; font-weight: bold;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email Address</td>
                    <td style="padding: 10px 0; color: #B8FF00; font-size: 14px;"><a href="mailto:${email}" style="color: #B8FF00; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone / WhatsApp</td>
                    <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="color: #22c55e; text-decoration: none;">${phone} (Chat on WhatsApp)</a>` : "Not provided"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Interested Service</td>
                    <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: 600;">${service || "General Inquiry"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Budget Range</td>
                    <td style="padding: 10px 0; color: #B8FF00; font-size: 14px; font-weight: 700;">${budget || "Not specified"}</td>
                  </tr>
                </table>

                <!-- Message Box -->
                <div style="background-color: #030604; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px;">
                  <div style="color: #B8FF00; font-size: 11px; text-transform: uppercase; font-family: monospace; letter-spacing: 1.5px; margin-bottom: 8px;">Project Scope &amp; Message:</div>
                  <div style="color: #e4e4e7; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                </div>

                <!-- Action Button -->
                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}?subject=Regarding your inquiry on CODUBE" style="display: inline-block; padding: 12px 28px; background-color: #B8FF00; color: #000000; font-weight: bold; font-size: 13px; text-decoration: none; border-radius: 30px; box-shadow: 0 0 20px rgba(184, 255, 0, 0.4);">
                    Reply Directly to ${name} ↗
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="padding: 20px; background-color: #030604; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center; font-size: 11px; color: #52525b;">
                Received on CODUBE Production Website • Target: ${recipientEmail}
              </div>
            </div>
          </body>
          </html>
        `;

        await transporter.sendMail({
          from: `"CODUBE Inquiries" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `⚡ New Project Inquiry from ${name} (${service || "Proposal"})`,
          html: htmlContent,
        });

        emailSent = true;
      } catch (mailError: any) {
        console.error("Nodemailer error:", mailError);
        mailErrorMsg = mailError.message || "Failed to dispatch email via SMTP";
      }
    } else {
       console.log("SMTP credentials missing in Environment Variables.");
       mailErrorMsg = "SMTP credentials missing";
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received! We will contact you within 2 hours.",
      emailSent,
      recipient: recipientEmail,
      smtpConfigured: Boolean(smtpHost && smtpUser && smtpPass),
      error: mailErrorMsg || undefined,
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}