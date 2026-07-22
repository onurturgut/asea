---
title: "Kayıtlar ve Veri Modelleme — Anlamlı ve Geçerli Yapılar Tasarlamak"
volume: "01"
chapter: "18"
chapter_id: "V01-C18"
slug: "kayitlar-ve-veri-modelleme"
difficulty: "Beginner"
estimated_time: "8-10 saat"
status: "Draft"
version: "0.1.0"
blueprint_id: "V01-C18-BP01"
production_packet_id: "V01-C18-CPP-001"
prerequisites:
  - "V01-C05"
  - "V01-C14"
  - "V01-C17"
learning_objectives:
  - "V01-LO027"
  - "V01-LO028"
last_updated: "2026-07-23"
---

# Kayıtlar ve Veri Modelleme — Anlamlı ve Geçerli Yapılar Tasarlamak

## Learning Objectives

Bir programın güvenilirliği yalnız algoritmasının doğruluğuna bağlı değildir.
Algoritmanın işlediği veri, gerçek dünyadaki kavramı yanlış temsil ediyorsa kod
teknik olarak çalışırken yanlış kararlar üretebilir. Bu bölümde bir gereksinimi
adlandırılmış ve denetlenebilir bir veri yapısına dönüştürmeyi öğreneceğiz.

Bölüm sonunda şunları yapabileceksiniz:

- Kayıt (Record), alan (Field), özellik (Property), nesne (Object), veri modeli
  (Data Model), şema (Schema) ve değişmez (Invariant) kavramlarını ayırmak.
- Konumsal değer dizisi ile adlandırılmış kayıt arasındaki okunabilirlik ve değişim
  maliyetini karşılaştırmak.
- Bir gereksinimden alan adı, alan türü, zorunlu/opsiyonel kararı, varsayılan ve
  doğrulama kuralı çıkarmak.
- JavaScript object literal sözdizimini düz veri kaydının bir temsili olarak kullanmak.
- Nesne örneği ile şemayı birbirine karıştırmamak.
- Eksik özellik, `undefined`, `null`, boş metin, sıfır ve `false` durumlarını iş
  anlamına göre ayırmak.
- İç içe veri kullanımıyla düz yapı arasında sahiplik ve yaşam döngüsü üzerinden
  karar vermek.
- Kimlik (Identity), referans eşitliği (Reference Equality) ve değer eşitliği
  (Value Equality) arasındaki farkı açıklamak.
- Türetilmiş alan tekrarının nasıl tutarsızlık üretebildiğini göstermek.
- Tek alan kısıtı ile alanlar arası değişmezi ayırmak.
- Geçersiz durum (Invalid State) örnekleri üretip bunları construction boundary'de
  reddetmek.
- Statik tür denetimiyle çalışma zamanı doğrulamasının farklı sorumluluklarını
  açıklamak.
- AI tarafından önerilen veri modelini gereksinim izi, alan gerekçesi, değişmez,
  gizlilik ve test bakımından denetlemek.

`V01-LO027` için kanıtınız, bir envanter gereksinimini alan ve tür karar tablosuna,
ardından çalışan kayıt modeline dönüştürmektir. `V01-LO028` için kanıtınız, modelin
en az üç değişmezini açıklayan, geçersiz durumları reddeden ve her başarılı işlemden
sonra değişmezlerin korunduğunu test eden karar kaydıdır.

## Prerequisites

Bu bölüm `V01-C05` içindeki değer ve tür ayrımına, `V01-C14` içindeki fonksiyon
sözleşmelerine ve `V01-C17` içindeki koleksiyonlara dayanır. Şu örneği okuyabilmeniz
beklenir:

```js
function calculateLineTotal(unitPrice, quantity) {
  return unitPrice * quantity;
}

const quantities = [2, 1, 4];

for (const quantity of quantities) {
  console.log(calculateLineTotal(25, quantity));
}
```

Kodun sınırlaması hemen görülebilir: `25` sayısının ne olduğu çağrı bağlamı dışında
belli değildir. Ürün adı, kimliği ve fiyat birimi ayrı değişkenlerde tutulursa yanlış
ürünün adediyle başka ürünün fiyatını eşleştirmek kolaylaşır. Kayıt modeli, ilişkili
verileri aynı anlamlı bütün altında toplar.

