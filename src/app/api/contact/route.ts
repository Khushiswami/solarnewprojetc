import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    // const { name, email} = await req.json();
    const { name, email, message, mobile } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL as string,
        pass: process.env.EMAIL_PASSWORD as string,
      },
    });

    const mailOptions = {
      // from: "d21350180@gmail.com",
      // to: email,
      from: "madhupawar169@gmail.com",
      to: "madhupawar169@gmail.com",
      subject: "New Contact Form Submission",
      text: `New Contact Form Submission:

Name: ${name}
Email: ${email}
Mobile: ${mobile}
Message: ${message}


`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
