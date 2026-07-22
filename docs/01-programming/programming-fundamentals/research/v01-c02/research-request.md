---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-COMP-001"
supporting_document_type: "Compatibility Report"
title: "Research Request: Bilgisayarlar Programları Nasıl Çalıştırır?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C02"
authority: "Derived"
owner_role: "Research Engineer"
source_ids:
  - "V01-BP01"
  - "V01-C02"
  - "V01-LO003"
  - "V01-LO004"
derived_from:
  - "../../academy/04-chapter-registry.md"
  - "../../academy/05-lesson-registry.md"
  - "../../academy/06-learning-outcomes.md"
  - "../../../../../governance/blueprint-v2/04-chapter-registry.md"
  - "../../../../../governance/blueprint-v2/05-learning-outcome-registry.md"
  - "../../../../../governance/blueprint-v2/06-dependency-graph.md"
x-production-unit: "v01-c02"
x-canonical-lesson-id: "V01-C02"
x-research-stage: "Scope and Source Strategy"
x-verified-on: "2026-07-22"
---

# Research Request: Bilgisayarlar Programları Nasıl Çalıştırır?

## Purpose

Bu belge, `V01-C02` için eğitim içeriği üretilmeden önce araştırılacak bilgi
alanını, kapsam sınırlarını, araştırma sorularını ve kabul ölçütlerini sabitler.
Sprint 07A yalnızca araştırma kapsamı ve kaynak stratejisidir; ders, alıştırma,
quiz, laboratuvar veya proje üretmez.

## Scope

### Canonical Contract

| Alan | Kanonik değer |
| --- | --- |
| Chapter | `V01-C02` — How Computers Execute Programs |
| Module | `V01-M01` — Computational Thinking |
| Difficulty | Beginner |
| Estimated duration | 2.5 saat |
| Prerequisite | `V01-C01` |
| Assessment | `V01-C02-AS01` |
| Learning outcomes | `V01-LO003`, `V01-LO004` |

### Target Learning Outcomes

- `V01-LO003`: Kaynak kod (source code), çalışma zamanı (runtime), bellek
  (memory), girdi (input) ve çıktı (output) ilişkisini doğru bir yürütme modeli
  (execution model) ile açıklayabilmek.
- `V01-LO004`: Küçük bir talimat dizisinde her adımdan sonra oluşan durumu
  (state) hatasız izleyebilmek (trace).

### Required Research Domains

1. Kaynak kod, program, yürütülebilir dosya ve çalışan süreç ayrımı.
2. Derleme zinciri: önişleme, derleme, assembly, bağlama ve yükleme.
3. Yorumlama, bayt kodu (bytecode), sanal makine ve tam zamanında derleme
   (just-in-time compilation) yolları.
4. Komut kümesi mimarisi (instruction set architecture, ISA) ile
   mikro-mimari (microarchitecture) arasındaki sınır.
5. Başlangıç düzeyi işlemci modeli: program sayacı, kayıtlar, talimatlar,
   bellek erişimi ve gözlemlenebilir çıktı.
6. Getir–çöz–yürüt (fetch-decode-execute) çevriminin pedagojik değeri ve
   modern işlemciler bakımından sınırları.
7. İşletim sisteminin program görüntüsünü yüklemesi, süreç, sanal adres alanı,
   yürütülebilir biçim ve giriş noktası ilişkisi.
8. Dil çalışma zamanı, işletim sistemi çalışma ortamı ve donanım katmanlarının
   birbirinden ayrılması.
9. Bellekte kod, veri ve yürütme durumu; fiziksel bellek ile sanal bellek
   ayrımı.
10. Girdi/çıktının program sınırındaki anlamı ile donanım aygıtı düzeyindeki
    anlamı arasındaki fark.
11. Küçük bir soyut makinede adım, sonraki talimat, durum değişimi ve çıktı
    izleme yöntemi.
12. Derlenen, yorumlanan ve hibrit çalışan diller için karşılaştırmalı yürütme
    yolları.

### Explicit Exclusions

- İşlemci tasarımı, kapı düzeyi devreler ve HDL uygulaması.
- Önbellek tutarlılığı, spekülatif yürütme ve komut düzeyi paralellik ayrıntıları.
- İşletim sistemi zamanlayıcısı, eşzamanlılık ve çok iş parçacıklı yürütme.
- JavaScript olay döngüsünün ayrıntılı öğretimi; bu konu `V01-C38` kapsamındadır.
- Derleyici optimizasyon algoritmaları ve ara gösterim tasarımı.
- Sanal bellek sayfalama algoritmaları ve fiziksel adres çevirisi ayrıntıları.
- Assembly veya makine dili programlama öğretimi.
- Belirli bir işlemcinin eksiksiz ISA öğretimi.

### Research Questions

1. “Programı çalıştırmak” hangi katmanlarda farklı anlamlara gelir?
2. Kaynak kod hangi koşullarda doğrudan yürütülmez ve hangi ara temsillere
   dönüştürülür?
3. Derleyici, assembler, linker, loader, runtime, işletim sistemi ve CPU hangi
   sorumluluklara sahiptir?
4. ISA neden yazılım ile donanım arasındaki görünür sözleşme kabul edilir?
5. Bir süreç oluşturulduğunda veya mevcut süreç görüntüsü değiştirildiğinde
   bellek ve giriş noktası nasıl hazırlanır?
6. Başlangıç öğrencisi için hangi yürütme modeli doğru, izlenebilir ve farklı
   dil uygulamalarına taşınabilir olur?
7. Tek bir talimatın yürütülmesinden sonra hangi durum alanları değişebilir?
8. Girdi ne zaman yürütme durumuna dönüşür, çıktı ne zaman gözlemlenebilir hale
   gelir?