Hazırlık için aşağıdaki sorulara notsuz yanıt verin:

1. Sayı ile sayıya benzeyen metin arasındaki fark nedir?
2. Fonksiyonun parametre ve dönüş sözleşmesi neyi açıklar?
3. Boş koleksiyon ile geçersiz koleksiyon aynı durum mudur?
4. Bir dizinin kaynak veriyi değiştirmeden yeni sonuç üretmesi ne demektir?
5. `null`, `undefined`, `0` ve boş metin her zaman aynı “boşluk” anlamına mı gelir?

Belirsiz yanıtlar için ilgili ön koşul bölümüne kısa dönüş yapın. Bu bölüm sınıf,
veritabanı veya framework bilgisi gerektirmez. JavaScript yalnız modeli çalışan
örneğe dönüştürmek için kullanılır.

## Estimated Study Time

Ana ders ve kod deneyleri yaklaşık dört buçuk saat, alan karar tabloları bir saat,
alıştırmalar iki saat, laboratuvar iki ila üç saat sürer. Quiz, mülakat ve tekrar
ile toplam sekiz ila on saat ayırın.

Önerilen oturumlar:

- Birinci oturum: kayıt, alan, object literal ve record boundary.
- İkinci oturum: tür, required/optional, missing/null ve şema.
- Üçüncü oturum: nested data, identity, equality ve derived data.
- Dördüncü oturum: invariant, invalid state, construction boundary ve test.
- Beşinci oturum: lab, challenge, AI denetimi ve öz değerlendirme.

Her oturumda bir “model defteri” tutun. Her alan için gereksinim, örnek değer, tür,
zorunluluk, doğrulama ve yanlış örnek yazın. Koddan çok bu karar tablosu, neden o
modeli seçtiğinizi hatırlamanızı sağlar.

## Introduction

Bir kırtasiye deposunda üç bilgi tutulduğunu düşünün: ürün kodu, ürün adı ve stok
adedi. Bunları ayrı dizilerde saklamak mümkün görünür:

```js
const productCodes = ["A-10", "B-20"];
const productNames = ["Defter", "Kalem"];
const stockCounts = [12, 40];
```

İlk ürün için üç dizinin de `0` indeksini okumamız gerekir. Bir diziye yeni ürün
eklenip diğerine eklenmezse hizalama bozulur. `B-20` kodu yanlışlıkla `12` stokla
eşleşebilir. Program sözdizimi hatası vermeden yanlış iş bilgisini taşır.

Adlandırılmış kayıtlar ilişkiyi doğrudan gösterir:

```js
const products = [
  { code: "A-10", name: "Defter", stock: 12 },
  { code: "B-20", name: "Kalem", stock: 40 },
];
```

Şimdi her koleksiyon öğesi tek ürünü anlatır. Fakat bu hâlâ başlangıçtır. `stock`
negatif olabilir mi? `code` boş olabilir mi? Ürün adı değişirse kimlik değişir mi?
`stock: "12"` kabul edilir mi? Alan hiç yoksa `0` mı varsayılır? Aynı ürün kodundan
iki tane olabilir mi? İyi veri modeli bu soruları görünür bir sözleşmeye dönüştürür.

Veri modelleme, gerçek dünyanın bütün ayrıntılarını bilgisayara kopyalamak değildir.
Belirli bir amaç için gerekli ayrımları seçmektir. Bir satış sistemi ürünün rengine
ihtiyaç duyabilir; depo sayımı yalnız kod ve miktarla çalışabilir. “Gerçek ürünün
bütün özelliklerini ekleyelim” yaklaşımı gereksiz veri, gizlilik ve bakım maliyeti
doğurur. “Şimdilik iki alan yeter” yaklaşımı da kritik iş kuralını kaçırabilir.
Karar gereksinimden türetilmelidir.

Bu bölümde bir envanter modelini adım adım kuracağız. Önce gereksinimi cümlelere,
sonra alan karar tablosuna, ardından object literal ve construction function'a
dönüştüreceğiz. Normal, sınır ve geçersiz kayıtları test edeceğiz. Amaç en çok alanı
taşıyan nesne değil, amaca uygun durumları temsil edip hatalı durumları erken reddeden
modeldir.

