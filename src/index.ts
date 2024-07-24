import * as dotenv from "dotenv";
import * as nodemailer from "nodemailer";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { emailList } from "./emailList";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST as string,
  port: parseInt(process.env.SMTP_PORT as string, 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER as string,
    pass: process.env.SMTP_PASS as string,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendEmail(toEmails: string[]): Promise<void> {
  try {
    const currentDate = new Date();
    const dayOfWeek = format(currentDate, "EEEE", { locale: ptBR });

    const hour = currentDate.getHours();
    const greetings = ["Boa noite", "Bom dia", "Boa tarde", "Boa noite"];
    const greeting = greetings[Math.floor(hour / 6)];

    const emailChunks: string[][] = [];
    for (let i = 0; i < toEmails.length; i += 100) {
      emailChunks.push(toEmails.slice(i, i + 100));
    }

    for (const chunk of emailChunks) {
      const info = await transporter.sendMail({
        from: `"${process.env.SENDER_NAME}" <${process.env.SMTP_USER}>`,
        to: "",
        cc: [process.env.SMTP_USER as string],
        bcc: chunk.join(","),
        subject: "",
        text: "",
        html: `
          <p>${greeting}!</p>
          <p>Ótima ${dayOfWeek}! 😊</p>
        `,
      });

      console.log("Email enviado: %s", info.messageId);
    }
  } catch (error) {
    console.error("Erro ao enviar email: ", error);
  }
}

sendEmail(emailList);
