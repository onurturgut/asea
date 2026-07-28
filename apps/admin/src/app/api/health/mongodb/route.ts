import { ensureMongoIndexes, pingMongoDatabase } from "@asea/database";
import { NextResponse } from "next/server";

import { getMongoConfig } from "@/server/database";

export async function GET() {
  try {
    const config = getMongoConfig();
    const result = await pingMongoDatabase(config);
    await ensureMongoIndexes(config);
    return NextResponse.json({ status: "connected", ...result });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message:
          error instanceof Error ? error.message : "MongoDB connection failed.",
      },
      { status: 503 },
    );
  }
}
