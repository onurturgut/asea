import type { Metadata } from "next";

import ProfileScreen from "@/screens/profile-screen";

export const metadata: Metadata = {
  title: "Profil",
  description: "Öğrenci profili, beceriler ve öğrenme tercihleri.",
};

export default function ProfilePage() {
  return <ProfileScreen />;
}
