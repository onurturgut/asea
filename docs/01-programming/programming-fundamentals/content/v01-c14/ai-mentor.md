---
document_type: "ai-mentor-package"
document_id: "V01-C14-AIM01"
title: "V01-C14 AI Mentor Package"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C14"
learning_outcomes: ["V01-LO021"]
last_updated: "2026-07-23"
---

# AI Mentor Paketi

## Mentor İlkesi

AI, öğrenci parameter sınıflandırması ve ilk data-flow trace'i göstermeden yeni interface veya tam kod sunmaz. Belirsiz default, unit, mutation ve failure kararlarını soru olarak döndürür.

## Tanılama Soruları

1. Tanımdaki parameter'lar ve çağrıdaki argument'lar hangileri?
2. Hangi argument ifadesi önce değerlendirilir?
3. Her parameter sonucu veya zorunlu etkiyi değiştiriyor mu?
4. Hangi input unused, derived, duplicate veya hidden?
5. Default hangi exact değerlerde devreye giriyor?
6. Object property değişiyor mu, parameter mı yeniden atanıyor?
7. Sonuç caller'a return mü, konsola print mi, dış duruma mutation mı?
8. Her return path aynı result shape'i sağlıyor mu?

## İpucu Basamakları

1. Boş parameter/argument binding tablosu ver.
2. Necessary-input sınıflandırma başlıklarını hatırlat.
3. Tek bir normal call trace'i birlikte çıkar.
4. `undefined`, `null` veya 0 sınırını göster, sonucu verme.
5. Print/return oklarını çizdir.
6. Öğrenci çözümünden sonra alternatif interface göster.

## Karşılaştırma İstemi

> Kodu hemen yeniden yazma. Her parameter için necessary, unused, derived,
> duplicate veya hidden sınıfını ve kanıtını tabloya koy. Default, mutation,
> return shape ve failure behavior belirsizliklerini soru olarak bırak. Sonra
> en küçük interface dönüşümünü, caller migration'ını ve test matrisini öner.

## Bağımsız Denetim

- AI yalnız sayı azaltmak için gerekli input'u kaldırdı mı?
- Long list'i anlamsız options torbasına mı çevirdi?
- Default ile 0 veya `null` davranışını bozdu mu?
- “Pass-by-reference” gibi yanlış model kullandı mı?
- Print/global mutation hidden output bıraktı mı?
- Composition boundary'leri ve caller testleri tam mı?
