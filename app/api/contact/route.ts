import { log } from "console";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = schema.parse(body);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "fav.dev.web@gmail.com",
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a52020;">New message from your portfolio</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:8px 0; color:#888; font-size:12px; text-transform:uppercase; letter-spacing:0.1em;">Name</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0; color:#888; font-size:12px; text-transform:uppercase; letter-spacing:0.1em;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#a52020;">${email}</a></td></tr>
            <tr><td style="padding:8px 0; color:#888; font-size:12px; text-transform:uppercase; letter-spacing:0.1em;">Subject</td><td style="padding:8px 0;">${subject}</td></tr>
          </table>
          <hr style="border:none; border-top:1px solid #eee; margin:16px 0;" />
          <p style="line-height:1.7; color:#333;">${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border:none; border-top:1px solid #eee; margin:16px 0;" />
          <p style="font-size:12px; color:#888;">Sent from favour-aibangbee.netlify.app</p>
        </div>
      `,
      reply_to: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
