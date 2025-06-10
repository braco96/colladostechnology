import type { APIRoute } from "astro";
import bcrypt from "bcryptjs";
import { createConnection, closeConnection } from "@/pages/api/db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Email o contraseña inválidos" }), { status: 400 });
    }

    const connection = await createConnection();

    try {
      // Verifica si el usuario ya existe
      const [existing] = await connection.execute("SELECT id FROM users WHERE email = ?", [email]);
      if ((existing as any[]).length > 0) {
        return new Response(JSON.stringify({ error: "El usuario ya está registrado" }), { status: 409 });
      }

      // Hashea la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Inserta nuevo usuario
      await connection.execute("INSERT INTO users (email, password_hash) VALUES (?, ?)", [
        email,
        hashedPassword,
      ]);

      return new Response(JSON.stringify({ success: true, message: "Usuario registrado correctamente" }), {
        status: 201,
      });
    } finally {
      await closeConnection(connection);
    }
  } catch (err) {
    console.error("Error en endpoint register:", err);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), { status: 500 });
  }
};