## Core Concepts

### Kayıt ve alan

Kayıt, tek bir varlık, olay veya değeri anlatan adlandırılmış alanlar bütünüdür.
Bir öğrenci kaydı `studentId`, `displayName` ve `enrollmentStatus` alanlarını; bir
sensör ölçümü `sensorId`, `capturedAt` ve `temperature` alanlarını taşıyabilir.
Alan, kaydın cevapladığı tek sorudur.

İyi kayıt sınırı için şu testleri kullanın:

- Bütün alanlar aynı özneyi mi anlatıyor?
- Alanlar aynı sahiplik ve yaşam döngüsüne mi bağlı?
- Birlikte oluşturulup birlikte mi doğrulanıyorlar?
- Bir alan değiştiğinde diğerlerinin anlamı etkileniyor mu?
- Kaydın adını tek ve açık bir domain kavramıyla verebiliyor muyuz?

`productName`, `stock` ve `browserTheme` alanlarını aynı `Product` kaydına koymak
bu testte başarısız olur. Tarayıcı teması ürüne değil kullanıcı tercihine aittir.
Alanların aynı ekranda görünmesi aynı kayda ait olduklarını kanıtlamaz.

### Konumsal veri ve adlandırılmış veri

Şu iki temsil aynı değerleri taşıyabilir:

```js
const positionalProduct = ["A-10", "Defter", 12];

const namedProduct = {
  code: "A-10",
  name: "Defter",
  stock: 12,
};
```

Konumsal sürümde `positionalProduct[2]` ifadesinin anlamı dış bilgiye bağlıdır.
Ortaya yeni alan eklendiğinde bütün indeks varsayımları etkilenebilir. Adlandırılmış
sürümde `namedProduct.stock` niyeti taşır. Koordinat, RGB değeri veya kısa sabit
tuple gibi sıra anlamının güçlü olduğu yerlerde konumsal yapı uygun olabilir.
İş kayıtlarında alan adları genellikle daha güvenli değişim sınırı sağlar.

### JavaScript nesnesi veri kaydı olarak

Nesne başlatıcısı (Object Initializer), süslü parantez içinde özellik adı ve değer
çiftleri oluşturur:

```js
const code = "A-10";
const stock = 12;

const product = {
  code,
  name: "Defter",
  stock,
};
```

Burada shorthand nedeniyle `code` ifadesi `code: code` anlamına gelir. Nokta
notasyonu sabit ve geçerli özellik adlarında açıktır:

```js
console.log(product.name);
```

Köşeli parantez dinamik anahtar gerektiğinde kullanılır:

```js
const requestedField = "stock";
console.log(product[requestedField]);
```

Dinamik erişim güçlüdür fakat yanlış anahtar sessizce `undefined` döndürebilir.
Kullanıcı girdisini doğrudan anahtar olarak kullanmak güvenlik ve veri bütünlüğü
açısından ayrıca değerlendirilmelidir.

Object literal bir temsil aracıdır, kendi başına şema değildir. JavaScript şu
nesneyi engellemez:

```js
const invalidProduct = {
  code: "",
  name: 42,
  stock: -10,
};
```

Sözdizimi geçerlidir; domain durumu geçersizdir. Veri modelleme, sözdiziminin izin
verdiği geniş durum kümesinden iş için kabul edilen dar kümeyi tanımlar.

### Gereksinimden alan çıkarmak

Gereksinim: “Depo görevlisi ürünü benzersiz kodla bulabilmeli, görünen adını
okuyabilmeli, eldeki tam adet ile yeniden sipariş eşiğini karşılaştırabilmelidir.”

Bu cümleyi doğrudan kodlamak yerine karar tablosuna dönüştürelim:

| Gereksinim sorusu | Alan | Tür | Zorunlu | Kural |
|---|---|---|---|---|
| Ürün nasıl bulunur? | `code` | string | Evet | Boş değil, benzersiz |
| Kullanıcı ne görür? | `name` | string | Evet | Trim sonrası boş değil |
| Elde kaç tane var? | `stock` | integer | Evet | `>= 0` |
| Ne zaman sipariş verilir? | `reorderLevel` | integer | Evet | `>= 0` |

