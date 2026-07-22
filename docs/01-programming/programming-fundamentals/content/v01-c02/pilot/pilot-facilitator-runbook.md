---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-STUDY-005"
supporting_document_type: "Study Plan"
title: "V01-C02 Pilot Facilitator Runbook"
version: "0.1.1"
status: "Draft"
scope_id: "V01-C02"
authority: "Informational"
owner_role: "Pedagogical Reviewer"
source_ids:
  - "V01-C02"
  - "V01-LO003"
  - "V01-LO004"
  - "V01-C02-AS01"
derived_from:
  - "../student-pilot-protocol.md"
  - "../reading-guide.md"
  - "../assessment-rubric.md"
---

# V01-C02 Pilot Kolaylaştırıcı Uygulama Rehberi

## Purpose

Başlangıç seviyesindeki gerçek katılımcılarla yapılacak `V01-C02` öğrenci
pilotunu her oturumda aynı kurallarla yürütmek, yardımı standartlaştırmak ve
sonuçların yeniden değerlendirilebilir kanıtlarla kaydedilmesini sağlamak.

## Scope

Bu rehber katılımcı kabulü, başlangıç ölçümü, ders çalışması, alıştırma, kısa
sınav, laboratuvar, son ölçüm ve oturum kapanışını kapsar. Henüz gerçekleşmemiş
bir pilot sonucu veya öğrenci verisi içermez.

## Ownership

- Oturum yönetimi: Pilot Facilitator
- Pedagojik karar: Pedagogical Reviewer
- Teknik olayların sınıflandırılması: Subject-Matter Reviewer
- Puanlama ve veri analizi: Assessment Reviewer
- Anonim veri erişimi: Repository Owner

Kolaylaştırıcı öğrenci yerine çözüm üretmez ve başarı kararını tek başına
vermez.

## Content

### Pilot öncesi hazırlık

1. Beş ile sekiz başlangıç seviyesi katılımcı belirle.
2. Her katılımcıya `P01`–`P08` aralığında benzersiz anonim kod ata.
3. Katılımcıya amaç, yaklaşık süre, bırakma hakkı ve toplanacak veriyi açıkla.
4. Node.js, bir metin düzenleyici ve terminal erişimini kontrol et.
5. Ana ders, alıştırmalar, kısa sınav ve laboratuvar bağlantılarını hazırla.
6. Cevap anahtarını katılımcının erişemeyeceği ayrı bir yerde tut.
7. [Pilot veri dosyasını](./pilot-results.csv) oturum başlamadan önce kopyala ve
   yalnız anonim katılımcı kodlarını kullan.

### Oturum başlangıcı

1. Katılımcının profesyonel geliştirici olmadığını ve hedef profile uyduğunu
   doğrula.
2. Katılımcının dış kaynak kullanmadan çalışacağını açıkla.
3. Yardım olaylarının `H0`–`H5` kodlarıyla kaydedileceğini bildir.
4. Dört görevli başlangıç ölçümünü uygula.
5. Başlangıç puanını rubriğe göre hesapla; öğrenciye öğretim geri bildirimi
   verme.

### Öğrenme oturumu

| Sıra | Çalışma | Hedef süre | Kolaylaştırıcı davranışı |
| ---: | --- | ---: | --- |
| 1 | Okuma rehberi ve ana ders | 80 dk | Süreyi ve takılma noktasını kaydet |
| 2 | Çalışan örnek ve kavram özeti | 25 dk | Tahmin yapılmadan kodu çalıştırma |
| 3 | Kademeli alıştırmalar | 35 dk | Yalnız yönlendirici soru sor |
| 4 | Kısa sınav | 30 dk | Cevap anahtarını gösterme |
| 5 | Laboratuvar | 90 dk | Teslimat ve test kanıtlarını koru |
| 6 | Mülakat ve yansıtma örneklemi | 20 dk | Öğrencinin kendi ifadesini kaydet |

Her aşamanın başlangıç ve bitiş zamanını dakika cinsinden kaydet. Teknik kesinti
süresini öğrenme süresinden ayır.

### Yardım politikası

- İlk takılmada öğrenciden problemi kendi cümlesiyle açıklamasını iste.
- İkinci adımda ilgili ders içi bölüme dönmesini sağla (`H1`).
- Gerekirse yalnız yönlendirici soru veya AI Mentör ipucu kullan (`H2`/`H3`).
- Repository dışı kaynak (`H4`) veya doğrudan çözüm (`H5`) kullanılırsa konu,
  neden ve etkisini olay kaydına ekle.
- `H4` ve `H5` olaylarını gizleme veya `H1` olarak yeniden sınıflandırma.

### Oturum sonu

1. Başlangıç ölçümünden farklı sorularla aynı becerileri ölçen son ölçümü uygula.
2. `V01-LO003` ve `V01-LO004` yeterliklerini ayrı ayrı rubrikle puanla.
3. Kısa sınav ve laboratuvar puanlarını kaydet.
4. Tamamlama durumunu `completed`, `withdrawn` veya `technical-blocker` olarak
   kaydet.
5. Öğrenciden en zor üç noktayı ve dış kaynağa ihtiyaç duyduğu konuları sor.
6. Gerçek ad, e-posta veya özel kaynak kodu pilot kayıtlarına ekleme.

### Eskalasyon kuralları

- Yanlış cevap anahtarı veya teknik yanlış anlatım: `Major` bulgu.
- Aynı bölümde en az üç öğrencinin takılması: ortak içerik bulgusu.
- Aynı konuda en az iki `H4` olayı: açıklama veya örnek incelemesi.
- Veri kaybı ya da katılımcı kodu çakışması: ilgili oturumu geçersiz say ve
  gerekçeyi kaydet.

## Validation

- Oturum sırası kanonik pilot protokolüyle aynıdır.
- Yardım seviyeleri `H0`–`H5` sözleşmesini değiştirmez.
- Gerçek kimlik yerine anonim katılımcı kodu kullanılır.
- Cevap anahtarı sınav tesliminden önce paylaşılmaz.
- Sonuç üretmek için en az beş geçerli tamamlanmış kayıt gerekir.

## References

- [Öğrenci Pilot Protokolü](../student-pilot-protocol.md)
- [Katılımcı Rehberi](./pilot-participant-guide.md)
- [Katılım Daveti](./pilot-recruitment-message.txt)
- [Ana Ders](../../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Alıştırmalar](../exercises.md)
- [Kısa Sınav](../quiz.md)
- [Laboratuvar](../lab.md)
- [Değerlendirme Rubriği](../assessment-rubric.md)
