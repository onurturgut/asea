import "server-only";

import { listLongNotes, listShortNotes } from "@asea/database";
import type { SearchDocument } from "@asea/shared";

import { getContentSearchDocuments } from "@/server/content";
import { DEMO_USER_ID, getMongoConfig } from "@/server/database";

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "");
}

function scoreDocument(document: SearchDocument, terms: string[]) {
  const title = normalize(document.title);
  const excerpt = normalize(document.excerpt);
  const body = normalize(document.searchableText);
  return terms.reduce((score, term) => {
    if (title.includes(term)) score += 8;
    if (excerpt.includes(term)) score += 3;
    if (body.includes(term)) score += 1;
    return score;
  }, 0);
}

export async function searchAsea(query: string, limit = 30) {
  const normalizedQuery = normalize(query.trim());
  if (!normalizedQuery) return [];
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const contentDocuments = await getContentSearchDocuments();

  let studentDocuments: SearchDocument[] = [];
  try {
    const [shortNotes, longNotes] = await Promise.all([
      listShortNotes(getMongoConfig(), DEMO_USER_ID),
      listLongNotes(getMongoConfig(), DEMO_USER_ID),
    ]);
    studentDocuments = [
      ...shortNotes.map((note): SearchDocument => ({
        id: note.id,
        kind: "short-note",
        title: note.text.slice(0, 80),
        excerpt: note.source,
        path: "/short-notes",
        chapterId: note.chapterId,
        searchableText: `${note.text}\n${note.source}`,
      })),
      ...longNotes.map((note): SearchDocument => ({
        id: note.id,
        kind: "long-note",
        title: note.title,
        excerpt: note.body.slice(0, 180),
        path: "/notes",
        chapterId: note.chapterId,
        searchableText: `${note.title}\n${note.body}\n${note.linkedTo ?? ""}`,
      })),
    ];
  } catch {
    // Content search continues when the user database is temporarily offline.
  }

  return [...contentDocuments, ...studentDocuments]
    .map((document) => ({
      document,
      score: scoreDocument(document, terms),
    }))
    .filter((result) => result.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || a.document.title.localeCompare(b.document.title),
    )
    .slice(0, limit)
    .map(({ document, score }) => ({ ...document, score }));
}
