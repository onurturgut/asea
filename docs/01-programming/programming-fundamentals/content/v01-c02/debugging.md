---
document_type: "challenge"
challenge_id: "V01-C02-CH01"
title: "Bozuk Yürütme İzini Teşhis Et"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
chapter_id: "V01-C02"
difficulty: "Intermediate"
estimated_time: "60 minutes"
prerequisites:
  - "V01-C02-EX01"
learning_outcomes:
  - "V01-LO003"
  - "V01-LO004"
assessment_id: "V01-C02-AS01"
deliverables:
  - "corrected-trace"
  - "root-cause-report"
---

# Bozuk Yürütme İzini Teşhis Et

## Problem

Bir ekip arkadaşı küçük makine simülatörünün yanlış çıktı verdiğini söylüyor.
Programın son durumu beklenen gibi görünse de izleme kaydı tutarsızdır. Görevin,
sonuca bakarak tahmin yürütmek değil; doğru durumdan ilk sapılan adımı bulmak,
kök nedeni sınıflandırmak ve düzeltmeyi kanıtlamaktır.

Talimat sözleşmesi:

```text
LOADI Rx, n      Rx=n; PC=PC+1
ADD Rd, Ra, Rb   Rd=Ra+Rb; PC=PC+1
JZ Rx, address   Rx===0 ise PC=address, değilse PC=PC+1
OUT Rx           output.push(Rx); PC=PC+1
HALT             running=false; PC değişmez
```

Program:

```text
0: LOADI R1, 0
1: JZ R1, 4
2: LOADI R2, 20
3: OUT R2
4: LOADI R2, 7
5: OUT R2
6: HALT
```

Hatalı iz:

| Adım | Önceki | Talimat | Sonraki |
| ---: | --- | --- | --- |
| 1 | `PC=0, R1=0, R2=0, out=[]` | `LOADI R1,0` | `PC=1, R1=0, R2=0, out=[]` |
| 2 | `PC=1, R1=0, R2=0, out=[]` | `JZ R1,4` | `PC=2, R1=0, R2=0, out=[]` |
| 3 | `PC=2, R1=0, R2=0, out=[]` | `LOADI R2,20` | `PC=3, R1=0, R2=20, out=[]` |
| 4 | `PC=3, R1=0, R2=20, out=[]` | `OUT R2` | `PC=4, R1=0, R2=20, out=[20]` |
| 5 | `PC=4, R1=0, R2=20, out=[20]` | `LOADI R2,7` | `PC=5, R1=0, R2=7, out=[20]` |
| 6 | `PC=5, R1=0, R2=7, out=[20]` | `OUT R2` | `PC=6, R1=0, R2=7, out=[20,7]` |

## Constraints

- Programı veya talimat sözleşmesini değiştirme.
- İlk analizde kod çalıştırma; tablo ve sözleşmeyle muhakeme et.
- Her düzeltmeyi “öyle olması gerekir” yerine önceki durum ve talimatla kanıtla.
- Yalnız son çıktıyı yazmak yeterli değildir.
- Gerçek CPU iç zamanlaması hakkında chapter kapsamı dışında iddia ekleme.

## Acceptance Criteria

1. İlk hatalı geçiş doğru adım numarasıyla belirlenmiştir.
2. Hata, talimat seçimi, okunan değer, durum güncelleme veya PC güncelleme
   kategorilerinden biriyle sınıflandırılmıştır.
3. Hatalı satırdan itibaren bütün iz yeniden oluşturulmuştur.
4. Yürütülmemesi gereken talimatlar açıkça belirtilmiştir.
5. Son çıktı ile son `PC`, yazmaç ve `running` durumu verilmiştir.
6. Aynı hata sınıfını otomatik yakalayacak en az iki invariant yazılmıştır.

## Deliverables

- `corrected-trace.md`: düzeltilmiş tablo
- `root-cause.md`: belirti, ilk sapma, kök neden, etki ve önleme
- `invariants.md`: örneğin “Her satırın önceki durumu bir önceki satırın
  sonraki durumuyla aynıdır” biçiminde doğrulama kuralları

## Evaluation

| Ölçüt | Puan |
| --- | ---: |
| İlk hatalı geçişi bulma | 20 |
| Kök nedeni doğru sınıflandırma | 20 |
| Eksiksiz düzeltilmiş iz | 30 |
| Son durum ve çıktı | 10 |
| Invariant ve önleme yaklaşımı | 15 |
| Teknik sınır ve açıklık | 5 |
| **Toplam** | **100** |

Başarı eşiği 80 puandır ve düzeltilmiş iz ölçütünden en az 24 puan alınmalıdır.

## Reflection

1. Son çıktının doğru görünmesi neden ara adımların doğru olduğunu kanıtlamaz?
2. PC hatası ile veri hatasını ayırmak teşhisi nasıl hızlandırır?
3. Bu yaklaşımı gerçek bir JavaScript programındaki ilk yanlış durum değişimine
   nasıl uyarlarsın?

## References

- [Ana Ders — İzleme Yaparken Hata Bulma](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Alıştırmalar](./exercises.md)
- [Assessment Rubriği](./assessment-rubric.md)
- [Misconception Map](../../research/v01-c02/misconception-map.md)
