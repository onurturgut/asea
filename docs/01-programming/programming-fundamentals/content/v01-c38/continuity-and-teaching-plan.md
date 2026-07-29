---
document_type: "teaching-plan"
document_id: "V01-C38-TP01"
title: "V01-C38 Öğretim ve Devamlılık Planı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
standard_id: "ASEA-STD-TEACHING-001"
last_updated: "2026-07-29"
---

# V01-C38 Öğretim ve Devamlılık Planı

## C08 → C38 → C29 Devamlılık Sözleşmesi

| Aşama | Görünür ihtiyaç | Yeni yeterlik | Proje artışı |
|---|---|---|---|
| `V01-C08` Girdi, Çıktı ve Veri Dönüşümü | Dış veriyi alıp anlamlı sonuca çevirmek | Girdi → dönüşüm → çıktı hattı | Puan özetleyici iş mantığı |
| `V01-C38` Runtime ve Araçlar | Hattın nerede, hangi komutla ve hangi imkânlarla çalıştığını açıklamak | Host sınırını ayırmak ve tekrar üretilebilir yürütme kaydı oluşturmak | Puan özetleyici yerel CLI programına dönüşür |
| `V01-C29` Tür Sistemi ve Dönüşüm | Komut satırından gelen metnin sayıya dönüşürken hangi kurallara uyduğunu güvenilir açıklamak | Açık/örtük dönüşüm ve eşitlik kararlarını analiz etmek | Girdi sözleşmesi tür semantiğiyle sağlamlaştırılır |

### Gelen yeterlik

Öğrenci C02'den kaynak kodun yürütülmesi gerektiğini, C08'den dış girdinin
programa ilk geldiği biçim ile programın kullanacağı değer arasında dönüşüm
olabileceğini bilir. `const`, temel string/number ayrımı, ifade değerlendirmesi
ve `console.log` kullanımı daha önce görülmüştür.

### Hatırlama köprüsü

Öğrenciye şu C08 parçası verilir:

```js
const rawScore = "85";
const score = Number(rawScore);
console.log(score + 5);
```

Önce girdi, dönüşüm ve çıktıyı açıklar. Sonra öğretmen “Bu satırları kimin
çalıştırdığını, `console` adını kimin sağladığını ve `"85"` değerinin gerçek bir
kullanıcıdan nasıl gelebileceğini henüz açıklamadık” diyerek yeni ihtiyacı
kurar.

### Yeni ihtiyaç

Öğrenci tarayıcı konsolunda çalışan `document.title` ifadesini Node.js dosyasına
taşıdığında `ReferenceError` görür. Buna karşılık `process.argv` Node.js'te
çalışır, tarayıcıda bulunmaz. “JavaScript aynıysa sonuç neden aynı değil?”
sorusu katman ayrımını gerekli kılar.

### Yeni yeterlik

Chapter sonunda öğrenci:

- kaynak kod, dil, engine, runtime, host ve araç rollerini örneklerle ayırır;
- bir özelliğin JavaScript çekirdeğine mi yoksa çalışılan host'a mı ait
  olduğunu dokümantasyonla araştırır;
- terminal komutunun runtime, giriş noktası ve argüman parçalarını gösterir;
- `process.argv` değerlerinin kaynağını ve string oluşunu bir indeks tablosuyla
  izler;
- desteklenen Node.js LTS ortamında aynı programı doğrudan komutla ve npm
  script'iyle çalıştırır;
- sürüm, klasör, komut, girdi, çıktı ve exit status içeren tekrar üretilebilir
  çalışma kaydı üretir;
- yaygın “dosya bulunamadı”, “ad tanımlı değil” ve yanlış argüman hatalarını
  kanıta dayalı teşhis eder.

### Proje artışı

`V01-P02` Veri Dönüşüm Konsolu'nun C08'deki puan özetleme çekirdeği şu dosyalara
dönüşür:

```text
runtime-score-report/
├── runtime-report.js
├── package.json
├── README.md
└── expected-output.txt
```

Bu artış yeni iş kuralı eklemez. Mevcut dönüşüm mantığını başlatılabilir,
gözlenebilir ve başka bir öğrencinin tekrarlayabileceği hâle getirir.

### Sonraki devir

C29 şu C38 kanıtlarını doğrudan kullanır:

- komut satırı argümanlarının string olarak geldiği gözlemi;
- aynı kaynak, sürüm, komut ve girdiyle kontrollü deney yapma disiplini;
- `typeof`, `Number(...)` ve çıktı davranışını runtime üzerinde gözleme;
- beklenen ile gerçekleşen davranışı ayıran çalışma kaydı.

C29 Node.js kurulumunu ve terminal kullanımını yeniden öğretmez; bu hazır
laboratuvar üzerinde tür dönüşümü deneyleri yapar.

## Öğretim Yolculuğu

### Açılış

Ada, C08'de yazdığı puan programını arkadaşına gönderir. Arkadaşı kodu tarayıcı
konsoluna yapıştırır; Ada terminalden dosya olarak çalıştırır. İkisi de
“JavaScript kullanıyoruz” der, ancak biri `document`, diğeri `process`
görebilir. Ders bu çelişkiyi çözme merakıyla başlar.

### Kademeli kavram yükü

