import mysql from "mysql2/promise";
import type { Connection } from "mysql2/promise";
// server/db.js 

export const getConnection = async () => {
  return await mysql.createConnection({
    host: "srv2000.hstgr.io",
    user: "u685798012_plutitoymaxibr",
    password: "scottex88*D",
    database: "u685798012_restaurante",
  });
};

// Crea y devuelve una nueva conexión
export const createConnection = async (): Promise<Connection> => {
  return await mysql.createConnection({
    host: "srv2000.hstgr.io",
    user: "u685798012_plutitoymaxibr",
    password: "scottex88*D",
    database: "u685798012_restaurante",
  });
};

// Cierra una conexión abierta
export const closeConnection = async (connection: Connection) => {
  try {
    await connection.end();
  } catch (error) {
    console.error("Error al cerrar la conexión:", error);
  }
};
