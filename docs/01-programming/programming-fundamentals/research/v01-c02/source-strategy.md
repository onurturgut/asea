---
document_type: "supporting-document"
supporting_document_id: "V01-C02-SD-REF-001"
supporting_document_type: "References"
title: "Source Strategy: How Computers Execute Programs"
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
  - "./research-request.md"
  - "../../../../knowledge-operating-system/03-research-pipeline.md"
  - "../../../../knowledge-operating-system/04-source-priority.md"
  - "../../../../knowledge-operating-system/06-knowledge-extraction.md"
x-production-unit: "v01-c02"
x-research-stage: "Source Strategy"
x-access-date: "2026-07-22"
---

# Source Strategy: How Computers Execute Programs

## Purpose

Bu strateji, `V01-C02` araştırmasında kullanılacak kaynakların nasıl bulunacağını,
derecelendirileceğini, sürümleneceğini, çapraz doğrulanacağını ve hangi amaçla
kullanılacağını tanımlar. Amaç bağlantı sayısını artırmak değil; her teknik
katman için yeterli ve bağımsız kanıt üretmektir.

## Scope

Strateji; müfredat kapsamı, kaynak koddan yürütmeye dönüşüm, ISA, CPU ve bellek
modeli, süreç/yükleme, çalışma zamanı modelleri, girdi/çıktı ve durum izleme
konularını kapsar. Kaynak toplama bu belgedeki konu–otorite matrisiyle yönetilir.

## Ownership

Research Engineer keşif, erişim ve kaynak metadata'sından; Technical Reviewer
teknik uygunluk ve çelişki çözümünden; Repository Reviewer göreli bağlantı ve
belge bütünlüğünden sorumludur. Bir web sayfasının bulunması onay anlamına gelmez.

## Content

### Source Policy

Kaynak önceliği KOS ile aynıdır:

1. **Tier 1 — Academic:** ACM/IEEE müfredatı, üniversite dersleri ve akademik
   kitaplar; kavramsal kapsam ve pedagojik soyutlama için kullanılır.
2. **Tier 2 — Official Documentation:** ISA, dil/sanal makine, araç zinciri,
   işletim sistemi ve dosya biçimi spesifikasyonları; normatif teknik davranış
   için kullanılır.
3. **Tier 3 — Industry:** Motor ekiplerinin resmi teknik yazıları; yalnızca
   uygulamaya özgü davranış ve mühendislik bağlamı için kullanılır.
4. **Tier 4 — Community:** yalnızca ek terminoloji veya yanlış anlama keşfi için
   kullanılabilir; temel iddialara kanıt olamaz.

### Authority Families

| Otorite ailesi | Birincil kullanım | Tek başına yeterli olmadığı alan |
| --- | --- | --- |
| ACM/IEEE/AAAI curriculum | Konu düzeyi, yetkinlik ve kapsam | Belirli bir ISA veya runtime davranışı |
| Üniversite sistem dersleri | Öğretilebilir zihinsel model ve katman ilişkisi | Normatif platform davranışı |
| ISA specification | Yazılımın gördüğü makine durumu ve talimat sözleşmesi | İşletim sistemi yükleme süreci |
| Toolchain documentation | Derleme, assembly ve linking aşamaları | Runtime ve CPU mikro-mimarisi |
| OS/API standards | Süreç görüntüsü, loader ve adres alanı | Dil semantiği ve bytecode modeli |
| VM/language specifications | Soyut makine, frame, stack, bytecode | Fiziksel CPU gerçekleştirmesi |
| Engine documentation | Belirli motorun interpreter/JIT yolu | Bütün diller için genelleme |
| File-format specifications | Executable/object bölümleri ve giriş noktası | Kaynak dil dönüşümü |

### Mandatory Coverage Matrix

