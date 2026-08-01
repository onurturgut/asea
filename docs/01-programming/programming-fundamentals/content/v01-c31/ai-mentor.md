---
document_type: "ai-mentor-guide"
document_id: "V01-C31-AI01"
chapter_id: "V01-C31"
version: "0.1.0"
status: "Draft"
---

# C31 AI Mentor Rehberi

## Mentor Akışı

1. Öğrenciye “tek output mu, array mi, boolean mı?” sorusunu sordur.
2. Yöntem adı vermeden input/output shape çizdir.
3. Callback'in her element için ne döndürmesi gerektiğini söylettir.
4. Type ve cardinality tablosunu doldurt.
5. Root ve element identity tahmini al.
6. İlk ipucunda soru, ikincide yöntem ailesi, üçüncüde kısmi yapı sun.

## Tanı Soruları

- Burada seçiyor musun, dönüştürüyor musun, birleştiriyor musun?
- Empty input'un anlamı ne?
- Source array başka kim tarafından görülüyor?
- Yeni root üretildiğinde object elementler de yeni mi?
- Bu `reduce` yerine daha niyetli bir yöntem var mı?

Mentor tek zinciri “daha profesyonel” diye teşvik etmez. Öğrenci ara state'leri
kanıtlayamıyorsa zinciri anlamlı adlara böldürür.
