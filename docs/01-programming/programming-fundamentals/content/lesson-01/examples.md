---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-007"
supporting_document_type: "Compatibility Report"
title: "Lesson Examples: Programlama Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C01-SD-COMP-005"
derived_from:
  - "../../research/lesson-01/research-packet.md"
x-production-unit: "lesson-01"
x-canonical-lesson-id: "V01-C01"
---

# Lesson Examples: Programlama Nedir?

## Purpose

Programlama, algoritma, program ve kesin talimat ayrımını açıklayan örnekleri
Lesson Production için sunmak.

## Scope

Örnekler yalnız Research Packet’taki dosya düzenleme, asansör, ATM ve farklı
representation önerilerini kullanır.

## Ownership

Örnekler derived içeriktir; yeni outcome veya assessment görevi oluşturmaz.

## Content

### Basit Örnekler

#### Örnek 1 — Belirsiz talimat

“Dosyaları düzenle.” cümlesi bilgisayar için yeterli değildir. Hedef klasör,
dosya seçme kuralı, sıralama ölçütü ve isim çakışması davranışı belirtilmemiştir.

#### Örnek 2 — Kavram ayrımı

- “Sayıları küçükten büyüğe sırala”: problem.
- Sıralama için izlenecek açık adımlar: algoritma.
- Bu adımların belirli dilde yazılmış hâli: program.
- Programdaki tek bir işlem: talimat.
- Talimatların çalışırken yaptığı dönüşüm: hesaplama.

### Gerçek Hayat Örnekleri

**Asansör:** Kat düğmesi girdidir. Mevcut kat ve yön durumdur. Kontrol kuralları
hangi çağrının karşılanacağını belirler. Kapının açılması çıktıdır.

**ATM:** Kart, kimlik ve tutar girdidir. Doğrulama kararları algoritmanın
parçasıdır. Bakiye değişimi durumdur. Para verme veya hata mesajı çıktıdır.

### Yanlış Kullanım Örnekleri

- “Uygun dosyaları seç.” Uygunluğun ölçütü yoktur.
- “Gerekirse ismi değiştir.” Ne zaman gerektiği ve yeni isim kuralı belirsizdir.
- “Her şey doğruysa bitir.” Doğruluk koşulu gözlenebilir değildir.
- “Program açıldı, demek ki doğru.” Yalnız başlangıç davranışı gözlenmiştir.

### Doğru Kullanım Örnekleri

Belirsiz dosya düzenleme isteği şu kesinlikte ifade edilebilir:

1. Hedef klasörü aç.
2. Yalnız `.txt` uzantılı dosyaları seç.
3. Dosyaları oluşturulma tarihine göre eskiden yeniye sırala.
4. İlk dosyadan başla.
5. İsmin başına sıra numarasını ekle.
6. Yeni isim mevcutsa dosyayı değiştirmeden kaydet.
7. Sonraki dosyaya geç ve aynı kuralı uygula.
8. İşlenen ve atlanan dosya sayılarını göster.

Bu sürüm hâlâ review edilebilir; ancak girdi, kural, çakışma ve çıktı önceki
sürüme göre daha gözlenebilirdir.

### Örnek Açıklamaları

Sekiz adımın her biri tek bir amaç taşır. Beşinci adım dönüşümü, altıncı adım
edge case’i, sekizinci adım ise doğrulanabilir çıktıyı tanımlar. Öğrenci bu
ayrımı yapabildiğinde günlük dil ile makine talimatı arasındaki precision
farkını görür.

### Öğrenme Notları

- Bir örneğin açık görünmesi her ortamda eksiksiz olduğu anlamına gelmez.
- Talimatları review ederken “hangi input?”, “hangi durumda?”, “hangi output?”
  sorularını kullanın.
- Aynı algoritmanın farklı programlarla uygulanabilmesi, algoritma ile program
  arasındaki temel ayrımdır.

## Validation

- Packet dışı örnek: 0.
- Kod, exercise veya assessment: 0.
- `LO001` ve `LO002` desteği: Pass.

## References

- [Research Packet](../../research/lesson-01/research-packet.md)
