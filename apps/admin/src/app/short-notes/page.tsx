import type { Metadata } from "next";

import ShortNotesScreen from "@/screens/short-notes-screen";

export const metadata: Metadata = {
  title: "Kısa Notlar",
  description: "Derslerden tek tıkla kaydedilen öğrenci notları.",
};

export default function ShortNotesPage() {
  return <ShortNotesScreen />;
}
