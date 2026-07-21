---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-COMP-002"
supporting_document_type: "Compatibility Report"
title: "Research Collection: Programlama Nedir?"
version: "1.0.0"
status: "Stable"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Research Engineer"
source_ids:
  - "V01-C01"
  - "V01-LO001"
  - "V01-LO002"
derived_from:
  - "./research-request.md"
  - "../../academy/06-learning-outcomes.md"
x-production-unit: "lesson-01"
x-canonical-lesson-id: "V01-C01"
x-research-stage: "Collection"
x-verified-on: "2026-07-21"
---

# Research Collection: Programlama Nedir?

## Purpose

`V01-C01` ders üretimi için doğrulanacak ham bilgi, terminoloji, örnek ve kaynak
adaylarını tek yerde toplamak.

## Scope

Koleksiyon programlama, program, algoritma, talimat, kaynak kod, yürütme,
hesaplama ve programlama dili arasındaki başlangıç düzeyi ilişkileri kapsar.

## Ownership

Bu belge ham araştırma koleksiyonudur. Nihai tanımlar yalnız
`research-packet.md` tarafından Lesson Production’a aktarılır.

## Content

### Core Concepts and Definitions

| Kavram | Araştırma tanımı | Sınır |
| --- | --- | --- |
| Programlama (programming) | Bir problemi hesaplanabilir biçimde ifade etme; çözümü tasarlama, programlama dilinde temsil etme, çalıştırma ve doğrulama süreci | Yalnız code typing değildir |
| Program (program) | Bir bilgisayarın belirli davranışı gerçekleştirmesi için ifade edilmiş talimatlar ve ilişkili veriler bütünü | Algoritmanın tek olası karşılığı değildir |
| Algoritma (algorithm) | Belirli bir sonuç için açıkça belirtilmiş hesaplama süreci veya kurallar dizisi | Programdan ve belirli dilden bağımsız olabilir |
| Talimat (instruction) | Yürütücü için ne yapılacağını belirten tek adım | Belirsiz günlük öneriden daha kesindir |
| Kaynak kod (source code) | Programın insan tarafından okunabilen programlama dili temsili | Çalışan programın tamamı veya makine kodu değildir |
| Programlama dili (programming language) | Programları ifade etmek için syntax ve semantics kuralları olan biçimsel araç | Dil bilmek tek başına problem çözme yeterliği değildir |
| Yürütme (execution) | Talimatların bir runtime veya makine tarafından işlenerek durum ve çıktı üretmesi | Kaynak metni okumakla aynı değildir |
| Hesaplama (computation) | Tanımlı kurallara göre bilgi veya durum dönüşümü | Her hesaplama sayısal olmak zorunda değildir |

ACM/IEEE-CS CS2023, giriş programlamasını Software Development Fundamentals
altında; algoritmalarla veri yapılarının seçimi, geliştirme ve test araçlarıyla
birlikte konumlandırır. Bu, programlamayı syntax ezberine indirgememeyi
destekler.

### Terminology

İlk kullanımda önerilen biçimler:

- programlama (programming);
- program (program);
- algoritma (algorithm);
- talimat (instruction);
- kaynak kod (source code);
- programlama dili (programming language);
- çalışma ortamı (runtime environment);
- yürütme (execution);
- durum (state);
- girdi (input), çıktı (output), kısıt (constraint).

“Kod” bağlama göre source code veya belirli bir encoding anlamına gelebilir;
tanımsız üst kavram olarak kullanılmamalıdır. “Yazılım” tek bir programdan daha
geniştir; programlar, yapılandırma, veri ve destek artefaktlarını kapsayabilir.

### Historical Context

- Computer History Museum, Ada Lovelace’ın 1843 notlarında Analytical Engine’in
  matematiksel problemleri çözmek için izleyeceği adımların yayımlandığını
  belirtir. “İlk programcı” ifadesi yaygın ama tarihçilerce tartışmalı olduğu
  için kesin unvan yerine bu doğrulanabilir olay kullanılmalıdır.
- Manchester “Baby”, 21 Haziran 1948’de bellekte tutulan 17 talimatlı bir
  programı çalıştırdı. Saklı program (stored program) yaklaşımı, talimatların
  bellek içinde veri gibi tutulmasını modern program yürütmenin temeline koydu.
- Tarihsel bölüm “tek mucit” hikâyesi kurmamalı; programlama pratiğinin makine,
  notasyon ve ekip çalışmasıyla evrildiğini göstermelidir.

### Alternative Terminology

