import { NextResponse } from "next/server";

import { getChapterContent } from "@/server/content";

type MentorMode = "hint" | "explain" | "example";

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "");
}

function findRelevantExcerpt(plainText: string, message: string) {
  const terms = normalize(message)
    .split(/\s+/)
    .filter((term) => term.length > 3);
  const paragraphs = plainText
    .split(/\n+/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 40);

  return (
    paragraphs
      .map((paragraph) => ({
        paragraph,
        score: terms.reduce(
          (score, term) =>
            score + (normalize(paragraph).includes(term) ? 1 : 0),
          0,
        ),
      }))
      .sort((a, b) => b.score - a.score)[0]?.paragraph ??
    "Programın pasif temsili ile çalışan sürecin yürütme durumunu birbirinden ayır."
  );
}

function createResponse(mode: MentorMode, message: string, excerpt: string) {
  if (!message.trim()) {
    return "Önce mevcut düşünceni veya denemeni bir-iki cümleyle yaz. Ardından yalnızca bir sonraki adımı birlikte bulalım.";
  }

  if (mode === "example") {
    return `Teslim cevabı olmayan küçük bir örnek kur: önce girdiyi, ardından uygulanan kuralı ve son durumda neyin değiştiğini yaz.\n\nDokümandaki dayanak: ${excerpt}\n\nŞimdi aynı modeli kendi soruna uyarlayıp sonucu tek cümleyle açıkla.`;
  }

  if (mode === "explain") {
    return `Kavramsal çerçeve: ${excerpt}\n\nBunu ezberlemek yerine kavramı kendi cümlenle yeniden kur ve küçük bir örnek ekle.`;
  }

  return `İpucu: ${excerpt}\n\nTek yönlendirici soru: Bu bilgiyi uyguladığında ilk değişen değer veya karar hangisi olur? Tahminini yaz.`;
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    message?: string;
    mode?: MentorMode;
    chapterId?: string;
  };

  if (!body.chapterId) {
    return NextResponse.json(
      { error: "chapterId gereklidir." },
      { status: 400 },
    );
  }

  const bundle = await getChapterContent(body.chapterId);
  if (!bundle) {
    return NextResponse.json({ error: "Ders bulunamadı." }, { status: 404 });
  }
  const mentorDocument = bundle.artifacts.mentor;
  const message = body.message ?? "";
  const mode = body.mode ?? "hint";
  const excerpt = findRelevantExcerpt(
    `${bundle.lesson.plainText}\n${mentorDocument?.plainText ?? ""}`,
    message,
  );

  return NextResponse.json({
    answer: createResponse(mode, message, excerpt),
    mode: "documentation-fallback",
    sourcePath: mentorDocument?.sourcePath ?? bundle.lesson.sourcePath,
  });
}
