---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-COMP-017"
supporting_document_type: "Compatibility Report"
title: "Examples: Algoritma Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids:
  - "V01-C04-SD-COMP-005"
derived_from:
  - "../../research/lesson-02/research-packet.md"
x-production-unit: "lesson-02"
x-content-language: "tr-TR"
---

# Algoritma Nedir? — Örnekler

## Purpose

Algoritma sözleşmesi, sonlanma ve izleme ayrımlarını örneklerle görünür kılmak.

## Scope

Örnekler yalnız `V01-C04` algoritma segmentini ve `V01-LO006` desteğini kapsar.

## Ownership

Tüm örnekler [Research Packet](../../research/lesson-02/research-packet.md)
önerilerinden türetilmiştir.

## Content

### Simple Examples

İki değerden büyüğünü seçen algoritmanın girdileri iki karşılaştırılabilir
değer, çıktısı bu değerlerden büyük olanıdır. Eşitlik durumunun çıktısı da
sözleşmede belirtilmelidir.

### Real World Examples

ATM para çekme algoritması, tutarı yalnız geçerli kart ve yeterli bakiye
koşullarında işler. Başarılı işlem kadar reddedilen işlemin çıktısı ve bakiyenin
değişmeden kalması da sözleşmenin parçasıdır.

### Wrong Examples

“Listedeki değeri bulana kadar kontrol etmeye devam et.” Bu açıklama, değer
listede yoksa çıkış yolu sunmaz. “Yeterli olana kadar tekrarla” ifadesi de
ölçülebilir bir koşul içermediği için uygulanabilir değildir.

### Correct Examples

Boş olmayan bir listede en büyük değeri bulmak için ilk değer aday seçilir,
kalan her değer adayla karşılaştırılır ve daha büyükse aday güncellenir. Liste
bittiğinde aday döndürülür. Boş olmama ön koşulu ve liste sonundaki çıkış,
yöntemin uygulanma alanını ve sonlanmasını açıklar.

### Explanations

Yanlış örneklerde sorun kullanılan kelime sayısı değil, geçerli girdi alanı ve
çıkış koşulunun eksikliğidir. Doğru örnek, yöntemin hangi durumda başladığını,
her adımda nasıl ilerlediğini ve ne zaman sonuç verdiğini açıklar.

### Learning Notes

- Her örnekte sözleşmeyi adımlardan önce belirleyin.
- Bir normal, bir sınır ve bir geçersiz girdi seçin.
- İzlemenin yalnız seçilen girdiye ilişkin kanıt sağladığını not edin.
- İkili arama gibi yöntemlerde sıralı veri ön koşulunu gizlemeyin.

## Validation

- Örnekler araştırma kapsamıyla sınırlıdır.
- Yeni değerlendirme veya görev oluşturulmamıştır.

## References

- [Research Packet](../../research/lesson-02/research-packet.md)
