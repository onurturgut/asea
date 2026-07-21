---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-033"
supporting_document_type: "Compatibility Report"
title: "Cheat Sheet: Algoritma Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Technical Writer"
source_ids:
  - "V01-C04-SD-COMP-016"
  - "V01-C04-SD-COMP-005"
derived_from:
  - "../../content/lesson-02/lesson.md"
  - "../../research/lesson-02/research-packet.md"
x-production-unit: "lesson-02"
x-content-language: "tr-TR"
---

# Algoritma (Algorithm) Nedir? — Hızlı Tekrar

## Purpose

Dersin tek sayfalık kavramsal tekrar görünümünü sağlamak.

## Scope

Yalnız Lesson ve Research Packet içinde tanımlanan bilgiler özetlenir.

**Terminoloji standardı:** problem örneği (Problem Instance), girdi (Input), çıktı (Output), ön koşul (Precondition), son koşul (Postcondition), doğruluk (Correctness), sonlanma (Termination), izleme (Trace), uygulama (Implementation), sezgisel yöntem (Heuristic) ve determinizm (Determinism). Sonraki kullanımlar Türkçedir.

## Ownership

Bu belge yeni bilgi veya terminoloji eklemez.

## Content

### Ana Kavramlar

- **Algoritma:** Geçerli girdileri açık ve uygulanabilir adımlarla sonlu sürede sözleşmeye uygun çıktılara dönüştüren yöntem.
- **Problem sınıfı:** Benzer kurallara sahip problem örneklerinin bütünü.
- **Problem örneği:** Belirli bir girdiyle somutlaşan tek problem durumu.
- **Girdi:** Algoritmanın işlediği veri.
- **Çıktı:** Algoritmanın sözleşmeye göre ürettiği sonuç.
- **Ön koşul:** Algoritma başlamadan doğru olması gereken şart.
- **Son koşul:** Algoritma bittiğinde sağlanması gereken şart.
- **Doğruluk:** Her geçerli girdide çıktı sözleşmesinin karşılanması.

### Tanımlar

- **Sonlanma:** Algoritmanın sonlu sayıda adımdan sonra durması.
- **İzleme:** Seçilen bir girdi için adımları ve durumu sırayla takip etme.
- **Uygulama:** Algoritmanın belirli dil ve ortamda gerçekleştirilmesi.
- **Gösterim:** Algoritmanın metin, sözde kod veya şemayla anlatım biçimi.
- **Geçerli girdi alanı:** Ön koşulları karşılayan girdilerin kümesi.
- **Normal girdi:** Yaygın ve beklenen kullanım durumunu temsil eden girdi.

### Kritik Notlar

- Sınır girdisi — Geçerli alanın uç noktasındaki girdi.
- Geçersiz girdi — Ön koşulları karşılamayan girdi.
- Karşı örnek — Genel bir doğruluk iddiasının işlemediği tek geçerli örnek.
- İlerleme — Bir tekrarın çıkış koşuluna yaklaşmasını sağlayan durum değişimi.

### Yaygın Hatalar

- Her adım listesini algoritma saymak.
- Tek örnekle genel doğruluğun kanıtlandığını düşünmek.
- Sonlanmayı doğrulukla aynı kabul etmek.
- Algoritma ile uygulamayı karıştırmak.

### Hatırlanması Gerekenler

- **Program:** Algoritmanın belirli bir uygulaması.
- **Sezgisel yöntem:** Her durumda sözleşmeye uygun sonuç garantisi taşımayabilen yaklaşım.

## Validation

- Cheat Sheet Consistency: PASS.
- Learning Outcome Mapping: `V01-LO006`.

## References

- [Lesson](../../content/lesson-02/lesson.md)
- [Research Packet](../../research/lesson-02/research-packet.md)