| Terim | Kullanım kararı |
| --- | --- |
| Coding | Kodlama; programlamanın yalnızca temsil/uygulama kısmı için kullanılabilir |
| Software development | Yazılım geliştirme; programlamadan daha geniş süreç |
| Script | Belirli çalışma ortamında yürütülen program türü; programın eş anlamlısı değildir |
| Application | Kullanıcı veya sistem amacı sunan yazılım; her program application değildir |
| Procedure/recipe | Sezgisel benzetme; makine kesinliği ve edge case sınırları açıklanmalıdır |

### Common Misconceptions

1. “Programlama yalnızca kod yazmaktır.” Tasarım, modelleme, test ve debug
   faaliyetlerini dışarıda bırakır.
2. “Programlama dili bilgisayarın doğrudan anladığı dildir.” Çeviri ve runtime
   katmanlarını yok sayar.
3. “Çalışan program doğrudur.” Bir inputta çalışmak tüm gereksinimleri
   karşıladığını kanıtlamaz.
4. “Algoritma ve program aynı şeydir.” Algoritma çözüm yaklaşımı; program onun
   belirli ortamda ifade edilmiş uygulaması olabilir.
5. “Bilgisayar niyeti anlar.” Bilgisayar, ifade edilmemiş varsayımı güvenilir
   biçimde tamamlamaz.
6. “Her problem bilgisayarla çözülmelidir.” Maliyet, etik, gizlilik ve
   hesaplanabilirlik sınırları değerlendirilmelidir.

### Real-world Applications

- ATM para çekme akışı: input, validation, state change ve observable output.
- Navigasyon: gerçek dünya problemi, veri modeli, rota algoritması ve kullanıcı
  arayüzü ayrımı.
- Dosya yeniden adlandırma otomasyonu: kesin kuralın tekrar eden talimatlara
  dönüştürülmesi.
- Sağlık veya finans kararlarında programın yalnız teknik değil, gereksinim ve
  sorumluluk sınırlarına da bağlı olması.

### Prerequisite Concepts and Related Lessons

- Prerequisite: `V00` çalışma hazırlığı ve temel dijital okuryazarlık.
- `V01-C02`: kaynak, runtime, bellek ve yürütme modeli.
- `V01-C03`: problemi input/output/constraint olarak çerçeveleme.
- `V01-C04`: algoritma, pseudocode ve trace.

### Potential Examples

- “Çay hazırla” talimatını su miktarı, sıcaklık, süre ve hata durumlarıyla
  kesinleştirme; recipe/program benzetmesinin sınırlarını da gösterme.
- Bir asansör isteğini input, state, rules ve output olarak ayırma.
- Aynı sıralama algoritmasının doğal dil, pseudocode ve iki farklı dilde
  program olarak temsil edilebilmesi.
- Belirsiz “dosyaları düzenle” isteğini en az sekiz test edilebilir adıma çevirme.

### Potential Diagrams

- `Problem -> Algorithm -> Source Code -> Runtime -> State/Output` zinciri.
- Algorithm/program/software kavramlarını iç içe geçmeyen ilişki haritası.
- Human intention ile machine-observable instruction arasındaki precision
  dönüşümü.
- Stored-program modeli: memory içinde instructions ve data, işlemci yürütmesi.

### Source Register

| ID | Kaynak | Tür | Kullanım |
| --- | --- | --- | --- |
| `SRC-PROG-01` | ACM/IEEE-CS, CS2023 Report | Curriculum standard/report | Programming, algorithms ve software development sınırı |
| `SRC-PROG-02` | Python Language Reference | Official language documentation | Language rule ile implementation ayrımı |
| `SRC-PROG-03` | Computer History Museum, Babbage Engine | Museum primary interpretation | Lovelace tarihsel bağlamı |
| `SRC-PROG-04` | Computer History Museum, Stored Program | Museum technical history | 1948 stored-program milestone |
| `SRC-PROG-05` | NIST CSRC Algorithm Glossary | Government technical glossary | Algorithm tanım çekirdeği |

## Validation

- Kaynak türleri: 5; primary/official/curated institutional: 5.
- Toplanan ana kavramlar: 11.
- Açık misconception: 6.
- Outcome coverage adayları: `LO001` ve `LO002`.
- Dil veya implementation’a özgü zorunluluk eklenmedi.

## References

- ACM/IEEE-CS, [Computer Science Curricula 2023](https://csed.acm.org/wp-content/uploads/2025/11/CS2023-Report.htm)
- Python Software Foundation, [Python Language Reference: Introduction](https://docs.python.org/3/reference/introduction.html)
- Computer History Museum, [Babbage Engine: A Brief History](https://www.computerhistory.org/babbage/history/)
- Computer History Museum, [The Stored Program](https://www.computerhistory.org/revolution/birth-of-the-computer/4/87)
- NIST, [Algorithm — CSRC Glossary](https://csrc.nist.gov/glossary/term/algorithm)
