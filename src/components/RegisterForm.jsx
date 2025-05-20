import React, { useState, useEffect } from "react";

export default function RegisterForm() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Detectar si estamos en producción o local
  const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  // URL base según entorno
  const API_BASE_URL = isLocal
    ? "http://localhost:8000"
    : "http://127.0.0.1:3306/api";

  useEffect(() => {
    fetch(`${API_BASE_URL}/users.php`)
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => setError("Error al cargar usuarios"));
  }, [API_BASE_URL]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", form.email);
      formData.append("password", form.password);

      const res = await fetch(`${API_BASE_URL}/register.php`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.success);
        setForm({ email: "", password: "" });

        const resUsers = await fetch(`${API_BASE_URL}/users.php`);
        const usersData = await resUsers.json();
        setUsers(usersData);
      } else {
        setError(data.error || "Error desconocido");
      }
    } catch {
      setError("Error en la conexión");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Registro de Usuario</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Registrar"}
        </button>
      </form>

      <h2>Usuarios Registrados</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
