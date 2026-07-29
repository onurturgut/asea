---
document_type: "standard-index"
index_id: "ASEA-STD-INDEX-002"
title: "ASEA Standards Index v2.1"
version: "2.1.0"
status: "Stable"
---

# ASEA Standards Index v2.1

Bu indeks, ASEA Standards v2 paketinin kanonik kayıt, kapsam ve öncelik belgesidir.

## 1. Standards Registry

| Standard | Kimlik | Sürüm | Kapsam | Kanonik dosya |
|---|---|---:|---|---|
| Repository Standard | `ASEA-STD-REPOSITORY-002` | `2.0.0` | Ortak metadata, adlandırma, kimlik, durum, sürüm, Review, Release, Manifest ve doğrulama | [repository-standard-v2.md](./repository-standard-v2.md) |
| Curriculum Standard | `ASEA-STD-CURRICULUM-002` | `2.0.0` | Öğrenme ilerleyişi, Learning Outcome, practice, assessment ve traceability | [curriculum-standard-v2.md](./curriculum-standard-v2.md) |
| Volume Standard | `ASEA-STD-VOLUME-002` | `2.0.0` | Volume paketleme, Blueprint, Capstone, release akışı ve Definition of Done | [volume-standard-v2.md](./volume-standard-v2.md) |
| Chapter Standard | `ASEA-STD-CHAPTER-002` | `2.0.0` | Chapter Front Matter, zorunlu başlıklar ve içerik kalite kapısı | [chapter-standard-v2.md](./chapter-standard-v2.md) |
| Teaching and Continuity Standard | `ASEA-STD-TEACHING-001` | `1.0.0` | Öğrenciye dönük öğretim deneyimi, ayrıntı seviyesi, uygulama kademeleri ve akademi-modül-chapter devamlılığı | [teaching-and-continuity-standard-v1.md](./teaching-and-continuity-standard-v1.md) |

Geçiş belgesi: [Migration Guide v1 to v2](./migration-guide-v1-to-v2.md).

## 2. Authority Boundaries

Her kuralın tek sahibi vardır:

- **Repository Standard** ortak sözdizimi ve repository sözleşmelerinin sahibidir.
- **Curriculum Standard** neyin, hangi outcome ve assessment ilişkisiyle öğretileceğinin sahibidir.
- **Volume Standard** Volume'un nasıl paketleneceği, planlanacağı ve Stable olacağının sahibidir.
- **Chapter Standard** tek Chapter dosyasının metadata, H2 yapısı ve içerik
  kapısının sahibidir.
- **Teaching and Continuity Standard** öğrenciye dönük anlatım deneyiminin,
  öğretim kademelerinin, kod kararlarını açıklama derinliğinin ve
  akademi-modül-chapter arasındaki yeterlik devrinin sahibidir.

Bir standart başka standardın alanını bağlantıyla kullanır; kuralı kopyalayıp değiştiremez. Örnekler normatif kuralların önüne geçmez.

## 3. Precedence Rules

1. Repository Standard, tüm artefact'lar için ortak taban sözleşmedir.
2. Türe özgü alanda ilgili özel standart uygulanır.
3. Özel standart ortak kuralı daraltabilir ancak gevşetemez.
4. Curriculum ile yapısal standart arasında ilişki olduğunda Curriculum öğrenme anlamını, Volume veya Chapter dosya yerleşimini yönetir.
5. Definition of Done konusunda yalnızca Volume Standard normatiftir.
6. Öğrenciye dönük anlatım ile Chapter dosya yapısı kesiştiğinde Chapter
   Standard kaynak dosyanın şemasını, Teaching and Continuity Standard
   öğrencinin yaşadığı öğretim deneyimini yönetir.
7. Çelişki devam ederse Standards Index kapsam sınırı uygulanır; sessiz yorum yapılmaz, standart değişikliği önerisi açılır.

## 4. Schema Ownership Matrix

| Document Type | Şema sahibi |
|---|---|
| Standard, Standard Index, Migration Guide | Repository Standard |
| Review, Release, Manifest | Repository Standard |
| Learning Outcome record | Curriculum Standard |
| Lab, Quiz, Challenge, Exercise, Interview, Project, Assessment | Curriculum Standard |
| Volume, Blueprint | Volume Standard |
| Chapter | Chapter Standard |

Teaching and Continuity Standard yeni bir document type tanımlamaz. Chapter,
Lab, Quiz, Exercise, Interview ve Project artefact'larının öğrenciye dönük
öğretimsel davranışına çapraz kesen bir uygunluk profili uygular.

