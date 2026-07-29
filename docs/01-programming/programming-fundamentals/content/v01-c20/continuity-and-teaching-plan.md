---
document_type: "teaching-plan"
document_id: "V01-C20-TP01"
title: "V01-C20 Öğretim ve Devamlılık Planı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
standard_id: "ASEA-STD-TEACHING-001"
last_updated: "2026-07-29"
---

# V01-C20 Öğretim ve Devamlılık Planı

## C19 → C20 → C21 Devamlılık Sözleşmesi

| Chapter | İhtiyaç | Yeterlik | Proje artışı |
|---|---|---|---|
| C19 | Derinliği bilinmeyen grupları dolaşmak | İç içe yapılardan ders başlıklarını toplamak | Ham başlık listesi |
| C20 | Aynı anlamdaki dağınık metinleri güvenilir işlemek | Belgeli normalize-tokenize-filter-özetle pipeline'ı | Temiz, aranabilir başlık indeksi |
| C21 | Hedef başlığın koleksiyonda bulunup bulunmadığını belirlemek | Arama algoritmasını izlemek ve seçmek | Başlık arama davranışı |

### Gelen yeterlik

Öğrenci C08'den dönüşüm hattını, C14'ten parametre/dönüş sözleşmesini,
C17'den koleksiyon dolaşımını bilir. C19 bağlamında iç içe gruplardan şu ham
başlıklar toplanmıştır:

```js
const rawTitles = [
  "  Fonksiyonlar  ",
  "JavaScript   TEMELLERİ",
  "İstanbul'da Kodlama",
  "",
];
```

### Yeni ihtiyaç

Bu değerler ekranda metin gibi görünür; fakat arama, sayma ve eşleştirmede
whitespace, case, Unicode temsili ve boş girdi farklı sonuçlar üretir. “String
olması” tek başına güvenilir metin sözleşmesi değildir.

### Yeni yeterlik

Öğrenci:

- string'i kullanıcı anlamı ile teknik temsil düzeylerini karıştırmadan açıklar;
- ham ve işlenmiş metni ayrı değişkenlerde tutar;
- `trim`, NFC normalization ve `tr-TR` case politikasını gerekçelendirir;
- whitespace tokenization'ın kapsamını ve sınırını açıklar;
- empty input için `[]` sonucunu bilinçli üretir;
- her pipeline aşamasını ara değer tablosuyla izler;
- normal, sınır ve Türkçe/Unicode vakalarını test eder.

### Proje artışı

P05 Structured Data Processor, C19'dan gelen başlıkları değişmeden saklar;
ayrıca arama için `normalizedTitle`, `tokens` ve `wordCount` üreten görünür bir
metin indeksi ekler.

### Sonraki devir

C21, C20'nin ürettiği normalize başlık dizisini arama girdisi olarak kullanır.
C21 metin normalization'ı yeniden öğretmez. Bununla birlikte C21'in kanonik
`C31` dependency'si henüz üretilmediği için bu açık review notunda korunur.

## Öğretim Sırası

1. Başarısız başlık eşleşmesi.
2. `trim()` ile tek değişiklik.
3. Case politikasının ürün kararı oluşu.
4. Türkçe `I/İ` karşı örneği.
5. NFC ile görünüş/temsil ayrımı.
6. `split(" ")` boş-token hatası.
7. Whitespace regex'iyle sınırlı tokenization.
8. Empty input politikası.
9. Aşamaları fonksiyonlara ayırma.
10. Unicode code unit/code point/grapheme sınırı.
11. Test matrisi ve P05 artışı.

## Ana Değişkenler

| Ad | Rol | Tür | Karar |
|---|---|---|---|
| `rawTitle` | Kaynaktan gelen değişmemiş metin | string | Hata kanıtını korur |
| `trimmedTitle` | Sınır boşlukları kaldırılmış metin | string | `trim` yeni değer döndürür |
| `unicodeTitle` | NFC biçimindeki metin | string | Kanonik eşdeğerliği ortaklaştırır |
| `searchTitle` | Türkçe locale'e göre küçük harfli arama temsili | string | Gösterim metninden ayrı tutulur |
| `tokens` | Anlamlı metin parçaları | array of string | Sıralı, sıfır veya çok parça |
| `wordCount` | Pipeline politikasına göre token sayısı | number | `tokens.length` türetilmiş ölçüdür |
| `locale` | Case politikasının dil etiketi | string | `"tr-TR"` açık ürün kararı |

## Zorunlu Uygulamalar

- Birlikte yapalım: tek başlığı aşama aşama işleme.
- Şimdi sen dene: çoklu whitespace ve boş giriş.
- Hata avı: `split(" ")`, varsayılan case ve `length` yanılgısı.
- Bağımsız uygulama: etiket temizleme pipeline'ı.
- Gerçek proje bağlantısı: P05 başlık indeksini üretme.

## Değerlendirme

`LO031`, yalnız method adı hatırlamayla geçilemez. Öğrenci pipeline diyagramı,
ara değer izi, çalışan fonksiyon, beş vakalık test matrisi ve karar notu
teslim eder.
