import type { Metadata } from "next";

import NotesScreen from "@/screens/notes-screen";

export const metadata: Metadata = {
  title: "Notlarım",
  description: "Uzun format öğrenci notları.",
};

export default function NotesPage() {
  return <NotesScreen />;
}
