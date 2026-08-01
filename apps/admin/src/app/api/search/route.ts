import { NextResponse } from "next/server";
import type { SearchDocument } from "@asea/shared";

import { searchAsea } from "@/server/search";

const SEARCH_KINDS = new Set<SearchDocument["kind"]>([
  "academy",
  "module",
  "chapter",
  "lesson",
  "reading-guide",
  "concept-summary",
  "examples",
  "exercises",
  "debugging",
  "quiz",
  "quiz-answer-key",
  "lab",
  "project",
  "interview",
  "flashcards",
  "english-terms",
  "mentor",
  "assessment",
  "challenge",
  "visualization",
  "external-source",
  "long-note",
  "short-note",
]);

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const requestedKind = url.searchParams.get("kind") as
    SearchDocument["kind"] | null;
  const kinds =
    requestedKind && SEARCH_KINDS.has(requestedKind)
      ? [requestedKind]
      : undefined;
  return NextResponse.json({
    query,
    results: await searchAsea(query, 100, kinds),
  });
}
