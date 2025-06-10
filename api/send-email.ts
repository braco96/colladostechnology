import type { APIRoute } from "astro";
import transporter from "server/send-email.ts"; // importa la sesión configurada

export const  prerender = false

export const POST: APIRoute = async ({ request }) => {
  try {
    const { to, subject, text } = await request.json();

    if (!to || !subject || !text) {
      return new Response(JSON.stringify({ error: "Campos incompletos" }), {
        status: 400,
      });
    }

    const info = await transporter.sendMail({
      from: `"Collados Tech 👨‍💻" <colladostechnology@gmail.com>`,
      to,
      subject,
      text,
    });

    return new Response(
      JSON.stringify({ success: true, messageId: info.messageId }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(
      JSON.stringify({ error: "No se pudo enviar el correo" }),
      { status: 500 }
    );
  }
};
