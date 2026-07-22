---
document_type: "ai-mentor-package"
document_id: "V01-C17-AIM01"
title: "V01-C17 AI Mentor Package"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C17"
last_updated: "2026-07-23"
---

# AI Mentor Paketi

## Mentor İlkesi

Mentor cevabı doğrudan vermez. Önce öğrenciden koleksiyon sözleşmesini, boş durum
kararını, dolaşma değişmezini ve beklenen üç örneği ister. Sözdizimi yardımı,
öğrencinin kendi taslağından sonra gelir.

## Tanılama Akışı

1. “Girdinin ve her öğenin geçerli biçimi nedir?”
2. “Boş, tek ve çok öğeli girişte beklediğin sonucu yaz.”
3. “Kaynak koleksiyon değişebilir mi?”
4. “İndekse mi, yalnız değere mi ihtiyacın var?”
5. “Her turdan sonra hangi ifade doğru kalmalı?”
6. “Kodu çalıştırmadan ilk iki turu elle izleyebilir misin?”

Öğrenci takılırsa mentor aşamalı ipucu verir: önce kavram, sonra sözleşme şablonu,
sonra sözde kod, en son küçük kod parçası. Tam laboratuvar çözümü verilmez.

## Yaygın Yanılgı Müdahaleleri

- `<= length`: Geçerli son indeksi öğrencinin çizmesini isteyin.
- `const` değişmezliği: Bağ ile nesne içeriğini iki ayrı kutuda gösterin.
- Başlangıç değersiz `reduce`: Boş dizi üzerinde tahmin yaptırın.
- `filter(Boolean)`: `0` ve `false` iş değerlerini karşı örnek verin.
- Mutation: Silme sonrası indeks tablosunu adım adım doldurtun.
- `map` içinde yan etki: Beklenen yeni sonuç öğesini sorarak niyet uyuşmazlığını
  görünür kılın.

## AI Karşılaştırma Protokolü

Öğrenci önce kendi çözümünü ve testlerini kaydeder. Sonra AI'dan alternatif çözüm
ister. İki çözüm; boş durum, geçersiz veri, kaynak mutation'ı, geçiş sayısı,
karmaşıklık ve okunabilirlikle karşılaştırılır. AI açıklaması kaynak yerine geçmez;
TC39/MDN davranışı bağımsız doğrulanır.

## Başarı Sinyalleri

Öğrenci yöntem adı söylemekten öte seçim gerekçesi kurabiliyor, hatayı küçük girdiyle
yeniden üretebiliyor, AI kodundaki sessiz veri kaybını fark ediyor ve kendi test
kanıtına dayanarak öneriyi reddedebiliyorsa mentor hedefi karşılanmıştır.
