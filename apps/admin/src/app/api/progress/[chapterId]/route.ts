import { getStudentProgress, upsertStudentProgress } from "@asea/database";
import type { StudentProgress } from "@asea/shared";
import { NextResponse } from "next/server";

import { DEMO_USER_ID, getMongoConfig } from "@/server/database";

type RouteContext = { params: Promise<{ chapterId: string }> };

export async function GET(_: Request, { params }: RouteContext) {
  const { chapterId } = await params;
  try {
    return NextResponse.json(
      await getStudentProgress(getMongoConfig(), DEMO_USER_ID, chapterId),
    );
  } catch {
    return NextResponse.json(null);
  }
}

export async function PUT(request: Request, { params }: RouteContext) {
  const { chapterId } = await params;
  const body = (await request.json()) as Partial<StudentProgress>;
  const progress = await upsertStudentProgress(getMongoConfig(), {
    userId: DEMO_USER_ID,
    chapterId,
    activeSectionId: body.activeSectionId || "s1",
    completedSectionIds: body.completedSectionIds || [],
    progressPercent: body.progressPercent || 0,
    xp: body.xp || 0,
    updatedAt: new Date().toISOString(),
  });
  return NextResponse.json(progress);
}
