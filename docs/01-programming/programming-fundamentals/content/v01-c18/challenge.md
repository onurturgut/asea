---
document_type: "challenge"
document_id: "V01-C18-CH01"
title: "Geçersiz Durumları Zorlaştır"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C18"
last_updated: "2026-07-29"
---

# Challenge — Geçersiz Durumları Zorlaştır

Şu zayıf modeli yeniden tasarlayın:

```js
const result = {
  success: false,
  data: { receiptId: "R-7" },
  error: null,
  loading: true,
};
```

Başarı, hata ve bekleme durumlarını ayırt edici alanla ayrı varyantlar hâline
getirin. Her varyant için factory yazın; bilinmeyen veya çelişkili kombinasyonları
reddedin. En az sekiz test ve 300–500 kelimelik karar kaydı teslim edin.

Karar kaydı şu soruyu yanıtlamalıdır: Yeni tasarım hangi geçersiz durumları
temsilden kaldırdı, hangilerini yalnız runtime kontrolüyle engelledi?
