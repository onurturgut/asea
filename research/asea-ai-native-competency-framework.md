---
document_type: "supporting-document"
supporting_document_id: "ASEA-SD-COMP-040"
supporting_document_type: "Compatibility Report"
title: "ASEA AI-Native Competency Framework"
version: "0.1.0"
status: "Draft"
scope_id: "ASEA"
authority: "Informational"
owner_role: "Curriculum Architect"
source_ids:
  - "ASEA-SD-ROAD-001"
derived_from:
  - "./asea-26-academy-curriculum-tree.md"
  - "./asea-26-academy-curriculum-progress-tracker.txt"
---

# ASEA AI-Native Competency Framework

## Purpose

ASEA mezununun bağımsız yazılım temelleri ile yapay zekâ destekli profesyonel
mühendisliği birlikte nasıl kanıtlayacağını tanımlamak. Çerçeve, AI kullanımını
tek bir akademiye kapatmaz; 26 akademide artan yetki ve sorumlulukla ilerleyen
yatay bir yetkinlik olarak ele alır.

## Scope

Çerçeve; öğrenci davranışlarını, yetkinlik seviyelerini, Chapter çalışma
modlarını, değerlendirme kanıtlarını ve 26 akademiyle eşleşmeyi kapsar. Yeni
kanonik Learning Outcome, lifecycle, kimlik ailesi veya governance kuralı
oluşturmaz. Aşağıdaki `ai-native-*` anahtarları yalnız bu Draft belge içinde
kullanılan yerel eşleme anahtarlarıdır.

## Ownership

- Müfredat eşlemesi: Curriculum Architect
- Teknik doğruluk: Software Engineering ve AI Engineering reviewer'ları
- Güvenlik ve gizlilik: Security Reviewer
- Ölçme: Assessment Reviewer
- Kanonik Learning Outcome kararı: mevcut Curriculum Standard v2 süreçleri

## Content

### Mezun profili

ASEA mezunu:

1. AI olmadan temel problemi anlayıp çözüm modeli ve çalışan kod üretebilir.
2. Gereksinim, bağlam, kısıt ve kabul ölçütlerini bir AI aracına açık biçimde
   aktarabilir.
3. AI tarafından üretilen kodu okuyabilir, çalıştırabilir, test edebilir ve
   gereksinimle karşılaştırabilir.
4. Mantık, güvenlik, performans, bakım, lisans ve veri risklerini belirleyebilir.
5. Uygun olmayan AI önerisini gerekçesi ve kanıtıyla reddedebilir.
6. Git, pull request, CI, code review ve deployment akışı içinde AI'yı kontrollü
   bir mühendislik aracı olarak kullanabilir.
7. Kendi kararlarını insan ekip arkadaşına ve teknik mülakatta savunabilir.

### Yetkinlik alanları

