---
document_type: "research-packet"
document_id: "V01-C15-RP01"
title: "V01-C15 Scope, Lifetime, and Side Effects Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C15"
last_updated: "2026-07-23"
---

# V01-C15 Scope, Lifetime, and Side Effects Research Packet

## 1. Research Decision

Bu paket `V01-C15-BP01` kapsamını ders üretimine hazırlar. Araştırma sonucu iki
ayrı yetkinliği destekler: öğrenci iç içe kapsamda bir adın hangi bağa
çözüldüğünü izleyebilmeli (`V01-LO022`) ve gizli yan etkiyi açık veri akışına
dönüştürebilmelidir (`V01-LO023`). JavaScript örnek dilidir; kapsam, yaşam
süresi ve etki ayrımı dil bağımsız zihinsel model olarak kurulacaktır.

## 2. Canonical Mapping

| Alan | Kayıtlar |
|---|---|
| Blueprint | `V01-C15-BP01` |
| Ön koşullar | `V01-C06`, `V01-C13`, `V01-C14` |
| Outcomes | `V01-LO022`, `V01-LO023` |
| Claims | `ASEA-CLM-000052`–`ASEA-CLM-000054` |
| Concepts | `ASEA-CON-000052`–`ASEA-CON-000054` |
| Evidence | `ASEA-EV-000009`, `ASEA-EV-000013` |
| Lab | `V01-C15-L01` |
| Challenge | `V01-C15-CH01` |

## 3. Terminology Boundary

- **Kapsam (scope):** Bir bağın kaynak kodun hangi bölgesinden erişilebilir
  olduğunu belirleyen dil kuralıdır.
- **Bağ (binding):** Bir ad ile değer, değişken hücresi ya da dil varlığı
  arasındaki ilişkidir.
- **Ad çözümleme (identifier resolution):** Kullanım noktasındaki ad için
  geçerli bağı bulma işlemidir.
- **Sözcüksel kapsam (lexical scope):** Arama ilişkisinin çalışma zamanındaki
  çağrı sırasından değil, kodun iç içe yazılmış yapısından belirlenmesidir.
- **Yaşam süresi (lifetime):** Bir durumun var olduğu veya erişilebilir kaldığı
  zaman aralığıdır. Kapsam bir *nerede*, yaşam süresi bir *ne zaman* sorusudur.
- **Gölgeleme (shadowing):** Yakın kapsamda aynı adlı yeni bağın, dıştaki bağı
  arama sırasında görünmez kılmasıdır; dış bağ silinmez ve değiştirilmez.
- **Kapanış (closure):** Bir fonksiyonun tanımlandığı sözcüksel çevredeki
  bağlara erişimini koruyan fonksiyon-çevre ilişkisidir.
- **Yan etki (side effect):** Açık dönüş değerinin dışında durum gözlemleme veya
  değiştirme davranışıdır.
- **Saf fonksiyon (pure function):** Sonucunu açık girdilerinden hesaplayan ve
  önceden var olan dış durumu gözlenebilir biçimde değiştirmeyen fonksiyondur.
- **Gönderimsel saydamlık sezgisi (referential transparency intuition):** Bir
  ifadeyi program davranışını değiştirmeden değeriyle değiştirebilme fikridir.

## 4. Scope Is Not Lifetime

Kapsam ve yaşam süresi günlük anlatımda sıkça birbirine karıştırılır. Bir adın
belirli satırdan erişilememesi, ilgili nesnenin o anda bellekten silindiğini
kanıtlamaz. Tersi de geçerlidir: global bir ad uzun süre erişilebilir olsa bile
ona bağlı değer program sırasında başka bir değerle değiştirilebilir. Ders,
öğrenciden her vakada üç ayrı soruyu cevaplamasını isteyecektir:

1. Kullanım noktasında hangi ad aranıyor?
2. Bu ad hangi bağa çözülüyor?
3. Bağın işaret ettiği değer veya nesne o anda neden hâlâ erişilebilir?

