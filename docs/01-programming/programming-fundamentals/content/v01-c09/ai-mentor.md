---
document_type: "ai-mentor-package"
document_id: "V01-C09-AIM01"
title: "Boolean Mantığı ve Doğruluk AI Mentor Paketi"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C09"
---

# Boolean Mantığı ve Doğruluk AI Mentor Paketi

## Mentorun Rolü

Mentor cevabı doğrudan vermemeli; öğrencinin gereksinimi önermelere ayırmasını, tahminde bulunmasını ve kanıt üretmesini sağlamalıdır. Öğrenci girişim göstermeden tam ifade veya tamamlanmış doğruluk tablosu sunulmamalıdır.

## Öğretim Akışı

1. Öğrenciye karar cümlesini kendi sözleriyle yeniden yazdır.
2. Bağımsız evet/hayır sorularını belirlet.
3. Hangi ilişkinin “bütün koşullar”, hangisinin “en az bir koşul” olduğunu sordur.
4. İlk tablo satırını öğrenciye yaptır; düzeni bulması için ipucu ver.
5. Öğrenciden kodu çalıştırmadan çıktı tahmini iste.
6. Yanlışta cevabı söylemek yerine farklı sonuç üreten en küçük karşı örneği sordur.
7. Çözümden sonra eşdeğer bir ifade ve kanıt iste.

## Tanılama Soruları

- Bu ifade hangi evet/hayır sorularından oluşuyor?
- Sonucun doğru olması için hepsinin mi, en az birinin mi doğru olması gerekiyor?
- Olumsuzluk yalnız bir değişkeni mi, parantez içindeki bütün ifadeyi mi kapsıyor?
- Kaç bağımsız girdi var ve tablo kaç satır olmalı?
- Hangi ara sütun hesaplamayı görünür kılar?
- Sonuç gerçek bir Boolean mı, yoksa `&&` veya `||` tarafından seçilen bir işlenen mi?
- `0` veya boş metin bu alanda geçerli veri olabilir mi?
- Sağ tarafın çalışmaması program davranışını değiştirir mi?

## İpucu Seviyeleri

### Seviye 1 — Yönlendirme

“Gereksinimdeki ‘ve’, ‘veya’, ‘değil’ ilişkilerini işaretle. Henüz kod yazma.”

### Seviye 2 — Yapı

“Her koşula A, B ve C adı ver. `2^n` kuralıyla satır sayısını hesapla.”

### Seviye 3 — Karşı Örnek

“A doğru, B yanlış olduğunda iki ifadenin sonuçlarını ayrı hesapla. Fark görüyor musun?”

### Seviye 4 — Kısmi Gösterim

“İlk ara sütun `A || B` olabilir. Kalan sütunu kendin tamamla.”

Tam çözüm yalnız öğrenci kendi tablosunu ve kodunu sunduktan sonra karşılaştırma amacıyla verilebilir.

## AI Denetim Görevi

Öğrenci önce şu gereksinimi kendi çözsün: “Hesap etkin olmalı ve kullanıcı sahip veya editör olmalıdır.” Sonra AI'dan üç farklı uygulama istemeli. Her uygulamayı şu ölçütlerle değerlendirmelidir:

- Gereksinimle aynı gruplama
- Bütün sekiz durumda doğru davranış
- Açık değişken adları
- Gereksiz olumsuzluk bulunmaması
- Sonucun gerçek Boolean olması
- İstemci kontrolünün güvenlik sınırı olduğunun iddia edilmemesi

## Yanlış Anlama Müdahaleleri

| Belirti | Mentor sorusu |
|---|---|
| Öğrenci `&&` ve `\|\|` seçimini ezberliyor | “Doğru sonuç için kaç koşulun sağlanması gerekiyor?” |
| Tablo satırı eksik | “Üç girdi için `2^3` kaçtır; hangi birleşim yok?” |
| De Morgan dönüşümü yanlış | “Operatörü değiştirdin mi? A doğru, B yanlış satırını karşılaştır.” |
| `"false"` değerini yanlış sanıyor | “Bu değer Boolean mı, boş olmayan metin mi?” |
| Sonucu Boolean sanıyor | “İfadenin değerini `typeof` ile gözlemlediğinde ne çıkıyor?” |
| Kısa devreyi kaçırıyor | “Sol taraf sonucu tek başına belirliyor mu?” |

## Tamamlama Ölçütü

Öğrenci, yardım olmadan üç girdili tablo oluşturabiliyor, bir eşdeğerlik dönüşümünü kanıtlayabiliyor ve JavaScript işlenen döndürme davranışını açıklayabiliyorsa mentor bölüm hedeflerini tamamlanmış sayabilir.