| Yerel anahtar | Yetkinlik | Gözlenebilir mezun davranışı |
| --- | --- | --- |
| `ai-native-01` | Temel AI okuryazarlığı | Model çıktısının olasılıksal, sınırlı ve doğrulanması gereken öneri olduğunu açıklar. |
| `ai-native-02` | Bağımsız problem çözme | AI kullanmadan problem, algoritma, kod ve test üretir. |
| `ai-native-03` | Specification hazırlama | Amaç, kapsam, gereksinim, kısıt, varsayım ve kabul ölçütünü yazar. |
| `ai-native-04` | Bağlam mühendisliği | Repository, mimari, örnek, dosya ve araç bağlamını gerekli-en-az kapsamla hazırlar. |
| `ai-native-05` | Görev ayrıştırma | Büyük işi sıralı, sınırlandırılmış ve doğrulanabilir agent görevlerine ayırır. |
| `ai-native-06` | AI destekli kod üretimi | Üretimi küçük diff'lerle yönlendirir ve kapsam dışı değişikliği engeller. |
| `ai-native-07` | Doğrulama ve test | AI çıktısını derleme, lint, test, statik analiz ve gözlenebilir davranışla doğrular. |
| `ai-native-08` | AI code review | Mantık, edge case, güvenlik, performans, okunabilirlik ve mimari uyumu inceler. |
| `ai-native-09` | Debugging ve deney | Belirtiyi yeniden üretir, hipotez kurar ve kontrollü deneyle kök nedeni sınar. |
| `ai-native-10` | Araç ve agent yönetimi | IDE, terminal, browser, Git ve API araçlarını izin sınırları içinde kullandırır. |
| `ai-native-11` | Güvenlik ve gizlilik | Secret, kişisel veri, prompt injection, yetki ve supply-chain risklerini yönetir. |
| `ai-native-12` | Kaynak ve provenance | Kaynak, model/araç katkısı, lisans ve doğrulama kanıtını kaydeder. |
| `ai-native-13` | Değerlendirme ve gözlem | AI sistemi için eval, hata sınıfı, kalite metriği, maliyet ve gecikme takibi kurar. |
| `ai-native-14` | Profesyonel teslimat | Issue'dan PR, review, CI, release ve retrospektife kadar denetlenebilir teslimat yapar. |
| `ai-native-15` | Teknik savunma | AI katkısını, kendi kararını, reddedilen önerileri ve kalan riskleri sözlü savunur. |

### Yetki seviyeleri

| Seviye | AI rolü | Öğrenci sorumluluğu | İzin verilen görev örneği |
| ---: | --- | --- | --- |
| 0 | Kullanılmaz | Temel bilgi ve bağımsız üretim | Kavram açıklama, kod okuma, küçük çözüm |
| 1 | Sokratik yardımcı | Önce kendi tahminini sunma | Yönlendirici soru, ipucu, yanlış varsayım sorgusu |
| 2 | Karşılaştırma ortağı | İki çözümü kanıtla karşılaştırma | Alternatif, edge case ve test önerisi |
| 3 | Sınırlı üretici | Diff'i okuyup test etme | Fonksiyon, test, dokümantasyon taslağı |
| 4 | Repository agent'ı | Kapsam, izin, test ve review kapıları | Çok dosyalı ama geri alınabilir değişiklik |
| 5 | Teslimat ortağı | İnsan onayı, güvenlik ve operasyon sorumluluğu | Issue → PR → CI akışında denetimli görev |

Yetki, Chapter numarasıyla otomatik artmaz. Öğrenci bir önceki seviyenin
doğrulama ve savunma kanıtını üretmeden daha yüksek seviyeye geçemez.

### Her Chapter için zorunlu çalışma modları

1. **Bağımsız temel:** AI kapalıyken kavram açıklama, tahmin, kod okuma veya
   küçük uygulama.
2. **AI karşılaştırması:** Öğrencinin çözümü ile AI önerisinin trade-off ve test
   karşılaştırması.
3. **AI denetimi:** Bilerek kusurlu ya da eksik bir AI çıktısında sorun bulma.
4. **AI destekli üretim:** Chapter seviyesine uygun sınırlandırılmış görev.
5. **Teknik savunma:** Kabul, ret ve düzeltme kararlarını kanıtla açıklama.

Chapter kapsamı kod üretimine uygun değilse üretim modu; gereksinim, diyagram,
test planı, veri modeli veya review gibi uygun mühendislik artefaktına uygulanır.

### Chapter kanıt sözleşmesi

