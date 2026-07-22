---
document_type: "quiz"
quiz_id: "V01-C02-QZ01"
title: "Bilgisayarlar Programları Nasıl Çalıştırır? — Quiz"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
scope_type: "Chapter"
scope_id: "V01-C02"
difficulty: "Beginner"
estimated_time: "30 minutes"
learning_outcomes:
  - "V01-LO003"
  - "V01-LO004"
assessment_id: "V01-C02-AS01"
question_count: 25
passing_score: 80
---

# Bilgisayarlar Programları Nasıl Çalıştırır? — Quiz

## Instructions

1. İlk turda yalnız **Questions** bölümünü kullan.
2. Cevaplarını ayrı bir dosyaya `1-A`, `2-C` biçiminde yaz.
3. İzleme sorularında ara durumları göstermeden verilen cevap tam sayılmaz.
4. Bütün cevaplar tamamlanmadan **Answer Key** bölümündeki değerlendirici
   bağlantısını açma.
5. Yanlışlarını yalnız puanlama; hata türünü kavram, katman veya izleme olarak
   sınıflandır.

## Questions

### Çoktan seçmeli sorular

#### Soru 1 — Easy — `V01-LO003`

Program ile süreç arasındaki temel ayrım hangisidir?

- A) Program yalnız kaynak koddur; süreç yalnız makine kodudur.
- B) Program pasif bir temsil olabilir; süreç çalışan örnek ve durumdur.
- C) Program RAM'dedir; süreç disktedir.
- D) Aralarında teknik fark yoktur.

#### Soru 2 — Easy — `V01-LO003`

Kaynak kodun doğrudan CPU tarafından evrensel biçimde yürütüldüğünü söylemek
neden yanlıştır?

- A) Bütün CPU'lar yalnız JavaScript bilir.
- B) Kaynak kod her zaman sıkıştırılmıştır.
- C) CPU hedef ISA'nın talimat etkilerini gerçekleştirir; kaynak temsil uygun
  yürütme yoluna dönüştürülür veya bir çalışma zamanı tarafından tüketilir.
- D) CPU yalnız çıktı üretebilir.

#### Soru 3 — Easy — `V01-LO003`

Nesne dosyalarını ve sembol başvurularını birleştirerek yürütülebilir biçim
üretme rolü öncelikle hangisine aittir?

- A) Bağlayıcı
- B) Yükleyici
- C) Program sayacı
- D) İş parçacığı

#### Soru 4 — Easy — `V01-LO003`

Yükleyicinin temel rolü hangisidir?

- A) Kaynak kod yazmak
- B) Değişken adlarını seçmek
- C) Her zaman bayt kodu üretmek
- D) Yürütülebilir temsilden süreç başlangıç durumu hazırlamak

#### Soru 5 — Medium — `V01-LO003`

ISA için en doğru açıklama hangisidir?

- A) İşlemcinin bütün transistor düzenidir.
- B) Yalnız bir assembly editörüdür.
- C) Yazılım tarafından görülebilen talimat ve durum davranışı sözleşmesidir.
- D) İşletim sistemindeki süreç listesidir.

#### Soru 6 — Medium — `V01-LO003`

Program sayacı için hangi ifade en güvenlidir?

- A) Her zaman kaynak dosyanın satır numarasıdır.
- B) Programın kaç kez açıldığını sayar.
- C) Fiziksel RAM'in toplam boyutudur.
- D) Sıradaki veya mevcut mimari talimatla ilişkili adres durumudur; kesin anlam
  ISA ve gözlem noktasına bağlıdır.

#### Soru 7 — Medium — `V01-LO003`

Sanal adres ile fiziksel adres arasındaki ilişkiyi hangi seçenek doğru kurar?

- A) Sanal adres süreç görünümüne aittir; fiziksel konumla eşleme ayrı bir
  mekanizma üzerinden kurulabilir.
- B) Her zaman sayısal ve anlamsal olarak aynıdır.
- C) Sanal adres yalnız diskte kullanılır.
- D) Fiziksel adres programlama dilindeki değişken adıdır.

#### Soru 8 — Medium — `V01-LO003`

Sanal makine, yorumlayıcı ve JIT hakkında hangisi doğrudur?

- A) Üçü aynı kavramın farklı yazımlarıdır.
- B) Sanal makine yalnız fiziksel bilgisayar emülatörüdür.
- C) Bir gerçekleştirim ara talimatları yorumlayabilir ve bazılarını yürütme
  sırasında yerel koda derleyebilir.
- D) JIT varsa fiziksel CPU kullanılmaz.

#### Soru 9 — Medium — `V01-LO003`

Aynı program iki kez açıldığında hangisi zorunlu olarak aynı kalmaz?

- A) Programın pasif yürütülebilir temsili
- B) Kaynak repository geçmişi
- C) Programın amaçlanan davranışı
- D) Her sürecin program sayacı ve çalışma durumu

#### Soru 10 — Medium — `V01-LO003`

Getir-çözümle-yürüt modeli neden sınırı belirtilerek kullanılmalıdır?

- A) Hiçbir talimat getirilmez.
- B) Model mimari durum etkisini öğretir; modern CPU'nun çevrim düzeyindeki bütün
  mikro mimarisini zorunlu olarak göstermez.
- C) Yalnız veritabanlarında geçerlidir.
- D) Program sayacını kullanmaz.

#### Soru 11 — Medium — `V01-LO003`

Bir program derlenmiş fakat dış bir sembol bulunamadığı için yürütülebilir dosya
üretilememişse sorun hangi katmandadır?

- A) Bağlama
- B) Girdi
- C) İş parçacığı zamanlama
- D) Çıktı biçimlendirme

