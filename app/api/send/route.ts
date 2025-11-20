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

    await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // send to yourself
        subject: "New Lead",
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}`,
    });

    return Response.json({ ok: true });
}
