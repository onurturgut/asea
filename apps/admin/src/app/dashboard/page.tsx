import type { Metadata } from "next";

import DashboardScreen from "@/screens/dashboard-screen";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description: "Bugünün çalışma planı, ilerleme ve devam edilecek ders.",
};

export default function DashboardPage() {
  return <DashboardScreen />;
}
