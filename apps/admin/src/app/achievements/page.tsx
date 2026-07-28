import type { Metadata } from "next";

import AchievementsScreen from "@/screens/achievements-screen";

export const metadata: Metadata = {
  title: "Başarılar",
  description: "Rozetler, kişisel rekorlar ve öğrenci gelişimi.",
};

export default function AchievementsPage() {
  return <AchievementsScreen />;
}
