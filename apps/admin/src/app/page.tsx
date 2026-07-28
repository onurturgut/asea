import type { Metadata } from "next";

import LoginScreen from "@/screens/login-screen";

export const metadata: Metadata = {
  title: "Giriş",
  description: "ASEA öğrenci uygulamasına Google ile giriş yap.",
};

export default function LoginPage() {
  return <LoginScreen />;
}
