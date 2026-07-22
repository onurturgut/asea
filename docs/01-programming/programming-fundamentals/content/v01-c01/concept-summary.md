---
document_type: "supporting-document"
supporting_document_id: "V01-C01-SD-GLOS-001"
supporting_document_type: "Glossary"
title: "Kavram Özeti: Programlama Nedir?"
version: "0.1.0"
status: "Draft"
scope_id: "V01-C01"
authority: "Derived"
owner_role: "Technical Writer"
source_ids: ["V01-C01", "V01-LO001", "V01-LO002"]
derived_from: ["../../../chapters/01-what-is-programming.md", "../../content/lesson-01/learning-objectives.md"]
x-content-language: "tr-TR"
---

# Kavram Özeti: Programlama Nedir?

## Purpose

C01'in temel kavramlarını ezber tanımları yerine sınırları, örnekleri ve yanlış
anlama işaretleriyle hızlı tekrar edilebilir hâle getirmek.

## Scope

Programlama, program, algoritma, talimat, hesaplama, girdi, işlem, çıktı,
yürütme, durum ve doğruluk kavramlarını kapsar.

## Ownership

- Kanonik açıklama: [Ana Ders](../../../chapters/01-what-is-programming.md)
- Bu belge: türetilmiş çalışma özeti
- Güncelleme sahibi: Technical Writer

## Content

### Terimler

| Terim | Çalışma tanımı | Ayırıcı soru |
| --- | --- | --- |
| Programlama (Programming) | Bir ihtiyacı kesin, yürütülebilir ve doğrulanabilir davranışa dönüştürme disiplini | Yalnız kod mu yazılıyor, yoksa problem ve kanıt da tanımlanıyor mu? |
| Algoritma (Algorithm) | Bir sonucu üretmek için sonlu ve düzenli çözüm yöntemi | Çözüm belirli bir dile bağlı mı? |
| Program (Program) | Talimatların ve verilerin bir yürütme ortamında kullanılabilen ifadesi | Yöntem hangi somut temsil ve ortamda çalışacak? |
| Talimat (Instruction) | Uygulayıcının gerçekleştirebildiği tek ve belirli eylem | Adım tek anlamlı ve gözlenebilir mi? |
| Hesaplama (Computation) | Bilginin tanımlı kurallarla işlenmesi ve durumun dönüştürülmesi | Hangi bilgi hangi kuralla değişiyor? |
| Girdi (Input) | Programın dışarıdan veya önceki durumdan aldığı veri | İşlem başlamadan hangi bilgi gerekli? |
| İşlem (Process) | Girdiye uygulanan dönüşüm veya karar | Hangi kural uygulanıyor? |
| Çıktı (Output) | Dışarıdan gözlenebilen sonuç veya etki | Başarıyı hangi davranışla göreceğiz? |
| Yürütme (Execution) | Talimatların bir ortamda gerçekten uygulanması | Dosya yalnız duruyor mu, talimatlar çalışıyor mu? |
| Doğruluk (Correctness) | Davranışın tanımlanmış gereksinimle uyuşması | “Çalıştı” mı, yoksa sözleşmeyi karşıladı mı? |

### Kavram ilişkisi

```mermaid
flowchart LR
    N[İhtiyaç] --> P[Problem tanımı]
    P --> A[Algoritma]
    A --> R[Program temsili]
    R --> E[Yürütme]
    E --> O[Gözlenebilir çıktı]
    O --> T[Test ve doğruluk kararı]
```

### Kritik ayrımlar

- Algoritma çözüm yöntemidir; program yöntemin belirli bir ortam için
  ifadesidir.
- Kaynak dosya bir temsildir; çalışan süreç yürütmedir.
- Çıktının oluşması doğruluk kanıtı değildir; beklenen sözleşmeyle uyuşması
  gerekir.
- Kesin talimat uzun talimat değildir; tek anlamlı, sıralı ve test edilebilir
  talimattır.
- Bilgisayar niyeti tamamlamaz; tanımlı kuralların izin verdiği davranışı üretir.

### Yanlış anlama sinyalleri

| İfade | Sorun |
| --- | --- |
| “Kod yazıyorsam programlama yapıyorum.” | Problem, gereksinim ve doğrulama görünmez kalır. |
| “Çalıştıysa doğrudur.” | Yanlış gereksinimi başarıyla uygulamış olabilir. |
| “Algoritma yalnız koddur.” | Dilden bağımsız çözüm yöntemiyle temsil karıştırılır. |
| “İnsan anlıyorsa talimat yeterince açıktır.” | İnsan gizli bağlamı tamamlıyor olabilir. |

## Validation

- Terimler ilk kullanımda Türkçe (English) biçimindedir.
- Tanımlar ana dersin kapsamıyla çelişmez.
- `V01-LO001` için örnek/karşı örnek, `V01-LO002` için kesinlik ölçütü sağlar.

## References

- [Ana Ders](../../../chapters/01-what-is-programming.md)
- [Learning Objectives](../../content/lesson-01/learning-objectives.md)
- [Research Packet](../../research/lesson-01/research-packet.md)
