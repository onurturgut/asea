# Değişkenler (Variables) ve Durum (State) Bilgi Kartları

Teknik sözlük: bağlama (binding), bildirim (declaration), ilklendirme
(initialization), atama (assignment), yeniden atama (reassignment), mutasyon
(mutation), kapsam (scope), fonksiyon (function), Geçici Ölü Bölge (Temporal
Dead Zone) ve yukarı kaldırma (hoisting).

Kartlar değişken, bağlama ve durum modelini kısa, aktif hatırlama tekrarlarıyla
pekiştirir.

## Temel Kavramlar

### Kart 1

**Ön yüz — Soru:** Değişken nedir?  
**Arka yüz — Cevap:** Program durumuna verilen adlı bağlamadır.

### Kart 2

**Ön yüz — Soru:** Tanımlayıcı nedir?  
**Arka yüz — Cevap:** Kaynak kodda bağlamayı adlandırmak için kullanılan addır.

### Kart 3

**Ön yüz — Soru:** Bağlama nedir?  
**Arka yüz — Cevap:** Bir ad ile güncel değeri arasındaki ilişkidir.

### Kart 4

**Ön yüz — Soru:** Değer nedir?  
**Arka yüz — Cevap:** Bağlamanın o anda ilişkilendirildiği JavaScript değeridir.

### Kart 5

**Ön yüz — Soru:** Program durumu nedir?  
**Arka yüz — Cevap:** Programın belirli bir andaki gözlemlenebilir bilgi
bütünüdür.

### Kart 6

**Ön yüz — Soru:** Durum tablosu neyi gösterir?  
**Arka yüz — Cevap:** Her komuttan önce ve sonra okunan, yazılan ve güncellenen
değerleri.

## Bildirim ve Atama

### Kart 7

**Ön yüz — Soru:** Bildirim nedir?  
**Arka yüz — Cevap:** Bir veya daha fazla bağlama oluşturan sözdizimidir.

### Kart 8

**Ön yüz — Soru:** İlklendirme nedir?  
**Arka yüz — Cevap:** Bağlamanın ilk değerinin kurulmasıdır.

### Kart 9

**Ön yüz — Soru:** Atama nedir?  
**Arka yüz — Cevap:** Bir başvuru üzerinden değer yazan işlemdir.

### Kart 10

**Ön yüz — Soru:** Yeniden atama nedir?  
**Arka yüz — Cevap:** Değişebilir bağlamanın güncel değerini başka değerle
değiştirmektir.

### Kart 11

**Ön yüz — Soru:** Mutasyon nedir?  
**Arka yüz — Cevap:** Nesne veya koleksiyonun iç durumunu değiştirmektir.

### Kart 12

**Ön yüz — Soru:** `let total = 0` hangi iki işlemi birleştirir?  
**Arka yüz — Cevap:** Bildirim ve ilklendirme.

### Kart 13

**Ön yüz — Soru:** `total = 5` yeni değişken bildirir mi?  
**Arka yüz — Cevap:** Hayır; var olan bağlamaya atama yapar.

### Kart 14

**Ön yüz — Soru:** Yeniden bildirim ile yeniden atama arasındaki fark nedir?  
**Arka yüz — Cevap:** Yeniden bildirim aynı adı tekrar bildirmeye çalışır;
yeniden atama var olan değişebilir bağlamayı günceller.

## `var`, `let` ve `const`

### Kart 15

**Ön yüz — Soru:** `let` ne zaman seçilir?  
**Arka yüz — Cevap:** Bağlamanın yeniden atanması planlanan yaşam döngüsünün
parçasıysa.

### Kart 16

**Ön yüz — Soru:** `const` ne zaman seçilir?  
**Arka yüz — Cevap:** Bağlama başka bir değerle ilişkilendirilmeyecekse.

### Kart 17

**Ön yüz — Soru:** `const` ilklendirici ister mi?  
**Arka yüz — Cevap:** Evet; bağlama daha sonra atanamayacağı için bildirimde
ilklendirilmelidir.

### Kart 18

**Ön yüz — Soru:** `const` nesneyi dondurur mu?  
**Arka yüz — Cevap:** Hayır; yalnızca bağlama yeniden atamasını engeller.

### Kart 19

**Ön yüz — Soru:** `var` sıradan blok kapsamlı mıdır?  
**Arka yüz — Cevap:** Hayır; sıradan fonksiyon kodunda fonksiyon kapsamlıdır.

### Kart 20

**Ön yüz — Soru:** `var` bildiriminden önce okunursa ne olur?  
**Arka yüz — Cevap:** Sıradan durumda bağlama önceden `undefined` ile
ilklendirildiği için `undefined` okunur.

### Kart 21

**Ön yüz — Soru:** `let` veya `const` bildiriminden önce okunursa ne olur?  
**Arka yüz — Cevap:** İlklendirilmemiş bağlama okunduğu için `ReferenceError`
oluşur.

