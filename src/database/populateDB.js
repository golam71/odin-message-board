import { pool } from "./db.js";

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS message (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT NOT NULL,
    msg TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

const defaultMessages = [{ username: "Golam", msg: "Hello World!" }];

async function populateDB() {
  try {
    await pool.query(createTableQuery);
    console.log("Table 'message' ensured.");

    const { rows } = await pool.query("SELECT COUNT(*) FROM message");
    const count = Number(rows[0].count);

    if (count > 0) {
      console.log(`DB already populated (${count} messages) — skipping.`);
      return;
    }

    for (const { username, msg } of defaultMessages) {
      await pool.query("INSERT INTO message (username, msg) VALUES ($1, $2)", [
        username,
        msg,
      ]);
    }

    console.log(`Inserted ${defaultMessages.length} default messages.`);
  } catch (error) {
    console.error("Failed to populate DB:", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

populateDB();
