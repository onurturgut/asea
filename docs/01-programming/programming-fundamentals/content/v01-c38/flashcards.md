---
document_type: "flashcards"
document_id: "V01-C38-FC01"
title: "V01-C38 Bilgi Kartları"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# V01-C38 Bilgi Kartları

1. **S:** Source code nedir?  
   **C:** Runtime'ın yürüteceği, geliştiricinin yazdığı talimat metni.

2. **S:** Host environment ne sağlar?  
   **C:** Dil çekirdeğinin dış dünya ile etkileşimi için ortama özgü API'ler.

3. **S:** `document` kime aittir?  
   **C:** Tipik web sayfası bağlamında tarayıcı host'una.

4. **S:** `process.argv` kime aittir?  
   **C:** Node.js runtime/host API'sine.

5. **S:** Entry point nedir?  
   **C:** Runtime'ın program yürütmesini başlattığı kaynak dosya.

6. **S:** Göreli entry point neye göre bulunur?  
   **C:** Sürecin mevcut çalışma klasörüne.

7. **S:** İlk kullanıcı CLI argümanı hangi indekstedir?  
   **C:** Tipik Node.js çalıştırmasında `process.argv[2]`.

8. **S:** CLI argümanlarının başlangıç türü nedir?  
   **C:** String; eksik konum `undefined` olabilir.

9. **S:** `rawScore` adı neyi görünür kılar?  
   **C:** Değerin dışarıdan gelen, henüz hesaplama biçimine dönüştürülmemiş hâlini.

10. **S:** stderr ile exit status aynı mı?  
    **C:** Hayır; biri hata metni kanalı, diğeri süreç tamamlanma durumudur.

11. **S:** npm script ne kazandırır?  
    **C:** Proje içinde adlandırılmış ortak bir başlatma komutu.

12. **S:** Reproducible workflow çekirdeği nedir?  
    **C:** Sürüm, klasör, komut, girdi, beklenen/gerçek çıktı ve exit status kaydı.
