---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-GLOS-002"
supporting_document_type: "Glossary"
title: "V01-C02 Active Recall Cards"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Learning Designer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md", "./concept-summary.md"]
---

# V01-C02 Aktif Hatırlama Kartları

## Purpose

Ana kavramları kısa aralıklarla geri çağırmak ve yanlış zihinsel modelleri erken
tespit etmek.

## Scope

Kartlar ana dersin yerine geçmez. Kartın cevabını hatırlamak, izleme veya laboratuvar
başarısı olmadan yeterlik kanıtı değildir.

## Ownership

Öğrenme Tasarımcısı (Learning Designer) tekrar düzenini; Teknik İncelemeci
(Technical Reviewer) cevap sınırlarını korur.

## Content

### Kullanım

Soruyu oku, cevabı kapat ve 30 saniye içinde kendi cümlenle yanıtla. Cevabı
gördükten sonra kartı `doğru`, `eksik` veya `yanlış model` olarak işaretle.

### Temsil ve araç zinciri

| No | Soru | Cevap |
| ---: | --- | --- |
| 1 | Program nedir? | Talimat ve veri içerebilen pasif yürütme temsilidir. |
| 2 | Kaynak kod nedir? | Programlama diliyle yazılmış insan odaklı program temsilidir. |
| 3 | Kaynak kod neden süreç değildir? | Henüz çalışan PC, yazmaç, bellek ve G/Ç durumu oluşturmaz. |
| 4 | Derleyici ne yapar? | Bir program temsilini hedef başka bir temsile dönüştüren araç zinciri rolüdür. |
| 5 | Assembler ne üretir? | Sembolik assembly talimatlarından nesne dosyasına girebilen ikili makine talimatları üretebilir. |
| 6 | Nesne dosyası yürütülebilir midir? | Zorunlu olarak değil; çözümlenmemiş sembol ve yeniden konumlandırma bilgileri taşıyabilir. |
| 7 | Bağlayıcı ne yapar? | Ayrı girdileri ve sembol/yeniden konumlandırma ilişkilerini birleştirerek yürütülebilir biçim üretebilir. |
| 8 | Yükleyici ne yapar? | Yürütülebilir temsilden süreç başlangıç durumunun hazırlanmasına katılır. |

### Makine ve çalışma zamanı

| No | Soru | Cevap |
| ---: | --- | --- |
| 9 | ISA nedir? | Yazılımca görünür talimat ve durum davranışı sözleşmesidir. |
| 10 | ISA neden mikro mimari değildir? | Sözleşmeyi tanımlar; işlemcinin onu içeride nasıl gerçekleştirdiğinin tamamını tanımlamaz. |
| 11 | Yazmaç nedir? | ISA veya yürütme modeli içinde işlenen ve sonuç taşıyabilen durum bileşenidir. |
| 12 | PC'nin rolü nedir? | Mevcut/sıradaki mimari talimatla ilişkili adres durumunu tutar. |
| 13 | PC neden kaynak satırı değildir? | Bir kaynak satırı sıfır, bir veya çok sayıda makine talimatına dönüşebilir. |
| 14 | Sanal adres alanı nedir? | Sürecin kullanabildiği sanal adreslerin görünümüdür. |
| 15 | Sanal adres fiziksel adres midir? | Hayır; farklı adres alanlarıdır ve aralarında eşleme kurulabilir. |
| 16 | Çalışma zamanı ortamı ne sağlar? | Program temsilini yükleme/yürütme ve gerekli durum/hizmetleri sağlama rolünü üstlenir. |
| 17 | Süreç nedir? | Çalışan program örneği ile bellek, PC/yazmaç ve G/Ç gibi durumu taşıyan işletim sistemi soyutlamasıdır. |
| 18 | İş parçacığı nedir? | Süreç içindeki ayrı yürütme noktasıdır; kendi PC/yazmaç durumuna sahip olabilir. |

### Sanal makine ve yürütme

| No | Soru | Cevap |
| ---: | --- | --- |
| 19 | Sanal makine nedir? | Soyut talimat ve durum sözleşmesi sunan yürütme modelidir. |
| 20 | Bayt kodu nedir? | Bir sanal makine veya gerçekleştirim hedefleyen ara ikili talimat temsilidir. |
| 21 | Yorumlayıcı ne yapar? | Bir program/ara temsilin talimatlarını okuyup tanımlı etkilerini uygular. |
| 22 | JIT nedir? | Yürütme sırasında bir temsilden yerel makine kodu üretebilen derleme stratejisidir. |
| 23 | JIT ve yorumlayıcı birlikte olabilir mi? | Evet; hibrit çalışma zamanı aynı programda ikisini kullanabilir. |
| 24 | Getir-çözümle-yürüt neyi öğretir? | Talimat seçimi, anlamlandırma ve durum etkisi için sınırlı mimari modeli. |

### Durum ve hata ayıklama

| No | Soru | Cevap |
| ---: | --- | --- |
| 25 | Yürütme durumu neleri içerebilir? | PC, yazmaç, bellek, G/Ç ve çalışmanın sürüp sürmediği gibi değerleri. |
| 26 | Kontrol akışı nedir? | Sonraki yürütülecek talimatın seçilme ilişkisidir. |
| 27 | İzleme satırının asgari parçaları nelerdir? | Önceki durum, talimat, okunan değer, değişiklik ve sonraki durum/PC. |
| 28 | İlk sapma ilkesi nedir? | Gerçek durumun beklenen doğru durumdan ilk ayrıldığı geçişi bulmaktır. |
| 29 | Doğru çıktı neden yeterli izleme kanıtı değildir? | Hatalı ara geçişler tesadüfen aynı sonuca ulaşabilir. |
| 30 | Program davranışının kısa modeli nedir? | Talimatlar + başlangıç durumu + girdi + kontrol akışı boyunca durum geçişleri. |

### Tekrar takvimi

- İlk çalışma: bölüm tamamlandıktan sonra
- İkinci tekrar: 1 gün sonra
- Üçüncü tekrar: 3 gün sonra
- Dördüncü tekrar: 7 gün sonra
- Beşinci tekrar: 21 gün sonra

Her tekrarda yalnız kart okumak yerine en az bir kısa izleme yap.

## Validation

- Kart sayısı: 30
- Öğrenme çıktısı kapsamı: `V01-LO003`, `V01-LO004`
- Cevaplar ana ders ve kavram özeti sınırındadır.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Kavram Özeti](./concept-summary.md)
- [Alıştırmalar](./exercises.md)
- [Misconception Map](../../research/v01-c02/misconception-map.md)
