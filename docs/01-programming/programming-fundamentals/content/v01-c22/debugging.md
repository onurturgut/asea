---
document_type: "debugging-guide"
document_id: "V01-C22-DBG01"
chapter_id: "V01-C22"
status: "Draft"
---

# Hata Ayıklama Rehberi

| Belirti | Neden | Kanıt | Düzeltme |
|---|---|---|---|
| Sonuçta değer kayıp | Swap geçici değeri korumuyor | Frekanslar değişiyor | Üç adımlı swap |
| En küçük taşınmıyor | Index yerine değer saklandı | Swap konumu bilinmiyor | `smallestIndex` |
| Array dışı okuma | `position > 0` yok | `[-1]` erişimi | Sınırı ilk koşul yap |
| Duplicate sıra değişiyor | Insertion koşulu `>=` | Kimlik izi ters | Yalnızca `>` |
| Kaynak beklenmedik değişiyor | `sort()` veya doğrudan mutation | Referans testi | Kopya ya da `toSorted()` |

Her hata için yalnız son çıktıyı değil, ilk yanlış turun state tablosunu bulun.