| Konu kümesi | Asgari kaynak yapısı | Tercih edilen kaynaklar |
| --- | --- | --- |
| Müfredat gerekçesi | 1 curriculum + 2 üniversite | CS2023, MIT 6.004, CMU 15-213 |
| Katman ve soyutlama | 2 üniversite + 1 ISA | Berkeley CS61C, Nand2Tetris, RISC-V |
| Derleme zinciri | 2 resmi araç belgesi | GCC, GNU Binutils/LLVM |
| ISA ve makine durumu | 1 güncel ISA + 1 akademik model | RISC-V 20260120, MIT Beta |
| Yükleme ve süreç | 1 standart + 1 OS/file-format belgesi | POSIX `exec`, ELF veya PE |
| Sanal bellek | 1 OS belgesi + 1 akademik kaynak | Microsoft VA, OSTEP |
| Yorumlanan/hibrid yol | 2 bağımsız runtime ailesi | Python, JVM, WebAssembly, V8 |
| Durum izleme | 1 resmi soyut makine + 1 eğitim aracı | WebAssembly execution, Nand2Tetris CPU Emulator |
| JavaScript karşılaştırması | 2 resmi motor/web kaynağı | V8, MDN |
| Yanlış anlamalar | Yukarıdaki ailelerden çapraz çıkarım | Tek başına community kaynağı yok |

### Selection Criteria

Her aday için şu alanlar kaydedilir:

- kurum/yayıncı ve yazar/standart kurulu;
- kanonik başlık ve URL;
- belge türü ve KOS tier'ı;
- sürüm, yayın tarihi ve erişim tarihi;
- geçerlilik durumu ve varsa yerini alan sürüm;
- dil, lisans/kullanım notu ve arşivlenebilirlik;
- `V01-C02` içinde kapsadığı konu ve öğrenme çıktısı;
- normatif, açıklayıcı veya uygulamaya özgü kullanım sınıfı;
- çelişki, eskime ve aşırı genelleme riski.

Kaynak, aşağıdaki durumlarda eğitim kanıtı olarak kullanılamaz:

- yayıncı veya sürüm belirlenemiyorsa;
- bir arama özeti dışında erişilebilir kanonik belge yoksa;
- başka bir kaynaktan kopyalanmış ikincil özetse;
- uygulamaya özgü davranışı evrensel gerçek gibi sunuyorsa;
- kaynak metin ile çıkarılan iddia arasında doğrudan ilişki kurulamıyorsa;
- güncel olmayan sürüm kullanılmış ve tarihsel amaç açıkça yazılmamışsa.

### Query Families

Arama sorguları kurum veya standart alan adıyla daraltılır:

| Sorgu ailesi | Örnek amaç |
| --- | --- |
| Curriculum | `site:csed.acm.org CS2023 architecture organization execution` |
| University | `site:ocw.mit.edu 6.004 processor state machine language` |
| ISA | `site:docs.riscv.org reference isa unprivileged official release` |
| Toolchain | `site:gcc.gnu.org onlinedocs compilation assembly linking` |
| Loader/process | `site:pubs.opengroup.org exec process image` |
| Executable format | `site:learn.microsoft.com PE format loader entry point` |
| Runtime | `site:docs.python.org execution model bytecode frame` |
| VM | `site:docs.oracle.com jvms runtime data areas frames` |
| Abstract machine | `site:webassembly.github.io spec execution state stack store` |
| Engine | `site:v8.dev docs ignition bytecode interpreter` |

### Research Sequence

1. Kanonik kapsam, outcome ve prerequisite sabitlenir.
2. CS2023 ve üniversite kaynaklarıyla kavram sınırı çıkarılır.
3. ISA, toolchain, OS ve VM spesifikasyonlarıyla normatif davranış doğrulanır.
4. En az üç farklı yürütme yolu karşılaştırılır: native compiled, bytecode/VM ve
   interpreter/JIT.
