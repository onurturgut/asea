import type {
  ChapterContentBundle,
  ContentArtifactKind,
  ContentBlock,
  ContentDocument,
  SearchDocument,
} from "@asea/shared";

export interface MarkdownSource {
  kind: ContentArtifactKind;
  sourcePath: string;
  markdown: string;
}

function cleanInlineMarkdown(value: string) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .trim();
}

function parseFrontmatter(markdown: string): {
  metadata: Record<string, string | string[]>;
  body: string;
} {
  if (!markdown.startsWith("---")) {
    return { metadata: {}, body: markdown };
  }

  const end = markdown.indexOf("\n---", 3);
  if (end === -1) return { metadata: {}, body: markdown };

  const raw = markdown.slice(3, end).trim();
  const metadata: Record<string, string | string[]> = {};
  let activeArrayKey: string | null = null;

  for (const line of raw.split(/\r?\n/)) {
    const arrayItem = line.match(/^\s+-\s+"?(.+?)"?\s*$/);
    if (arrayItem && activeArrayKey) {
      const current = metadata[activeArrayKey];
      metadata[activeArrayKey] = [
        ...(Array.isArray(current) ? current : []),
        arrayItem[1],
      ];
      continue;
    }

    const entry = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!entry) continue;
    const [, key, rawValue] = entry;
    const value = rawValue.replace(/^["']|["']$/g, "").trim();
    if (!value) {
      metadata[key] = [];
      activeArrayKey = key;
    } else {
      metadata[key] = value;
      activeArrayKey = null;
    }
  }

  return {
    metadata,
    body: markdown.slice(end + 4).replace(/^\s+/, ""),
  };
}

function parseBlocks(body: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const lines = body.split(/\r?\n/);
  let paragraph: string[] = [];
  let list: string[] = [];
  let orderedList = false;
  let code: string[] | null = null;
  let codeLanguage = "";

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({
      type: "paragraph",
      text: cleanInlineMarkdown(paragraph.join(" ")),
    });
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    blocks.push({ type: "list", ordered: orderedList, items: list });
    list = [];
  };

  for (const line of lines) {
    const fence = line.match(/^```(.*)$/);
    if (fence) {
      flushParagraph();
      flushList();
      if (code) {
        blocks.push({
          type: "code",
          language: codeLanguage,
          code: code.join("\n"),
        });
        code = null;
        codeLanguage = "";
      } else {
        code = [];
        codeLanguage = fence[1].trim();
      }
      continue;
    }
    if (code) {
      code.push(line);
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        level: heading[1].length as 2 | 3 | 4,
        text: cleanInlineMarkdown(heading[2]),
      });
      continue;
    }

    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      flushParagraph();
      const isOrdered = Boolean(ordered);
      if (list.length && orderedList !== isOrdered) flushList();
      orderedList = isOrdered;
      list.push(cleanInlineMarkdown((unordered ?? ordered)![1]));
      continue;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", text: cleanInlineMarkdown(quote[1]) });
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    if (!line.startsWith("#") && !line.startsWith("|")) {
      paragraph.push(line.trim());
    }
  }

  flushParagraph();
  flushList();
  if (code) {
    blocks.push({
      type: "code",
      language: codeLanguage,
      code: code.join("\n"),
    });
  }
  return blocks.filter(
    (block) => block.type !== "paragraph" || block.text.length > 0,
  );
}

export function compileMarkdownDocument(
  source: MarkdownSource,
): ContentDocument {
  const { metadata, body } = parseFrontmatter(source.markdown);
  const titleMatch = body.match(/^#\s+(.+)$/m);
  const title =
    (typeof metadata.title === "string" && metadata.title) ||
    (titleMatch ? cleanInlineMarkdown(titleMatch[1]) : source.kind);
  const blocks = parseBlocks(body.replace(/^#\s+.+$/m, ""));
  const plainText = blocks
    .flatMap((block) =>
      block.type === "list"
        ? block.items
        : block.type === "code"
          ? [block.code]
          : [block.text],
    )
    .join("\n");

  const idValue =
    metadata.chapter_id ??
    metadata.exercise_id ??
    metadata.quiz_id ??
    metadata.supporting_document_id ??
    `${source.kind}:${source.sourcePath}`;

  return {
    id: Array.isArray(idValue) ? idValue[0] : idValue,
    kind: source.kind,
    title,
    description:
      blocks.find((block) => block.type === "paragraph")?.text ?? title,
    metadata,
    blocks,
    plainText,
    sourcePath: source.sourcePath,
  };
}

export function compileChapterBundle(input: {
  lesson: MarkdownSource;
  artifacts: MarkdownSource[];
  learningOutcomes: string[];
  academyId: string;
  academyTitle: string;
  volumeId: string;
  moduleId: string;
  difficulty: ChapterContentBundle["difficulty"];
  estimatedMinutes: number;
}): ChapterContentBundle {
  const lesson = compileMarkdownDocument(input.lesson);
  const artifacts = Object.fromEntries(
    input.artifacts.map((source) => [
      source.kind,
      compileMarkdownDocument(source),
    ]),
  ) as ChapterContentBundle["artifacts"];

  return {
    id: lesson.id,
    academyId: input.academyId,
    academyTitle: input.academyTitle,
    volumeId: input.volumeId,
    moduleId: input.moduleId,
    title: lesson.title,
    description: lesson.description,
    difficulty: input.difficulty,
    estimatedMinutes: input.estimatedMinutes,
    learningOutcomes: input.learningOutcomes,
    hasActivityPackage: input.artifacts.length > 0,
    lesson,
    artifacts,
  };
}

export function createContentSearchDocuments(
  bundle: ChapterContentBundle,
): SearchDocument[] {
  const documents: SearchDocument[] = [
    {
      id: bundle.id,
      kind: "chapter",
      title: bundle.title,
      excerpt: bundle.description,
      path: `/learn/${bundle.id.toLowerCase()}`,
      chapterId: bundle.id,
      searchableText: `${bundle.title}\n${bundle.description}\n${bundle.lesson.plainText}`,
    },
  ];

  for (const document of Object.values(bundle.artifacts)) {
    if (!document) continue;
    documents.push({
      id: document.id,
      kind: document.kind,
      title: document.title,
      excerpt: document.description,
      path: `/learn/${bundle.id.toLowerCase()}?tool=${document.kind}`,
      chapterId: bundle.id,
      searchableText: `${document.title}\n${document.plainText}`,
    });
  }

  return documents;
}
