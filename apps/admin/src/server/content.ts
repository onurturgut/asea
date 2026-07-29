import "server-only";

import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

import {
  compileChapterBundle,
  compileMarkdownDocument,
  createContentSearchDocuments,
  type MarkdownSource,
} from "@asea/content-engine";
import type {
  AcademyCatalog,
  AcademyModule,
  ChapterContentBundle,
  ChapterNavigationItem,
  ContentArtifactKind,
  ContentDocument,
  ProjectSummary,
  SearchDocument,
} from "@asea/shared";

const CHAPTERS_DIRECTORY = path.join("docs", "01-programming", "chapters");
const CONTENT_DIRECTORY = path.join(
  "docs",
  "01-programming",
  "programming-fundamentals",
  "content",
);

const ARTIFACT_FILES: Array<[ContentArtifactKind, readonly string[]]> = [
  ["reading-guide", ["reading-guide.md"]],
  ["concept-summary", ["concept-summary.md", "summary.md"]],
  ["examples", ["examples.md"]],
  ["exercises", ["exercises.md"]],
  ["debugging", ["debugging.md"]],
  ["lab", ["lab.md"]],
  ["quiz", ["quiz.md"]],
  ["quiz-answer-key", ["quiz-answer-key.md"]],
  ["interview", ["interview.md"]],
  ["flashcards", ["flashcards.md"]],
  ["mentor", ["ai-mentor.md"]],
  ["assessment", ["assessment-rubric.md"]],
  ["project", ["mini-project.md"]],
  ["challenge", ["challenge.md"]],
  ["visualization", ["visualization-notes.md"]],
];

interface CanonicalChapterRecord {
  id: string;
  title: string;
  fileName: string;
  difficulty: ChapterContentBundle["difficulty"];
  estimatedMinutes: number;
}

const resolveWorkspaceRoot = cache(async () => {
  const candidates = [
    process.cwd(),
    path.resolve(process.cwd(), ".."),
    path.resolve(process.cwd(), "../.."),
  ];
  for (const candidate of candidates) {
    try {
      await access(path.join(candidate, "docs", "01-programming"));
      return candidate;
    } catch {
      // Try the next monorepo-relative candidate.
    }
  }
  throw new Error("ASEA workspace root could not be resolved.");
});

async function readSource(
  root: string,
  kind: ContentArtifactKind,
  relativePath: string,
): Promise<MarkdownSource> {
  return {
    kind,
    sourcePath: relativePath.replaceAll("\\", "/"),
    markdown: await readFile(path.join(root, relativePath), "utf8"),
  };
}

async function readOptionalSource(
  root: string,
  kind: ContentArtifactKind,
  directory: string,
  candidates: readonly string[],
) {
  for (const fileName of candidates) {
    const relativePath = path.join(directory, fileName);
    try {
      return await readSource(root, kind, relativePath);
    } catch (error) {
      const code =
        error instanceof Error && "code" in error
          ? (error as NodeJS.ErrnoException).code
          : undefined;
      if (code !== "ENOENT") throw error;
    }
  }
  return null;
}

interface EnglishTermRecord {
  term: string;
  turkish: string;
  explanation: string;
  firstUseContext?: string;
  example?: string;
  confusedWith?: string;
  revisitAt?: string;
}

