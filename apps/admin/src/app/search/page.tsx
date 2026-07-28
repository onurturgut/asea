import type { Metadata } from "next";

import SearchScreen from "@/screens/search-screen";

export const metadata: Metadata = {
  title: "Arama",
  description: "Dersler, kavramlar ve öğrenci notları içinde arama.",
};

export default function SearchPage() {
  return <SearchScreen />;
}
