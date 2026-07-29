---
document_type: "research-packet"
document_id: "V01-C38-RP01"
title: "V01-C38 JavaScript Runtime, Tooling, and Execution Environments Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C38"
last_updated: "2026-07-29"
---

# V01-C38 JavaScript Runtime, Tooling, and Execution Environments Research Packet

## 1. Research Decision

Araştırma `V01-LO065` ve `V01-LO066` için taslak üretime hazırdır. Teknik omurga
ECMAScript dil tanımı, MDN'in yürütme modeli, Node.js'in güncel CLI/process
belgeleri ve npm'in resmî script sözleşmesiyle sınırlandırılmıştır. Öğrenciye
ürün dokümantasyonu aktarılmayacak; bu kanıtlar “kod neden burada çalıştı, orada
çalışmadı?” sorusunu anlaşılır bir zihinsel modele dönüştürmek için
kullanılacaktır.

## 2. Scope and Outcomes

| Alan | Değer |
|---|---|
| Blueprint | `V01-C38-BP01` |
| Ön koşullar | `V01-C02`, `V01-C08` |
| Outcomes | `V01-LO065`, `V01-LO066` |
| Lab | `V01-C38-L01` — Reproducible JavaScript Workflow |
| Assessment | `V01-C38-AS01` |
| Sonraki chapter | `V01-C29` |

## 3. Canonical Mental Model

Öğretim modeli beş katmandan oluşur:

```text
Öğrencinin yazdığı kaynak kod
  -> ECMAScript dil kuralları
  -> JavaScript motorunun kodu ayrıştırması ve yürütmesi
  -> Host ortamının dış dünya imkânları sağlaması
  -> Araçların süreci başlatması, gözletmesi ve tekrarlanabilir kılması
```

Bu bir fiziksel bileşen şeması değil, sorumlulukları ayıran başlangıç modelidir.
Gerçek ürünlerin iç mimarisi daha karmaşıktır. Öğrenci bu modelle bir adın dile
mi, host'a mı, yoksa bir araca mı ait olduğunu araştırabilir.

## 4. Atomic Evidence

### C38-EV01 — Engine and Host

- **Claim:** JavaScript motoru dili uygular ve kodu yürütür; host ortamı dış
  dünya ile etkileşim sağlayan ek imkânlar sunar.
- **Source:** MDN, JavaScript execution model.
- **Teaching use:** `document` ile `process` farkını dil/runtime ayrımı olarak
  göstermek.
- **Boundary:** Motorun parser, bytecode, JIT veya garbage collection iç
  ayrıntıları öğretilmez.

### C38-EV02 — Host-Defined Facilities

- **Claim:** Girdi/çıktı gibi imkânlar ECMAScript dilinin tek başına tanımladığı
  davranışlar değildir; host ortamına göre farklılaşabilir.
- **Source:** MDN JavaScript language overview ve ECMAScript specification.
- **Teaching use:** Aynı dil çekirdeğinin tarayıcı ve Node.js'te farklı dış
  imkânlarla çalıştığını açıklamak.

### C38-EV03 — Node CLI Entry Point

- **Claim:** `node <program-entry-point> [arguments]` biçimi bir giriş dosyası
  seçer; göreli giriş noktası mevcut çalışma klasörüne göre çözülür. Argümansız
  `node` etkileşimli REPL başlatır.
- **Source:** Node.js Command-line API.
- **Teaching use:** Komutun parçalarını ve “dosya bulunamadı” hatasının nedenini
  görünür kılmak.

### C38-EV04 — Process Arguments and Working Directory

- **Claim:** `process.argv`, Node.js süreci başlatılırken verilen komut satırı
  argümanlarını dizi olarak taşır; `process.cwd()` sürecin mevcut çalışma
  klasörünü döndürür.
- **Source:** Node.js Process API.
- **Teaching use:** `argv[0]`, `argv[1]`, `argv[2...]` iz tablosu ve klasör
  teşhisi.

### C38-EV05 — Exit Status

- **Claim:** Başarılı süreç için yaygın çıkış durumu `0`, hata için sıfır dışı
  değerdir. `process.exitCode` sürecin doğal biçimde kapanırken kullanacağı
  durumu belirleyebilir; `process.exit()` bekleyen çıktıyı kesebileceği için
  başlangıç örneğinde varsayılan çözüm değildir.
- **Source:** Node.js Process API.
- **Teaching use:** “Ekranda mesaj var” ile “süreç başarılı bitti” kanıtlarını
  ayırmak.

### C38-EV06 — Package Scripts

- **Claim:** `package.json` içindeki `scripts` alanındaki komutlar `npm run
  <ad>` ile yürütülebilir; `--` sonrasındaki konumsal argümanlar seçili script'e
  aktarılır. Script çalışma klasörü paket köküdür.
- **Source:** npm Scripts ve npm-run-script belgeleri.
- **Teaching use:** Ekip için ortak, hatırlanabilir komut oluşturmak.

### C38-EV07 — Supported Runtime Policy

- **Claim:** Üretim uygulamalarında desteklenen LTS sürümleri tercih edilmelidir;
  güncel sürüm numarası zamanla değiştiği için çalışma kaydı gerçek `node
  --version` çıktısını içermelidir.
- **Source:** Node.js Releases.
- **Teaching use:** Ders metnine sabit “en son sürüm” yazmak yerine sürümü
  ölçmek ve kaydetmek.

