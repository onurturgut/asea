---
document_type: "supporting-document"
supporting_document_id: "V01-C03-SD-COMP-017"
supporting_document_type: "Compatibility Report"
title: "V01-C03 Research Collection"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C03"
authority: "Derived"
owner_role: "Research Lead"
source_ids:
  - "V01-C03"
  - "V01-LO005"
  - "ASEA-SRC-000001"
derived_from:
  - "./source-strategy.md"
  - "../lesson-03/research-collection.md"
x-generated-on: "2026-07-22"
x-language: "tr-TR"
---

# V01-C03 Research Collection

## Collection Boundary

Bu belge öğrenciye sunulacak ders değildir. `V01-C03` üretimi için ham teknik
sentezdir. Kanonik kapsam `V01-LO005`, `ASEA-CON-000012`–`000015` ve
`ASEA-CLM-000012`–`000015` ile sınırlıdır. Kaynak anahtarları
[Source Strategy](./source-strategy.md) içindeki packet-local kayıtlardır.

## Problem Space Before Solution Space

Bir isteğin duyulması ile bir çözümün tasarlanması aynı faaliyet değildir.
GOV.UK discovery rehberi, önceden seçilmiş çözümü sorgulamayı ve önce problemi
yeniden çerçevelemeyi önerir (`c03-source-14`). SEBoK business or mission
analysis ise problem alanını, paydaşları, amaçları ve başarı ölçülerini sistem
gereksinimlerinden önce ele alır (`c03-source-20`).

Araştırma sonucu:

- **İhtiyaç (need):** Paydaşın elde etmek istediği sonuç veya ortadan kaldırmak
  istediği güçlük.
- **Belirti (symptom):** Problemin gözlenen sonucu; kök problem olmayabilir.
- **Problem:** Mevcut durum ile istenen sonuç arasındaki doğrulanabilir fark.
- **Çözüm fikri:** Bu farkı kapatabileceği düşünülen seçenek; problem tanımının
  parçası gibi sunulmamalıdır.
- **Gereksinim (requirement):** Çözümün veya sistemin sağlaması gereken,
  doğrulanabilir koşul ya da yetenek.

“Mobil uygulama lazım” bir problem tanımı değildir. Bu, çözüm varsayımıdır.
Problem; hangi kullanıcının, hangi işi, hangi koşullarda, hangi başarısızlık
veya maliyet nedeniyle yapamadığını açıklar.

## Stakeholders and Outcomes

Paydaş (stakeholder), sonuçtan etkilenen veya gereksinim üzerinde meşru etkisi
olan kişi ya da gruptur. SEBoK ve NASA kaynakları tek bir talep sahibinin tüm
ihtiyaçları temsil etmeyebileceğini gösterir (`c03-source-04`,
`c03-source-17`).

Araştırma kaydı şu ayrımları gerektirir:

| Element | Research question | Failure if omitted |
| --- | --- | --- |
| Stakeholder | Kim etkileniyor veya karar veriyor? | Yanlış kullanıcı için doğru çalışan çözüm |
| Desired outcome | Hangi gözlenebilir sonuç değişmeli? | Özellik listesi başarı ölçüsü sanılır |
| Current condition | Bugün ne oluyor? | Problem farkı ölçülemez |
| Success signal | İyileşmeyi hangi kanıt gösterecek? | Tamamlanma öznel kalır |
| Conflict | Paydaş ihtiyaçları nerede çatışıyor? | Gizli trade-off uygulamada ortaya çıkar |

## Problem Contract

Problem sözleşmesi (problem contract), çözüm kodu değildir. Çalışılacak alanın
paylaşılan ve test edilebilir tarifidir. En az şu alanları taşımalıdır:

1. Paydaş ve bağlam.
2. İstenen sonuç.
3. Girdiler ve bunların geçerlilik alanı.
4. Beklenen çıktılar veya durum değişiklikleri.
5. Kısıtlar.
6. Varsayımlar ve doğrulama sahipleri.
7. Kapsam içi ve kapsam dışı davranışlar.
8. Başarı ve kabul ölçütleri.
9. Sınır, hata ve belirsizlik senaryoları.

NASA gereksinim kalite rehberi açık, tek düşünce taşıyan, ölçülebilir ve
doğrulanabilir ifadeleri savunur (`c03-source-06`). ISO/IEC/IEEE 29148 bilgi
öğelerinin yaşam döngüsü boyunca tanımlanmasını sağlar (`c03-source-03`). Bu
ilkeler başlangıç düzeyinde kısa bir problem sözleşmesine indirgenebilir;
öğrenciden tam kurumsal SRS üretmesi beklenmez.