JavaScript belirtimi çevre kayıtlarını ve dış çevre zincirini ad çözümleme için
normatif olarak tanımlar. Bellek geri kazanımının kesin zamanı ise programın
gözlemleyebileceği güvenilir bir sözleşme değildir. Bu nedenle başlangıç dersi
“blok bitti, nesne hemen silindi” gibi hatalı bir model kurmayacaktır.

## 5. Lexical Environment Model

ECMAScript'teki çevre kaydı, bildirimlerin oluşturduğu ad-bağ ilişkilerini
modeller. Kayıtların `[[OuterEnv]]` bağlantısı sözcüksel iç içeliği temsil eder.
`GetIdentifierReference` önce mevcut kayıtta `HasBinding` sorgular; bulamazsa dış
çevreye geçer. Dış çevre kalmadığında çözümlenemeyen bir başvuru elde edilir.

Pedagojik model şu algoritmaya indirgenebilir:

1. Adın kullanıldığı en iç kapsamı bul.
2. O kapsamda aynı adlı bir bağ var mı diye bak.
3. Varsa dur; bulunan en yakın bağ kullanılır.
4. Yoksa bir dış kapsama geç ve yinele.
5. En dış sınırda da bulunmazsa erişim hatasını öngör.

Bu model bir implementasyonun bellek düzeni değildir. Öğrencinin kaynak koddan
doğru davranışı tahmin etmesini sağlayan belirtim temelli bir soyutlamadır.

## 6. JavaScript Scope Kinds

MDN; script kodu için global, modül kodu için modül, fonksiyon çağrıları için
fonksiyon ve uygun bildirimler için blok kapsamını ayırır. `let`, `const` ve
`class` blok kapsamlıdır. `var` ise sıradan bir blok tarafından sınırlanmaz;
fonksiyon, statik başlatma bloğu, modül veya script düzeyinde bağlanır.

Bu ayrım, “süslü parantez gördüm, içerideki her ad yereldir” kestirmesinin neden
yanlış olduğunu gösterir. Ders modern kodda `let`/`const` ile güvenli blok
sınırını öğretecek, `var` davranışını mevcut kodu okuyup hata ayıklamak için
gösterecektir. Global script bağı ile global nesne özelliğinin ECMAScript'te
aynı şey olmadığı ayrıntısı ileri bir uyarı olarak korunacak; başlangıç
egzersizlerinin odağı yapılmayacaktır.

## 7. Identifier Resolution Traces

Her örnek için yalnız son çıktı değil, arama izi tutulmalıdır. Örnek şablon:

| Adım | Kullanım noktası | Aranan ad | Mevcut kapsam | Sonuç |
|---|---|---|---|---|
| 1 | iç blok | `price` | blok | bağ yok |
| 2 | iç blok | `price` | fonksiyon | bağ bulundu |
| 3 | iç blok | `taxRate` | blok | bağ bulundu, arama durdu |

Öğrenci kodu çalıştırmadan önce bu tabloyu doldurmalıdır. Böylece tahmin,
çalıştırma ve açıklama ayrı kanıtlar hâline gelir. Bir yapay zekâ cevabı yalnız
çıktıyı söylüyorsa yeterli kabul edilmez; kullanım noktası ve arama zinciri
gösterilmelidir.

## 8. Shadowing Versus Reassignment

Gölgelemede iki farklı bağ bulunur. İç kapsamda yeni bir `price` bildirilmesi,
dış kapsamın `price` bağını değiştirmez. Yeniden atamada ise mevcut bir bağın
değeri değiştirilir. Ayırıcı test şudur: iç blok bittikten sonra dış adı
okuduğumuzda hangi değer görülüyor ve kodda yeni bir bildirim anahtar sözcüğü
var mı?

Gölgeleme dil tarafından izin verilen yararlı bir araç olabilir; ancak aynı
anlama gelmeyen iki veriye aynı adın verilmesi incelemeyi zorlaştırır. En iyi
uygulama “gölgeleme her zaman yasaktır” değildir. Kısa ve açık bir kapsamda
anlamı koruyan gölgeleme savunulabilir; uzun, iç içe ve değişken kodda daha
ayırt edici adlar seçilmelidir.

