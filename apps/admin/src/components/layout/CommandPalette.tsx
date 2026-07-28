"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useAppState } from "@/lib/app-state";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Code2,
  FileText,
  GraduationCap,
  MessagesSquare,
  Search,
  Sparkles,
  Trophy,
} from "lucide-react";

export function CommandPalette() {
  const { paletteOpen, setPaletteOpen } = useAppState();
  const router = useRouter();
  const go = (to: string) => {
    setPaletteOpen(false);
    router.push(to);
  };
  return (
    <CommandDialog open={paletteOpen} onOpenChange={setPaletteOpen}>
      <CommandInput placeholder="Ders, kavram, quiz veya not ara…" />
      <CommandList>
        <CommandEmpty>Sonuç bulunamadı.</CommandEmpty>
        <CommandGroup heading="Öneriler">
          <CommandItem onSelect={() => go("/learn/v01-c02")}>
            <BookOpen /> V01-C02 · Bilgisayarlar Programları Nasıl Çalıştırır?
          </CommandItem>
          <CommandItem onSelect={() => go("/search")}>
            <Search /> Tüm arama sonuçlarını aç
          </CommandItem>
          <CommandItem onSelect={() => go("/notes")}>
            <FileText /> Notlarım
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Bölümler">
          <CommandItem onSelect={() => go("/dashboard")}>
            <Sparkles /> Ana Sayfa
          </CommandItem>
          <CommandItem onSelect={() => go("/interview")}>
            <MessagesSquare /> Mülakat Soruları
          </CommandItem>
          <CommandItem onSelect={() => go("/achievements")}>
            <Trophy /> Başarılar
          </CommandItem>
          <CommandItem onSelect={() => go("/profile")}>
            <GraduationCap /> Profil
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Eylemler">
          <CommandItem onSelect={() => go("/learn/v01-c02?tab=code")}>
            <Code2 /> Kod editörünü aç
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