## Inputs, Outputs, and State Changes

Girdi (input), çözümün davranış üretmek için aldığı bilgidir. Çıktı (output),
gözlenebilir sonuçtur. Bazı problemlerde çıktı yalnızca yazdırılan değer değil,
bir kaydın değişmesi, dosyanın oluşması veya isteğin reddedilmesidir.

Her girdi için aşağıdakiler araştırılmalıdır:

- veri biçimi ve birim;
- zorunlu/isteğe bağlı oluşu;
- geçerli aralık veya küme;
- kaynağı ve güvenilirliği;
- eksik, bozuk, tekrarlı veya gecikmiş olma ihtimali;
- kişisel ya da hassas veri niteliği.

Her çıktı için doğruluk, biçim, hedef, zamanlama ve başarısızlık davranışı
belirlenmelidir. Girdi/çıktı listesi algoritma değildir; algoritmanın uyması
gereken sınırları gösterir.

## Constraints and Assumptions

Kısıt (constraint), kabul edilebilir çözüm alanını zorunlu biçimde daraltır.
Varsayım (assumption), doğruluğu henüz kanıtlanmadan geçici olarak doğru kabul
edilen koşuldur. Bu ayrım `ASEA-CLM-000013` ile uyumludur.

| Statement | Classification | Reason |
| --- | --- | --- |
| İşlem 2 saniye içinde yanıt vermeli | Constraint | Ölçülebilir performans sınırı |
| Kullanıcının bağlantısı kararlı olacaktır | Assumption | Kanıtlanması gereken çevre kabulü |
| Yalnızca tam sayı giriş kabul edilir | Constraint/domain rule | Geçerli alanı sınırlar |
| Dosya her zaman mevcut olacaktır | Assumption | Dış durum garantisi yoktur |

Varsayımlar görünür bir assumption ledger içinde sahip, kanıt, son kontrol
tarihi ve yanlış çıkarsa etkisiyle izlenmelidir. Yanlış varsayım yeni bir edge
case, constraint veya kapsam değişikliği doğurabilir.

## Scope and Non-goals

Kapsam (scope), bu teslimatta çözülecek sorumlulukları; kapsam dışı hedefler
(non-goals) ise bilerek çözülmeyecek alanları belirtir. GOV.UK scoping rehberi
uçtan uca kullanıcı ihtiyacını anlamayı, fakat teslim sınırını görünür tutmayı
önerir (`c03-source-13`).

Kapsam dışı madde “önemsiz” anlamına gelmez. Sadece bu çözüm sözleşmesinde
taahhüt edilmediğini gösterir. Örneğin bilet fiyatı hesaplama probleminde ödeme
alma, kullanıcı hesabı ve kampanya yönetimi non-goal olabilir.

## Acceptance Criteria

Kabul ölçütü (acceptance criterion), çözümün istenen davranışı sağladığını
gösterecek gözlenebilir koşuldur. NASA SWE-034, kabul ölçütlerinin gereksinim
karşılanmasını değerlendirmede kullanılmasını vurgular (`c03-source-10`).

İyi bir ölçüt:

- tek bir gözlenebilir davranışı sınar;
- girdi/koşul ve beklenen sonucu belirtir;
- çözümün iç uygulama ayrıntısını gereksiz yere dayatmaz;
- normal, sınır ve reddedilen durumları kapsar;
- “kolay”, “hızlı”, “kullanışlı” gibi ölçüsüz sözcükleri yalnız bırakmaz.

## Edge Cases, Boundary Cases, and Invalid Inputs

Edge case, davranış sınırında olağandışı fakat anlamlı senaryodur. Boundary
case, belirtilen alt/üst sınırın tam üzerindeki veya hemen çevresindeki testtir.
Invalid input ise sözleşmenin kabul etmediği girdidir. Bu kümeler kesişebilir
ama aynı değildir.

Bir yaş indirimi örneğinde `0`, `17`, `18`, `64`, `65` sınır senaryolarıdır;
`-3` veya metin değer invalid olabilir. Boş koleksiyon geçerli olabilir ve edge
case sayılabilir. Bu ayrım yapılmazsa öğrenci her sıra dışı girdiyi “hata” diye
etiketler ve geçerli sınır davranışını tasarlamaz.

