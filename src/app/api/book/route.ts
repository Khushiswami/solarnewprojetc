import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { fullName, whatsapp, monthlyBill, pinCode, city, email } = data;

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL as string,
        pass: process.env.EMAIL_PASSWORD as string,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Solar Website" <${process.env.SMTP_USER}>`,
      to: "madhupawar169@gmail.com", // <-- Your email
      subject: "New Solar Consultation Request",
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Monthly Electricity Bill:</strong> ${monthlyBill}</p>
        <p><strong>Pin Code:</strong> ${pinCode}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err }), {
      status: 500,
    });
  }
}