9. “Derlenen dil” ve “yorumlanan dil” ikili sınıflandırması hangi durumlarda
   yanıltıcıdır?
10. Fiziksel donanım davranışı ile pedagojik soyut makine nerede açıkça
    ayrılmalıdır?

### Terminology Baseline

Araştırma aşağıdaki terimleri birbirinin yerine kullanmayacaktır:

- kaynak kod, nesne dosyası, yürütülebilir dosya ve çalışan program/süreç;
- dil, uygulama, derleyici, yorumlayıcı ve çalışma zamanı;
- ISA, assembly dili, makine kodu ve mikro-mimari;
- değer, değişken, bellek konumu, adres ve kayıt;
- çağrı yığını, dil çalışma zamanı yığını ve süreç adres alanı;
- program durumu, işlemci durumu ve işletim sistemi süreç durumu.

### Volatile Topics

Sürümü sabitlenmesi ve üretim öncesi tekrar doğrulanması gereken alanlar:

- güncel ISA, JVM, WebAssembly ve dil spesifikasyonu sürümleri;
- V8, CPython ve diğer uygulamaların motor davranışları;
- tarayıcı veya işletim sistemi uygulama ayrıntıları;
- araç zinciri sürümleri ve komut satırı davranışları;
- belge URL'leri ve sürüm arşivleri.

### Expected Deliverables

Sprint 07A:

- bu araştırma isteği;
- kaynak seçme ve doğrulama stratejisi;
- gerçek zamanlı erişimle doğrulanmış aday kaynak kaydı;
- sorgu ve erişim günlüğü;
- ön bulgular ve araştırma boşlukları.

Sonraki araştırma sprintleri:

- atomik bulgu ve kanıt çıkarımı;
- kaynaklar arası doğrulama;
- terminoloji normalizasyonu;
- yalnızca doğrulanmış bulgulardan oluşan Research Packet.

### Stop Conditions

Araştırma koleksiyonu şu koşullar birlikte gerçekleşmeden tamamlanmış sayılmaz:

- `LO003` ve `LO004` için bütün gerekli konu kümeleri kapsanır;
- her normatif veya uygulamaya özgü teknik iddia en az bir güncel Tier 1 ya da
  Tier 2 kaynakla desteklenebilir;
- katmanlar arası temel iddialar en az iki bağımsız otorite ailesiyle doğrulanır;
- derlenen, yorumlanan ve hibrit yürütme yolları birbirinden ayrılır;
- başlangıç düzeyi durum izleme modeli en az bir akademik model ve bir resmi
  spesifikasyonla sınanır;
- iki ardışık araştırma turu yeni temel kavram veya çelişki üretmez;
- çözülmemiş belirsizlikler açıkça kaydedilir ve eğitim metninde kesin gerçek
  gibi kullanılmaz.

## Ownership

Kanonik chapter kapsamı ve öğrenme çıktıları Blueprint'e aittir. Research
Engineer kaynak toplar ve bulgu çıkarır; yeni chapter, outcome, concept, claim
veya evidence kimliği üretmez. Kaynak aday anahtarları yalnızca bu araştırma
klasöründe yerel gezinme etiketleridir ve Knowledge Foundation kimliği değildir.

## Content

### Initial Research Hypotheses

- Kaynak kodun CPU tarafından her durumda doğrudan yürütüldüğü anlatımı teknik
  olarak yanlıştır; yürütme yolu dil uygulamasına ve ortama göre değişir.
- ISA, programın donanımdan gözlemlediği sözleşmeyi açıklar; işlemcinin iç
  gerçekleştirimini bütünüyle açıklamaz.
- Çalışan program yalnızca talimatlardan oluşmaz; yürütme durumu, adres alanı,
  çalışma zamanı kaynakları ve işletim sistemi bağlamı da modele dahildir.
- Başlangıç seviyesi izleme modeli fiziksel her ayrıntıyı taklit etmek yerine
  talimat, mevcut durum, durum geçişi ve gözlemlenebilir çıktı ilişkisini korumalıdır.
- Getir–çöz–yürüt çevrimi yararlı bir giriş modelidir ancak modern işlemcinin
  bütün zamanlama ve yürütme davranışı olarak sunulmamalıdır.

Bu maddeler araştırma sonucu değil, doğrulanacak hipotezlerdir.

## Validation

- Kanonik kimlikler repository kayıtlarıyla doğrulanmıştır.
- Kapsam `V01-C02`, `V01-LO003` ve `V01-LO004` sınırındadır.
- `V01-C01` ön koşulu ve downstream bağımlılıklar korunmuştur.
- Ders veya öğrenme varlığı üretilmemiştir.
- Knowledge Foundation kayıtlarına ekleme veya değişiklik yapılmamıştır.
- Kapsam genişlemesi ancak açık araştırma kararıyla yapılabilir.

## References

- [Canonical Chapter Registry](../../academy/04-chapter-registry.md)
- [Canonical Lesson Registry](../../academy/05-lesson-registry.md)
- [Canonical Learning Outcomes](../../academy/06-learning-outcomes.md)
- [Blueprint v2 Chapter Registry](../../../../../governance/blueprint-v2/04-chapter-registry.md)
- [Blueprint v2 Learning Outcome Registry](../../../../../governance/blueprint-v2/05-learning-outcome-registry.md)
- [Blueprint v2 Dependency Graph](../../../../../governance/blueprint-v2/06-dependency-graph.md)
- [KOS Research Pipeline](../../../../knowledge-operating-system/03-research-pipeline.md)
- [KOS Source Priority](../../../../knowledge-operating-system/04-source-priority.md)
