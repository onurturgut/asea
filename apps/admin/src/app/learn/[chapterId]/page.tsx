import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LearnScreen from "@/screens/learn-screen";
import { getChapterNavigation, getChapterPageData } from "@/server/content";

type LearnPageProps = {
  params: Promise<{ chapterId: string }>;
  searchParams: Promise<{ tab?: string | string[] }>;
};

export async function generateStaticParams() {
  const chapters = await getChapterNavigation();
  return chapters.map((chapter) => ({
    chapterId: chapter.id.toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: LearnPageProps): Promise<Metadata> {
  const { chapterId } = await params;
  const pageData = await getChapterPageData(chapterId);
  if (!pageData) return { title: "Ders bulunamadı" };
  return {
    title: `${pageData.content.id} · ${pageData.content.title}`,
    description: pageData.content.description,
  };
}

export default async function LearnPage({
  params,
  searchParams,
}: LearnPageProps) {
  const [{ chapterId }, { tab }] = await Promise.all([params, searchParams]);
  const pageData = await getChapterPageData(chapterId);
  if (!pageData) notFound();

  return (
    <LearnScreen
      initialTab={tab === "code" ? "code" : "lesson"}
      {...pageData}
    />
  );
}
