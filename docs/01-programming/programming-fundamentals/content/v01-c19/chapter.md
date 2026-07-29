---
document_type: "content-guide"
document_id: "V01-C19-CG01"
title: "V01-C19 Çalışma Rehberi"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Çalışma Rehberi

Ana ders: [Özyineleme ve Özyinelemeli Düşünme](../../../chapters/19-ozyineleme-ve-ozyinelemeli-dusunme.md)

Devamlılık ve üretim sözleşmesi:
[C18 → C19 → C20 Öğretim Planı](./continuity-and-teaching-plan.md).

## Oturum Akışı

### Oturum 1 — İhtiyaç ve ilk zihinsel model

1. Ana dersteki C18 öğrenme grubu kaydını inceleyin.
2. Alanların ad ve tür kararlarını notsuz açıklayın.
3. Sabit iki seviyeli çözümün üçüncü seviyede neden bozulacağını tahmin edin.
4. `countdown(3)` çağrı sırasını elle yazın.
5. Base case, recursive case ve progress measure terimlerini davranışın
   üzerinde işaretleyin.

Çıkış kanıtı: `countdown(3)` için dört ayrı `n` bağlamasını ve neden
`countdown(0)` çağrısında yeni çağrı oluşmadığını açıklayabilmek.

### Oturum 2 — Birlikte yapalım ve call stack

1. `sumTo(3)` anlatımını çalışın.
2. Örneği kapatıp çağrı, bekleyen işlem ve dönüş tablosunu yeniden üretin.
3. `sumTo(4)` için Şimdi sen dene tablosunu tamamlayın.
4. [Çalışılmış örneklerde](./examples.md) önce tahmin, sonra çalıştırma yapın.

Çıkış kanıtı: İniş ve çözülme fazlarını karıştırmadan her frame'in dönüş
değerini bulabilmek.

### Oturum 3 — Hata avı ve bağımsız uygulama

1. Ana dersteki iki hata avını çözümü kapatarak yeniden yapın.
2. [Hata ayıklama vakalarını](./debugging.md) en küçük iz yöntemiyle çözün.
3. [Alıştırmaları](./exercises.md) tamamlayın.
4. Yardım gerekirse [AI Mentor](./ai-mentor.md) ipucu merdivenini kullanın.
5. [Quiz'i](./quiz.md) notsuz çözün ve
   [açıklamalı cevaplarla](./quiz-answer-key.md) karşılaştırın.

Çıkış kanıtı: Base case eksikliği, ilerlemeyen argüman ve kaybolan recursive
sonucu farklı belirtilerden teşhis edebilmek.

### Oturum 4 — Lab, proje ve transfer

1. [Lab'de](./lab.md) üç çağrı ağacı ve termination kanıtı teslim edin.
2. [Challenge'da](./challenge.md) recursion–iteration dönüşümü yapın.
3. [Proje artışını](./project-increment.md) `V01-P05` üzerine uygulayın.
4. Bağımsız uygulamadan sonra gerekirse
   [adım adım çözümü](./exercise-solutions.md) inceleyip transfer görevini yapın.
5. [Mülakat sorularından](./interview.md) en az dördünü sesli cevaplayın.
6. [Rubrikle](./assessment-rubric.md) öz değerlendirme yapın.

Çıkış kanıtı: Daha önce görmediğiniz iç içe bir kayıt yapısını recursive
işleyebilmek ve iteratif alternatifi gerekçeli karşılaştırabilmek.

Bir çözümü çalıştırabilmek bölüm başarısı değildir. Her çağrının girdisini, bekleyen
işlemini ve dönüş değerini açıklayabiliyorsanız mekanizmayı anlamışsınızdır.
