import type { APIRoute } from "astro";
import bcrypt from "bcryptjs";
import { createConnection, closeConnection } from "server/db.ts";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      codigo,
    } = await request.json();

    // Validaciones básicas
    if (!email || !email.includes("@") || !password || password.length < 6) {
      return new Response(
        JSON.stringify({ error: "Email o contraseña inválidos." }),
        { status: 400 }
      );
    }

    if (!firstName || !lastName || !phone || !codigo) {
      return new Response(
        JSON.stringify({ error: "Faltan datos obligatorios del usuario." }),
        { status: 400 }
      );
    }

    const connection = await createConnection();

    try {
      // Verifica si el usuario ya existe
      const [existing] = await connection.execute(
        "SELECT id FROM users WHERE email = ?",
        [email]
      );

      if ((existing as any[]).length > 0) {
        return new Response(
          JSON.stringify({ error: "El usuario ya está registrado." }),
          { status: 409 }
        );
      }

      // Verifica si el código es válido y está activo
      const [codigoResult] = await connection.execute(
        "SELECT codigo FROM codigo WHERE codigo = ? AND activo = TRUE",
        [codigo]
      );

      if ((codigoResult as any[]).length === 0) {
        return new Response(
          JSON.stringify({ error: "El código proporcionado no es válido o ya fue usado." }),
          { status: 400 }
        );
      }

      // Hashea la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      // Inserta al nuevo usuario
      await connection.execute(
        `INSERT INTO users (email, password_hash, first_name, last_name, phone, codigo)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [email, hashedPassword, firstName, lastName, phone, codigo]
      );

      // Desactiva el código usado
      await connection.execute(
        "UPDATE codigo SET activo = FALSE WHERE codigo = ?",
        [codigo]
      );

      return new Response(
        JSON.stringify({ success: true, message: "Usuario registrado y código desactivado correctamente." }),
        { status: 201 }
      );
    } finally {
      await closeConnection(connection);
    }
  } catch (err) {
    console.error("Error en endpoint register:", err);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor." }),
      { status: 500 }
    );
  }
};
