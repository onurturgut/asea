---
document_type: "lab"
document_id: "V01-C19-L01"
title: "Trace Recursive Structures"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
learning_outcomes: ["V01-LO029", "V01-LO030"]
estimated_time: "60-75 dakika"
last_updated: "2026-07-29"
---

# Lab — Recursive Yapıları İzle

## Senaryo

Bir içerik menüsü iç içe bölüm kayıtları taşıyor. Her kayıt:

```js
const contentNode = {
  title: "Bölüm",
  children: [],
};
```

biçimindedir. Toplam bölüm sayısını ve en derin seviye bilgisini üretmeniz isteniyor.

## Görevler

### Aşama 1 — Sözleşmeyi kur

1. `title` ve `children` alanlarının anlamını, türünü ve geçersiz örneklerini
   yazın.
2. Yaprak düğümün neden geçerli bir base case olduğunu açıklayın.
3. `countNodes` ve `maxDepth` fonksiyonlarının girdi/çıktı sözleşmesini koddan
   önce yazın.

### Aşama 2 — Önce tahmin et

Tek düğümlü, üç düğümlü zincir ve iki dallı küçük yapı oluşturun. Kod yazmadan
beklenen toplam ve derinlik değerlerini belirleyin. Bu değerler test
oracle'ınız olacaktır.

### Aşama 3 — Uygula ve izle

1. `countNodes(node)` fonksiyonunu geliştirin.
2. `maxDepth(node)` fonksiyonunu geliştirin.
3. Tek düğüm, tek zincir ve iki dallı yapı için call tree çıkarın.
4. Her frame'de parametre, yerel sonuç, bekleyen çocuk ve dönüş değerini
   gösterin.
5. Her recursive branch'in daha küçük alt yapıya geçtiğini gösteren progress
   kanıtı yazın.

### Aşama 4 — Hata avı

İki kontrollü hata üretin:

- recursive çağrıya `child` yerine tekrar `node` göndermek;
- birden fazla çocuk içinden yalnız ilkini işlemek.

Her hata için belirti, en küçük karşı örnek, ilk üç çağrı, kök neden, en küçük
düzeltme ve yeniden test kanıtı teslim edin.

### Aşama 5 — Test et ve karar ver

En az 12 test ekleyin: yaprak, tek çocuk, iki dal, üç seviye, hatalı veri ve
kaynak mutation kontrolü dahil. Aynı veri döngüsel referans taşısaydı ne
olacağını açıklayın; çözümü uygulamak zorunlu değildir.

## Kademeli İpuçları

1. Yaprak düğümde döngü kaç kez çalışır?
2. `countNodes` mevcut düğümü saymaya hangi başlangıç değeriyle başlayabilir?
3. `maxDepth` için yaprak derinliğini `1` kabul ederseniz çocuk sonucu nasıl
   birleştirilir?
4. Bütün çocukların sonuçlarını tek bir sonuçta toplamak için döngü içinde hangi
   yerel değerin değişmesi gerekir?
5. Progress ölçüsünü “sayı her zaman azalır” diye aramayın; daha küçük alt
   ağaca geçişi gösterin.

## Teslimat

- `recursive-menu.js`
- test dosyası
- üç call tree
- termination karar kaydı
- değişken ve tür karar tablosu
- iki hata avı raporu
- çalışma komutu ve beklenen özet

## Başarı

Toplam en az 75/100; call trace ve termination boyutlarında ayrı ayrı en az %75.
Çıktının doğru olması, eksik trace veya progress kanıtını telafi etmez.