### Kart 22

**Ön yüz — Soru:** Modern kodda neden çoğunlukla `var`dan kaçınılır?  
**Arka yüz — Cevap:** Daha açık yeniden atama niyeti ve dar sözlüksel kapsam
tercih edilir.

## Kapsam ve Ad Çözümleme

### Kart 23

**Ön yüz — Soru:** Kapsam nedir?  
**Arka yüz — Cevap:** Bir bağlamanın erişilebilir olduğu kaynak kod bölgesidir.

### Kart 24

**Ön yüz — Soru:** Sözlüksel kapsam neye göre belirlenir?  
**Arka yüz — Cevap:** Kaynak kodun iç içe yapısına göre.

### Kart 25

**Ön yüz — Soru:** Blok kapsamı hangi bildirimleri sınırlar?  
**Arka yüz — Cevap:** `let` ve `const` gibi sözlüksel bildirimleri.

### Kart 26

**Ön yüz — Soru:** Fonksiyon kapsamlı `var`, iç `if` bloğundan sonra okunabilir
mi?  
**Arka yüz — Cevap:** Evet, aynı fonksiyon içinde okunabilir.

### Kart 27

**Ön yüz — Soru:** Gölgeleme nedir?  
**Arka yüz — Cevap:** İç kapsamda aynı adlı bağlamanın dış bağlamaya erişimi
normal ad çözümlemesinde engellemesidir.

### Kart 28

**Ön yüz — Soru:** Gölgelemede hangi bağlama seçilir?  
**Arka yüz — Cevap:** En yakın erişilebilir aynı adlı bağlama.

### Kart 29

**Ön yüz — Soru:** Modül üst düzeyi ile klasik betik globali aynı mıdır?  
**Arka yüz — Cevap:** Hayır; üst düzey bağlamaların kapsam ve global nesne
ilişkileri farklıdır.

### Kart 30

**Ön yüz — Soru:** Dar kapsamın mühendislik yararı nedir?  
**Arka yüz — Cevap:** Durumu okuyup değiştirebilen kod miktarını ve düşünme
yüzeyini azaltır.

## Geçici Ölü Bölge ve Yukarı Kaldırma

### Kart 31

**Ön yüz — Soru:** Geçici Ölü Bölge nedir?  
**Arka yüz — Cevap:** Sözlüksel bağlamanın var olduğu fakat henüz
ilklendirilmediği çalışma aralığıdır.

### Kart 32

**Ön yüz — Soru:** Geçici Ölü Bölgede `typeof` güvenli midir?  
**Arka yüz — Cevap:** Hayır; ilklendirilmemiş sözlüksel bağlama için
`ReferenceError` üretir.

### Kart 33

**Ön yüz — Soru:** Hiç bildirilmemiş ad için `typeof` ne döndürebilir?  
**Arka yüz — Cevap:** Sıradan durumda `"undefined"`.

### Kart 34

**Ön yüz — Soru:** Yukarı kaldırma kaynak kodu taşır mı?  
**Arka yüz — Cevap:** Hayır; bildirim oluşturma ve ilklendirme zamanlarının
etkileri için kullanılan kısaltmadır.

### Kart 35

**Ön yüz — Soru:** `var` ile sözlüksel bildirimlerin erken okuma farkının nedeni
nedir?  
**Arka yüz — Cevap:** `var` önceden `undefined` ile ilklendirilir; sözlüksel
bağlama ilklendirilmemiş kalır.

## Nesneler, Bellek ve Mühendislik

### Kart 36

**Ön yüz — Soru:** İki bağlama aynı nesneye başvurabilir mi?  
**Arka yüz — Cevap:** Evet; biri üzerinden mutasyon diğerinden gözlemlenebilir.

### Kart 37

**Ön yüz — Soru:** JavaScript her değişken için sabit yığın/öbek konumu garanti
eder mi?  
**Arka yüz — Cevap:** Hayır; dil gözlemlenebilir davranışı tanımlar, evrensel
fiziksel yerleşimi değil.

### Kart 38

**Ön yüz — Soru:** Bir başvuruyu `null` yapmak hemen bellek boşaltır mı?  
**Arka yüz — Cevap:** Hayır; bir başvuruyu kaldırır, toplama zamanı ve kalan
erişilebilirlik ayrıca belirlenir.

### Kart 39

**Ön yüz — Soru:** `const`un her zaman daha hızlı olduğu söylenebilir mi?  
**Arka yüz — Cevap:** Hayır; dil böyle bir performans garantisi vermez.

### Kart 40

**Ön yüz — Soru:** Bildirim seçiminin temel ölçütü nedir?  
**Arka yüz — Cevap:** Bağlamanın beklenen yeniden atama ihtiyacı ve durum
sahipliği.
