import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import path from "path";

let dbInstance: Database | null = null;

export async function openDb() {
  if (dbInstance) return dbInstance;

  dbInstance = await open({
    filename: path.join(process.cwd(), "db/users.db"),
    driver: sqlite3.Database,
  });

  return dbInstance;
}

