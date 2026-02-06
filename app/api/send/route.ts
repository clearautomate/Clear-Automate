// /app/api/send/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, company } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    // 1. Send lead info to yourself
    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: "New Lead",
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}`,
    });

    // 2. Thank-you email to the contact
    await transporter.sendMail({
        from: `"Clear Automate" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Thanks for reaching out!",
        text: `Hi ${name},

Thanks for contacting Clear Automate!

I've received your message and will follow up with you shortly.
Keep an eye on your inbox — you'll get an email from me soon.

Best,
Joel
Clear Automate
www.clearautomate.io
`,

        html: `
        <div style="font-family: Arial, sans-serif; color:#222; line-height:1.5;">
            <p>Hi ${name},</p>

            <p>Thanks for contacting <strong>Clear Automate</strong>!</p>
            <p>I've received your message and will follow up with you shortly.  
            Keep an eye on your inbox — you'll hear from me soon.</p>

            <p>Best,<br></p>

            <!-- Signature -->
            <div style="margin-top:20px; padding-top:10px; border-top:1px solid #ddd;">
                <p style="margin:0; font-weight:bold; font-size:15px;">Joel Carmenini</p>
                <p style="margin:0;">Founder, Clear Automate</p>
                <p style="margin:0;">
                    <a href="https://clearautomate.io" style="color:#3b82f6; text-decoration:underline; text-underline-offset: 4px;">
                        clearautomate.io
                    </a>
                </p>
                <p style="margin:0; font-size:12px; color:#555;">
                    Lead routing • Listing updates • Dashboards • AI tools
                </p>
            </div>
        </div>
        `,
    });

    return Response.json({ ok: true });
}
