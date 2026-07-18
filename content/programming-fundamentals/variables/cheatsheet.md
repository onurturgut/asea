# Değişkenler (Variables) ve Durum (State) — Hızlı Tekrar

Teknik sözlük: bağlama (binding), bildirim (declaration), ilklendirme
(initialization), atama (assignment), yeniden atama (reassignment), mutasyon
(mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge (Temporal
Dead Zone) ve yukarı kaldırma (hoisting).

## Sözdizimi

```js
const stableBinding = "value";
let mutableBinding = 0;
mutableBinding += 1;

const object = { active: false };
object.active = true;
```

## Temel Kurallar

- **Değişken:** Program durumuna verilen adlı bağlama.
- **Bildirim:** Bağlama oluşturur.
- **İlklendirme:** Bağlamanın ilk değerini kurar.
- **Atama:** Değer yazar.
- **Yeniden atama:** Bağlamanın değerini değiştirir.
- **Mutasyon:** Nesne veya koleksiyonun iç durumunu değiştirir.
- Yeniden atama yoksa `const`, varsa `let` kullanın.
- `const` nesneyi derinden değiştirilemez yapmaz.
- Sıradan bloklar `let` ve `const`u kapsar, `var`ı kapsamaz.
- Sözlüksel bağlamayı ilklendirmeden okumak `ReferenceError` üretir.
- Yukarı kaldırma kaynak satırlarının taşınması değildir.

## Karşılaştırma

| Özellik | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Yeniden atama | Evet | Evet | Hayır |
| İlklendirici gerekli | Hayır | Hayır | Evet |
| Blok kapsamı | Hayır | Evet | Evet |
| Erken ilklendirme | `undefined` | Yok | Yok |
| Erken okuma | `undefined` | `ReferenceError` | `ReferenceError` |
| Modern tercih | Özel semantik | Değişen bağlama | Sabit bağlama |

## Bağlama ve Nesne

```js
const settings = { theme: "light" };
settings.theme = "dark"; // Nesne mutasyonu: geçerli.
// settings = {}; // Bağlama yeniden ataması: TypeError.
```

## Kapsam

```js
const outer = "outer";

{
  const inner = "inner";
  console.log(outer, inner);
}

// console.log(inner); // ReferenceError.
```

## Hata Rehberi

| Durum | Sonuç |
| --- | --- |
| `const x;` | `SyntaxError` |
| `let x; let x;` | `SyntaxError` |
| Geçici Ölü Bölgede okuma | `ReferenceError` |
| `const` yeniden ataması | `TypeError` |
| İlklendiriciden önce `var` okuma | `undefined` |

## En İyi Uygulamalar

- Bağlamayı en dar yararlı kapsamda bildirin.
- İlklendirilmemiş durum anlamlı değilse hemen ilklendirin.
- Adları alan anlamına göre seçin.
- Durum geçişlerini az ve görünür noktalarda tutun.
- Nesne mutasyon politikasını bağlama politikasından ayrı belirleyin.
- `var`ı yalnızca özel semantiği gerekiyorsa kullanın.
- Takım politikasını lint ile destekleyin.
- Performans iddialarını temsilî iş yüküyle ölçün.

## Yaygın Hatalar

- Nesne değişiyor diye `let` seçmek
- `const`u derin dondurma sanmak
- `var`ı blok kapsamlı sanmak
- Yeniden bildirimle yeniden atamayı karıştırmak
- Geçici Ölü Bölgede okuma yapmak
- Koşulda karşılaştırma yerine atama yapmak
- Yanlışlıkla global veya gölgelenmiş durum oluşturmak
- Evrensel yığın/öbek veya anahtar sözcük hız iddiası kurmak

## Karar Akışı

```text
Bağlama daha sonra başka değer alacak mı?
├── Hayır → const
└── Evet  → let

Değer nesne mi?
└── Mutasyon politikasını ayrıca belirle.

Son adım:
└── En dar yararlı kapsamı seç.
```
