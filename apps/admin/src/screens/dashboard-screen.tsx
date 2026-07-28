"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import {
  activeContext,
  badges,
  dailyPlan,
  projects,
  recentActivity,
  skills,
  student,
} from "@/lib/mock-data";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Flame,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useAppState } from "@/lib/app-state";

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function Sparkline() {
  const points = [12, 18, 14, 22, 26, 20, 32, 28, 36, 42, 38, 46];
  const max = Math.max(...points);
  const d = points
    .map((v, i) => `${(i * 100) / (points.length - 1)},${40 - (v / max) * 34}`)
    .join(" ");
  return (
    <svg
      viewBox="0 0 100 40"
      className="h-10 w-full"
      preserveAspectRatio="none"
    >
      <polyline
        fill="none"
        stroke="var(--tool-indigo)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={d}
      />
      <polyline
        fill="color-mix(in oklab, var(--tool-indigo) 12%, transparent)"
        stroke="none"
        points={`0,40 ${d} 100,40`}
      />
    </svg>
  );
}

export default function DashboardScreen() {
  const { xp, streak } = useAppState();
  const todayLabel = new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  return (
    <AppShell>
      <div className="mx-auto max-w-[1400px] p-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground">İyi çalışmalar,</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">
              {student.name}.
            </h1>
          </div>
          <div className="text-right text-xs text-muted-foreground">
            <div suppressHydrationWarning>Bugün · {todayLabel}</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Continue lesson hero */}
          <div className="col-span-12 lg:col-span-8">
            <Link
              href="/learn/v01-c02"
              className="focus-ring group relative block overflow-hidden rounded-2xl border hairline bg-surface p-6 transition hover:bg-surface-2"
            >
              <div className="absolute right-6 top-6 text-tool-indigo">
                <BookOpen className="size-5" />
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {activeContext.academy} · {activeContext.module}
              </div>
              <h2 className="mt-3 max-w-[70%] text-2xl font-semibold tracking-tight">
                {activeContext.chapter}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Son kaldığın yer:{" "}
                <span className="text-foreground">{activeContext.section}</span>{" "}
                · ≈ {activeContext.remainingMin} dk kaldı
              </p>
              <div className="mt-5 flex items-center gap-4">
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>Chapter ilerlemesi</span>
                    <span>%38</span>
                  </div>
                  <Progress value={38} className="h-1.5" />
                </div>
                <span className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition group-hover:gap-3">
                  Derse devam et <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </div>

          {/* Streak / XP */}
          <div className="col-span-12 grid grid-cols-2 gap-6 lg:col-span-4 lg:grid-cols-1">
            <div className="rounded-2xl border hairline bg-surface p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  Çalışma serisi
                </span>
                <Flame className="size-4 text-tool-rose" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <div className="text-3xl font-semibold tracking-tight">
                  {streak}
                </div>
                <div className="text-sm text-muted-foreground">gün</div>
              </div>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-6 flex-1 rounded-sm"
                    style={{
                      background:
                        i < 12 ? "var(--tool-rose)" : "var(--color-muted)",
                      opacity: i < 12 ? 0.35 + (i / 14) * 0.6 : 1,
                    }}
                  />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Son 14 gündeki oturumların
              </p>
            </div>
            <div className="rounded-2xl border hairline bg-surface p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  Bu haftaki XP
                </span>
                <TrendingUp className="size-4 text-tool-indigo" />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <div className="text-3xl font-semibold tracking-tight">
                  +{460}
                </div>
                <div className="text-xs text-muted-foreground">
                  geçen haftaya göre +18%
                </div>
              </div>
              <Sparkline />
              <p className="text-[11px] text-muted-foreground">
                Toplam {xp.toLocaleString("tr-TR")} XP
              </p>
            </div>
          </div>

          {/* Today plan */}
          <div className="col-span-12 lg:col-span-8">
            <Section
              title="Bugünün planı"
              action={
                <span className="text-xs text-muted-foreground">
                  4 madde · ≈ 46 dk
                </span>
              }
            >
              <div className="divide-y hairline overflow-hidden rounded-2xl border hairline bg-surface">
                {dailyPlan.map((d, i) => (
                  <div key={d.id} className="flex items-center gap-4 px-5 py-4">
                    <div className="grid size-8 place-items-center rounded-full border hairline text-[11px] font-semibold text-muted-foreground">
                      {i + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-medium">
                        {d.title}
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        {d.kind} · {d.minutes} dk
                      </div>
                    </div>
                    <button className="focus-ring rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground">
                      Aç
                    </button>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Skills */}
          <div className="col-span-12 lg:col-span-4">
            <Section title="Beceri seviyeleri">
              <div className="space-y-3 rounded-2xl border hairline bg-surface p-5">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground">L{s.level}</span>
                    </div>
                    <Progress value={s.next} className="h-1" />
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Review + Projects */}
          <div className="col-span-12 grid grid-cols-1 gap-6 lg:col-span-8 lg:grid-cols-2">
            <div className="rounded-2xl border hairline bg-surface p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <Calendar className="size-4 text-tool-cyan" /> Tekrar zamanı
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b hairline pb-2">
                  <span>Değişkenler ve tipler</span>
                  <span className="text-xs text-muted-foreground">bugün</span>
                </li>
                <li className="flex justify-between border-b hairline pb-2">
                  <span>Fonksiyon parametreleri</span>
                  <span className="text-xs text-muted-foreground">yarın</span>
                </li>
                <li className="flex justify-between">
                  <span>Kapsamlar (scope)</span>
                  <span className="text-xs text-muted-foreground">2 gün</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border hairline bg-surface p-5">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="size-4 text-tool-violet" /> Aktif projeler
              </div>
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.name}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="font-medium">{p.name}</span>
                      <span className="text-muted-foreground">
                        {p.kind} · %{p.progress}
                      </span>
                    </div>
                    <Progress value={p.progress} className="h-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="col-span-12 lg:col-span-4">
            <Section
              title="Son rozetler"
              action={
                <Link
                  href="/achievements"
                  className="text-xs text-tool-indigo hover:underline"
                >
                  Tümü
                </Link>
              }
            >
              <div className="grid grid-cols-2 gap-2 rounded-2xl border hairline bg-surface p-3">
                {badges.slice(0, 4).map((b) => (
                  <div
                    key={b.name}
                    className="rounded-lg border hairline bg-surface-2/60 p-3"
                  >
                    <Award className="mb-1.5 size-4 text-tool-amber" />
                    <div className="text-[13px] font-medium leading-tight">
                      {b.name}
                    </div>
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      {b.earnedAt}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Recent activity */}
          <div className="col-span-12">
            <Section title="Son aktiviteler">
              <ol className="overflow-hidden rounded-2xl border hairline bg-surface">
                {recentActivity.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 border-b hairline px-5 py-3 last:border-b-0 text-sm"
                  >
                    <span className="w-32 shrink-0 text-xs text-muted-foreground">
                      {a.when}
                    </span>
                    <span className="flex-1">{a.text}</span>
                  </li>
                ))}
              </ol>
            </Section>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
