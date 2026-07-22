---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-020"
supporting_document_type: "Compatibility Report"
title: "Belirsiz Talimatı ve Yanlış Programı Teşhis Et"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Learning Designer"
source_ids:
  - "V01-C01-CH01"
  - "V01-C01-EX01"
  - "V01-LO001"
  - "V01-LO002"
derived_from:
  - "../../../assessments/01-challenge-01-ambiguous-recipe-repair.md"
  - "../../../chapters/01-what-is-programming.md"
---

# Belirsiz Talimatı ve Yanlış Programı Teşhis Et

## Objective

Bir sorunun sözdizimi, mantık, gereksinim veya talimat belirsizliği katmanından
hangisinde başladığını kanıtla belirlemek ve en küçük doğrulanabilir düzeltmeyi
üretmek.

## Scenario

Bir ekip “Siparişi hazırla ve toplamı göster” gereksinimi için aşağıdaki
programı yazmıştır:

```javascript
function prepareOrder(unitPrice, quantity, discountPercent) {
  const subtotal = unitPrice + quantity;
  const discount = subtotal * discountPercent;
  const total = subtotal - discount;

  return `Toplam: ${total}`;
}

console.log(prepareOrder(50, 2, 10));
```

Program çalışır; ancak gereksinim, veri sözleşmesi ve işlemler yeterince açık
değildir. `discountPercent` değerinin `10` mu yoksa `0.10` mu olacağı bile
tanımlanmamıştır.

## Tasks

1. Kodu çalıştırmadan önce mevcut çıktıyı tahmin edin.
2. En az dört belirsizlik veya hata adayı listeleyin.
3. Her adayı `syntax`, `logic`, `requirement` veya `instruction` olarak
   sınıflandırın.
4. İlk doğrulanabilir sapmayı bulun.
5. Girdi sözleşmesini açıkça yazın.
6. Normal, sınır ve geçersiz durum için beklenen davranışı tanımlayın.
7. Programı en küçük değişikliklerle düzeltin.
8. Düzeltmenin üç testle kanıtını sunun.
9. Çalışan kodun neden başlangıçta doğru olmadığını açıklayın.

## Constraints

- Yeni kütüphane kullanmayın.
- Hataları tek seferde rastgele değiştirmeyin.
- Her değişikliği bir hipotez ve test sonucuna bağlayın.
- Çözümden önce problem ve veri sözleşmesini yazın.

## Deliverables

- Hata ve belirsizlik sınıflandırma tablosu
- İlk sapma açıklaması
- Açık girdi/çıktı sözleşmesi
- Düzeltilmiş JavaScript dosyası
- Üç testin beklenen ve gerçek sonuçları
- En fazla 250 kelimelik kök neden raporu

## Evaluation Criteria

- `V01-LO001`: Program, algoritma, yürütme ve çıktı doğru ayrılmıştır.
- `V01-LO002`: Düzeltilen talimat ve veri sözleşmesi tek anlamlıdır.
- Kök neden belirtiyle karıştırılmamıştır.
- Testler normal, sınır ve geçersiz durumu kapsar.
- Düzeltme çalışmanın yanında gereksinimi de karşılar.

## References

- [Ana Ders](../../../chapters/01-what-is-programming.md)
- [Alıştırmalar](./exercises.md)
- [Çalışan Örnekler](./examples.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
