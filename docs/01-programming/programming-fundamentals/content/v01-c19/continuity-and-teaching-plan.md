---
document_type: "teaching-plan"
document_id: "V01-C19-TP01"
title: "V01-C19 Öğretim ve Devamlılık Planı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C19"
standard_id: "ASEA-STD-TEACHING-001"
last_updated: "2026-07-29"
---

# V01-C19 Öğretim ve Devamlılık Planı

Bu plan, `V01-C19` içeriğinin ASEA Teaching and Continuity Standard v1.0'a
uygulanma sözleşmesidir. Plan, chapter'ın teknik kapsamını değiştirmez;
öğrencinin C18'den hangi zihinsel modelle geldiğini, C19'da neyi inşa edeceğini
ve C20'ye ne devredeceğini görünür kılar.

## C18 → C19 → C20 devamlılık sözleşmesi

| Aşama | Öğrencinin karşılaştığı ihtiyaç | Kazanılan yeterlik | Süregelen proje artışı |
|---|---|---|---|
| `V01-C18` Kayıtlar ve Veri Modelleme | Bir öğrenme biriminin başlık, tür ve alt birimlerini anlamlı bir kayıt olarak temsil etmek | Alan, tür, invariant ve iç içe kayıt modeli kurmak | Düz ve iç içe öğrenme grupları modellenir |
| `V01-C19` Özyineleme | İç içe yapının derinliği önceden bilinmiyorken bütün birimleri aynı kuralla işlemek | Base case, küçük problem, çağrı izi ve sonlanma kanıtıyla recursive çözüm tasarlamak | İç içe grupların toplam birim ve en büyük derinlik özeti eklenir |
| `V01-C20` String'ler ve Metin İşleme | Toplanan başlıkların boşluk, büyük/küçük harf ve Unicode farklılıklarını güvenilir işlemek | Metin normalizasyon ve ayrıştırma hattı tasarlamak | İç içe yapıdan çıkarılan başlıklar temizlenir ve aranabilir özet üretilir |

### Gelen yeterlik

Öğrenci:

- koşulun hangi dalı çalıştırdığını `V01-C10` bilgisiyle izleyebilir;
- bir fonksiyonun girdi ve çıktı sözleşmesini `V01-C13` ile açıklayabilir;
- parametre ile argümanı ve dönüş değerini `V01-C14` ile ayırabilir;
- her çağrının yerel değerlerini `V01-C15` ile ayrı düşünebilir;
- C18 bağlamında bir kaydın alanlarını, türlerini ve invariant'larını
  gerekçelendirebilir.

C18, C19'un kanonik zorunlu prerequisite listesinde bulunmasa da öğretim
anlatısının doğrudan bağlam girdisidir. C19, C18'in veri modelini yeniden
öğretmez; onu özyinelemeli düşünme ihtiyacını görünür kılmak için kullanır.

### Hatırlama köprüsü

Chapter açılışında öğrenciye şu iç içe kayıt gösterilir:

```js
const learningGroup = {
  title: "Programlama Temelleri",
  lessons: 2,
  children: [
    {
      title: "Fonksiyonlar",
      lessons: 4,
      children: [],
    },
  ],
};
```

Öğrenci kod yazmadan önce:

1. Her alanın neyi temsil ettiğini;
2. `lessons` için neden `number`, `title` için neden `string`,
   `children` için neden dizi kullanıldığını;
3. yaprak kaydın nasıl anlaşılacağını;
4. yalnız iki seviye için yazılan kodun üçüncü seviyede neden yetersiz
   kalacağını
   açıklar.

Bu kısa kontrol C18'i tekrar anlatmaz; C19'un ihtiyaç duyduğu veri sözleşmesini
öğrencinin kendi hafızasından geri çağırır.

### Yeni ihtiyaç

Öğrenci, derinliği önceden bilinmeyen bir yapıda şu soruyla karşılaşır:

> Her grup, kendisiyle aynı biçimde alt gruplar taşıyabiliyorsa bütün
> dersleri tek ve güvenilir bir kuralla nasıl sayarız?

İki seviyeyi sabit alan `root.lessons + root.children[...]` yaklaşımı yeni alt
seviye eklendiğinde bozulur. Bu başarısızlık özyinelemeyi tanımdan önce gerekli
hâle getirir.

### Yeni yeterlik

Chapter sonunda öğrenci:

- problemi aynı sözleşmedeki daha küçük probleme ayırır;
- en küçük geçerli problem için doğru base case'i kurar;
- her recursive branch'in base case'e yaklaştığını bir progress measure ile
  gösterir;