async function readEnglishTermsSource(root: string, directory: string) {
  const relativePath = path.join(directory, "english-terms.json");
  try {
    const raw = await readFile(path.join(root, relativePath), "utf8");
    const payload = JSON.parse(raw) as {
      chapterId?: string;
      terms?: EnglishTermRecord[];
    };
    const terms = Array.isArray(payload.terms) ? payload.terms : [];
    if (!terms.length) return null;

    const body = terms
      .map((term) => {
        const details = [
          `**Türkçe:** ${term.turkish}`,
          term.firstUseContext
            ? `**İlk kullanım:** ${term.firstUseContext}`
            : null,
          term.example ? `**Örnek:** ${term.example}` : null,
          term.confusedWith
            ? `**Karıştırılabilir:** ${term.confusedWith}`
            : null,
          term.revisitAt ? `**Tekrar noktası:** ${term.revisitAt}` : null,
        ].filter((value): value is string => Boolean(value));

        return [
          `## ${term.term}`,
          "",
          term.explanation,
          "",
          ...details,
        ].join("\n");
      })
      .join("\n\n");

    return {
      kind: "english-terms" as const,
      sourcePath: relativePath.replaceAll("\\", "/"),
      markdown: [
        "---",
        'document_type: "english-terms"',
        `chapter_id: "${payload.chapterId ?? "unknown"}"`,
        'title: "İngilizce Terimler"',
        "---",
        "",
        "# İngilizce Terimler",
        "",
        "Bu chapter'da kullanılan teknik terimleri bağlamlarıyla tekrar edin.",
        "",
        body,
      ].join("\n"),
    } satisfies MarkdownSource;
  } catch (error) {
    const code =
      error instanceof Error && "code" in error
        ? (error as NodeJS.ErrnoException).code
        : undefined;
    if (code === "ENOENT") return null;
    throw error;
  }
}

function scalarMetadata(document: ContentDocument, key: string, fallback = "") {
  const value = document.metadata[key];
  return typeof value === "string" ? value : fallback;
}

function parseEstimatedMinutes(value: string) {
  const amount = Number.parseFloat(value.replace(",", "."));
  if (!Number.isFinite(amount)) return 60;
  if (/hour|saat/i.test(value)) return Math.round(amount * 60);
  return Math.round(amount);
}

function translateDifficulty(
  value: string,
): ChapterContentBundle["difficulty"] {
  if (/advanced|ileri/i.test(value)) return "İleri";
  if (/intermediate|orta/i.test(value)) return "Orta";
  return "Başlangıç";
}

function chapterNumber(chapterId: string) {
  return Number.parseInt(chapterId.match(/C(\d+)$/i)?.[1] ?? "0", 10);
}

function moduleIdForChapter(chapterId: string) {
  const number = chapterNumber(chapterId);
  if (number <= 4) return "V01-M01";
  if (number <= 8) return "V01-M02";
  if (number <= 12) return "V01-M03";
  if (number <= 16) return "V01-M04";
  if (number <= 20) return "V01-M05";
  if (number <= 23) return "V01-M06";
  if (number <= 28) return "V01-M07";
  if (number === 29 || number === 38) return "V01-M08";
  if (number <= 31) return "V01-M09";
  if (number <= 33) return "V01-M10";
  if (number <= 35) return "V01-M11";
  return "V01-M12";
}

function normalizeChapterId(value: string) {
  const match = value.toUpperCase().match(/^V01-C(\d{1,2})$/);
  return match ? `V01-C${match[1].padStart(2, "0")}` : value.toUpperCase();
}

function extractLearningOutcomes(document: ContentDocument) {
  const headingIndex = document.blocks.findIndex(
    (block) =>
      block.type === "heading" &&
      /learning objectives|öğrenme (amaç|hedef|çıktı)/i.test(block.text),
  );
  if (headingIndex >= 0) {
    const outcomes = document.blocks
      .slice(headingIndex + 1)
      .find((block) => block.type === "list");
    if (outcomes?.type === "list") return outcomes.items.slice(0, 6);
  }
  const metadata = document.metadata.learning_outcomes;
  if (Array.isArray(metadata) && metadata.length) return metadata;
  return [
    `${document.title} konusunun temel kavramlarını açıklayabilme`,
    "Kavramları küçük bir örnek üzerinde uygulayabilme",
  ];
}

const getCanonicalChapterRecords = cache(
  async (): Promise<CanonicalChapterRecord[]> => {
    const root = await resolveWorkspaceRoot();
    const fileNames = (await readdir(path.join(root, CHAPTERS_DIRECTORY)))
      .filter((fileName) => /^\d{2}-.+\.md$/.test(fileName))
      .sort();
    const documents = await Promise.all(
      fileNames.map(async (fileName) => {
        const relativePath = path.join(CHAPTERS_DIRECTORY, fileName);
        const source = await readSource(root, "lesson", relativePath);
        return {
          fileName,
          document: compileMarkdownDocument(source),
        };
      }),
    );

    return documents.map(({ fileName, document }) => ({
      id: document.id,
      title: document.title,
      fileName,
      difficulty: translateDifficulty(
        scalarMetadata(document, "difficulty", "Beginner"),
      ),
      estimatedMinutes: parseEstimatedMinutes(
        scalarMetadata(document, "estimated_time", "60 minutes"),
      ),
    }));
  },
);