| Kanıt | Asgari içerik |
| --- | --- |
| Bağımsız çözüm | AI kullanılmadan zaman damgalı ilk model veya kod |
| Görev sözleşmesi | Amaç, kapsam, bağlam, kısıt, non-goal ve kabul ölçütü |
| AI çalışma kaydı | Kullanılan araç/model, görev özeti ve önemli takip kararları |
| Diff veya artefakt | AI katkısı ile öğrenci katkısının incelenebilir görünümü |
| Doğrulama | Komutlar, test sonuçları, statik analiz ve manuel kontrol |
| Risk kaydı | Bilinen sınırlamalar, güvenlik/veri/lisans değerlendirmesi |
| Review | Öğrencinin bulduğu sorunlar, kabul ve ret gerekçeleri |
| Git kanıtı | Uygun Chapter'larda branch, commit ve pull request geçmişi |
| Savunma | Öğrencinin çözümü dış yardım olmadan açıklaması |

### Değerlendirme dağılımı

- Yüzde 30: AI olmadan temel yeterlilik
- Yüzde 30: AI destekli uygulama ve teslimat
- Yüzde 20: Kusurlu AI çıktısını inceleme ve düzeltme
- Yüzde 20: Test, provenance, Git kanıtı ve teknik savunma

Bu dağılım bir Curriculum Standard değişikliği değildir. Her kanonik Chapter
Assessment kaydı kendi outcome kapsamına göre ayrıca onaylanmalıdır.

### 26 akademi eşlemesi

| Akademi | Başlangıç seviyesi | Birincil yetkinlikler | Zorunlu AI-native kanıt |
| ---: | ---: | --- | --- |
| 01 Programlama Temelleri | 0–2 | 01, 02, 03, 07, 08, 09, 15 | Önce bağımsız çözüm; sonra AI kodunu trace, test ve düzeltme |
| 02 Nesne Yönelimli Programlama | 1–3 | 03, 05, 06, 08, 15 | AI tasarımında sorumluluk, invariant ve SOLID review |
| 03 Veri Yapıları ve Algoritmalar | 1–3 | 02, 05, 07, 08, 13 | AI algoritmasının doğruluk ve karmaşıklık kanıtı |
| 04 Git ve GitHub | 1–4 | 04, 08, 12, 14 | AI destekli diff/PR review ve incelenebilir Git geçmişi |
| 05 Linux ve Komut Satırı | 1–4 | 04, 09, 10, 11 | Komut risk analizi, sandbox ve izinli yürütme kaydı |
| 06 Veritabanları | 2–4 | 03, 07, 08, 11, 14 | SQL/migration review, veri kaybı ve rollback kanıtı |
| 07 HTML5 | 1–3 | 03, 06, 07, 08, 15 | AI HTML çıktısında semantik ve erişilebilirlik denetimi |
| 08 CSS3 | 1–3 | 04, 06, 07, 08 | Görsel doğrulama, responsive ve accessibility review |
| 09 Tailwind CSS | 2–3 | 04, 06, 08, 12 | Tasarım sistemi uyumu ve gereksiz utility incelemesi |
| 10 Modern JavaScript | 2–4 | 02, 04, 06, 07, 08, 09 | Runtime davranışı, async hata ve test denetimi |
| 11 TypeScript | 2–4 | 03, 06, 07, 08 | Tip modeli, boundary ve `any`/assertion risk analizi |
| 12 React | 2–4 | 03, 04, 06, 07, 08 | State/effect akışı, erişilebilirlik ve UI test kanıtı |
| 13 Next.js | 3–5 | 03, 04, 07, 10, 11, 14 | Server/client sınırı, güvenlik, E2E ve deployment review |
| 14 Backend | 3–5 | 03–11, 14 | API, veri, log, hata ve background job denetimi |
| 15 API Mühendisliği | 3–5 | 03, 04, 07, 08, 11, 14 | Contract-first üretim ve compatibility/security review |
| 16 Kimlik ve Güvenlik | 2–5 | 07–12, 15 | Threat model, secret kontrolü ve insan onaylı security review |
| 17 Bulut Mühendisliği | 3–5 | 03, 04, 07, 10–14 | IaC planı, least privilege, maliyet ve rollback kanıtı |
| 18 Docker | 2–5 | 04, 07, 10–12, 14 | Image, dependency ve supply-chain denetimi |
| 19 CI/CD ve DevOps | 3–5 | 07, 10–14 | Agent işlemi audit trail'i, quality gates ve rollback |
| 20 Yazılım Mimarisi | 2–5 | 03–05, 08, 12, 15 | Alternatif mimari, ADR ve trade-off savunması |
| 21 Tasarım Kalıpları | 2–4 | 02, 05, 08, 15 | AI'nın gereksiz pattern kullanımını tespit ve refactor |
| 22 Yazılım Testi | 2–5 | 03, 07–09, 13 | AI testlerinin oracle, coverage ve mutation analizi |
| 23 Sistem Tasarımı | 3–5 | 03–05, 08, 11, 13, 15 | Kapasite, failure mode ve mimari savunma |
| 24 AI Mühendisliği | 3–5 | 01–15 | Eval, RAG/agent, safety, maliyet ve production gözlemi |
| 25 Kariyer | 1–4 | 08, 12, 14, 15 | AI destekli mülakat; AI olmadan canlı teknik savunma |
| 26 Capstone | 5 | 01–15 | Uçtan uca AI provenance, PR, review, release ve jüri savunması |

