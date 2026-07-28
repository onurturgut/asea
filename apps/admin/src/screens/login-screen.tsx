"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppState } from "@/lib/app-state";
import { Moon, Sparkles, Sun } from "lucide-react";

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.2-5.5 4.2-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.9 1.5l2.6-2.5C17 3.5 14.7 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12S6.8 21.5 12 21.5c6.9 0 9.4-4.8 9.4-7.3 0-.5-.1-.9-.1-1.2H12z"
      />
    </svg>
  );
}

export default function LoginScreen() {
  const { theme, toggleTheme } = useAppState();
  const router = useRouter();
  return (
    <div className="grid min-h-dvh grid-cols-1 bg-background lg:grid-cols-[1.05fr_1fr]">
      <div className="relative hidden flex-col justify-between border-r hairline bg-surface-2 p-10 lg:flex">
        <div className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-md bg-foreground text-background">
            <Sparkles className="size-4" />
          </span>
          <span className="text-base font-bold tracking-tight">ASEA</span>
        </div>
        <div className="max-w-md">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight">
            Odaklı bir çalışma ortamı.
            <br />
            <span className="text-muted-foreground">
              Rafine bir öğrenme deneyimi.
            </span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            ASEA, yazılım mühendisliği yolculuğunda ilerlemeni izleyen, seni
            yalnız kendi geçmişinle karşılaştıran ve gerektiğinde yönlendiren
            bir mentor gibi çalışır.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 text-[11px] uppercase tracking-wider text-muted-foreground">
            <div className="rounded-lg border hairline bg-surface p-3">
              <div className="text-lg font-semibold text-foreground normal-case tracking-normal">
                3 sütun
              </div>
              çalışma ekranı
            </div>
            <div className="rounded-lg border hairline bg-surface p-3">
              <div className="text-lg font-semibold text-foreground normal-case tracking-normal">
                AI Mentor
              </div>
              bağlamsal ipucu
            </div>
            <div className="rounded-lg border hairline bg-surface p-3">
              <div className="text-lg font-semibold text-foreground normal-case tracking-normal">
                JS motoru
              </div>
              içinde kod
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 ASEA · Yazılım Mühendisliği Akademisi
        </div>
      </div>
      <div className="flex flex-col p-8">
        <div className="flex items-center justify-end">
          <button
            onClick={toggleTheme}
            className="focus-ring inline-flex size-9 items-center justify-center rounded-full border hairline text-muted-foreground hover:text-foreground"
            aria-label="Temayı değiştir"
          >
            {theme === "light" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </button>
        </div>
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Tekrar hoş geldin
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Devam etmek için Google hesabınla giriş yap. Yeni bir hesap otomatik
            olarak oluşturulur.
          </p>
          <button
            onClick={() => router.push("/dashboard")}
            className="focus-ring mt-8 inline-flex h-11 w-full items-center justify-center gap-3 rounded-xl border hairline bg-surface text-sm font-medium transition hover:bg-surface-2"
          >
            <GoogleGlyph />
            Google ile devam et
          </button>
          <div className="mt-4 rounded-lg border hairline bg-surface-2/60 p-3 text-[11px] leading-relaxed text-muted-foreground">
            Kayıt yoksa Google hesabından otomatik olarak açılır. ASEA e-postana
            yalnızca ders bildirimleri için erişir.
          </div>
          <div className="mt-10 text-[11px] text-muted-foreground">
            Devam ederek{" "}
            <Link
              href="/"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Kullanım Şartları
            </Link>{" "}
            ve{" "}
            <Link
              href="/"
              className="underline underline-offset-2 hover:text-foreground"
            >
              Gizlilik Politikası
            </Link>
            'nı kabul etmiş olursun.
          </div>
        </div>
      </div>
    </div>
  );
}