export const getChapterContent = cache(
  async (requestedChapterId: string): Promise<ChapterContentBundle | null> => {
    const chapterId = normalizeChapterId(requestedChapterId);
    const records = await getCanonicalChapterRecords();
    const record = records.find((chapter) => chapter.id === chapterId);
    if (!record) return null;

    const root = await resolveWorkspaceRoot();
    const lesson = await readSource(
      root,
      "lesson",
      path.join(CHAPTERS_DIRECTORY, record.fileName),
    );
    const packageDirectory = path.join(
      CONTENT_DIRECTORY,
      chapterId.toLowerCase(),
    );
    const artifacts = (
      await Promise.all([
        ...ARTIFACT_FILES.map(([kind, candidates]) =>
          readOptionalSource(root, kind, packageDirectory, candidates),
        ),
        readEnglishTermsSource(root, packageDirectory),
      ])
    ).filter((source): source is MarkdownSource => source !== null);
    const lessonDocument = compileMarkdownDocument(lesson);

    return compileChapterBundle({
      lesson,
      artifacts,
      learningOutcomes: extractLearningOutcomes(lessonDocument),
      academyId: "software-engineering",
      academyTitle: "Yazılım Mühendisliği",
      volumeId: "V01",
      moduleId: moduleIdForChapter(chapterId),
      difficulty: record.difficulty,
      estimatedMinutes: record.estimatedMinutes,
    });
  },
);

export async function getV01C02Content() {
  const content = await getChapterContent("V01-C02");
  if (!content) throw new Error("V01-C02 content is missing.");
  return content;
}

function field(block: string, name: string) {
  return (
    block.match(new RegExp(`^- \\*\\*${name}:\\*\\*\\s+(.+)$`, "m"))?.[1] ?? ""
  )
    .replaceAll("`", "")
    .trim();
}