- her call frame'in parametre, bekleyen işlem ve dönüş değerini izler;
- recursive çözüm ile döngü/açık stack alternatifini gerekçeli karşılaştırır;
- küçük bir recursive fonksiyonu bağımsız yazar, test eder ve hata ayıklar.

### Proje artışı

`V01-P05` Yapılandırılmış Veri İşleyici şu yeni davranışları kazanır:

- iç içe öğrenme gruplarındaki toplam ders sayısı;
- toplam grup sayısı;
- en büyük derinlik;
- kaynak kaydı değiştirmeden özet üretme;
- en az bir recursive ve bir iteratif tasarım kararının karşılaştırılması.

Chapter'ın ana anlatımında yalnız toplam ders sayısı birlikte geliştirilir.
Grup sayısı ve maksimum derinlik lab/mini projede öğrenciye bırakılır.

### Sonraki devir

C20, C19'dan şunları geri çağırır:

- bir veriyi küçük parçalara bölüp sonuçları birleştirme fikri;
- iç içe kayıtlardan başlıkları toplama;
- boş koleksiyon için doğrudan sonuç verme;
- dönüşüm hattını küçük örneklerle izleme;
- kaynak veriyi değiştirmeden yeni sonuç üretme.

C20 özyinelemeyi yeniden öğretmez. Toplanan başlıklar üzerinde whitespace,
case, Unicode ve empty-input kararlarını öğreterek projeyi ileri taşır.

## Öğrenci yolculuğu

### Açılış problemi

ASEA çalışma planının modül, konu ve alt konu kayıtları büyür. İki seviyelik
örnek elle işlenebilir; üçüncü ve dördüncü seviye geldiğinde sabit erişim kodu
bozulur. Öğrenci önce bu kırılmayı tahmin eder.

### Sezgisel model

Bir öğretmen, içinde alt klasörler bulunan çalışma klasörünü inceler. Bir
klasörde önce o klasörün notlarını sayar, sonra her alt klasör için aynı işi
ister. En altta alt klasörü olmayan klasör doğrudan cevap verir. Benzetmenin
sınırı açıkça belirtilir: JavaScript çalışma zamanı gerçek klasörleri değil,
fonksiyon çağrılarını call stack üzerinde tutar.

### İlk sade örnek

`countdown(3)` yalnız şu üç parçayı görünür kılar:

- base case;
- daha küçük argüman;
- çağrı sırası.

Bu örnekte sonuç birleştirme yoktur. Ardından `sumTo(3)` ile bekleyen işlem ve
dönüş fazı eklenir. Böylece iki yeni zihinsel yük aynı anda verilmez.

### Birlikte yapalım

`sumTo(3)`:

- değişken/parametre sözleşmesi;
- iniş tablosu;
- base case;
- çözülme tablosu;
- dönüş değeri
  ile öğretmen tarafından adım adım yürütülür.

### Şimdi sen dene

Öğrenci `sumTo(4)` tablosundaki eksik satırları doldurur ve `n = 0` için neden
sonucun `0` olduğunu kendi cümlesiyle açıklar.

### Hata avı

Öğrenci, `countLessons(group.children[0])` biçiminde yalnız ilk çocuğa giden
veya recursive argümanı hiç küçültmeyen iki hatalı sürümü:

1. yeniden üretir;
2. beklenen davranışı yazar;
3. ilk üç çağrıyı izler;
4. kök nedeni belirler;
5. en küçük düzeltmeyi yapar;
6. testi yeniden çalıştırır.

### Bağımsız uygulama

Bir koleksiyonda hedef değerin kaç defa geçtiğini indeks tabanlı özyinelemeyle
hesaplar. Base case, progress measure, call trace ve döngü alternatifini teslim
eder.

### Gerçek proje bağlantısı

Öğrenci `V01-P05` iç içe öğrenme grubu özetini üretir. Aynı veri C20'de başlık
normalizasyon hattının girdisi olur.

## Değişken ve tür açıklama planı

Ana örnekteki her önemli ad için aşağıdaki kararlar öğrenciye açıklanır:

