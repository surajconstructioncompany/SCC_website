import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

// ────────────────────────────────────────────────────
// Place your Resend API key in the RESEND_API_KEY
// environment variable (see .env file in project root).
// ────────────────────────────────────────────────────

interface CareerFormPayload {
  name: string;
  phone: string;
  email: string;
  role: string;
  experience: string;
  details: string;
  /** Base-64 encoded files with metadata */
  attachments: { filename: string; content: string }[];
}

export const sendCareerEmail = createServerFn({ method: "POST" })
  .validator((data: CareerFormPayload) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return { success: false, error: "Email service is not configured." };
    }

    const resend = new Resend(apiKey);

    const htmlBody = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; margin-bottom: 4px;">New Career Application</h2>
        <h3 style="margin-top: 0; color: #555;">Suraj Construction Company</h3>
        
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        
        <h3 style="color: #444; margin-bottom: 12px;">Applicant Information</h3>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 24px;">
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600; width: 35%;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${data.name}</td>
            </tr>
            <tr style="background-color: #fafafa;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${data.phone}</td>
            </tr>
            <tr style="background-color: #fafafa;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Position Applied For</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${data.role || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Experience</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${data.experience || "Not specified"}</td>
            </tr>
          </tbody>
        </table>
        
        <h3 style="color: #444; margin-bottom: 12px;">Application Details</h3>
        <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #2563eb; border-radius: 4px; margin-bottom: 16px;">
          <p style="white-space: pre-wrap; margin: 0; line-height: 1.5;">${data.details || "No details provided."}</p>
        </div>
        
        ${data.attachments.length > 0 ? `<div style="margin-top: 20px; padding: 12px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 4px; color: #166534;"><p style="margin: 0; font-weight: 500;">📎 Documents Attached</p><p style="margin: 4px 0 0 0; font-size: 14px;">${data.attachments.length} document(s) have been attached to this application.</p></div>` : ""}
      </div>
    `;

    try {
      const { error } = await resend.emails.send({
        from: `${data.name} (Career Application) <surajcons.company@gmail.com>`,
        to: ["hrmanagerscc@outlook.com"],
        replyTo: data.email,
        subject: `Career Application for job role of ${data.role || "General"} from candidate ${data.name}`,
        html: htmlBody,
        attachments: data.attachments.map((att) => ({
          filename: att.filename,
          content: att.content, // base64 string
        })),
      });

      if (error) {
        console.error("Resend error:", error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (err: unknown) {
      console.error("Failed to send email:", err);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }
  });
