export const student = {
  name: "Onur",
  fullName: "Onur Demir",
  handle: "onur.demir",
  email: "onur@asea.dev",
  avatar: "OD",
  joined: "Eylül 2025",
};

export const activeContext = {
  academy: "Yazılım Mühendisliği · V01",
  chapter: "V01-C02 — Bilgisayarlar Programları Nasıl Çalıştırır?",
  module: "Modül 1 · Temeller",
  section: "3. Bellek Hiyerarşisi",
  remainingMin: 22,
};

export type SectionStatus = "done" | "active" | "todo" | "locked" | "review";

export interface LessonSection {
  id: string;
  title: string;
  status: SectionStatus;
  progress: number;
  minutes: number;
}

export const lessonSections: LessonSection[] = [
  {
    id: "s1",
    title: "1. Program Nedir?",
    status: "done",
    progress: 100,
    minutes: 8,
  },
  {
    id: "s2",
    title: "2. Makine Dili ve Soyutlama",
    status: "done",
    progress: 100,
    minutes: 12,
  },
  {
    id: "s3",
    title: "3. Bellek Hiyerarşisi",
    status: "active",
    progress: 42,
    minutes: 15,
  },
  {
    id: "s4",
    title: "4. CPU'nun Çalışma Döngüsü",
    status: "todo",
    progress: 0,
    minutes: 18,
  },
  {
    id: "s5",
    title: "5. Yorumlayıcı ve Derleyici",
    status: "todo",
    progress: 0,
    minutes: 14,
  },
  {
    id: "s6",
    title: "6. JavaScript Motoru",
    status: "todo",
    progress: 0,
    minutes: 20,
  },
  {
    id: "s7",
    title: "7. Uygulamalı Alıştırma",
    status: "locked",
    progress: 0,
    minutes: 25,
  },
  {
    id: "s8",
    title: "8. Chapter Değerlendirmesi",
    status: "locked",
    progress: 0,
    minutes: 15,
  },
];

export const dailyPlan = [
  {
    id: "d1",
    title: "V01-C02 · 3. Bellek Hiyerarşisi",
    minutes: 22,
    kind: "Ders",
  },
  {
    id: "d2",
    title: "Alıştırma: Bellek türlerini eşleştir",
    minutes: 8,
    kind: "Alıştırma",
  },
  {
    id: "d3",
    title: "Tekrar: Değişkenler ve tipler",
    minutes: 10,
    kind: "Tekrar",
  },
  { id: "d4", title: "Kısa quiz: 5 soru", minutes: 6, kind: "Quiz" },
];

export const skills = [
  { name: "JavaScript Temelleri", level: 3, next: 55 },
  { name: "Bilgisayar Mimarisi", level: 2, next: 42 },
  { name: "Problem Çözme", level: 2, next: 70 },
  { name: "Veri Yapıları", level: 1, next: 25 },
  { name: "Git & Sürüm Kontrolü", level: 2, next: 60 },
];

export const badges = [
  { name: "İlk Adım", desc: "İlk chapter tamamlandı", earnedAt: "12 Eyl" },
  {
    name: "14 Gün Serisi",
    desc: "İki hafta üst üste çalışma",
    earnedAt: "Bugün",
  },
  {
    name: "Gece Kuşu",
    desc: "22:00 sonrası 5 oturum",
    earnedAt: "Geçen hafta",
  },
  { name: "Derin Odak", desc: "Kesintisiz 90 dk çalışma", earnedAt: "9 Eki" },
];

export const recentActivity = [
  {
    when: "Bugün 14:22",
    text: "V01-C02 / 2. Makine Dili ve Soyutlama tamamlandı",
  },
  { when: "Bugün 13:40", text: "AI Mentor'a 4 soru soruldu" },
  { when: "Dün 21:10", text: "Kod alıştırması çözüldü: değişken ataması" },
  { when: "Dün 20:15", text: "Kısa notlara 3 kayıt eklendi" },
];

export const projects = [
  { name: "Kişisel Öğrenme Günlüğü", progress: 60, kind: "Web" },
  { name: "CLI Not Uygulaması", progress: 22, kind: "Terminal" },
];

export const lessonMdx = {
  title: "Bilgisayarlar Programları Nasıl Çalıştırır?",
  code: "V01-C02",
  difficulty: "Başlangıç",
  duration: "≈ 55 dk",
  outcomes: [
    "CPU, RAM ve depolama arasındaki ilişkiyi açıklayabilme",
    "Kaynak kodun makine koduna dönüşüm sürecini anlama",
    "Yorumlayıcı ile derleyici arasındaki farkı tanımlayabilme",
    "Basit bir JavaScript programının çalışma adımlarını izleyebilme",
  ],
};

export const jsSample = `// Bellek ve değişkenler
// Bu programı çalıştırdığınızda değişkenler RAM'e yerleşir.

const cpuHizGhz = 3.6;
const ramGb = 16;

function saniyedeIslem(hizGhz) {
  // 1 GHz ≈ 10^9 çevrim / saniye
  return hizGhz * 1_000_000_000;
}

const islemSayisi = saniyedeIslem(cpuHizGhz);

console.log("CPU saniyede", islemSayisi, "çevrim yapabilir");
console.log("Kullanılabilir bellek:", ramGb, "GB");
`;

