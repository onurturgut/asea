# Sprint 05A EQA Remediation Report

## Sprint Status

**Durum:** PASS

PHASE 04 — Sprint 05A kapsamında önceki
`educational-quality-assurance.md` raporundaki üç Major, bir Minor ve bir
Observation bulgusu kapatılmıştır.

| Başarı ölçütü | Sonuç |
| --- | --- |
| Major bulgular | 0 |
| Minor bulgular | 0 |
| Açık Observation | 0 |
| Learning Outcome kapsamı | PASS |
| Teknik doğruluk | PASS |
| Bloom kapsamı | PASS |
| Markdown | PASS |
| Kırık bağlantı | 0 |

Önceki EQA raporu tarihsel denetim kanıtı olarak değiştirilmemiştir. Bu rapor
düzeltme ve yeniden doğrulama sonucunu kaydeder.

## Resolved Findings

### `EQA-VAR-001` — Teknik Terim İlk Kullanım Standardı

**Durum:** Resolved

Uygulanan düzeltmeler:

- ana ders başlığında Değişkenler (Variables) ve Durum (State) eşlemesi
  yapıldı;
- bağımsız yardımcı materyallere standart teknik sözlük satırı eklendi;
- bağlama, bildirim, ilklendirme, atama, yeniden atama, mutasyon, kapsam,
  fonksiyon, Geçici Ölü Bölge ve yukarı kaldırma ilk kullanımda Türkçe
  (English) biçiminde verildi;
- sonraki eğitim anlatısında Türkçe karşılıklar korundu.

**Doğrulama:** 10 bağımsız yardımcı materyalin terminoloji profili PASS. Ana
dersin ilk kullanım sırası insan incelemesiyle PASS.

### `EQA-VAR-002` — İngilizce Eğitim Anlatısı Kalıntıları

**Durum:** Resolved

Uygulanan düzeltmeler:

- `canonical` ifadeleri `kanonik` olarak değiştirildi;
- eğitim anlatısındaki `specification` ifadeleri `dil standardı` olarak
  değiştirildi;
- materyal türlerindeki `Quiz` ve `flashcard` anlatıları `bilgi
  değerlendirmesi` ve `bilgi kartı` olarak değiştirildi;
- resmî eser adları, dosya adları, API'ler, programlama anahtar sözcükleri,
  hata sınıfları ve kod tanımlayıcıları İngilizce bırakıldı.

**Doğrulama:** İzin verilen resmî kaynak başlıkları ve dosya yolları dışında
hedef İngilizce anlatı kalıntısı bulunmadı.

### `EQA-VAR-003` — Alıştırma 20 Giriş Kodu Eksik

**Durum:** Resolved

Alıştırma 20'ye 15 satırlık başlangıç kodu eklendi. Kod:

- `var` kullanımı;
- geniş kapsamlı durum;
- anlamsız adlar;
- gereksiz `let`;
- nesne mutasyonu;
- koşul içinde atama

kusurlarını birlikte içerir.

Korunacak davranış ve beklenen `20` sonucu ile
`{ ready: true, lastPrice: 12 }` durumu açıkça verilmiştir. Yeniden düzenleme
kontrol listesi en az beş gerekçeli iyileştirmeyi yönlendirir.

**Doğrulama:** Başlangıç kodu parse ve runtime kontrolünden PASS aldı; belgelenen
çıktıyı üretti.

### `EQA-VAR-004` — Bilgi Değerlendirmesi Cevap Görünürlüğü

**Durum:** Resolved

`quiz.md` aktif hatırlama ve öz değerlendirme düzenine geçirildi:

```text
Sorular
  -> Öğrenci cevabı ve güven düzeyi
  -> Katlanabilir cevap anahtarı
  -> Katlanabilir açıklamalar
  -> Öz değerlendirme ve tekrar eylemi
```

Soru gövdelerinin altında doğru cevap veya açıklama bulunmaz. Cevap anahtarı ve
açıklamalar ayrı, varsayılan olarak kapalı `<details>` bölümlerindedir.

**Doğrulama:**

- soru: 25;
- cevap alanı: 25;
- benzersiz cevap anahtarı: 25;
- açıklama: 25;
- cevap anahtarından önce doğrudan doğru cevap: 0.

### `EQA-VAR-005` — İleri Ortam Görevi Kurulumu

**Durum:** Resolved

Alıştırma 19'a:

- klasör ve dört dosyalık ortam kurulumu;
- klasik betik HTML/JavaScript örneği;
- `type="module"` HTML/JavaScript örneği;
- yerel HTTP sunucusu komutu;
- tarayıcı adresleri;
- beklenen konsol sonuçları;
- tarayıcı, modül, Node.js CommonJS ve REPL sınır uyarısı

eklendi.

**Doğrulama:** Klasik betik için üst düzey `var` global nesne özelliği ve üst
düzey `let` sözlüksel bağlama davranışı doğrulandı. Modül örneği, üst düzey
bağlamaların `globalThis` özelliği olmadığını açıkça sınar.