5. Her aday kaynağın sürümü ve güncelliği kaydedilir.
6. Atomik bulgular yalnızca kesin locator ile çıkarılır.
7. Çelişkiler “implementation difference”, “abstraction difference”, “version
   difference” veya “unresolved” olarak sınıflandırılır.
8. Kanıt doygunluğu sağlandıktan sonra Research Collection başlatılır.

### Freshness Rules

- Sürüm yayımlayan spesifikasyonlarda en yeni kararlı sürüm kullanılır.
- Tarihsel kaynaklar yalnızca tarihsel bağlamda kullanılır.
- Motor yazıları yayımlandığı sürüm ve tarih ile etiketlenir.
- “Latest” URL'leri erişim tarihinde sürüm numarasıyla doğrulanır.
- Lesson Production öncesinde Tier 2 URL'leri ve sürümleri yeniden kontrol edilir.
- Değişken uygulama ayrıntıları en geç 90 gün içinde tekrar doğrulanır.

### Evidence Extraction Rules

- Bir kayıt tek bir doğrulanabilir önerme taşır.
- Önerme kaynağın söylediğinden daha geniş yazılmaz.
- Kaynak bölümü, bölüm numarası veya başlığı locator olarak kaydedilir.
- Doğrudan alıntı zorunlu değildir; paraphrase kaynak anlamını korur.
- Normatif “must/shall” ile açıklayıcı “may/typically” ayrımı korunur.
- Fiziksel makine ile soyut makine ifadeleri aynı kanıt kaydında birleştirilmez.
- Uygulama ayrıntısı ilgili motor ve sürümle sınırlandırılır.

### Conflict Resolution

Kaynaklar farklı görünüyorsa sırasıyla şunlar kontrol edilir:

1. Aynı kavram mı, farklı soyutlama düzeyleri mi?
2. Aynı ürün/ISA/runtime mı?
3. Sürümler aynı mı?
4. Normatif metin ile eğitimsel basitleştirme karıştırılmış mı?
5. Biri mikro-mimari, diğeri mimari davranış mı anlatıyor?

Çelişki çözülemiyorsa tek bir görüş seçilmez; kapsamı ve belirsizliği Research
Collection içinde açıkça korunur.

### Source Targets

Sprint 07A için hedef:

- en az 6 Tier 1 kaynak;
- en az 14 Tier 2 kaynak;
- en fazla 4, yalnızca resmi mühendislik ekibine ait Tier 3 kaynak;
- temel kanıt olarak 0 Tier 4 kaynak;
- en az 8 bağımsız kurum/standart ailesi;
- bütün zorunlu konu kümelerinde en az bir “Primary” aday.

### Stop Conditions

Kaynak araştırması şu koşullarda durur:

- bütün coverage matrix satırları karşılanır;
- açık kalan kritik kavram bulunmaz;
- iki ardışık arama turunda yeni otorite ailesi veya temel karşı örnek çıkmaz;
- uygulama farklılıkları genelleme yapılmadan temsil edilir;
- her adayın kullanım kararı `Primary`, `Supporting`, `Historical`, `Deferred`
  veya `Reject` olarak kaydedilir;
- sonraki sprintin atomik kanıt çıkarması için yeterli locator bulunur.

## Validation

- Strateji KOS Research Pipeline ve Source Priority kurallarından türetilmiştir.
- Tier 4 kaynaklar temel kanıt kapsamından çıkarılmıştır.
- Kaynak sayısı tek başına başarı ölçütü değildir; kapsam ve bağımsız otorite
  çeşitliliği birlikte ölçülür.
- Research Packet veya educational content üretilmemiştir.
- Kanonik kayıt veya standart değiştirilmemiştir.

## References

- [Research Request](./research-request.md)
- [KOS Research Pipeline](../../../../knowledge-operating-system/03-research-pipeline.md)
- [KOS Source Priority](../../../../knowledge-operating-system/04-source-priority.md)
- [KOS Knowledge Extraction](../../../../knowledge-operating-system/06-knowledge-extraction.md)