export const consoleOutput = [
  { kind: "log" as const, text: "CPU saniyede 3600000000 çevrim yapabilir" },
  { kind: "log" as const, text: "Kullanılabilir bellek: 16 GB" },
  { kind: "info" as const, text: "Program 12 ms içinde tamamlandı" },
];

export const mockTests = [
  { name: "saniyedeIslem 1 GHz için 10^9 döndürür", pass: true },
  { name: "saniyedeIslem 3.6 GHz için 3.6 × 10^9 döndürür", pass: true },
  { name: "islemSayisi bir number tipinde olmalı", pass: true },
  { name: "Fonksiyon negatif değerlerde 0 döndürmeli", pass: false },
];

export const searchResults = [
  {
    kind: "Ders",
    title: "Bellek Hiyerarşisi ve Cache",
    path: "V01 · Modül 1 · C02 · Bölüm 3",
    excerpt:
      "…CPU'ya en yakın L1 cache, RAM'e göre yaklaşık 100 kat daha hızlıdır. Bellek hiyerarşisi…",
  },
  {
    kind: "Kavram",
    title: "Cache Miss",
    path: "Kavramlar · Bilgisayar Mimarisi",
    excerpt:
      "İstenen verinin cache'de bulunmaması durumu. Bellek hiyerarşisinde bir alt seviyeye…",
  },
  {
    kind: "Kod Örneği",
    title: "Bellek kullanımını ölçen bir örnek",
    path: "V01-C02 · Örnekler",
    excerpt:
      "performance.memory.usedJSHeapSize ile heap boyutunu okuyabilirsiniz…",
  },
  {
    kind: "Not",
    title: "CPU'nun fetch–decode–execute döngüsü",
    path: "Notlarım",
    excerpt:
      "CPU her komutu üç aşamada işler: getir, çöz, çalıştır. Program Counter…",
  },
  {
    kind: "Quiz",
    title: "Bellek türleri quiz",
    path: "V01-C02 · Quiz",
    excerpt: "5 soruluk kısa değerlendirme. RAM, ROM, cache ve depolama…",
  },
  {
    kind: "Mülakat",
    title: "Big-O notasyonunu nasıl açıklarsınız?",
    path: "Mülakat Soruları · Algoritma",
    excerpt:
      "Adayın algoritma karmaşıklığını sezgisel bir örnekle anlatabilmesi…",
  },
];

export const interviewQuestions = [
  {
    id: "q1",
    topic: "Bilgisayar Mimarisi",
    difficulty: "Kolay",
    question: "RAM ile SSD arasındaki temel farkları anlatır mısınız?",
    hint: "Uçucu bellek, erişim hızı ve maliyet üzerinden düşün.",
    thinkingSec: 60,
  },
  {
    id: "q2",
    topic: "JavaScript",
    difficulty: "Orta",
    question: "JavaScript'te 'hoisting' nedir? Bir örnekle açıklar mısınız?",
    hint: "var, let, const ve fonksiyon tanımları farklı davranır.",
    thinkingSec: 90,
  },
  {
    id: "q3",
    topic: "Algoritma",
    difficulty: "Orta",
    question: "Big-O notasyonunu bir arkadaşınıza nasıl açıklarsınız?",
    hint: "Sezgisel örneklerle başla, matematiksel tanıma sonra geç.",
    thinkingSec: 120,
  },
];

export const mentorConversation = [
  {
    role: "student" as const,
    text: "L1 cache neden RAM'den çok daha hızlı?",
  },
  {
    role: "mentor" as const,
    text: "Kısa cevap: fiziksel mesafe ve teknoloji farkı.\n\nDaha ayrıntılı düşünmeye başlayalım: L1 cache CPU çekirdeğinin **içinde** yer alır. Elektrik sinyalinin gitmesi gereken mesafe milimetre altındadır. RAM ise anakart üzerindedir; sinyalin birkaç santimetre yol kat etmesi gerekir.\n\nAyrıca L1, SRAM teknolojisi kullanır — her bit için ~6 transistör. RAM ise DRAM'dir — 1 transistör + 1 kondansatör. SRAM çok daha hızlı, ancak çok daha pahalı ve yer kaplayıcıdır.\n\nBunu düşünmek için: **Neden CPU tüm belleği L1 gibi hızlı yapmıyor?**",
  },
  {
    role: "student" as const,
    text: "Sanırım maliyet ve alan yüzünden?",
  },
  {
    role: "mentor" as const,
    text: "Tam olarak. Bu, **bellek hiyerarşisinin** temel motivasyonu: her seviye bir üsttekinden daha ucuz ve büyük, ama daha yavaştır. Yazılım geliştiriciler olarak bizim işimiz sık kullanılan veriyi cache'de tutulabilecek şekilde organize etmektir.",
  },
];