| Ad | Temsil ettiği bilgi | Tür | Neden bu tür? | Neden alternatif değil? |
|---|---|---|---|---|
| `group` | Şu anda işlenen tek öğrenme grubu | object/record | İlişkili `title`, `lessons`, `children` alanlarını birlikte taşır | Yalnız `string`, grubun sayısını ve alt gruplarını taşıyamaz |
| `title` | Öğrenciye gösterilen grup adı | string | Metinsel kimlik ve gösterim bilgisidir | `number` üzerinde metin işlemleri anlamlı değildir |
| `lessons` | Yalnız mevcut gruba doğrudan bağlı ders sayısı | number, tamsayı kısıtı | Toplama ve karşılaştırma yapılır | `"2"` string'i `+` işleminde birleştirme hatası oluşturabilir |
| `children` | Aynı sözleşmedeki alt gruplar | array | Sıralı, sıfır veya daha fazla grup taşır | Tek object yalnız bir alt grubu temsil eder |
| `totalLessons` | İşlenmiş mevcut grup ve çocukların ara toplamı | number | Her dönüşte sayısal sonuç birikir | `string` sonuçları `"24"` gibi birleştirebilir |
| `child` | Döngünün o adımda işlediği tek alt grup | object/record | Recursive fonksiyon aynı grup sözleşmesini bekler | İndeks tek başına grup alanlarını taşımaz |
| `n` | `sumTo` çağrısındaki mevcut üst sınır | number, negatif olmayan tamsayı kısıtı | Aritmetik azaltma ve toplama gerekir | JavaScript'te ayrı `int` türü yoktur; `"3"` string'i güvenilir aritmetik sözleşmesi değildir |
| `index` | Koleksiyonda sıradaki işlenmemiş konum | number, tamsayı kısıtı | `+ 1` ile ilerler ve `length` ile karşılaştırılır | Elemanın kendisi kalan mesafeyi göstermez |

Her değişken ilk tanıtımda başlangıç değeri, değişip değişmediği, `const`/`let`
kararı, normal ve sınır değerleriyle birlikte anlatılır.

## Görsel plan

1. **İhtiyaç görseli:** İki seviye için çalışan sabit kodun üçüncü seviyede
   kırıldığı ağaç.
2. **Dört parçalı sözleşme:** Problem, base case, küçük problem, birleştirme.
3. **Call stack adımlayıcı:** `sumTo(3)` için `n`, bekleyen işlem ve dönüş.
4. **İniş/çözülme tablosu:** Renge ihtiyaç duymayan metin etiketleri.
5. **Doğru/yanlış progress:** `3 → 2 → 1 → 0` ve `3 → 4 → 5`.
6. **Proje ağacı:** `countLessons` çağrılarının öğrenme gruplarıyla eşleşmesi.
7. **Recursion/iteration karşılaştırması:** Call stack ve açık work stack.

## Değerlendirme hizalaması

| Kanıt | `V01-LO029` | `V01-LO030` |
|---|---|---|
| Anlatım içi tahmin | Çıktı ve çağrı sırası | Base'e yaklaşma |
| Elle izleme | Frame, parametre, bekleyen işlem, dönüş | Her çağrıda progress |
| Hata avı | Kaybolan dönüşü teşhis | Ulaşılamayan base case'i teşhis |
| Quiz | Call stack ve çözülme | Base/recursive/progress ayrımı |
| Mülakat | Küçük örneği sözlü izleme | Sonlanma gerekçesi ve trade-off |
| Lab | İç içe yapıda call tree | Her branch için sonlanma kanıtı |
| Proje | Çalışan recursive özet | Yapısal küçülme ve alternatif karar |

## Pilot review kontrolü

[ ] Ana anlatım tanımdan önce problem ve ihtiyaçla başlıyor
[ ] C18 bilgisi kısa geri çağırmayla etkinleştiriliyor
[ ] C20'ye devredilecek veri ve yeterlik görünür
[ ] İlk örnek tek yeni zihinsel yük taşıyor
[ ] Bütün önemli değişkenler ve tür kararları açıklanıyor
[ ] En az bir tam iniş/çözülme izi bulunuyor
[ ] Birlikte yapalım, Şimdi sen dene, Hata avı, Bağımsız uygulama ve proje bağı var
[ ] İpuçları tam çözümden önce kademeleniyor
[ ] Quiz, mülakat, lab ve proje aynı iki outcome'u ölçüyor
[ ] Kod örnekleri çalışıyor ve beklenen çıktılar doğrulanıyor
[ ] Görseller öğretimsel sorulara cevap veriyor ve erişilebilir
[ ] Teknik ve pedagojik review bulguları kapatılıyor

## References

- [ASEA Teaching and Continuity Standard](../../../../standards/teaching-and-continuity-standard-v1.md)
- [C18 Chapter](../../../chapters/18-kayitlar-ve-veri-modelleme.md)
- [C19 Chapter](../../../chapters/19-ozyineleme-ve-ozyinelemeli-dusunme.md)
- [C20 Blueprint](../../../chapter-blueprints/20-strings-and-text-processing.md)
- [V01-C19 Research Packet](../../research/v01-c19/research-packet.md)
