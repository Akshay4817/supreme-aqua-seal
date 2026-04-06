import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, projectType, location, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and project details are required."
      });
    }

    // Env variables
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      MAIL_FROM,
      MAIL_TO
    } = process.env;

    // Check env
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
      console.error("Missing ENV variables");
      return res.status(500).json({
        message: "Mail service is not configured properly."
      });
    }

    // Create transporter (fixed config)
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465, // force correct port
      secure: true, // force secure (important)
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    // Send email
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `New construction inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Project Type: ${projectType || "Not provided"}
Location: ${location || "Not provided"}

Message:
${message}
      `,
      html: `
        <h2>New Construction Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Project Type:</strong> ${projectType || "Not provided"}</p>
        <p><strong>Location:</strong> ${location || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `
    });

    // Success response
    return res.status(200).json({
      message: "Your inquiry has been sent successfully."
    });

  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      message: "Failed to send email.",
      error: error.message // helps debugging
    });
  }
}