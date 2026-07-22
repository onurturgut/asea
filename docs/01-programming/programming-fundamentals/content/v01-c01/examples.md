---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-017"
supporting_document_type: "Compatibility Report"
title: "V01-C01 Runnable Programming Examples"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Software Engineering Educator"
source_ids: ["V01-C01", "V01-LO001", "V01-LO002"]
derived_from: ["../../../chapters/01-what-is-programming.md", "../../content/lesson-01/examples.md"]
---

# Çalışan Programlama Örnekleri

## Purpose

Program, girdi, işlem, çıktı, talimat kesinliği ve doğruluk kavramlarını küçük,
çalıştırılabilir JavaScript örnekleriyle görünür kılmak.

## Scope

Örnekler Node.js 18+ veya modern tarayıcı konsolunda çalışır. JavaScript
sözdizimini kapsamlı olarak öğretmez.

## Ownership

- Teknik sahip: Software Engineering Educator
- Kanonik kavram açıklaması: Ana ders
- Öğrenci sorumluluğu: Her örneği çalıştırmadan önce sonucu tahmin etmek

## Content

### Örnek 1 — Girdi, işlem ve çıktı

```javascript
const unitPrice = 25;
const quantity = 4;
const total = unitPrice * quantity;

console.log(`Toplam: ${total}`);
```

Beklenen çıktı:

```text
Toplam: 100
```

`unitPrice` ve `quantity` girdiyi, çarpma işlemi dönüşümü, konsol satırı
gözlenebilir çıktıyı temsil eder.

### Örnek 2 — Çalışmak ve doğru olmak farklıdır

```javascript
function calculateTotal(unitPrice, quantity) {
  return unitPrice + quantity;
}

console.log(calculateTotal(25, 4));
```

Program çalışır ve `29` üretir; fakat gereksinim toplam satış tutarıysa yanlış
işlemi uygular. Sözdizimsel geçerlilik, iş kuralı doğruluğunu kanıtlamaz.

### Örnek 3 — Normal, sınır ve geçersiz girdi

```javascript
function splitBill(total, people) {
  if (!Number.isFinite(total) || !Number.isInteger(people) || people <= 0) {
    return { ok: false, error: "Geçerli toplam ve pozitif kişi sayısı gerekli." };
  }

  return { ok: true, amountPerPerson: total / people };
}

console.log(splitBill(300, 3));
console.log(splitBill(0, 1));
console.log(splitBill(300, 0));
```

Beklenen davranış:

```text
{ ok: true, amountPerPerson: 100 }
{ ok: true, amountPerPerson: 0 }
{ ok: false, error: 'Geçerli toplam ve pozitif kişi sayısı gerekli.' }
```

### Örnek 4 — Belirsiz gereksinimi açığa çıkarma

“Adları sırala” gereksinimi aşağıdaki kod için yeterli değildir:

```javascript
const names = ["zeynep", "Ada", "  mert  ", ""];
const sortedNames = names.toSorted();

console.log(sortedNames);
```

Karar verilmesi gerekenler:

1. Boşluklar temizlenecek mi?
2. Boş değerler korunacak mı?
3. Büyük-küçük harf farkı sıralamayı etkileyecek mi?
4. Türkçe yerel sıralama kuralları kullanılacak mı?
5. Orijinal liste değiştirilecek mi?

Koddan önce bu kararlar sözleşmeye yazılmazsa farklı geçerli uygulamalar farklı
çıktılar üretebilir.

### Örnek 5 — Talimatları izlenebilir hâle getirme

```javascript
function normalizeName(rawName) {
  const trimmedName = rawName.trim();
  const normalizedName = trimmedName.toLocaleLowerCase("tr-TR");

  return {
    input: rawName,
    trimmedName,
    normalizedName,
  };
}

console.table(normalizeName("  ADA  "));
```

Ara değerlerin adlandırılması programı biraz uzatır; buna karşılık öğrencinin
hangi talimatın hangi dönüşümü yaptığını görmesini kolaylaştırır.

## Validation

- Kod blokları dil etiketi taşır.
- Örneklerin beklenen davranışı açıklanmıştır.
- Örnekler `V01-LO001` ve `V01-LO002` dışına yeni sözdizimi hedefi eklemez.
- Hatalı örnek, bilerek hatalı olduğu açıklanmadan doğru çözüm gibi sunulmaz.

## References

- [Ana Ders](../../../chapters/01-what-is-programming.md)
- [Legacy Examples](../../content/lesson-01/examples.md)
- [Alıştırmalar](./exercises.md)
- [Debugging Challenge](./debugging.md)