1. Ortak çalışan en küçük `console.log`.
2. Ortama özgü tek ad: `document`/`process`.
3. Kaynak kod → dil → motor → host modeli.
4. Editör ile terminalin görev ayrımı.
5. `node dosya.js` giriş noktası.
6. `process.argv` ile dış girdi.
7. Çalışma klasörü ve dosya yolu.
8. Normal/hata çıktısı ile exit status ayrımı.
9. npm script ile ortak komut.
10. Tekrar üretilebilirlik kaydı ve akran doğrulaması.

## Değişken ve Tür Açıklama Planı

| Ad | Gerçek bilgi | Başlangıç biçimi | Kullanılan biçim | Karar |
|---|---|---|---|---|
| `studentName` | Raporun ait olduğu öğrenci adı | `process.argv[2]` | string | İsim metinsel kimliktir; aritmetik yapılmaz |
| `rawScore` | Terminalden gelen ham puan | `process.argv[3]` | string/undefined | Host bütün CLI argümanlarını metinsel taşır; eksikse `undefined` olabilir |
| `score` | Hesaplamada kullanılacak puan | `Number(rawScore)` | number | Karşılaştırma/aritmetik için sayısal temsil gerekir; ayrıntılı dönüşüm C29'da |
| `bonus` | Örnekte eklenecek sabit puan | `5` | number | Sabit iş kuralı olduğu için `const`; `"5"` birleştirme riski taşır |
| `finalScore` | Puan ve bonus sonucu | `score + bonus` | number | Türetilmiş değer; kaynak girdiyi değiştirmez |
| `runtimeVersion` | Gerçek Node.js sürümü | `process.version` | string | Sürüm etiketi metindir; ders sabit sürüm varsaymaz |
| `workingDirectory` | Sürecin başladığı klasör | `process.cwd()` | string | Dosya yolu metinsel bir konumdur |
| `exitCode` | Tamamlanma durumu | doğal `0` veya belirlenen sayı | integer kısıtlı number | Konsol mesajından ayrı makine-okunur sonuç |

Her adın neden `const` olduğu, eksik argümanda ne taşıdığı ve yanlış türün
gözlenebilir sonucu ana anlatımda açıklanır. C29'un dönüşüm semantiği erken
öğretilmez; yalnız gözlem ve sınır kaydı yapılır.

## Zorunlu Uygulama Kademeleri

- **Birlikte yapalım:** `runtime-report.js` dosyasını oluşturup komutu token
  token çözümlemek.
- **Şimdi sen dene:** Şehir argümanı eklemek ve `argv` indeksini doğru seçmek.
- **Hata avı:** Yanlış klasör, yanlış dosya uzantısı, `document`/`process`
  karışıklığı ve eksik argüman.
- **Bağımsız uygulama:** Ürün adı, adet ve birim fiyat alan bir sipariş özetleyici
  için reproducible workflow kurmak.
- **Gerçek proje bağlantısı:** `V01-P02` programını README ve npm script ile
  teslim edilebilir hâle getirmek.

## Görsel Plan

1. Beş katmanlı yürütme modeli.
2. Tarayıcı/Node.js ortak çekirdek Venn görünümü.
3. Terminal komutu token haritası.
4. `process.argv` indeks tablosu.
5. Süreç yaşam çizgisi: başlat → yükle → ayrıştır → yürüt → çıktı → çıkış.
6. Yanlış klasör teşhis ağacı.
7. Reproducibility kayıt kartı.

## Değerlendirme Hizalaması

| Kanıt | `V01-LO065` | `V01-LO066` |
|---|---|---|
| Anlatım içi tahmin | Host sınırı | Komut sonucu |
| Katman sınıflandırma | Doğrudan | Destekleyici |
| `argv` izi | Host-provided input | Doğrudan |
| Hata avı | Hata sınıfı | Teşhis/yeniden çalıştırma |
| Quiz | Kavramsal ayrım | İş akışı sırası |
| Lab | Sözlü açıklama | Tam teslimat |
| Mülakat | Katman savunusu | Reproducibility savunusu |
| Proje artışı | Ortam varsayımları | Çalıştırılabilir paket |

## Üretim Kontrolü

- [ ] Problem tanımdan önce görünür.
- [ ] C08 kısa geri çağrılır, yeniden öğretilmez.
- [ ] Her terminal komutu ve JavaScript bloğu açıkça ayrılır.
- [ ] Önemli değişkenlerin kaynak, tür ve seçim gerekçeleri açıklanır.
- [ ] En az bir tam `argv` ve süreç yürütme izi bulunur.
- [ ] Beş zorunlu uygulama kademesi tamamdır.
- [ ] C29'a bırakılan dönüşüm ayrıntıları açıkça sınırlandırılır.
- [ ] Bütün örnekler desteklenen Node.js ortamında çalışır.
- [ ] Markdown, bağlantı, JSON ve JavaScript kontrolleri geçer.
- [ ] Bağımsız teknik/pedagojik review için açık uyarılar korunur.

## References

- [C38 Blueprint](../../../chapter-blueprints/38-javascript-runtime-tooling-and-execution-environments.md)
- [C38 Research Packet](../../research/v01-c38/research-packet.md)
- [ASEA Teaching and Continuity Standard](../../../../standards/teaching-and-continuity-standard-v1.md)
- [C08 Blueprint](../../../chapter-blueprints/08-input-output-and-data-transformation.md)
- [C29 Registry Record](../../../../../governance/blueprint-v2/04-chapter-registry.md)
