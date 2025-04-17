import { NextResponse } from "next/server";
import { openDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await openDb();

    // ✅ TEMP: Seed the DB once


    const tables = await db.all("SELECT name FROM sqlite_master WHERE type='table'");
    console.log("Tables in DB:", tables);

    const rows = await db.all("SELECT * FROM user");
    console.log("Rows in DB:", rows);
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error("DB Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
