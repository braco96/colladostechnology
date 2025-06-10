import type { APIRoute } from "astro";
import bcrypt from "bcryptjs";
import { getConnection } from "server/db"; // Sin .ts si usas módulos ESM

export const prerender = true;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Campos requeridos" }), { status: 400 });
    }

    const connection = await getConnection();
    const [rows] = await connection.query("SELECT id, password_hash FROM users WHERE email = ?", [email]);

    if ((rows as any[]).length === 0) {
      return new Response(JSON.stringify({ error: "Usuario no encontrado" }), { status: 404 });
    }

    const user = (rows as any[])[0];
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Contraseña incorrecta" }), { status: 401 });
    }

    return new Response(JSON.stringify({ success: true, message: "Login correcto", userId: user.id }), { status: 200 });
  } catch (err) {
    console.error("Error en login:", err);
    return new Response(JSON.stringify({ error: "Error interno" }), { status: 500 });
  }
};
