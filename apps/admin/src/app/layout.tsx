import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "./providers";
import "../styles.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "ASEA — Öğrenci Çalışma Uygulaması",
    template: "%s · ASEA",
  },
  description:
    "ASEA yazılım mühendisliği akademisinin öğrenci çalışma uygulaması. Dersler, kod editörü, AI Mentor ve rafine bir öğrenme deneyimi.",
  authors: [{ name: "ASEA" }],
  openGraph: {
    title: "ASEA — Öğrenci Çalışma Uygulaması",
    description:
      "Sakin, odaklanmayı destekleyen bir yazılım mühendisliği öğrenme ortamı.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
