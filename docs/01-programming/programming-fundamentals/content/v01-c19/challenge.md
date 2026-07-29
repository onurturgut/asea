---
document_type: "challenge"
document_id: "V01-C19-CH01"
title: "Recursion ve Iteration Arasında Dönüştür"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# Challenge — Recursion ve Iteration Arasında Dönüştür

Bir dizide hedef değerin kaç kez geçtiğini bulan:

1. indeks tabanlı recursive çözüm;
2. `for...of` kullanan iteratif çözüm

yazın. İki çözüm aynı girdi ve hata sözleşmesini kullanmalıdır.

Teslimat:

- iki çalışan fonksiyon;
- ortak en az on test;
- recursive çözüm için call trace ve progress kanıtı;
- iteratif çözüm için loop invariant;
- okunabilirlik, stack kullanımı, mutation ve değişim maliyetini karşılaştıran
  400–600 kelimelik karar kaydı.

“Biri daha kısa” tek başına yeterli gerekçe değildir.

## Değişken Açıklama Zorunluluğu

Recursive çözümde en az `values`, `target`, `index` ve dönen sayının;
iteratif çözümde `count` ve döngü elemanının:

- temsil ettiği bilgiyi;
- başlangıç değerini;
- JavaScript türünü ve değer kısıtını;
- neden `const`, `let` veya parametre olduğunu;
- neden yakın bir alternatif türün seçilmediğini

açıklayın.

## Kademeli İpuçları

1. Boş veya tamamen işlenmiş koleksiyonda sonuç kaçtır?
2. Sıradaki elemanı hangi parametre gösterir?
3. Mevcut eleman hedefe eşitse mevcut frame'in katkısı kaçtır?
4. Küçük problem, aynı dizi için hangi yeni `index` değeriyle kurulabilir?
5. Recursive çağrıdan gelen sayı mevcut katkıyla nasıl birleşir?

İpucu 5'ten sonra tam çözüm kullanılırsa challenge bağımsız kanıt sayılmaz;
farklı bir veri ve hedefle yeni transfer görevi tamamlanır.
