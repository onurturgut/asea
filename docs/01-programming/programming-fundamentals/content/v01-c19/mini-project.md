---
document_type: "mini-project"
document_id: "V01-C19-MP01"
title: "Mini Proje — İç İçe İçerik Analizcisi"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
project_id: "V01-P05"
last_updated: "2026-07-29"
---

# Mini Proje — İç İçe İçerik Analizcisi

Başlık ve `children` alanı taşıyan iç içe içerik modelinden toplam düğüm, yaprak
düğüm ve maksimum derinlik özeti üretin. Her hesap için base case, recursive case,
progress measure ve küçük bir call tree yazın.

Program geçersiz kayıtları kontrollü biçimde reddetmeli, kaynak modeli değiştirmemeli
ve en az 15 test taşımalıdır. README'de recursive tasarım ile açık stack kullanan
iteratif alternatifin trade-off'unu açıklayın.

## Öğrenme Devamlılığı

- **C18'den gelen:** Alan, tür, required/optional ve invariant kararları
- **C19'da eklenen:** İç içe model için recursive traversal ve sonlanma kanıtı
- **C20'ye giden:** Toplanan başlıkların normalizasyon ve metin istatistiği
  hattına aktarılması

## Zorunlu Öğrenci Açıklaması

Kod incelemesinde en az bir recursive fonksiyonu:

1. Her değişkenin problemdeki anlamı
2. Tür ve değer kısıtı
3. Base case'in doğrudan sonucu
4. Daha küçük problemin nasıl üretildiği
5. İç çağrı döndüğünde dış frame'in yaptığı iş
6. Her branch'in sonlanma gerekçesi
7. Stack derinliği ve iteratif alternatif

üzerinden sözlü savunun.