## 9. Lifetime and Reachability

JavaScript otomatik bellek yönetimi kullanır. Yüksek düzeyli model ayırma,
kullanma ve artık erişilemeyen belleğin geri kazanılmasıdır. Modern motorlar
erişilebilirlik temelli işaretle-süpür ailesini kullanır; geri kazanımın tam
anını uygulama kodu belirleyemez. Bu bölümün hedefi çöp toplama algoritmasını
öğretmek değil, kapsam ile erişilebilirliği ayırmaktır.

Bir fonksiyonun yerel bağı normalde çağrı sırasında oluşturulur. Fonksiyon
döndüğünde o bağa giden erişim yolu kalmayabilir. Fakat döndürülen bir iç
fonksiyon dış bağı kapatmışsa erişim yolu sürer. Bu durumda dış çağrı bitmiş
olsa da kapanışın ihtiyaç duyduğu durum erişilebilir kalabilir. “Fonksiyon
bitti, tüm yereller silindi” ifadesi bu yüzden güvenilir değildir.

## 10. Closure Intuition

Kapanış, “değerin anlık fotoğrafını her zaman kopyalayan kutu” olarak
anlatılmamalıdır. JavaScript kapanışı çevredeki bağlara erişimi korur. Değer
sonradan değişirse kapanış daha sonraki okumada güncel değeri görebilir.
Öğrenci şu zaman çizelgesini kurmalıdır:

1. Dış fonksiyon çağrılır ve yerel bağ oluşturulur.
2. İç fonksiyon tanımlanır; sözcüksel çevreyle ilişkilidir.
3. İç fonksiyon dışarı döndürülür.
4. Dış çağrı tamamlanır.
5. Döndürülen fonksiyon çağrıldığında korunan bağ çözümlenir.

Tam kapanış semantiği sonraki ileri konulara bırakılır. C15 yalnız yaşam süresi
yanılgısını düzeltmek ve yerel durum kapsülleme sezgisi kazandırmak için bu
mekanizmayı kullanır.

## 11. Local and Global State

Yerel durum (local state), erişimi dar bir kapsamla sınırlandırılmış program
durumudur. Küresel durum (global state), programın geniş bölgelerince erişilen
paylaşılan durumdur. Asıl mühendislik sorusu yalnız “global değişken var mı?”
değildir; bu durumu kim okuyabilir, kim yazabilir, hangi sırayla ve hangi
invariant altında sorularıdır.

Dar kapsam yanlış durum sayısını azaltmaz fakat etkilenebilecek kod yüzeyini
daraltır. Küresel durum bazen süreç yapılandırması veya sistem koordinasyonu
için gereklidir. Risk, sahipliği ve değişim protokolü görünmez olduğunda büyür.
Bu nedenle ders, durumu olabilecek en dar sorumlu alana yerleştirme ve gerekli
paylaşımı açık arayüzle yönetme ilkesini öğretir.

## 12. Effect Inventory

Yan etki yalnız yazma değildir. Dış dünyayı okumak da aynı açık girdilerle
farklı sonuç üretebiliyorsa gizli bağımlılık oluşturur. Başlangıç düzeyi etki
envanteri şu sınıfları içerir:

- konsola, dosyaya, ekrana veya ağa yazma;
- dış nesneyi, global durumu veya argüman nesnesini değiştirme;
- saat, rastgelelik, ortam değişkeni, dosya veya ağdan okuma;
- hata fırlatma ve dış kaynak edinme gibi kontrol/yaşam döngüsü etkileri.

Bir fonksiyon için `açık girdiler`, `gizli okumalar`, `dönüş değeri` ve `dış
yazmalar` dört sütunda kaydedilecektir. Bu sınıflama, “console.log var, demek
kötü kod” gibi yüzeysel hüküm yerine tasarım kararının kanıtını sağlar.

