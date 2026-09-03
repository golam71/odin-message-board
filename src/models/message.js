import { pool } from "../database/db.js";

export const findAll = async () => {
  const { rows } = await pool.query("SELECT * FROM message ORDER BY id");
  return rows;
};

export const findById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM message WHERE id = $1", [id]);
  return rows[0] ?? null;
};

export const create = async (username, content) => {
  const { rows } = await pool.query(
    "INSERT INTO message (username, msg) VALUES ($1, $2) RETURNING *",
    [username, content]
  );
  return rows[0];
};
