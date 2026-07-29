---
document_type: "debugging-guide"
document_id: "V01-C21-DBG01"
chapter_id: "V01-C21"
status: "Draft"
---

# Hata Ayıklama Rehberi

| Belirti | Olası neden | Kanıt | Düzeltme |
|---|---|---|---|
| Son eleman bulunmuyor | `index < length - 1` | Son index hiç görülmez | `index < length` |
| Tek eleman atlanıyor | `low < high` | `low === high` turu yok | `low <= high` |
| Sonsuz döngü | `low = middle` | Sınır değişmiyor | `middle + 1` |
| Bazı değerler kayıp | Sırasız binary girdi | Sıralılık testi başarısız | Linear seç veya sözleşmeyi sağla |
| `undefined` okunuyor | `-1` index gibi kullanılıyor | Sonuç `-1` | Önce bulunamadı dalı |

Bir hatayı düzeltmeden önce `low`, `high`, `middle` ve `middleValue` değerlerini
her tur için yazdırın. Belirtiyi görünür kılmadan rastgele operatör değiştirmeyin.