## 13. Purity Boundary

Saflık pratik ders kapsamında iki gözlenebilir özellik üzerinden öğretilecektir:

1. Aynı açık girdiler aynı sonucu üretir.
2. Fonksiyon çağrıdan önce var olan dış durumu gözlenebilir biçimde değiştirmez.

Yerel olarak yeni oluşturulmuş bir diziyi hesaplama sırasında değiştirmek,
dışarıdan gözlenemiyorsa saf sonucu bozmak zorunda değildir. Buna karşılık
`Date.now()`, `Math.random()`, global sayaç veya argüman nesnesini değiştirme
gizli kanal açar. Saflık mutasyon anahtar sözcüğünü metinde aramakla değil,
gözlenebilir davranış ve veri akışıyla değerlendirilmelidir.

## 14. Referential Transparency Intuition

Gönderimsel saydamlık bu seviyede biçimsel ispat olarak değil, değiştirme testi
olarak kullanılır: bir çağrıyı hesaplanan değeriyle değiştirirsek programın
gözlenebilir davranışı aynı kalıyor mu? `double(4)` her yerde `8` ile güvenle
değiştirilebilir. Fakat `nextTicket()` global sayacı artırıyorsa çağrıyı yalnız
dönen sayıyla değiştirmek sonraki davranışı değiştirir.

Bu sezgi; önbellekleme, tekrar çalıştırma ve birim testinin neden saf hesaplarda
daha kolay olduğunu açıklar. Ancak hata, performans ve kaynak kullanımı gibi
gözlenebilirlik sınırlarının bağlama göre değişebileceği not edilir.

## 15. Pure Core and Effectful Boundary

Gerçek programlar ekrana yazar, dosya okur, ağ çağrısı yapar ve zamanla
etkileşir. Amaç etkileri yok etmek değil, onları küçük ve açık sınırda
toplamaktır. Saf çekirdek (pure core) doğrulama, hesaplama ve dönüştürmeyi açık
girdilerle yapar. Etkili sınır (effectful boundary) veriyi toplar, çekirdeği
çağırır ve sonucu dış dünyaya uygular.

Örnek dönüşüm:

1. Eski fonksiyon global sepeti ve saati içeriden okur, konsola yazar.
2. Envanter çıkarılır: iki gizli okuma, bir dış yazma.
3. Hesap fonksiyonu `cart` ve `now` parametrelerini alıp result object döndürür.
4. Sınır saati okur, hesap fonksiyonunu çağırır, sonucu yazdırır.
5. Normal, sınır ve geçersiz girdiler saf çekirdekte deterministik test edilir.

## 16. Dependency Injection Intuition

Bağımlılık enjeksiyonu (dependency injection) bu bölümde framework deseni
olarak değil, gizli girdiyi parametreye taşıma hareketi olarak tanıtılır. Saat,
rastgele sayı üretici veya veri okuyucu fonksiyona argüman olarak verildiğinde
test sabit bir sağlayıcı kullanabilir. Bu yöntem her bağımlılığın mutlaka nesne
kabı ile yönetileceği anlamına gelmez; başlangıç düzeyinde fonksiyon parametresi
yeterlidir.

## 17. Testing Consequences

Yan etkili fonksiyonun testi yalnız dönüş değerini kontrol edemez; dış durumun
öncesini ve sonrasını hazırlamak, çağrı sırasını izlemek veya ortamı taklit
etmek gerekebilir. Saf çekirdek ise input-output tablosuyla test edilir. Dersin
değerlendirmesinde öğrenci şu kanıtı sunacaktır:

- aynı girdinin iki çağrıda aynı sonucu verdiği test;
- global durum değişmediği testi;
- sınır katmanının beklenen etkiyi bir kez uyguladığı iz;
- gizli saat/rastgelelik için sabit test bağımlılığı;
- davranış korunmasını gösteren önce/sonra karşılaştırması.

## 18. Common Misconceptions

