---
document_type: "lab"
lab_id: "V01-C01-L01"
title: "Human Instruction Interpreter"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C01"
difficulty: "Beginner"
estimated_time: "60-75 minutes"
prerequisites:
  - "V01-C01"
learning_outcomes:
  - "V01-LO001"
  - "V01-LO002"
assessment_id: "V01-C01-AS01"
deliverables:
  - "instruction-specification"
  - "execution-trace"
  - "test-evidence"
---

# Human Instruction Interpreter

## Objective

Belirsiz doğal dil talimatlarını, başka bir kişinin yorum eklemeden uygulayabileceği kesin ve test edilebilir bir “insan programına” dönüştürmek. Laboratuvar, program ile algoritmayı ayırma ve günlük bir süreci en az sekiz sıralı talimata dönüştürme becerilerini ölçer.

## Requirements

- İki kişilik çalışma imkânı; tek çalışıyorsanız ikinci rolü farklı bir oturumda uygulayın.
- Kâğıt, kalem, dört aynı nesne ve bir kap.
- [Chapter 01](../chapters/01-what-is-programming.md) tamamlanmış olmalıdır.
- Güvenlik sınırı: kesici alet, sıcak sıvı, elektrikli cihaz veya riskli fiziksel hareket kullanılmaz.

## Tasks

1. **Niyeti tanımlayın:** Dört nesneyi belirli bir düzende kaba yerleştiren gözlenebilir bir sonuç yazın.
2. **İlk programı yazın:** En az sekiz numaralı talimat oluşturun. Jest, görsel gösterim veya sözlü açıklama eklemeyin.
3. **Rol ayırın:** “Programcı” sessiz kalır; “yorumlayıcı” yalnızca yazılı talimatları uygular.
4. **Trace tutun:** Her talimattan sonra nesnelerin durumunu tabloya kaydedin.
5. **Belirsizlikleri işaretleyin:** Yorumlayıcının seçim yapmak zorunda kaldığı her noktayı hata adayı olarak kaydedin.
6. **Üç test uygulayın:** Normal nesne düzeni, bir nesnenin beklenmeyen konumda olduğu sınır durumu ve bir nesnenin eksik olduğu geçersiz durum.
7. **Programı revize edin:** Yalnızca gözlenen kanıta dayanarak talimatları güncelleyin.
8. **Yeniden çalıştırın:** Revize sürümü sıfırdan uygulayın ve beklenen sonuçla karşılaştırın.
9. **Kavramları etiketleyin:** Niyet, algoritma, program, girdi, işlem, çıktı, yürütme ve hata davranışını artefact üzerinde gösterin.

Trace tablosu:

| Adım | Talimat | Önceki durum | Uygulanan eylem | Sonraki durum | Belirsizlik |
|---:|---|---|---|---|---|
| 1 | Öğrencinin talimatı | Başlangıç düzeni | Gözlenen eylem | Yeni düzen | Var/Yok ve gerekçe |

## Bonus Challenge

Talimatları, yorumlayıcının renkleri ayırt edemediği varsayımıyla yeniden tasarlayın. Renk yerine konum, şekil veya etiket kullanın. Bu değişikliğin algoritmayı mı, program temsilini mi, yoksa ikisini birden mi etkilediğini açıklayın.

## Deliverables

- `instruction-program-v1.md`: ilk talimat dizisi
- `execution-trace.md`: üç testin adım adım izi
- `instruction-program-v2.md`: kanıta dayalı revizyon
- `lab-notes.md`: en fazla 300 kelimelik kavram ve karar açıklaması

Dosya adları teslim paketiniz içindir; repository'ye eklenmeleri zorunlu değildir.

## Evaluation Criteria

| Ölçüt | Puan |
|---|---:|
| Talimatlar tekil, sıralı ve uygulanabilir | 25 |
| Normal, sınır ve geçersiz test kanıtı | 25 |
| Trace ara durumları eksiksiz | 20 |
| Revizyon gözlenen hataya bağlı | 20 |
| Kavram sınıflandırması doğru | 10 |

Geçme koşulu en az 75/100 ve “test kanıtı” ölçütünden en az 15 puandır.

## Reflection

1. Yorumlayıcının hangi davranışı sizi en çok şaşırttı?
2. Sorun gerçekten yorumlayıcıda mıydı, yoksa program sözleşmesinde mi?
3. Revizyonunuzun başka bir ortamda da çalışacağını hangi kanıt destekliyor?
4. Bir bilgisayarın insan yorumlayıcıdan daha az ve daha fazla hangi bilgilere ihtiyacı olurdu?

## References

- [What Is Programming?](../chapters/01-what-is-programming.md)
- [Chapter 01 Assessment](../assessments/01-assessment-01-what-is-programming.md)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