Capstone, `project` belge türünün `project_type: "Capstone"` varyantıdır ve Capstone ID kullanır. Ayrı, çelişen bir Front Matter şeması oluşturmaz.

## 5. Conformance Profiles

Bir artefact v2 uyumlu sayılmak için:

- Repository Standard ortak sözleşmesini;
- kendi document type şemasını;
- bağlı olduğu Curriculum traceability kurallarını;
- Volume içindeyse Volume paketleme kurallarını;
- Chapter ise Chapter başlık ve içerik kurallarını;
- öğrenciye dönük bir öğretim artefact'ıysa Teaching and Continuity
  Standard'ın anlatım, uygulama ve devamlılık kurallarını

birlikte karşılamalıdır.

`v2-compatible` veya benzeri beyanlar doğrulama kanıtı olmadan kullanılamaz. Geçiş halindeki v1 dosya, v2 ile aynı Volume'da bulunabilir; ancak hangi profilin uygulandığı manifestte dosya bazında belirtilmelidir.

## 6. Version Compatibility

- v2 standardı yalnızca v2 şemasına geçirilmiş artefact'lar için normatiftir.
- v1 artefact'lar değiştirilmeden v1 standardına göre okunabilir.
- Bir artefact tek sürümde iki standardın Front Matter alanlarını karıştıramaz.
- v1'den v2'ye geçiş yeni belge MINOR veya MAJOR sürümü gerektirir; alanların anlamı ya da tüketici sözleşmesi değişiyorsa MAJOR seçilir.
- Standartların PATCH/MINOR sürümleri aynı major içindeki uyumluluk kurallarını bozmaz.

## 7. Conflict Resolution Record

CR-001–CR-012 tasarım girdileri aşağıdaki v2 kararlarına bağlanmıştır:

| Conflict | v2 kararı | Otorite |
|---|---|---|
| CR-001 | Chapter için tek, kimlik ve sürüm içeren Front Matter şeması | Chapter Standard §2 |
| CR-002 | Değişmez H2 sırası, kontrollü H3 genişletmesi | Chapter Standard §3 |
| CR-003 | Volume ve Chapter Blueprint şeması, bölümleri ve yaşam döngüsü | Volume Standard §6 |
| CR-004 | Beş durumlu ortak yaşam döngüsü; decision/freeze ayrı alan | Repository Standard §8 |
| CR-005 | Küçük harfli kebab-case ve açık `README.md`/yönetişim istisnaları | Repository Standard §4 |
| CR-006 | Başlangıç ve hedef seviyesini ayıran `level_start`/`level_target` | Volume Standard §2 |
| CR-007 | Volume README metadata ve 12 zorunlu H2 | Volume Standard §2, §4 |
| CR-008 | Repository, Volume, Blueprint, Release ve belge sürümlerinin ayrılması | Repository Standard §10 |
| CR-009 | Review aşamalarının kayıtlarda, ortak durumun `Review` olarak tutulması | Volume Standard §10 |
| CR-010 | Yalnızca öğretilmiş teknolojileri zorunlu kılan Capstone scope gate | Volume Standard §9 |
| CR-011 | Büyük harfli machine ID ile küçük harfli dosya adının ayrılması | Repository Standard §4, §9 |
| CR-012 | Mermaid bloklarında zorunlu `mermaid` dil etiketi | Repository Standard §5, §12 |

## 8. Change Governance

- Yeni belge türü önce şema sahibine eklenir, sonra bu matrise kaydedilir.
- Var olan alanın anlamını ikinci bir standartta değiştirmek yasaktır.
- Birden fazla standardı etkileyen değişiklik aynı review kapsamıyla ve uyumluluk analiziyle yayımlanır.
- Standards Index sürümü, registry veya precedence sözleşmesi değiştiğinde artırılır.
- Stable standardın ardılı yayımlanmadan kanonik dosya silinemez.

## 9. References

- [Repository Standard v2.0](./repository-standard-v2.md)
- [Curriculum Standard v2.0](./curriculum-standard-v2.md)
- [Volume Standard v2.0](./volume-standard-v2.md)
- [Chapter Standard v2.0](./chapter-standard-v2.md)
- [Teaching and Continuity Standard v1.0](./teaching-and-continuity-standard-v1.md)
- [Migration Guide v1 to v2](./migration-guide-v1-to-v2.md)
