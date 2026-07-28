import { listLongNotes, upsertLongNote } from "@asea/database";
import type { StudentLongNote } from "@asea/shared";
import { NextResponse } from "next/server";

import { DEMO_USER_ID, getMongoConfig } from "@/server/database";

export async function GET() {
  try {
    return NextResponse.json(
      await listLongNotes(getMongoConfig(), DEMO_USER_ID),
    );
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function PUT(request: Request) {
  const body = (await request.json()) as Partial<StudentLongNote>;
  if (!body.id || !body.title || body.body === undefined) {
    return NextResponse.json(
      { message: "id, title and body are required" },
      { status: 400 },
    );
  }
  const now = new Date().toISOString();
  const note = await upsertLongNote(getMongoConfig(), {
    id: body.id,
    userId: DEMO_USER_ID,
    title: body.title,
    body: body.body,
    chapterId: body.chapterId,
    linkedTo: body.linkedTo,
    createdAt: body.createdAt || now,
    updatedAt: now,
  });
  return NextResponse.json(note);
}
