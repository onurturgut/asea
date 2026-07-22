---
document_type: "supporting-document"
supporting_document_id: "V01-C04-SD-REF-001"
supporting_document_type: "References"
title: "V01-C04 Source Strategy"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C04"
authority: "Derived"
owner_role: "Research Engineer"
generated_date: "2026-07-22"
language: "tr"
---

# V01-C04 Source Strategy

## Purpose

`V01-C04 — Algorithms, Pseudocode, and Tracing` için üretilecek araştırmanın
otorite, kapsam, güncellik ve kullanım sınırlarını tanımlamak.

## Scope

Araştırma; algoritma, sözde kod, ön koşul, son koşul, trace table, dry run,
sonlanma, doğruluk sezgisi, sıra, seçim, yineleme, akış şeması ve AI tarafından
üretilen algoritmanın denetlenmesini kapsar. Big-O analizi, belirli bir
programlama dilinin söz dizimi ve formal proof eğitimi kapsam dışıdır.

## Authority Tiers

### Tier 1 — Normative and primary

- ISO/IEC standart kayıtları
- NIST yayınları ve sözlükleri
- ACM/IEEE curriculum guidance
- Üniversitelerin özgün ders notları ve courseware materyalleri

### Tier 2 — Institutional educational references

- OpenStax hakemli açık ders kitapları
- National Centre for Computing Education materyalleri
- Resmî ulusal curriculum rehberleri

### Tier 3 — Explanatory support

- Üniversite destekli açık Computer Science Field Guide
- Kaynağı ve yazarı belli, konuya özel yardımcı açıklamalar

Tier 3 hiçbir temel teknik iddianın tek kanıtı olamaz.

## Selection Rules

Bir kaynak pakete alınmadan önce şu sorular yanıtlanır:

1. Kurum veya yazar konu üzerinde yetkili mi?
2. İddia doğrudan kaynağın kapsamına giriyor mu?
3. Yayın veya son doğrulama tarihi biliniyor mu?
4. Kaynak erişilebilir ve kalıcı bir konuma sahip mi?
5. Lisans veya alıntılama sınırı kaydedilmiş mi?
6. Kaynak algoritmayı dil söz dizimiyle yanlış biçimde özdeşleştiriyor mu?
7. Öğrenci seviyesi için kullanım sınırı açık mı?

## Research Questions

- Bir prosedürün algoritma sayılması için hangi özellikler gerekir?
- Sözde kod ne kadar dil bağımsız, ne kadar kesin olmalıdır?
- Ön koşul ve son koşul doğruluk muhakemesini nasıl sınırlar?
- Trace table hangi durumları görünür kılar, neyi kanıtlayamaz?
- Sonlanma için başlangıç seviyesinde hangi ilerleme argümanı yeterlidir?
- Normal, sınır ve geçersiz girdiler nasıl seçilir?
- Akış şeması ve sözde kod ne zaman yararlıdır?
- Bir AI çıktısında gizli varsayım, sonsuz döngü ve sözleşme ihlali nasıl bulunur?

## Planned Source Mix

| Katman | Minimum | Planlanan kullanım |
|---|---:|---|
| Standard / specification | 1 | Akış şeması gösterim sınırı |
| Government / NIST | 2 | Algoritma terminolojisi ve kaynak otoritesi |
| ACM/IEEE curriculum | 2 | Yetkinlik seviyesi ve kapsam |
| University primary notes | 5 | Doğruluk, sözleşme, sonlanma, pseudocode |
| Institutional textbook | 2 | Başlangıç seviyesi zihinsel model |
| Pedagogy source | 2 | Trace öğretimi ve cognitive support |
| Supporting guide | 1 | Alternatif açıklama ve örnek |

Hedef en az 15 ayrı kaynak kaydıdır.

## Freshness Policy

Algoritmanın temel tanımları zamana dayanıklıdır; yine de web erişimi ve standart
durumu 2026-07-22 tarihinde kontrol edilir. ISO 5807 eski tarihli olmasına rağmen
ISO kaydında güncel durum bilgisi korunur. Pedagojik materyallerde mümkün olan en
güncel kurumsal sürüm tercih edilir.

## Conflict Handling

- Kaynaklar pseudocode biçiminde farklılık gösterebilir; tek evrensel syntax
  iddiası kurulmaz.
- “Doğruluk” için örneklerde test kanıtı ile formal proof birbirine eşitlenmez.
- Determinizm bütün algoritmalar için zorunlu evrensel özellik gibi sunulmaz;
  C04 örnekleri eğitim amacıyla deterministik tutulur.
- Akış şeması yardımcı gösterimdir; canonical pseudocode’un yerine geçmez.

## Acceptance Criteria

- En az 15 değerlendirilmiş kaynak
- Dört canonical Concept için en az iki bağımsız kurumsal destek
- `V01-LO006` için tasarım, trace ve termination kapsamı
- Her kaynağın yetki, tarih, lisans ve kullanım sınırı
- Kapsam dışı konuların görünür tutulması
- Broken link ve Markdown hatasının bulunmaması

## References

- [Research Packet Standard](../../../../production/research-packet-standard.md)
- [Chapter Blueprint](../../../chapter-blueprints/04-algorithms-pseudocode-and-tracing.md)
- [Repository references](../../../references.md)
