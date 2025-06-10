import type { APIRoute } from "astro";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import { getConnection } from "server/db.ts";
export const prerender = true;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Email o contraseña inválidos" }), { status: 400 });
    }

    // Conexión con tu base de datos
    const connection = await mysql.createConnection({
      host: "srv2000.hstgr.io",
      user: "u685798012_plutitoymaxibr",
      password: "scottex88*D",
      database: "u685798012_restaurante",
    });

    // Verifica si el usuario ya existe
    const [existing] = await connection.execute("SELECT id FROM users WHERE email = ?", [email]);
    if ((existing as any[]).length > 0) {
      await connection.end();
      return new Response(JSON.stringify({ error: "El usuario ya está registrado" }), { status: 409 });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserta el nuevo usuario
    await connection.execute("INSERT INTO users (email, password_hash) VALUES (?, ?)", [
      email,
      hashedPassword,
    ]);

    await connection.end();

    return new Response(JSON.stringify({ success: true, message: "Usuario registrado correctamente" }), {
      status: 201,
    });
  } catch (err) {
    console.error("Error de servidor:", err);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), { status: 500 });
  }
};
