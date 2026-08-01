import "server-only";

import { listLongNotes, listShortNotes } from "@asea/database";
import type { SearchDocument } from "@asea/shared";
import sourceCatalogJson from "../../../../research/search-sources/source-catalog.json";

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

interface ExternalSourceRecord {
  source_id: string;
  source_name: string;
  source_owner: string;
  source_type: string;
  academy_ids: string[];
  chapter_ids: string[];
  topic_ids: string[];
  final_url: string;
  url: string;
  language: string;
  license: string;
  indexing_policy: string;
  recommended_asea_use: string;
  quality_score: number;
  asea_summary: string;
  verification: {
    verification_status: string;
  };
}

interface ExternalSourceCatalog {
  sources: ExternalSourceRecord[];
}

function getExternalSourceSearchDocuments(): SearchDocument[] {
  const catalog = sourceCatalogJson as ExternalSourceCatalog;
  return catalog.sources.map((source) => ({
    id: source.source_id,
    kind: "external-source",
    title: source.source_name,
    excerpt: source.asea_summary,
    path: source.final_url || source.url,
    chapterId: source.chapter_ids[0],
    sourceOwner: source.source_owner,
    sourceType: source.source_type,
    sourceLanguage: source.language,
    sourceLicense: source.license,
    sourceVerification: source.verification.verification_status,
    qualityScore: source.quality_score,
    searchableText: [
      source.source_name,
      source.source_owner,
      source.source_type,
      source.asea_summary,
      source.recommended_asea_use,
      source.indexing_policy,
      source.language,
      source.license,
      ...source.academy_ids,
      ...source.chapter_ids,
      ...source.topic_ids,
    ].join("\n"),
  }));
}

export async function searchAsea(
  query: string,
  limit = 100,
  kinds?: SearchDocument["kind"][],
) {
  const normalizedQuery = normalize(query.trim());
  if (!normalizedQuery) return [];
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const contentDocuments = await getContentSearchDocuments();
  const externalSourceDocuments = getExternalSourceSearchDocuments();

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

  return [...contentDocuments, ...externalSourceDocuments, ...studentDocuments]
    .filter((document) => !kinds?.length || kinds.includes(document.kind))
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
