import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

interface ContactFormPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: ContactFormPayload) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return { success: false, error: "Email service is not configured." };
    }

    const resend = new Resend(apiKey);

    const htmlBody = `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; margin-bottom: 4px;">New Website Enquiry</h2>
        <h3 style="margin-top: 0; color: #555;">Suraj Construction Company</h3>
        
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        
        <h3 style="color: #444; margin-bottom: 12px;">CONTACT INFORMATION</h3>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 24px;">
          <thead>
            <tr style="background-color: #f8fafc;">
              <th style="padding: 10px; border: 1px solid #e2e8f0; text-align: left; width: 35%;">Field</th>
              <th style="padding: 10px; border: 1px solid #e2e8f0; text-align: left;">Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Name</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${data.name}</td>
            </tr>
            <tr style="background-color: #fafafa;">
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: 600;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${data.phone || "Not provided"}</td>
            </tr>
          </tbody>
        </table>
        
        <h3 style="color: #444; margin-bottom: 12px;">Enquiry</h3>
        <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #2563eb; border-radius: 4px;">
          <p style="white-space: pre-wrap; margin: 0; line-height: 1.5;">${data.message}</p>
        </div>
      </div>
    `;

    try {
      const { error } = await resend.emails.send({
        from: `${data.name} (Contact Form) <contact@surajconstructioncompany.in>`,
        to: ["surajcons.company@gmail.com"],
        replyTo: data.email,
        subject: `New Website Enquiry from – ${data.name}`,
        html: htmlBody,
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
