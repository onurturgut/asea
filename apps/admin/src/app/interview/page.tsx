import type { Metadata } from "next";

import InterviewScreen from "@/screens/interview-screen";

export const metadata: Metadata = {
  title: "Mülakat Soruları",
  description: "Konu bazlı yazılım mülakatı pratiği.",
};

export default function InterviewPage() {
  return <InterviewScreen />;
}