1. “Kapsam, değişkenin bellekte kaç saniye durduğudur.” Yanlış; erişim bölgesi
   ile zaman boyutu ayrıdır.
2. “Fonksiyon çağıran kodun değişkenlerini görür.” Sözcüksel kapsamda arama
   çağrı zincirine değil, tanımın kaynak yapısına dayanır.
3. “Gölgeleme dış değeri değiştirir.” Yeni bağ dış bağı yalnız gizler.
4. “Her süslü parantez `var` için yeni kapsamdır.” JavaScript'te değildir.
5. “Fonksiyon bitince tüm nesneleri anında silinir.” Erişilebilirlik ve motorun
   çöp toplama kararı göz önüne alınmalıdır.
6. “Saf fonksiyonda hiçbir yerel değişim olamaz.” Dışarıdan gözlenemeyen yerel
   mutasyon, dönüş davranışı saf kaldığı sürece farklı değerlendirilebilir.
7. “Yan etkiler her zaman kötüdür.” Gerekli etkilerin sınırlandırılması amaçtır.
8. “Konsola yazmak return ile aynıdır.” Biri etkidir, diğeri açık veri akışıdır.

## 19. Normal Boundary and Invalid Cases

| Sınıf | Araştırma örneği | Beklenen kanıt |
|---|---|---|
| Normal | İç fonksiyon dış parametreyi okur | En içten dışa çözümleme izi |
| Sınır | Aynı ad iç blokta gölgelenir | İki ayrı bağ ve blok sonrası değer |
| Sınır | Kapanış dış çağrıdan sonra çalışır | Zaman çizelgesi ve erişim açıklaması |
| Geçersiz | Tüm kapsamlarda bulunmayan ad | Çözümlenemeyen başvuru tahmini |
| Etki | Fonksiyon global sayacı artırır | Okuma/yazma envanteri |
| Refactor | Saat açık parametreye taşınır | Deterministik önce/sonra testleri |

## 20. Engineering Review Questions

- Her adın sahibi ve en dar geçerli kapsamı nedir?
- Aynı adla birden fazla bağ gerçekten aynı kavramı mı temsil ediyor?
- Bir fonksiyonun sonucu hangi açık girdilerden belirleniyor?
- Saat, rastgelelik, ortam veya global durum gizli girdi mi?
- Fonksiyon çağrısı hangi dış durumu değiştirebilir?
- Etki sınırı hesaplamadan ayrılabilir mi?
- Test davranışı mı yoksa implementasyon ayrıntısını mı doğruluyor?
- AI önerisi kapsam zincirini ve etki envanterini kanıtlıyor mu?

## 21. Lesson Production Contract

Ana ders en az 8.000 kelime olacak ve zorunlu 15 H2 yapısını koruyacaktır.
Anlatım sıfır bilgi varsayımıyla başlayacak; günlük sezgi, normatif teknik
model, çalışan kod, iz tablosu ve mühendislik kararı sırasını kullanacaktır.
Her teknik terim ilk anlamlı kullanımda Türkçe ve İngilizce birlikte verilecek,
sonraki kullanımlarda Türkçe tercih edilecektir. Kapanış ve bellek konusu C15
çıktısını destekleyecek kadar anlatılacak, ileri düzey implementasyona sapılmayacaktır.

## 22. Practice and Assessment Contract

- 20 alıştırma kolaydan bağımsız tasarıma ilerler.
- 25 soruluk quiz; bilgi, izleme, teşhis ve transfer düzeylerini kapsar.
- `V01-C15-L01`, kapsam ve yan etki kaynaklı davranışı teşhis ettirir.
- `V01-C15-CH01`, durumlu fonksiyonu saf çekirdek ve etkili sınıra ayırır.
- AI Mentor cevabı vermez; öğrenciden tahmin, iz, envanter ve test ister.
- Rubric, `V01-LO022` ve `V01-LO023` için ayrı geçiş kanıtları tutar.

## 23. Visual Evidence Plan

