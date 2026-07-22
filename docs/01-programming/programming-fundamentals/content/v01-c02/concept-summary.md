---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-GLOS-001"
supporting_document_type: "Glossary"
title: "Kavram Özeti: Bilgisayarlar Programları Nasıl Çalıştırır?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Technical Writer"
source_ids: ["V01-C02", "V01-LO003", "V01-LO004"]
derived_from: ["../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md", "../../research/v01-c02/concept-model.md"]
x-production-unit: "v01-c02"
x-content-language: "tr-TR"
---

# Kavram Özeti: Bilgisayarlar Programları Nasıl Çalıştırır?

## Purpose

Ders sırasında hızlı geri dönüş için kavramların kısa fakat sınırları doğru bir görünümünü sağlamak.

## Scope

Bu dosya ana ders yerine geçmez ve yeni tanım üretmez.

## Ownership

Teknik Yazar (Technical Writer) terim tutarlılığından, Teknik İncelemeci
(Technical Reviewer) tanım sınırlarından sorumludur.

## Content

### Kullanım

Önce [ana ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md) okunmalıdır.
Bu tablo tekrar ve gezinme içindir.

### Terimler

| Türkçe | English | Kısa Tanım | Karıştırılmaması Gereken |
| --- | --- | --- | --- |
| Program | Program | Talimat ve veri içerebilen pasif temsil | Süreç |
| Kaynak kod | Source Code | Programlama diliyle yazılan program metni | Makine kodu |
| Derleyici | Compiler | Temsili başka bir temsile dönüştüren araç zinciri bileşeni | Bağlayıcı, yükleyici |
| Yorumlayıcı | Interpreter | Ara temsili yürütme yoluna katan gerçekleştirim bileşeni | “Derleme kullanmayan dil” |
| Nesne dosyası | Object File | Bağlama girdisi olabilen derlenmiş artefakt | Yürütülebilir dosya |
| Bağlayıcı | Linker | Nesne/arşiv girdilerini sembol ve yeniden konumlandırma ilişkileriyle birleştiren araç | Derleyici |
| Yükleyici | Loader | Yürütülebilir dosyadan süreç başlangıç durumu hazırlayan sistem rolü | Bağlayıcı |
| Assembly dili | Assembly Language | Makine talimatının sembolik temsili | İkili makine kodu |
| Makine kodu | Machine Code | Hedef ISA için ikili talimat temsili | Bayt kodu |
| Talimat Kümesi Mimarisi | Instruction Set Architecture | Yazılımın görebildiği talimat ve durum sözleşmesi | Mikro mimari |
| Merkezi işlem birimi | Central Processing Unit | Yerel talimat etkilerini gerçekleştiren işlemci | ISA'nın kendisi |
| Yazmaç | Register | ISA'nın gösterdiği işlenen veya sonuç durumu bileşeni | Genel RAM hücresi |
| Program sayacı | Program Counter | Talimat sıralamasıyla ilişkili adres durumu | Kaynak kod satır numarası |
| Sanal adres alanı | Virtual Address Space | Sürecin kullanabildiği sanal adresler kümesi | Fiziksel RAM |
| Yığın | Stack | Ortama bağlı çağrı, çerçeve ve yerel durum yapısı | Evrensel fiziksel bölge |
| Öbek | Heap | Ortama bağlı dinamik veri veya nesne depolama alanı | Evrensel ayırma algoritması |
| Süreç | Process | Çalışan programın bellek, yazmaç ve G/Ç durumuyla işletim sistemi soyutlaması | Program dosyası |
| İş parçacığı | Thread | Süreç içindeki yürütme noktası | Süreç |
| Sanal makine | Virtual Machine | Soyut talimat ve durum sözleşmesi sunan yürütme modeli | Yalnız donanım öykünmesi |
| Bayt kodu | Bytecode | Sanal makineyi veya gerçekleştirimi hedefleyen ara ikili talimatlar | Yerel makine kodu |
| Anında derleme | Just-in-Time Compilation | Yürütme sırasında ana makine kodu üretebilen isteğe bağlı strateji | Sanal makine zorunluluğu |
| Durum | State | Bir yürütme adımını açıklayan PC, yazmaç, bellek ve G/Ç değerleri | Yalnız değişken değerleri |
| Kontrol akışı | Control Flow | Sonraki talimatı belirleyen sıra veya aktarım ilişkisi | Her zaman sıralı ilerleme |
| Girdi | Input | Yürütme durumuna dışarıdan gelen değer veya olay | Yalnız klavye verisi |
| Çıktı | Output | Yürütmenin dışarıdan gözlenebilir sonucu | Yalnız ekran metni |

## Validation

- Terms: 25.
- Tanımlar kavram modeliyle uyumludur; ana ders dışında teknik iddia yoktur.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Kavram Modeli](../../research/v01-c02/concept-model.md)
- [Okuma Rehberi](./reading-guide.md)