function splitCommaList(value: string) {
  return value
    .replace(/\.$/, "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseModuleMap(
  markdown: string,
  chapterRecords: CanonicalChapterRecord[],
): AcademyModule[] {
  const availableChapters = new Map(
    chapterRecords.map((chapter) => [chapter.id, chapter]),
  );
  return markdown
    .split(/^## Module /m)
    .slice(1)
    .map((section, index) => {
      const [heading = "", ...bodyParts] = section.split(/\r?\n/);
      const body = bodyParts.join("\n");
      const chapterIds = splitCommaList(field(body, "Chapter IDs"));
      const chapterTitles = splitCommaList(field(body, "Chapters")).map(
        (entry) => entry.replace(/^\d+\s+/, ""),
      );
      const projectTitle = field(body, "Projects").replace(/\.$/, "");

      return {
        id: field(body, "Module ID"),
        title: heading.trim(),
        purpose: field(body, "Purpose"),
        chapters: chapterIds.map((id, chapterIndex) => {
          const chapter = availableChapters.get(id);
          return {
            id,
            title: chapter?.title ?? chapterTitles[chapterIndex] ?? id,
            available: Boolean(chapter),
            path: chapter ? `/learn/${id.toLowerCase()}` : undefined,
          };
        }),
        projectId: field(body, "Project ID"),
        projectTitle,
        progressPercent: index === 0 ? 25 : 0,
        status: index === 0 ? "active" : "next",
      };
    });
}

export const getProgrammingAcademyCatalog = cache(
  async (): Promise<AcademyCatalog> => {
    const root = await resolveWorkspaceRoot();
    const [moduleMap, chapterRecords] = await Promise.all([
      readFile(
        path.join(root, "docs", "01-programming", "module-map.md"),
        "utf8",
      ),
      getCanonicalChapterRecords(),
    ]);

    return {
      id: "software-engineering",
      title: "Yazılım Mühendisliği",
      description:
        "Temelden başlayıp üretim seviyesinde yazılım geliştirmeye uzanan ASEA öğrenme yolu.",
      volumeId: "V01",
      volumeTitle: "Programlama Temelleri",
      modules: parseModuleMap(moduleMap, chapterRecords),
    };
  },
);

export const getChapterNavigation = cache(
  async (): Promise<ChapterNavigationItem[]> => {
    const [catalog, records] = await Promise.all([
      getProgrammingAcademyCatalog(),
      getCanonicalChapterRecords(),
    ]);
    const recordMap = new Map(records.map((record) => [record.id, record]));
    return catalog.modules.flatMap((module) =>
      module.chapters.flatMap((chapter) => {
        const record = recordMap.get(chapter.id);
        if (!record || !chapter.path) return [];
        return [
          {
            id: record.id,
            title: record.title,
            path: chapter.path,
            moduleId: module.id,
            moduleTitle: module.title,
            estimatedMinutes: record.estimatedMinutes,
            hasActivityPackage: record.id !== "V01-C18",
          },
        ];
      }),
    );
  },
);

export async function getChapterPageData(chapterId: string) {
  const [content, navigation] = await Promise.all([
    getChapterContent(chapterId),
    getChapterNavigation(),
  ]);
  if (!content) return null;
  const index = navigation.findIndex((chapter) => chapter.id === content.id);
  return {
    content,
    navigation,
    previousChapter: index > 0 ? navigation[index - 1] : null,
    nextChapter:
      index >= 0 && index < navigation.length - 1
        ? navigation[index + 1]
        : null,
  };
}

export async function getContentSearchDocuments(): Promise<SearchDocument[]> {
  const [navigation, catalog, projects] = await Promise.all([
    getChapterNavigation(),
    getProgrammingAcademyCatalog(),
    getProgrammingProjects(),
  ]);
  const bundles = (
    await Promise.all(
      navigation.map((chapter) => getChapterContent(chapter.id)),
    )
  ).filter((bundle): bundle is ChapterContentBundle => bundle !== null);
  const catalogDocuments: SearchDocument[] = [
    {
      id: catalog.id,
      kind: "academy",
      title: catalog.title,
      excerpt: catalog.description,
      path: "/academies",
      searchableText: `${catalog.title}\n${catalog.description}\n${catalog.volumeTitle}`,
    },
    ...catalog.modules.map((module): SearchDocument => ({
      id: module.id,
      kind: "module",
      title: module.title,
      excerpt: module.purpose,
      path: "/academies",
      searchableText: `${module.title}\n${module.purpose}\n${module.chapters
        .map((chapter) => `${chapter.id} ${chapter.title}`)
        .join("\n")}`,
    })),
  ];
  const projectDocuments: SearchDocument[] = projects.map((project) => ({
    id: project.id,
    kind: "project",
    title: project.title,
    excerpt: project.goal,
    path: "/projects",
    locked: project.locked,
    searchableText: `${project.title}\n${project.goal}\n${project.requiredChapters}`,
  }));

  return [
    ...bundles.flatMap((bundle) => createContentSearchDocuments(bundle)),
    ...catalogDocuments,
    ...projectDocuments,
  ];
}

export async function getProgrammingProjects(): Promise<ProjectSummary[]> {
  const root = await resolveWorkspaceRoot();
  const projectsMarkdown = await readFile(
    path.join(root, "docs", "01-programming", "projects.md"),
    "utf8",
  );
  return projectsMarkdown
    .split(/^## /m)
    .slice(1)
    .filter((section) => /^(Mini Project|Capstone Project)/.test(section))
    .map((section) => {
      const [heading = "", ...bodyParts] = section.split(/\r?\n/);
      const body = bodyParts.join("\n");
      return {
        id: field(body, "Project ID"),
        title: heading.trim(),
        difficulty:
          field(body, "Difficulty") || field(body, "Project Level") || "Orta",
        goal: field(body, "Goal") || field(body, "Purpose"),
        requiredChapters:
          field(body, "Required Chapters") ||
          field(body, "Prerequisites") ||
          "Önceki proje ve chapter kapıları",
        estimatedDuration: field(body, "Estimated Duration"),
        locked: true,
      };
    });
}
