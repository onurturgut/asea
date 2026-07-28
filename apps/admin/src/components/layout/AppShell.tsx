"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  BookOpen,
  Bookmark,
  Compass,
  FileText,
  FolderKanban,
  GraduationCap,
  Home,
  Moon,
  MessagesSquare,
  Search,
  Sparkles,
  StickyNote,
  Sun,
  Trophy,
  User,
} from "lucide-react";
import type { ReactNode } from "react";
import { useAppState } from "@/lib/app-state";
import { activeContext, student } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CommandPalette } from "./CommandPalette";

const NAV = [
  { to: "/dashboard", label: "Ana Sayfa", icon: Home },
  { to: "/academies", label: "Akademiler", icon: GraduationCap },
  { to: "/search", label: "Arama", icon: Search },
  { to: "/projects", label: "Projeler", icon: FolderKanban },
  { to: "/interview", label: "Mülakat", icon: MessagesSquare },
  { to: "/notes", label: "Notlarım", icon: FileText },
  { to: "/short-notes", label: "Kısa Notlar", icon: StickyNote },
  { to: "/achievements", label: "Başarılar", icon: Trophy },
  { to: "/profile", label: "Profil", icon: User },
] as const;

function Wordmark() {
  return (
    <Link
      href="/dashboard"
      className="focus-ring inline-flex items-center gap-2 rounded-md px-1"
    >
      <span className="grid size-7 place-items-center rounded-md bg-foreground text-background">
        <Sparkles className="size-4" />
      </span>
      <span className="text-[15px] font-bold tracking-tight">ASEA</span>
    </Link>
  );
}

interface LessonContext {
  academy: string;
  chapter: string;
  path: string;
}

function TopBar({ lessonContext }: { lessonContext?: LessonContext }) {
  const { theme, toggleTheme, xp, streak, setPaletteOpen } = useAppState();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b hairline bg-background/80 px-4 backdrop-blur">
      <Wordmark />
      <div className="hidden items-center gap-2 text-xs text-muted-foreground md:flex">
        <span className="rounded-full bg-muted px-2 py-0.5 font-medium">
          {lessonContext?.academy ?? activeContext.academy}
        </span>
        <span className="text-muted-foreground/50">/</span>
        <span className="max-w-[260px] truncate">
          {lessonContext?.chapter ?? activeContext.chapter}
        </span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={() => setPaletteOpen(true)}
          className="focus-ring group flex h-9 w-64 items-center gap-2 rounded-lg border hairline bg-surface-2/60 px-3 text-sm text-muted-foreground transition hover:bg-surface-2"
        >
          <Search className="size-4" />
          <span className="flex-1 text-left">Ara veya komut çalıştır…</span>
          <kbd className="rounded border hairline bg-background px-1.5 py-0.5 text-[10px] font-medium">
            ⌘K
          </kbd>
        </button>
        <div className="hidden items-center gap-1 rounded-full border hairline bg-surface px-2 py-1 text-xs font-medium lg:flex">
          <Sparkles className="size-3.5 text-tool-amber" />
          <span>{xp.toLocaleString("tr-TR")} XP</span>
          <span className="mx-1 text-muted-foreground/40">·</span>
          <span className="text-tool-rose">🔥 {streak} gün</span>
        </div>
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Temayı değiştir"
              >
                {theme === "light" ? (
                  <Moon className="size-4" />
                ) : (
                  <Sun className="size-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Temayı değiştir</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Bildirimler">
                <Bell className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Bildirimler</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Link
          href="/profile"
          className="focus-ring grid size-9 place-items-center rounded-full bg-primary text-[13px] font-semibold text-primary-foreground"
          aria-label={`${student.name} profili`}
        >
          {student.avatar}
        </Link>
      </div>
    </header>
  );
}

function SideNav({ lessonContext }: { lessonContext?: LessonContext }) {
  const pathname = usePathname();
  return (
    <nav className="flex w-[220px] shrink-0 flex-col gap-0.5 border-r hairline bg-sidebar/40 p-3">
      {NAV.map((item) => {
        const Icon = item.icon;
        const active =
          pathname === item.to ||
          (item.to !== "/dashboard" && pathname.startsWith(item.to));
        return (
          <Link
            key={item.to}
            href={item.to}
            className={`focus-ring flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
              active
                ? "bg-surface text-foreground shadow-[0_1px_0_var(--color-hairline)]"
                : "text-muted-foreground hover:bg-surface/70 hover:text-foreground"
            }`}
          >
            <Icon className={`size-4 ${active ? "text-tool-indigo" : ""}`} />
            <span>{item.label}</span>
          </Link>
        );
      })}
      <div className="mt-auto rounded-xl border hairline bg-surface p-3 text-xs text-muted-foreground">
        <div className="mb-1 flex items-center gap-1.5 text-foreground">
          <Bookmark className="size-3.5 text-tool-violet" />
          <span className="font-semibold">Aktif ders</span>
        </div>
        <div className="line-clamp-2 leading-snug">
          {lessonContext?.chapter ?? activeContext.chapter}
        </div>
        <Link
          href={lessonContext?.path ?? "/learn/v01-c02"}
          className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-tool-indigo hover:underline"
        >
          <BookOpen className="size-3" /> Derse devam et
        </Link>
      </div>
    </nav>
  );
}

export function AppShell({
  children,
  hideSideNav = false,
  lessonContext,
}: {
  children: ReactNode;
  hideSideNav?: boolean;
  lessonContext?: LessonContext;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <TopBar lessonContext={lessonContext} />
      <div className="flex flex-1 min-h-0">
        {!hideSideNav && <SideNav lessonContext={lessonContext} />}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <CommandPalette />
    </div>
  );
}

export function ExposedNavAsBreadcrumb({ crumbs }: { crumbs: string[] }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Compass className="size-3.5" />
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-muted-foreground/40">/</span>}
          <span className={i === crumbs.length - 1 ? "text-foreground" : ""}>
            {c}
          </span>
        </span>
      ))}
    </div>
  );
}