#### Soru 12 — Medium — `V01-LO003`

Bir yürütülebilir dosya başarıyla oluşmuş, fakat başlatıldığında gerekli çalışma
ortamı hazırlanamadığı için süreç başlayamamışsa en doğru sınıflandırma nedir?

- A) Kaynak düzeyi
- B) Bağlama düzeyi
- C) Yükleme/başlatma düzeyi
- D) Mantık düzeyi

#### Soru 13 — Hard — `V01-LO003`

“Değişken RAM'deki kutudur” modeli hangi nedenle sınırlıdır?

- A) Kaynak addaki bir bağlama; yazmaç, optimize edilmiş temsil veya sanal adres
  gibi farklı gerçekleştirimlerle ilişkilendirilebilir.
- B) Değerler hiçbir zaman bellekte bulunmaz.
- C) RAM yalnız metin saklar.
- D) Değişkenler yalnız derleme sırasında vardır.

#### Soru 14 — Hard — `V01-LO003`

Bir süreç içindeki iki iş parçacığı için hangisi en doğru genellemedir?

- A) Her zaman bütünüyle ayrı süreç adres alanlarına sahiptirler.
- B) Aynı süreç kaynaklarını paylaşabilirler; her birinin ayrı yürütme noktası
  ve yazmaç/PC durumu olabilir.
- C) Aynı PC değerini kullanmak zorundadırlar.
- D) İş parçacığı pasif program dosyasıdır.

#### Soru 15 — Hard — `V01-LO003`

Bir hata ayıklama çalışmasında ilk sorulması gereken en güçlü soru hangisidir?

- A) Hangi satırı rastgele değiştireyim?
- B) Son çıktı neden hoşuma gitmedi?
- C) Programı kaç kez yeniden başlatmalıyım?
- D) Beklenen doğru durumdan ilk sapma hangi geçişte oluştu?

### Durum izleme soruları

Aşağıdaki sözleşmeyi kullan:

```text
LOADI Rx,n       Rx=n; PC bir artar.
ADD Rd,Ra,Rb     Rd=Ra+Rb; PC bir artar.
JZ Rx,address    Rx sıfırsa PC=address; değilse PC bir artar.
OUT Rx           Rx çıktıya eklenir; PC bir artar.
HALT             running=false; PC değişmez.
```

Başlangıç: `PC=0, R1=0, R2=0, output=[], running=true`

```text
0: LOADI R1, 3
1: ADD R2, R1, R1
2: JZ R2, 4
3: OUT R2
4: HALT
```

#### Soru 16 — Easy — `V01-LO004`

İlk adımdan sonraki tam durum nedir?

#### Soru 17 — Medium — `V01-LO004`

`PC=1` talimatından sonraki `R2` ve `PC` değerleri nedir?

#### Soru 18 — Medium — `V01-LO004`

`JZ` dallanması alınır mı? Okunan değerle gerekçelendir.

#### Soru 19 — Medium — `V01-LO004`

Son çıktı ve son `PC` değeri nedir?

#### Soru 20 — Hard — `V01-LO004`

`LOADI R1, 0` yapılırsa yürütülen adreslerin sırasını ve son çıktıyı yaz.

### Açık uçlu sorular

#### Soru 21 — Medium — `V01-LO003`

Kaynak koddan yerel sürece uzanan yolu en az altı doğru bileşen veya temsil
kullanarak açıkla.

#### Soru 22 — Medium — `V01-LO003`

Yerel yürütme ve sanal makine yürütmesinin iki farkını ve bir ortak noktasını
yaz.

#### Soru 23 — Hard — `V01-LO003`

“Program çalışmıyor” ifadesini kaynak, derleme, bağlama, yükleme, çalışma zamanı
ve mantık katmanlarına ayıran kısa bir teşhis ağacı üret.

#### Soru 24 — Hard — `V01-LO004`

Durum izleme tablosunda bulunması gereken en az beş sütunu ve her sütunun neden
gerekli olduğunu açıkla.

#### Soru 25 — Hard — `V01-LO003`, `V01-LO004`

Programın davranışını “talimatlar + başlangıç durumu + girdi + kontrol akışı”
modeliyle açıkla ve modelin sınırına bir örnek ver.

## Answer Key

Cevaplar öğrenci görünümünden ayrılmıştır. Bütün soruları bağımsız biçimde
tamamladıktan sonra bir değerlendirici eşliğinde
[cevap anahtarını](./quiz-answer-key.md) aç. Yayın sistemi bu bağlantıyı deneme
teslim edilene kadar göstermemelidir.

## Scoring

- Sorular 1–20: her biri 3 puan, toplam 60 puan.
- Sorular 21–25: her biri 8 puan, toplam 40 puan.
- Başarı eşiği: 80/100.
- Ek koşul: 16–20 arasındaki izleme sorularından en az 12/15 puan.

Yanlış cevaplarını şu etiketlerle kaydet: `temsil`, `araç-zinciri`, `çalışma-zamanı`,
`bellek`, `PC-kontrol-akışı`, `durum-izleme`, `model-sınırı`. Aynı etikette iki
veya daha fazla yanlış varsa ilgili ders bölümüne dön ve farklı bir örnek çöz.

## References

- [Ana Ders](../../../chapters/02-bilgisayarlar-programlari-nasil-calistirir.md)
- [Alıştırmalar](./exercises.md)
- [Değerlendirme Rubriği](./assessment-rubric.md)
- [Değerlendirme Hazırlığı](../../research/v01-c02/assessment-readiness.md)
- [Misconception Map](../../research/v01-c02/misconception-map.md)
