---
document_type: "lab"
document_id: "V01-C09-L01"
title: "Doğruluk Tablolarıyla Erişim Kurallarını Modelleme"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C09"
learning_outcomes:
  - "V01-LO013"
  - "V01-LO014"
estimated_time: "90-120 dakika"
---

# Doğruluk Tablolarıyla Erişim Kurallarını Modelleme

## Senaryo

Bir belge çalışma alanı için sınırlı bir erişim kuralı modelleyeceksin. Kullanıcı ancak hesabı etkinse, belge kilitli değilse ve kullanıcı sahip ya da editörse belgeyi düzenleyebilir. Bu laboratuvar gerçek bir güvenlik sistemi değildir; yalnız karar mantığını ve kanıt üretimini öğretir.

## Gereksinimler

- Node.js çalıştırabilen terminal
- Bir kod düzenleyici
- `access-rules` adlı klasör
- `index.js`, `truth-table.md` ve `reflection.md` dosyaları

## Görevler

1. Gereksinimi dört adlandırılmış yükleme ayır.
2. `isOwner || isEditor` için dört satırlık tablo oluştur.
3. Rol sonucunu tek girdi kabul ederek etkinlik, kilit ve rol için sekiz satırlık tablo oluştur.
4. `canEditDocument` ifadesini yaz.
5. Sekiz tablo satırını veri dizisi olarak kodla ve gerçek sonuçla beklenen sonucu karşılaştır.
6. Reddetme kuralını `shouldDenyEditing` adıyla yaz.
7. `canEditDocument === !shouldDenyEditing` eşitliğini sekiz satırda doğrula.
8. Bilerek bir `&&` operatörünü `||` yap; hangi satırların bozulduğunu kaydet.
9. Hatalı değişikliği geri al ve bütün testlerin geçtiğini göster.
10. İstemci tarafındaki bu modelin neden gerçek yetkilendirme olmadığını `reflection.md` dosyasında açıkla.

## Başlangıç Kodu

```js
const cases = [
  { active: false, locked: false, role: false, expected: false },
  { active: false, locked: false, role: true, expected: false },
  { active: false, locked: true, role: false, expected: false },
  { active: false, locked: true, role: true, expected: false },
  { active: true, locked: false, role: false, expected: false },
  { active: true, locked: false, role: true, expected: true },
  { active: true, locked: true, role: false, expected: false },
  { active: true, locked: true, role: true, expected: false },
];

for (const testCase of cases) {
  // Düzenleme iznini burada hesapla.
  const canEditDocument = false;

  // Eşdeğer reddetme kuralını burada hesapla.
  const shouldDenyEditing = true;

  console.log({
    ...testCase,
    canEditDocument,
    shouldDenyEditing,
    expectedPassed: canEditDocument === testCase.expected,
    equivalencePassed:
      canEditDocument === !shouldDenyEditing,
  });
}
```

## Teslim Edilecekler

- Çalışan `index.js`
- Eksiksiz `truth-table.md`
- Sekiz durumda iki doğrulamanın da geçtiğini gösteren terminal çıktısı
- Bilerek eklenen hatanın bozduğu satırların listesi
- En az 200 kelimelik `reflection.md`

## Bonus Challenge

`isReadOnlyMode` adlı dördüncü girdi ekle. Düzenleme için bu değerin de yanlış olması gereksin. On altı satırlık tablo oluştur ve test verisini genişlet.

## Başarı Ölçütü

Sekiz temel durumun tamamı beklenen sonucu vermeli, özgün ve reddetme ifadeleri bütün satırlarda eşdeğer olmalı, öğrenci en az bir hatayı tablo üzerinden teşhis etmeli ve güvenlik sınırını doğru açıklamalıdır.
