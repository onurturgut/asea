---
document_type: "research-notes"
document_id: "V01-C21-RS01"
chapter_id: "V01-C21"
status: "Draft"
researched_at: "2026-07-29"
---

# C21 Kaynak Araştırma Notları

## Kaynak Seçimi

Birincil ve kurumsal eğitim kaynakları tercih edildi. Kaynakların öğrenciye
doğrudan kopyalanması yerine teknik sınırları doğrulamak için kullanıldı.

| Kaynak | Doğrulanan sınır | C21 kullanımı |
|---|---|---|
| MIT OCW 1.124J | Linear search sırasız veride, binary search sıralı veride uygulanır | Algoritma seçim tablosu |
| Harvard CS50 | Binary search sıralı liste ön koşulu ve daha az adımla daraltma | Sezgisel model |
| MIT 6.006 | Sıralı array’in binary search’e izin vermesi | C21-C22 geçişi |
| MDN `findIndex` | İlk eşleşen index veya `-1` | Hazır araçla sözleşme karşılaştırması |
| MDN `indexOf` | İlk strict-equality index veya `-1` | Linear search transferi |

## Pedagojik Kararlar

- Önce problem ve doğal raf tarama davranışı, sonra algoritma adı.
- İkili aramadan önce öğrenci doğrusal aramayı elle izler.
- Karmaşıklık notasyonu C23’e bırakılır; C21 yalnızca karşılaştırma sayar.
- Sıralama uygulaması C22’ye bırakılır; C21 sıralı girdiyi sözleşme olarak alır.
- String locale sıralaması mühendislik sınırı olarak gösterilir, ilk mekanizma
  örneğinde sayısal ID kullanılır.

## Açık Risk

Canonical dependency kaydı C31’i ön koşul gösterir. Sayısal üretim emri nedeniyle
C31 henüz mevcut değildir. C21, C31 API’lerini kullanmadan yazılmıştır; Stable
kararı C31 kanıtı ve geriye dönük continuity incelemesi bekler.