Edge-case keşif mercekleri:

- minimum, maksimum ve sınırın iki yanı;
- boş, tek öğe, çok öğe;
- tekrar, sıra ve eşitlik;
- eksik veya geç gelen bilgi;
- aynı anda gerçekleşen olaylar;
- izin, sahiplik ve gizlilik;
- dış bağımlılığın başarısızlığı;
- birim, saat dilimi, dil ve kodlama farkı.

## Problem Decomposition

Problem ayrıştırma (problem decomposition), problemi yalnızca küçük parçalara
bölmek değildir. Her alt sorumluluğun girdisi, çıktısı, sınırı ve diğer
sorumluluklarla ilişkisi anlaşılabilir olmalıdır. CS2023 ve Wing, decomposition
ve abstraction'ı hesaplamalı düşünmenin temel uygulamaları olarak ele alır
(`c03-source-01`, `c03-source-15`). NASA logical decomposition, gereksinimleri
mantıksal ilişkilere ve işlevlere dönüştürür (`c03-source-04`,
`c03-source-05`).

Kaliteli ayrıştırma ilkeleri:

- Her parça tek ve adlandırılabilir bir sorumluluğa sahiptir.
- Parçaların toplamı hedef davranışı kapsar; arada boşluk kalmaz.
- Aynı sorumluluk birden fazla parçada gereksiz yere tekrarlanmaz.
- Parçalar arası veri ve kontrol ilişkileri açıkça yazılır.
- Sıra ve bağımlılık, yalnızca ağaçla gizlenmez; gerektiğinde grafikle gösterilir.
- Her parça bağımsız olarak açıklanabilir ve test edilebilir bir çıktı üretir.

Bir decomposition tree sahiplik/hiyerarşi gösterir. Bir dependency graph ise
hangi parçanın diğerinin çıktısına ihtiyaç duyduğunu gösterir. İkisi birbirinin
yerine geçmez.

## Abstraction and Relevant Detail

Soyutlama (abstraction), amaca göre ilgili bilgiyi koruyan ve ilgisiz ayrıntıyı
geçici olarak gizleyen modeldir. Soyutlama gerçekliği inkâr etmez; belirli bir
soruyu cevaplamak için yönetilebilir bir görünüm oluşturur.

Yanlış soyutlama, başarıyı etkileyen ayrıntıyı gizler. Örneğin bilet fiyatı
hesabında yolcunun adı ilgisiz olabilir; yaşı veya indirim hakkı ise davranışı
değiştiriyorsa korunmalıdır.

## Verification and Validation

Doğrulama (verification), artefact'ın yazılı gereksinim veya tasarıma uygun
olup olmadığını sorar. Geçerleme (validation), doğru ihtiyacı karşılayıp
karşılamadığını sorar. NASA SWE-055 paydaşlarla doğruluğu, eksiksizliği,
tutarlılığı ve açıklığı değerlendirmeyi öne çıkarır (`c03-source-08`).

C03 düzeyinde:

- problem sözleşmesi alanlarının dolu olması verification örneğidir;
- sözleşmenin gerçek kullanıcı problemini temsil ettiğini paydaşla sınamak
  validation örneğidir;
- çözüm kodunun testi sonraki chapter'ların kapsamıdır.

## Traceability and Change

İzlenebilirlik (traceability), ihtiyaçtan problem ifadesine, gereksinimden kabul
ölçütüne ve alt sorumluluktan kanıta kadar ilişkinin kaybolmamasıdır. NASA
SWE-050 ve SEBoK Requirements Management, ayrıştırılmış gereksinimlerin üst
kaynaklarına izlenmesini ve değişimin etkisinin yönetilmesini vurgular
(`c03-source-07`, `c03-source-19`).

Başlangıç düzeyinde minimum zincir:

```text
paydaş ihtiyacı
  -> problem ifadesi
  -> girdi/çıktı/kısıt
  -> kabul ölçütü
  -> alt sorumluluk
  -> doğrulama kanıtı
```

## Worked Research Scenario: Ticket Price Contract

Ham istek: “Bir bilet fiyatı programı yap.”

Araştırma soruları:

- Fiyat hangi bilet, rota, yaş grubu ve para birimi için hesaplanıyor?
- Girdi ücret midir, rota mıdır, yolcu niteliği midir?
- İndirimler birleşebilir mi; sıraları sonucu değiştirir mi?
- Negatif yaş, eksik fiyat ve bilinmeyen kategori nasıl ele alınır?
- Başarı yalnızca sayı üretmek midir, yoksa kararın açıklaması da gerekir mi?

Örnek problem sözleşmesi:

- Girdi: negatif olmayan taban fiyat ve tanımlı yolcu kategorisi.
- Çıktı: sıfırdan küçük olmayan nihai fiyat ve uygulanan kural etiketi.
- Constraint: para hesabı belirtilen yuvarlama kuralına uyar.
- Assumption: fiyat ve kategori güvenilir kaynaktan gelir; bu kabul ayrıca test
  verisiyle doğrulanacaktır.
- Non-goal: ödeme alma, koltuk seçimi, kimlik doğrulama.
- Edge cases: sıfır fiyat, yaş sınırının tam üzeri, birden fazla indirim hakkı.

Ayrıştırma adayları:

1. Girdiyi al ve biçimsel olarak doğrula.
2. Yolcu kategorisini belirle.
3. Uygulanabilir fiyat kurallarını bul.
4. Çakışma/öncelik politikasını uygula.
5. Sonucu ve karar gerekçesini üret.

Bu liste algoritma değil, sorumluluk haritasıdır. Uygulama sırası ve veri modeli
`V01-C04` ve sonraki chapter'larda tasarlanır.

## AI-Native Engineering Mapping

C03, yapay zekâya doğrudan çözüm yazdırma chapter'ı değildir. Aşağıdaki
yetkinlikleri ölçer:

| Competency key | Required learner behavior | Evidence |
| --- | --- | --- |
| `ai-native-02` | AI kullanmadan ilk problem sözleşmesini üretir | İlk taslak ve zaman kaydı |
| `ai-native-03` | Belirsiz isteği ölçülebilir specification'a dönüştürür | Problem contract |
| `ai-native-04` | AI'a yalnızca gerekli bağlamı, kısıtı ve non-goal'ü verir | Context sheet |
| `ai-native-05` | Problemi sorumluluklara ve bağımlılıklara ayırır | Tree + dependency graph |
| `ai-native-07` | AI önerisini kabul ölçütleriyle sınar | Verification table |
| `ai-native-08` | Eksik varsayım, kapsam kayması ve edge case bulur | AI output review |
| `ai-native-15` | Nihai kararı kanıtla savunur | Kısa teknik savunma |

AI Mentor doğru cevabı vermeden önce öğrenciden problem ifadesi, en az iki
varsayım, üç edge case ve bir ayrıştırma taslağı ister. Ardından Socratic
sorularla eksik alanı görünür yapar. AI çıktısı ayrı tutulur; öğrenci kabul,
red veya düzeltme kararını gerekçelendirir.

## Knowledge Foundation Mapping

| Outcome | Concept | Claim | Current evidence | Current source |
| --- | --- | --- | --- | --- |
| `V01-LO005` | `ASEA-CON-000012` | `ASEA-CLM-000012` | `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `V01-LO005` | `ASEA-CON-000013` | `ASEA-CLM-000013` | `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `V01-LO005` | `ASEA-CON-000014` | `ASEA-CLM-000014` | `ASEA-EV-000010` | `ASEA-SRC-000001` |
| `V01-LO005` | `ASEA-CON-000015` | `ASEA-CLM-000015` | `ASEA-EV-000010` | `ASEA-SRC-000001` |

Yeni kaynaklar bu dört zinciri güçlendirecek aday kanıtlar sağlar. Bu belge yeni
Claim veya Evidence kimliği üretmez. Registry güncellemesi ayrı, kontrollü KOS
işidir.

## Open Research Risks

- `ASEA-EV-000010` dört farklı iddia için geniş kapsamlı tek kanıttır; daha
  granüler evidence locator'ları gereklidir.
- ISO standardının yeni revizyonu yayımlanırsa sürüm etkisi incelenmelidir.
- “Edge case” teriminin endüstride tutarsız kullanımı derste açıkça sınırlandırılmalıdır.
- Başlangıç düzeyi ile kurumsal requirements engineering ayrıntısı arasında
  bilişsel yük testi yapılmalıdır.
- AI Mentor'un problem çözme yerine çözüm dayatmasını önleyecek davranış testi
  lesson üretimi öncesinde tanımlanmalıdır.