1. İç içe kapsam kutuları ve dışa doğru arama okları.
2. Gölgeleme ile yeniden atamanın yan yana bağ diyagramı.
3. Kapanışın çağrı sonrası erişimini gösteren zaman çizelgesi.
4. Açık girdi, gizli okuma, return ve dış yazma etki haritası.
5. Etkili sınır → saf çekirdek → sonuç → etkili sınır akışı.
6. Global durumun büyüyen etki yarıçapını gösteren sahiplik haritası.

Her görsel metinsel alternatif ve numaralı okuma sırasına sahip olacaktır.

## 24. Primary Sources

1. [ECMAScript 2025 — Executable Code and Execution Contexts](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html)
2. [ECMAScript 2025 — Environment Record Operations](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html#sec-environment-records)
3. [ECMAScript 2025 — GetIdentifierReference](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html#sec-getidentifierreference)
4. [ECMAScript 2025 — Global Environment Records](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html#sec-global-environment-records)
5. [ECMAScript 2025 — Function Environment Records](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html#sec-function-environment-records)
6. [ECMAScript 2025 — BlockDeclarationInstantiation](https://tc39.es/ecma262/2025/multipage/ecmascript-language-statements-and-declarations.html#sec-blockdeclarationinstantiation)
7. [MDN — Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
8. [MDN — Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
9. [MDN — Block Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
10. [MDN — `var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
11. [MDN — `let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
12. [MDN — `const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
13. [MDN — Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
14. [MDN — Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management)
15. [MDN — Garbage Collection](https://developer.mozilla.org/en-US/docs/Glossary/Garbage_collection)
16. [React — Keeping Components Pure](https://react.dev/learn/keeping-components-pure)
17. [Microsoft Learn — Refactor into Pure Functions](https://learn.microsoft.com/en-us/dotnet/standard/linq/refactor-pure-functions)
18. [Python 3.14 FAQ — Local and Global Variables](https://docs.python.org/3/faq/programming.html#what-are-the-rules-for-local-and-global-variables-in-python)
19. [Java Language Specification 26 — Names and Scope](https://docs.oracle.com/javase/specs/jls/se26/html/jls-6.html)
20. [Java Language Specification 26 — Variables](https://docs.oracle.com/javase/specs/jls/se26/html/jls-4.html#jls-4.12)

## 25. Secondary and Curriculum Sources

21. [ACM/IEEE-CS/AAAI CS2023](https://csed.acm.org/wp-content/uploads/2024/04/Version-Gamma.pdf)
22. [SEI CERT Java — Limit Variable Scope](https://wiki.sei.cmu.edu/confluence/display/java/DCL19-J.+Minimize+the+scope+of+variables)
23. [Google JavaScript Style Guide — Local Variable Declarations](https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations)
24. [Google Testing Blog — Testing on the Toilet: Dependency Injection](https://testing.googleblog.com/2008/11/clean-code-talks-dependency-injection.html)
25. [Refactoring Catalog — Replace Global Variable with Encapsulated Variable](https://refactoring.com/catalog/encapsulateVariable.html)
26. [NIST SSDF SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final)

İkincil kaynaklar normatif JavaScript davranışını belirlemek için kullanılmaz.
Stil ve tasarım önerileri; ECMAScript, MDN ve karşılaştırmalı resmî dil
dokümanlarından gelen teknik mekanizma kanıtından ayrı tutulur.

## 26. Research Conclusion

Araştırma, Blueprint'in iki outcome'unu üretime taşıyacak yeterli teknik tabanı
sağlamaktadır. En önemli öğretim kararı kapsam, yaşam süresi ve erişilebilirliği
aynı kavram gibi anlatmamaktır. İkinci karar, saflığı etkileri yok etme dogması
değil; açık veri akışı, saf çekirdek ve küçük etkili sınır olarak öğretmektir.
Kaynaklar güncel ECMAScript 2025, güncel MDN, resmî dil belgeleri, CS2023 ve
kurumsal mühendislik rehberleriyle çeşitlendirilmiştir. Üretim paketi hazırdır.
