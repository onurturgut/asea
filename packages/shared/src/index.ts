export type ContentArtifactKind =
  | "lesson"
  | "reading-guide"
  | "concept-summary"
  | "examples"
  | "exercises"
  | "debugging"
  | "lab"
  | "quiz"
  | "quiz-answer-key"
  | "interview"
  | "flashcards"
  | "english-terms"
  | "mentor"
  | "assessment"
  | "project"
  | "challenge"
  | "visualization";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "quote"; text: string };

export interface ContentDocument {
  id: string;
  kind: ContentArtifactKind;
  title: string;
  description: string;
  metadata: Record<string, string | string[]>;
  blocks: ContentBlock[];
  plainText: string;
  sourcePath: string;
}

export interface ChapterContentBundle {
  id: string;
  academyId: string;
  academyTitle: string;
  volumeId: string;
  moduleId: string;
  title: string;
  description: string;
  difficulty: "Başlangıç" | "Orta" | "İleri";
  estimatedMinutes: number;
  learningOutcomes: string[];
  hasActivityPackage: boolean;
  lesson: ContentDocument;
  artifacts: Partial<Record<ContentArtifactKind, ContentDocument>>;
}

export interface ChapterNavigationItem {
  id: string;
  title: string;
  path: string;
  moduleId: string;
  moduleTitle: string;
  estimatedMinutes: number;
  hasActivityPackage: boolean;
}

export interface AcademyChapterSummary {
  id: string;
  title: string;
  available: boolean;
  path?: string;
}

export interface AcademyModule {
  id: string;
  title: string;
  purpose: string;
  chapters: AcademyChapterSummary[];
  projectId: string;
  projectTitle: string;
  progressPercent: number;
  status: "active" | "next" | "locked";
}

export interface AcademyCatalog {
  id: string;
  title: string;
  description: string;
  volumeId: string;
  volumeTitle: string;
  modules: AcademyModule[];
}

export interface ProjectSummary {
  id: string;
  title: string;
  difficulty: string;
  goal: string;
  requiredChapters: string;
  estimatedDuration: string;
  locked: boolean;
}

export interface StudentShortNote {
  id: string;
  userId: string;
  chapterId: string;
  sectionId?: string;
  text: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export interface StudentLongNote {
  id: string;
  userId: string;
  title: string;
  body: string;
  chapterId?: string;
  linkedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface StudentProgress {
  userId: string;
  chapterId: string;
  activeSectionId: string;
  completedSectionIds: string[];
  progressPercent: number;
  xp: number;
  updatedAt: string;
}

export interface SearchDocument {
  id: string;
  kind:
    | ContentArtifactKind
    | "chapter"
    | "academy"
    | "module"
    | "short-note"
    | "long-note"
    | "project"
    | "external-source";
  title: string;
  excerpt: string;
  path: string;
  chapterId?: string;
  locked?: boolean;
  sourceOwner?: string;
  sourceType?: string;
  sourceLanguage?: string;
  sourceLicense?: string;
  sourceVerification?: string;
  qualityScore?: number;
  searchableText: string;
}