### AI Mentor çalışma sözleşmesi

AI Mentor cevap veren otomasyon değil, öğrencinin kanıt üretmesini sağlayan
Sokratik yardımcıdır:

1. Öğrenciden önce tahmin, mevcut model ve deneme kanıtını ister.
2. Bir seferde yalnızca ilerlemeyi sağlayacak en küçük ipucunu verir.
3. Öğrenme çıktısını doğrudan yerine getiren final cevabı erken açıklamaz.
4. Teknik iddiayı kaynak veya çalıştırılabilir testle doğrulatır.
5. Tekrarlanan kavram yanılgısını kaydeder ve uygun retrieval görevi verir.
6. Güvensiz komut, secret, kişisel veri veya yetki artışında çalışmayı durdurur.
7. Öğrenciyi AI olmadan açıklama ve teknik savunmaya geri getirir.

### Şirket ortamı teslimat döngüsü

```text
Issue → problem contract → branch → implementation plan
→ bounded AI task → diff review → tests and security checks
→ commit → pull request → AI review → human review
→ correction → CI → release → monitoring → retrospective
```

## Validation

- 15 AI-native yetkinlik alanı tanımlandı.
- Altı yetki seviyesi ve beş Chapter çalışma modu tanımlandı.
- 26 akademinin tamamı en az bir gözlenebilir AI-native kanıtla eşlendi.
- 236 üretim biriminin Chapter-level eşlemesi ayrı Chapter Map'te tamamlandı.
- AI olmadan temel yeterlilik bütün akademilerde korunuyor.
- İnsan review, güvenlik ve teknik savunma sorumluluğu AI'ya devredilmiyor.
- Yeni kanonik kimlik, lifecycle veya governance otoritesi oluşturulmadı.

## References

- [ASEA 26 Akademi Eğitim Ağacı](./asea-26-academy-curriculum-tree.md)
- [Müfredat İlerleme Takip Dosyası](./asea-26-academy-curriculum-progress-tracker.txt)
- [AI-Native Chapter Mapping](./asea-26-academy-ai-native-chapter-mapping.md)
- [ASEA Chapter Standard v2](../docs/standards/chapter-standard-v2.md)
- [ASEA Curriculum Standard v2](../docs/standards/curriculum-standard-v2.md)
- ACM/IEEE-CS/AAAI, [Computer Science Curricula 2023](https://csed.acm.org/)
- GitHub, [Review AI-generated code](https://docs.github.com/en/copilot/tutorials/review-ai-generated-code)
- NIST, [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- OpenAI, [Harness engineering](https://openai.com/index/harness-engineering/)
- OpenAI, [Running Codex safely](https://openai.com/index/running-codex-safely/)