## Remaining Findings

**Yok.**

| Önem | Açık bulgu |
| --- | ---: |
| Major | 0 |
| Minor | 0 |
| Observation | 0 |

Yeni AI Mentor, video veya sunum içeriği üretilmemiştir.

## Modified Files

- `lesson.md`
- `examples.md`
- `lesson-assets.md`
- `visualization-notes.md`
- `quiz.md`
- `exercises.md`
- `lab.md`
- `flashcards.md`
- `interview.md`
- `cheatsheet.md`
- `chapter-summary.md`

Oluşturulan rapor:

- `eqa-remediation-report.md`

`educational-quality-assurance.md` değiştirilmemiş ve ilk denetimin tarihsel
kanıtı olarak korunmuştur.

## Learning Outcome Validation

### `V01-LO009`

**Sonuç:** PASS

- Lesson yapısı ve outcome metni değişmedi.
- Bilgi değerlendirmesinde 14 doğrudan veya ortak eşleşme korunuyor.
- Alıştırmalarda 14 doğrudan veya ortak eşleşme korunuyor.
- Lab, eksiksiz durum tablosunu teslim edilebilir ürün olarak istiyor.
- Alıştırma 19 ortam sınırlarını, Alıştırma 20 ise durum ve atama çözümlemesini
  güçlendiriyor.

### `V01-LO010`

**Sonuç:** PASS

- Lesson yapısı ve outcome metni değişmedi.
- Bilgi değerlendirmesinde 12 doğrudan veya ortak eşleşme korunuyor.
- Alıştırmalarda 9 doğrudan veya ortak eşleşme korunuyor.
- Lab ve Alıştırma 20 bağlama seçimi, mutasyon ve sahiplik gerekçesi istiyor.

Outcome ID'leri, anlamları ve kapsamları değiştirilmemiştir.

## Technical Validation

| Kontrol | Sonuç |
| --- | --- |
| JavaScript fenced block | 62 |
| Beklenmeyen parse hatası | 0 |
| Beklenen eğitim amaçlı parse hatası | 1 |
| Runtime assertion kontrolleri | PASS |
| Lab beklenen sonucu | PASS |
| Alıştırma 20 başlangıç davranışı | PASS |
| Quiz soru/anahtar/açıklama bütünlüğü | 25/25/25 PASS |
| Doğrudan görünür quiz cevabı | 0 |
| Lesson numaralı H2 yapısı | 15/15 |
| Lesson JavaScript blokları | 32, korunuyor |

Tek parse hatası `examples.md` içindeki bilerek ayrılmış tekrarlı `let`
bildirimidir ve beklenen `SyntaxError` öğretim örneğidir.

Kod örneklerinin teknik davranışı değiştirilmemiştir. Alıştırma 19 ve 20 için
eksik olan yeni başlangıç materyali eklenmiştir.

### Bloom Validation

| Bloom düzeyi | Korunan kanıt | Sonuç |
| --- | --- | --- |
| Hatırlama | Bilgi kartları ve bilgi değerlendirmesi | PASS |
| Anlama | Ders, açıklamalar ve bölüm özeti | PASS |
| Uygulama | Kod örnekleri, alıştırmalar ve lab | PASS |
| Analiz | Durum tabloları, hata ve kapsam çözümlemesi | PASS |
| Değerlendirme | Bağlama gerekçeleri ve kod incelemesi | PASS |
| Yaratma | İleri alıştırmalar ve sipariş izleyicisi | PASS |

## Markdown Validation

| Kontrol | Sonuç |
| --- | --- |
| Markdown lint | PASS |
| Lint hata sayısı | 0 |
| Kırık göreli bağlantı | 0 |
| Quiz katlanabilir HTML izni | Yalnız `MD033` için dosya içi kontrollü istisna |
| Dosya adları | Değişmedi |

Katlanabilir cevap anahtarı için kullanılan `details` ve `summary` elemanları,
aktif hatırlama gereksinimini karşılamak amacıyla yalnız `quiz.md` içinde
kontrollü olarak etkinleştirilmiştir.

## Repository Changes

- Değişiklikler yalnız
  `content/programming-fundamentals/variables/` kapsamındadır.
- Knowledge Foundation değiştirilmedi.
- Research dosyaları değiştirilmedi.
- Governance değiştirilmedi.
- Standards değiştirilmedi.
- AI Mentor içeriği üretilmedi.
- Lesson'ın 15 bölümlük yapısı korunmuştur.
- Lesson'ın teknik ve pedagojik anlamı korunmuş; yalnız dil standardı
  normalizasyonu yapılmıştır.
- Learning Outcome ID'leri ve anlamları değiştirilmemiştir.
- Commit veya push yapılmamıştır.

## Recommended Next Sprint

**Önerilen sprint:** PHASE 05 — AI Mentor Knowledge Package

Sprint 05A başarı kriterlerini karşılamıştır. Variables bölümü EQA açısından
yayına hazırlık sürecinin sonraki aşamasına geçebilir.
