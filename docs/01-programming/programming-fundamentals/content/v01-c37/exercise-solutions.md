---
document_type: "exercise-solutions"
document_id: "V01-C37-ES01"
chapter_id: "V01-C37"
---
# C37 Alıştırma Çözümleri

1. `validation.js` girdiyi, `progress.js` domain hesabını, `console-view.js` sunumu sahiplenir.
2. Yalnız tüketicinin ihtiyaç duyduğu fonksiyonlar export edilir; yardımcılar module scope'ta kalır.
3. Her `import`, kaynak modülden hedef modüle bağımlılık kenarıdır; iki yönlü yol cycle'dır.
4. Top-level log kaldırılır ve çağıranın açıkça çalıştırdığı `showReport()` fonksiyonuna taşınır.
5. Object doğrudan export edilmez; `readState()` kopya döndürür, `advance()` geçişi doğrular.

Çözüm adlarını kopyalamak yerine her sınır için “bu kararın sahibi kim?” sorusunu savunun.
