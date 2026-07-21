---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-032"
supporting_document_type: "Compatibility Report"
title: "Interview: Algoritma Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Assessment Designer"
source_ids:
  - "V01-C04-SD-COMP-016"
  - "V01-C04-SD-COMP-005"
derived_from:
  - "../../content/lesson-02/lesson.md"
  - "../../research/lesson-02/research-packet.md"
x-production-unit: "lesson-02"
x-content-language: "tr-TR"
---

# Algoritma (Algorithm) Nedir? — Mülakat Soruları

## Purpose

Başlangıç seviyesindeki kavramsal açıklama ve muhakemeyi değerlendirmek.

## Scope

Sekiz soru yalnız Lesson ve Research Packet kapsamındadır.

**Terminoloji standardı:** problem örneği (Problem Instance), girdi (Input), çıktı (Output), ön koşul (Precondition), son koşul (Postcondition), doğruluk (Correctness), sonlanma (Termination), izleme (Trace), uygulama (Implementation), sezgisel yöntem (Heuristic) ve determinizm (Determinism). Sonraki kullanımlar Türkçedir.

## Ownership

Beklenen cevaplar ve değerlendirme ölçütleri Learning Outcome'larla eşlenir.

## Content

### Junior Interview Questions

#### 1. Algoritma kavramını açıkla ve dersteki rolünü belirt

- **Beklenen cevap:** Geçerli girdileri açık ve uygulanabilir adımlarla sonlu sürede sözleşmeye uygun çıktılara dönüştüren yöntem.
- **Değerlendirme kriteri:** Tanımı doğru verir, yakın kavramlardan ayırır ve uygun bağlamda kullanır.
- **Learning Outcome Mapping:** `V01-LO006`

#### 2. Problem sınıfı kavramını açıkla ve dersteki rolünü belirt

- **Beklenen cevap:** Benzer kurallara sahip problem örneklerinin bütünü.
- **Değerlendirme kriteri:** Tanımı doğru verir, yakın kavramlardan ayırır ve uygun bağlamda kullanır.
- **Learning Outcome Mapping:** `V01-LO006`

### Concept Questions

#### 3. Problem örneği kavramını açıkla ve dersteki rolünü belirt

- **Beklenen cevap:** Belirli bir girdiyle somutlaşan tek problem durumu.
- **Değerlendirme kriteri:** Tanımı doğru verir, yakın kavramlardan ayırır ve uygun bağlamda kullanır.
- **Learning Outcome Mapping:** `V01-LO006`

#### 4. Girdi kavramını açıkla ve dersteki rolünü belirt

- **Beklenen cevap:** Algoritmanın işlediği veri.
- **Değerlendirme kriteri:** Tanımı doğru verir, yakın kavramlardan ayırır ve uygun bağlamda kullanır.
- **Learning Outcome Mapping:** `V01-LO006`

### Scenario Questions

#### 5. Boş olmayan listede maksimum bulma yöntemi boş listeyle çağrılıyor. Önce hangi sözleşme sorunu incelenmelidir?

- **Beklenen cevap:** Boş olmama ön koşulu karşılanmamıştır; boş girdinin geçersiz olduğu veya ayrı davranış gerektirdiği açıklanmalıdır.
- **Değerlendirme kriteri:** Ön koşulu belirler ve geçerli girdi alanını doğru yorumlar.
- **Learning Outcome Mapping:** `V01-LO006`

#### 6. Arama adımları yalnız değer bulunduğunda duruyor. Değer yoksa hangi eksik vardır?

- **Beklenen cevap:** Bulunamadı çıktısına giden açık sonlanma yolu eksiktir.
- **Değerlendirme kriteri:** Sonlanma problemini ve gerekli çıktı yolunu birlikte açıklar.
- **Learning Outcome Mapping:** `V01-LO006`

### Trick Questions

#### 7. Sonlanan her yöntem doğru mudur?

- **Beklenen cevap:** Hayır. Sonlanma sonlu sürede durmayı, doğruluk ise çıktı sözleşmesini karşılamayı ifade eder.
- **Değerlendirme kriteri:** İki özelliği bağımsız değerlendirir.
- **Learning Outcome Mapping:** `V01-LO006`

#### 8. Bir algoritmanın algoritma sayılması için mutlaka deterministik olması gerekir mi?

- **Beklenen cevap:** Hayır. Determinizm evrensel şart değildir; yöntemin sözleşmesi, doğruluğu ve sonlanması ayrıca incelenir.
- **Değerlendirme kriteri:** Deterministiklik yanılgısını reddeder ve değerlendirme ölçütlerini doğru kurar.
- **Learning Outcome Mapping:** `V01-LO006`

## Validation

- Interview Coverage: 8/8.
- Beklenen cevap ve kriter: 8/8.
- Learning Outcome Mapping: `V01-LO006`.

## References

- [Lesson](../../content/lesson-02/lesson.md)
- [Research Packet](../../research/lesson-02/research-packet.md)