Her alan bir gereksinim cümlesine izlenebilir. `color` alanı eklemek istersek hangi
kararı desteklediğini göstermeliyiz. Yalnız “ileride lazım olabilir” gerekçesi model
genişletmek için zayıftır. Buna YAGNI sloganı olarak değil, bakım ve gizlilik maliyeti
olarak bakın.

### Alan adı anlam taşır

`price` alanı hangi para birimini ve birimi taşır? `Date` oluşturulmuş bir zamanı mı,
takvim gününü mü temsil eder? `status` hangi izin verilen değerlerden biridir?
Adlandırma bütün sorunu çözmez ama belirsizliği azaltır:

```js
const product = {
  unitPriceInCents: 1299,
  currencyCode: "TRY",
  availableStock: 12,
};
```

Burada para kayan nokta yerine kuruş tamsayısıyla gösterilmiştir. Bu bütün finansal
kuralları çözmez; fakat birim görünürdür. `availableStock` fiziksel stok, ayrılmış
stok veya satışa hazır stok ayrımını düşündürür. Domain dilinde doğru ad, yanlış
varsayıma karşı ilk savunmadır.

### Tür seçimi yalnız JavaScript typeof değildir

`stock` için `number` demek eksiktir. JavaScript `number` kümesi kesir, `NaN`,
`Infinity` ve negatif değerleri de içerir. İş türü daha dardır: sıfır veya daha
büyük sonlu tamsayı.

```js
function isNonNegativeInteger(value) {
  return Number.isInteger(value) && value >= 0;
}
```

Bir alanın tür kararında şunları yazın:

1. Temel temsil türü nedir?
2. İzin verilen değer aralığı nedir?
3. Birim veya biçim nedir?
4. Eksiklik mümkün mü?
5. Hangi işlemler yapılacak?
6. Sınır dışında davranış nedir?

Telefon numarası üzerinde toplama yapılmaz; baştaki sıfır anlamlı olabilir. Bu
nedenle sayı gibi görünse de metin olarak modellenebilir. Posta kodu ve ürün kodu
da benzer örneklerdir. Türü görünüşe göre değil, anlam ve işlem kümesine göre seçin.

### Zorunlu ve opsiyonel alan

Zorunlu alan (Required Field), geçerli kaydın onsuz kurulamayacağı bilgidir.
Opsiyonel alan (Optional Field), yokluğun domain içinde tanımlı olduğu bilgidir.
“Kaynak sistem bazen göndermiyor” opsiyonellik için yeterli gerekçe değildir; bu
bir veri kalitesi hatası da olabilir.

Ürün açıklaması gerçekten opsiyonel olabilir. Ürün kodu ise kimlik için zorunluysa
yokluğu kaydı geçersiz yapar. Her alanı opsiyonel yapmanın sonucu, her tüketicinin
aynı kontrolleri tekrar yazmasıdır:

```js
function formatProduct(product) {
  if (product.code === undefined) {
    // Model bu noktaya geçersiz kayıt taşıdı.
  }
}
```

Daha iyi sınır, ürünün yalnız kod doğrulandıktan sonra kurulmasıdır. Opsiyonel
alan için de yokluk davranışı tanımlanır: açıklama gösterilmez mi, ayrı bir etiket
mi kullanılır, kullanıcıdan tamamlaması mı istenir?

### Eksik, undefined, null ve boş değer

Bu iki nesne aynı görünür sonuç verebilir ama aynı yapıda değildir:

```js
const missing = {};
const explicitUndefined = { description: undefined };

console.log(missing.description); // undefined
console.log(explicitUndefined.description); // undefined
console.log(Object.hasOwn(missing, "description")); // false
console.log(Object.hasOwn(explicitUndefined, "description")); // true
```

`null`, çoğu modelde bilinçli “değer yok” işareti olabilir. Boş metin ise mevcut
ama karakter içermeyen bir metindir. `0` ve `false` gerçek değerlerdir. Truthiness
kontrolü bunları aynı gruba atabilir:

```js
if (!product.stock) {
  // stock === 0 iken de çalışır; oysa sıfır geçerli stoktur.
}
```

