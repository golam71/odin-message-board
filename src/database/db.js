import { Pool } from "pg";
import "node:process";

try {
  process.loadEnvFile();
} catch (err) {
  console.log(err);
  console.log("[Fallback] Using system env vars");
}

const connectionString = process.env.DB_URL;

const pool = new Pool({
  connectionString,
});

export { pool };
