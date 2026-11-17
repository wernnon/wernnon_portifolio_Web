import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || "ruizwernnon@gmail.com";
    const emailSubject = `[Portfólio Wernnon Ruiz] ${subject || "Novo Contato"}: ${name}`;
    const emailText = `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}\n\nEnviado através do formulário do portfólio.`;

    // 1. Try local SMTP if configured in .env.local
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: (process.env.SMTP_SECURE ?? "true") === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: email,
        subject: emailSubject,
        text: emailText,
      });

      return NextResponse.json({
        success: true,
        message: "E-mail enviado com sucesso via SMTP.",
      });
    }

    // 2. Fallback: Dispatch via FormSubmit AJAX to the recipient's verified inbox
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _subject: emailSubject,
        message,
        _replyto: email,
        _template: "table",
      }),
    });

    if (formSubmitRes.ok) {
      return NextResponse.json({
        success: true,
        message: "E-mail despachado com sucesso.",
      });
    }

    // If both failed, return instruction with mailto fallback
    return NextResponse.json({
      success: false,
      error: "Falha ao despachar e-mail automático. Utilize o link direto de e-mail.",
    }, { status: 500 });
  } catch (err: any) {
    console.error("Erro no envio do e-mail:", err);
    return NextResponse.json(
      { error: err?.message || "Erro interno ao processar e-mail." },
      { status: 500 }
    );
  }
}
