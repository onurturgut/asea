import { createShortNote, listShortNotes } from "@asea/database";
import { NextResponse } from "next/server";

import { DEMO_USER_ID, getMongoConfig } from "@/server/database";

export async function GET() {
  try {
    return NextResponse.json(
      await listShortNotes(getMongoConfig(), DEMO_USER_ID),
    );
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    text?: string;
    source?: string;
    chapterId?: string;
    sectionId?: string;
  };
  if (!body.text?.trim() || !body.source?.trim()) {
    return NextResponse.json(
      { message: "text and source are required" },
      { status: 400 },
    );
  }
  const note = await createShortNote(getMongoConfig(), {
    userId: DEMO_USER_ID,
    chapterId: body.chapterId || "V01-C02",
    sectionId: body.sectionId,
    text: body.text.trim(),
    source: body.source.trim(),
  });
  return NextResponse.json(note, { status: 201 });
}
