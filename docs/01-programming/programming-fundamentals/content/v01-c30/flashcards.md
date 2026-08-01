---
document_type: "flashcards"
document_id: "V01-C30-FC01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Bilgi Kartları

## Kartlar

- **Object identity nedir?** Bir object value'yu diğer object'lerden ayıran kimlik.
- **Property nedir?** Object üzerindeki key–value ilişkisi.
- **Computed key nasıl okunur?** `object[key]`.
- **Alias nedir?** Aynı object'e ulaşan başka bir bağ/yol.
- **Mutation nedir?** Mevcut object state'ini yerinde değiştirme.
- **Rebinding nedir?** Bir binding'i başka value'ya bağlama.
- **`const` neyi önler?** Rebinding'i; nested mutation'ı değil.
- **Shallow copy nedir?** Dış yapısı yeni, nested object referansları paylaşılabilen kopya.
- **`Object.hasOwn` neyi sorar?** Key object'in own property'si mi?
- **Invariant nedir?** Geçerli state boyunca doğru kalması gereken kural.
- **Selective update nedir?** Yalnız değişen object yolunu yeniden üretme.
- **Identity testi?** Object'lerde `===` ile aynı object value'yu görme testi.
