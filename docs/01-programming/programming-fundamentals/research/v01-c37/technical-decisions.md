# V01-C37 Teknik Kararlar

- Named export başlangıç standardı seçildi; default export yasaklanmadı.
- Imported binding “canlı fakat tüketicide read-only” olarak anlatıldı; exported object'in
  iç mutability'si bundan ayrı tutuldu.
- Cycle “her durumda syntax hatası” diye sunulmadı; initialization ve coupling riski olarak
  analiz edildi.
- Specifier resolution'ın JavaScript host'una bağlı olduğu açıklandı.
- Top-level side effect yerine composition root'ta açık başlatma tercih edildi.
- P08 artışı C38'e geçiş kanıtı olarak tanımlandı.
