import type { Metadata } from "next";
import { getStudentProgress } from "@asea/database";

import AcademiesScreen from "@/screens/academies-screen";
import { getProgrammingAcademyCatalog } from "@/server/content";
import { DEMO_USER_ID, getMongoConfig } from "@/server/database";

export const metadata: Metadata = {
  title: "Akademiler",
  description: "ASEA akademileri, modülleri ve öğrenme yolları.",
};

export const dynamic = "force-dynamic";

export default async function AcademiesPage() {
  const catalog = await getProgrammingAcademyCatalog();
  try {
    const progress = await getStudentProgress(
      getMongoConfig(),
      DEMO_USER_ID,
      "V01-C02",
    );
    if (progress && catalog.modules[0]) {
      catalog.modules[0].progressPercent = progress.progressPercent;
    }
  } catch {
    // The documented curriculum still renders when MongoDB is offline.
  }
  return <AcademiesScreen catalog={catalog} />;
}
