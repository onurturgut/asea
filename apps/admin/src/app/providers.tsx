"use client";

import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import { AppStateProvider } from "@/lib/app-state";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppStateProvider>
      {children}
      <Toaster position="bottom-right" />
    </AppStateProvider>
  );
}
