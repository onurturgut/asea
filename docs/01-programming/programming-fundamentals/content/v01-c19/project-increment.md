---
document_type: "project-increment"
document_id: "V01-C19-PI01"
title: "V01-P05 Proje Artışı — İç İçe Kayıt Özeti"
version: "0.2.0"
status: "Draft"
chapter_id: "V01-C19"
project_id: "V01-P05"
last_updated: "2026-07-29"
---

# Proje Artışı — İç İçe Kayıt Özeti

Bu artış, C18'de kurduğunuz kayıt modelini çalışan bir davranışa dönüştürür ve
C20'de kurulacak metin normalizasyon hattına veri hazırlar.

## C18'den Gelen Model

Her öğrenme grubu şu sözleşmeyi taşır:

```js
const group = {
  title: "Yapılandırılmış Veri",
  lessons: 3,
  children: [],
};
```

- `title`: boş olmayan `string`
- `lessons`: negatif olmayan tamsayı `number`
- `children`: aynı sözleşmedeki grup kayıtlarının dizisi

Bu chapter'da modelin alanlarını değiştirmeyin. Gereksinim yetersizse değişiklik
önerisini ayrı karar kaydına yazın.

## C19'da Eklenecek Davranış

Yapılandırılmış Veri İşleyici projesine:

1. `countLessons(group)` ile toplam ders sayısı;
2. `countGroups(group)` ile toplam grup sayısı;
3. `maxDepth(group)` ile en büyük grup derinliği

ekleyin.

Ana chapter'da ilk fonksiyon birlikte geliştirildi. Diğer iki fonksiyon,
öğrencinin bağımsız transfer kanıtıdır.

## Değişken Karar Kaydı

Her fonksiyon için şu tabloyu doldurun:

| Ad | Temsil ettiği bilgi | Başlangıç değeri | Tür/kısıt | `const`/`let`/parametre nedeni | Hata veya sınır değeri |
|---|---|---|---|---|---|
| `group` |  |  |  |  |  |
| Yerel sonuç |  |  |  |  |  |
| `child` |  |  |  |  |  |

“Bu bir number değişkenidir” açıklaması kabul edilmez. Neden sayısal işlem
gerektiğini ve string seçilirse hangi davranışın bozulacağını gösterin.

## Zorunlu Kanıt

- veri ve geçersiz girdi sözleşmesi;
- boş grup base case'i;
- tek düğüm, tek zincir ve iki dallı ağaç için call tree;
- her recursive branch için progress/termination açıklaması;
- iniş ve çözülme değerlerini taşıyan en az bir tam trace;
- base, tek-adım, normal, geniş ve derin yapı testleri;
- iteratif alternatifin neden seçilip seçilmediği;
- kaynak kaydın değişmediğini gösteren test;
- eski düz kayıt testlerinin geçmeye devam etmesi;
- C20'ye devredilecek başlık listesinin örnek çıktısı.

## C20'ye Devir

Projede iç içe yapıdan bütün `title` değerlerini toplayan
`collectTitles(group)` sözleşmesini tasarlayın. Uygulaması zorunlu değildir.
C20 bu başlık listesini:

- baştaki ve sondaki boşlukları temizlemek;
- karşılaştırma için büyük/küçük harf politikasını belirlemek;
- boş başlıkları ele almak;
- Unicode davranışını test etmek

için kullanacaktır.

## Tamamlanma Ölçütü

Proje artışı; fonksiyonlar yalnız çalıştığında değil, öğrenci bir call trace'i
sözlü açıklayabildiğinde, sonlanmayı gerekçelendirdiğinde ve yeni bir iç içe
modele aynı yaklaşımı aktarabildiğinde tamamlanmış sayılır.