Doğru kontrol, sorduğunuz soruyu açıkça ifade eder:

```js
if (!Object.hasOwn(product, "stock")) {
  // Alan eksik.
}

if (!Number.isInteger(product.stock) || product.stock < 0) {
  // Alan var ama değeri geçersiz.
}
```

### Şema ve örnek ayrımı

Şema, hangi alan ve değerlerin kabul edildiğini anlatan sözleşmedir. Örnek ise bu
sözleşmeye uyduğu iddia edilen gerçek veridir. Aşağıdaki nesne yalnız örnektir:

```js
const example = {
  code: "A-10",
  name: "Defter",
  stock: 12,
};
```

Bu örnek, `code` alanının zorunlu olduğunu veya stok alt sınırını açıklamaz. JSON
Schema ile yapının bir bölümü makine tarafından denetlenebilir:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "code": { "type": "string", "minLength": 1 },
    "name": { "type": "string", "minLength": 1 },
    "stock": { "type": "integer", "minimum": 0 }
  },
  "required": ["code", "name", "stock"]
}
```

`properties` içinde alan tanımlamak tek başına onu required yapmaz; zorunluluk
ayrı listelenir. Şema aracı kullanmak model düşüncesinin yerini almaz. “Kod trim
edildiğinde boş kalmamalı” veya iki alan arasındaki karmaşık iş kuralı ek validation
gerektirebilir.

### Statik tür ve çalışma zamanı doğrulaması

TypeScript'te şu tür geliştiriciye yapı hakkında yardım eder:

```ts
type Product = {
  code: string;
  name: string;
  stock: number;
};
```

Fakat ağdan gelen JSON bu türe kendiliğinden uymaz. `as Product` yazmak veriyi
doğrulamaz; derleyiciye iddia bildirir. Runtime'da `stock: "çok"` gelebilir. Dış
veri önce `unknown` kabul edilip doğrulanmalıdır.

Katmanları ayırın:

- Statik tür, yazdığınız kodun olası kullanımlarını kontrol eder.
- Runtime validator, gerçek dış girdiyi inceler.
- Depolama constraint'i saklanan veriyi korur.
- Domain function, alanlar arası iş değişmezini korur.

Tek katmanı bütün güvence sanmak hatadır. TypeScript bulunması, API yanıtının doğru
olduğunu kanıtlamaz; JSON Schema bulunması da her domain işleminin değişmezi
koruduğunu garanti etmez.

### İç içe veri

Adres alanlarını ürüne düz biçimde eklemek yerine bir alt kayıt kullanılabilir:

```js
const warehouse = {
  id: "WH-01",
  name: "Merkez Depo",
  address: {
    city: "Ankara",
    district: "Çankaya",
    postalCode: "06420",
  },
};
```

`address` alanları birlikte anlamlı ve aynı sahiplikteyse nesting uygundur. Adres
bağımsız kimlik ve yaşam döngüsüne sahipse ayrı kayıt ve referans daha doğru olabilir.
Kararı yalnız görsel düzen değil sahiplik, birlikte değişim ve tekrar kullanım
belirler.

Derin nesting güvenli erişim ihtiyacı doğurur:

```js
const district = warehouse.address?.district ?? "Bilinmiyor";
```

Optional chaining hatalı modeli iyileştirmez; yalnız eksiklikte çöküşü önler.
`address` zorunluysa sessiz “Bilinmiyor” varsayımı veri hatasını saklayabilir.
Önce domain kararını, sonra erişim tekniğini seçin.

### Kimlik ve eşitlik

Kimlik, bir varlığın değişen özelliklerine rağmen aynı varlık olarak izlenmesidir.
Ürün adı değişebilir; `productId` kararlı kimlik olabilir. Ancak kimliğin nasıl
üretildiği, benzersizlik alanı ve gizlilik etkisi tasarlanmalıdır.

JavaScript nesnelerinde `===` aynı referansı denetler:

```js
const first = { code: "A-10" };
const second = { code: "A-10" };
const alias = first;