## 5. Vocabulary Boundary

| Terim | Bu chapter'daki anlam | Karıştırılmaması gereken |
|---|---|---|
| source code | Öğrencinin yazdığı metin | Çalışan süreç |
| engine | JavaScript dilini uygulayan yürütme bileşeni | Editör veya Node.js'in tamamı |
| runtime | Kodun yürütüldüğü çalışma sistemi | Yalnız dil sözdizimi |
| host environment | Dış dünya API'lerini sağlayan ortam | ECMAScript dil çekirdeği |
| tooling | Yazma, başlatma, gözleme ve tekrarlama araçları | Programın iş mantığı |
| entry point | Yürütmenin başlatıldığı dosya | Mevcut çalışma klasörü |
| process | Çalışmakta olan program örneği | Kaynak dosyanın kendisi |
| argument | Süreç başlatılırken verilen metinsel girdi | JavaScript fonksiyon parametresi |
| stdout/stderr | Normal çıktı ve hata kanalları | Başarı/başarısızlık çıkış kodu |
| exit status | Sürecin tamamlanma durumu | Konsola yazdırılan mesaj |

## 6. Pedagogical Decisions

1. Tanım, `document` ve `process` karşılaştırmasından sonra gelir.
2. İlk kod yalnız `console.log` içerir; npm, modül sistemi ve argümanlar aynı
   anda tanıtılmaz.
3. Terminal komutu ile JavaScript satırı görsel olarak ayrı tutulur.
4. `process.argv` bir “sihirli değişken” gibi verilmez; komut token'larıyla
   indeksler yan yana gösterilir.
5. `Number(rawScore)` kullanılır fakat dönüşümün bütün sınırları C29'a bırakılır.
6. Sabit Node.js sürüm numarası şart koşulmaz. Öğrenci desteklenen LTS kullanır
   ve gerçek sürümü kaydeder.
7. Event loop yalnız “bu chapter'ın dışında kalan runtime ayrıntısı” olarak
   adlandırılır.

## 7. Failure Boundary

Başlıca başlangıç hataları:

- terminal komutunu JavaScript dosyasına yazmak;
- JavaScript kodunu PowerShell/cmd/bash komutu sanmak;
- yanlış klasörden göreli giriş dosyası çalıştırmak;
- dosya uzantısını gizleyen işletim sistemi nedeniyle `app.js.txt` oluşturmak;
- tarayıcı host'una ait `document` adını Node.js'te kullanmak;
- Node.js host'una ait `process` adını tarayıcıda beklemek;
- `process.argv[2]` değerinin sayı değil string olarak geldiğini unutmak;
- yalnız çıktıyı kaydedip komut ve sürümü kaydetmemek;
- ekrana hata yazdırmakla sıfır dışı exit status üretmeyi aynı şey sanmak;
- güncel LTS yerine destek dışı bir sürümü dersin kalıcı standardı yapmak.

## 8. Assessment Contract

`V01-LO065` kanıtında öğrenci:

- kaynak kod, dil, motor, host ve araç katmanlarını doğru sıraya koyar;
- en az bir ortak davranış ve iki host farkı verir;
- `console`, `document` ve `process` adlarını doğru sınırla açıklar.

`V01-LO066` kanıtında öğrenci:

- kaynak dosyayı ve `package.json` script'ini teslim eder;
- `node --version`, çalışma klasörü, tam komut, girdi ve beklenen çıktıyı
  README'de kaydeder;
- normal ve hatalı bir yürütmenin sonucunu ayırır;
- başka bir öğrencinin aynı kaydı kullanarak programı çalıştırmasına imkân
  verir.

## 9. Source Register

| Kaynak | Otorite | Kullanım |
|---|---|---|
| [MDN JavaScript Execution Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) | Mozilla MDN | Engine ve host ayrımı |
| [MDN JavaScript Language Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview) | Mozilla MDN | Dil ile runtime/host imkânları sınırı |
| [MDN Browser Developer Tools](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) | Mozilla MDN | Tarayıcı konsolu ve debugger |
| [MDN Console API](https://developer.mozilla.org/en-US/docs/Web/API/console) | Mozilla MDN | Console'un ortam uygulaması |
| [ECMAScript Language Specification](https://tc39.es/ecma262/) | Ecma TC39 | Dilin normatif sınırı |
| [Node.js Command-line API](https://nodejs.org/api/cli.html) | Node.js | Giriş noktası, CLI ve REPL |
| [Node.js Process API](https://nodejs.org/api/process.html) | Node.js | Argüman, cwd ve exit status |
| [Node.js Packages](https://nodejs.org/api/packages.html) | Node.js | `package.json` ve modül modu sınırı |
| [Node.js Releases](https://nodejs.org/en/about/previous-releases) | Node.js | Desteklenen LTS politikası |
| [npm Scripts](https://docs.npmjs.com/cli/using-npm/scripts/) | npm | Paket script'leri ve çalışma klasörü |
| [npm run-script](https://docs.npmjs.com/cli/commands/npm-run-script/) | npm | `--` sonrası argüman aktarımı |

Kaynak cümleleri öğrenci metnine çevrilip sıralanmaz. İddialar doğrulanır; ders
ASEA'nın özgün öğretmen anlatımı, örnekleri ve uygulama sürekliliğiyle yazılır.
