// src/pages/api/login.ts
import type { APIRoute } from "astro";
import bcrypt from "bcryptjs";
import { createConnection, closeConnection } from "@/api/db";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Email o contraseña inválidos" }), { status: 400 });
    }

    const connection = await createConnection();

    try {
      // Buscar usuario por email
      const [rows] = await connection.execute("SELECT id, password_hash FROM users WHERE email = ?", [email]);

      if ((rows as any[]).length === 0) {
        return new Response(JSON.stringify({ error: "Usuario no encontrado" }), { status: 404 });
      }

      const user = (rows as any[])[0];

      // Comparar password
      const isPasswordValid = await bcrypt.compare(password, user.password_hash);

      if (!isPasswordValid) {
        return new Response(JSON.stringify({ error: "Contraseña incorrecta" }), { status: 401 });
      }

      // Login exitoso
      return new Response(
        JSON.stringify({ success: true, message: "Inicio de sesión exitoso", userId: user.id }),
        { status: 200 }
      );
    } finally {
      await closeConnection(connection);
    }
  } catch (err) {
    console.error("Error en endpoint login:", err);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), { status: 500 });
  }
};