console.log(first === second); // false
console.log(first === alias); // true
```

Domain sorusu “aynı ürün mü?” ise `code` veya `id` karşılaştırılabilir. “Aynı değer
kaydı mı?” ise seçili bütün alanlar karşılaştırılabilir. Referans eşitliği, kimlik
eşitliği ve yapısal eşitlik farklı sorulara cevap verir.

### Türetilmiş veri ve tutarsızlık

```js
const line = {
  unitPriceInCents: 500,
  quantity: 3,
  totalInCents: 1500,
};
```

`quantity` ikiye düşürülüp `totalInCents` güncellenmezse kayıt kendi içinde çelişir.
Toplam her okumada hesaplanabilir:

```js
function calculateLineTotal(line) {
  return line.unitPriceInCents * line.quantity;
}
```

Bazen hesap pahalı olduğu için türetilmiş sonuç saklanır. O zaman tek güncelleme
sınırı, transaction veya yeniden hesaplama politikası gerekir. “Tekrar her zaman
kötüdür” yerine doğruluk kaynağı, hesap maliyeti ve drift riskini karşılaştırın.

### Değişmez ve geçersiz durum

Değişmez, model geçerli olduğu sürece doğru kalması gereken koşuldur. Envanter için:

- `code` trim sonrası boş değildir.
- `stock` sıfır veya daha büyük tamsayıdır.
- `reorderLevel` sıfır veya daha büyük tamsayıdır.
- `reservedStock`, `stock` değerini aşmaz.
- Durum `discontinued` ise yeni sipariş verilemez.

İlk üçü tek alan, dördüncü ve beşinci alanlar arası kurallardır. Şu nesne bütün
alan türleri doğru görünse de geçersizdir:

```js
const invalidInventory = {
  code: "A-10",
  stock: 5,
  reservedStock: 8,
  reorderLevel: 2,
};
```

Sorun `reservedStock` sayısının türü değil, iki alan arasındaki ilişkidir. Model
denetimi yalnız `typeof` kontrolleriyle tamamlanamaz.

### Construction boundary

Kayıtların her yerde serbest object literal ile oluşturulması doğrulamayı dağıtır.
Bir oluşturma sınırı (Construction Boundary) ham veriyi doğrular ve yalnız başarılı
olursa geçerli kayıt döndürür:

```js
function createInventoryItem(input) {
  const errors = [];

  if (typeof input.code !== "string" || input.code.trim().length === 0) {
    errors.push({ field: "code", code: "REQUIRED_NON_EMPTY_STRING" });
  }

  if (!Number.isInteger(input.stock) || input.stock < 0) {
    errors.push({ field: "stock", code: "NON_NEGATIVE_INTEGER" });
  }

  if (!Number.isInteger(input.reservedStock) || input.reservedStock < 0) {
    errors.push({ field: "reservedStock", code: "NON_NEGATIVE_INTEGER" });
  }

  if (
    Number.isInteger(input.stock)
    && Number.isInteger(input.reservedStock)
    && input.reservedStock > input.stock
  ) {
    errors.push({ field: "reservedStock", code: "EXCEEDS_STOCK" });
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      code: input.code.trim(),
      stock: input.stock,
      reservedStock: input.reservedStock,
    },
  };
}
```

Fonksiyon hatada yarım ürün döndürmez. Başarı sonucundaki kayıt değişmezleri
sağlar. Bundan sonraki `reserveStock` gibi işlemler de aynı değişmezleri korumalıdır.

### Geçersiz durumları zorlaştırmak

Şu ödeme modeli çelişkili kombinasyonlara izin verir:

```js
const payment = {
  success: false,
  receiptId: "R-10",
  errorMessage: null,
};
```

Başarısız ödemede receipt bulunması, hata mesajının olmaması anlamsız olabilir.
İki açık biçim kullanmak daha güçlüdür:

```js
const successfulPayment = {
  status: "success",
  receiptId: "R-10",
};

const failedPayment = {
  status: "failure",
  errorCode: "CARD_DECLINED",
};
```

`status` ayırt edici alan olur. Construction function, success biçiminde receipt,
failure biçiminde errorCode zorunluluğunu uygular. Bu yaklaşım bütün geçersiz
durumları sihirli biçimde yok etmez; temsil kümesini gereksinime yaklaştırır.

