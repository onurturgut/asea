---
document_type: "assessment-rubric"
document_id: "V01-C30-AS01"
chapter_id: "V01-C30"
version: "0.1.0"
status: "Draft"
---

# C30 Değerlendirme Rubriği

## Ölçütler

| Ölçüt | Başlangıç | Yeterli | Güçlü |
| --- | --- | --- | --- |
| Model (`LO049`) | Property listesi eksik | Type ve temel invariant doğru | Gereksinim izlenebilir, geçersiz state kapalı |
| Identity izi (`LO050`) | Output tahmini | Root/nested alias doğru | Her adımı binding–reference–state ile savunur |
| Kopyalama | Spread'i deep sanır | Shallow sınırı gösterir | Seçici paylaşımı bilinçli tasarlar |
| Güncelleme | Input'u gizlice mutate eder | Eski state korunur | Identity sözleşmesi testlerle kanıtlıdır |
| Hata ayıklama | Rastgele değişiklik | Mutation satırını bulur | Sistematik identity matrisi kullanır |
| İletişim | Terimler belirsiz | Temel terimler doğru | Domain ve runtime açıklaması açık |

## Başarı Kapısı

LO049 ve LO050 satırlarının ikisi de en az “Yeterli” olmalıdır. Çalışan output tek
başına yeterli değildir; identity ve invariant kanıtı zorunludur.
