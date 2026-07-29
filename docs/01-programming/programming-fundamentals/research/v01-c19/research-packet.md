---
document_type: "research-packet"
document_id: "V01-C19-RP01"
title: "V01-C19 Recursion and Recursive Thinking Research Packet"
version: "0.1.0"
status: "Research Ready"
chapter_id: "V01-C19"
last_updated: "2026-07-29"
---

# V01-C19 Recursion and Recursive Thinking Research Packet

## 1. Research Decision

Araştırma `V01-LO029` ve `V01-LO030` için taslak üretime hazırdır. Öğretim sırası
“fonksiyonun kendini çağırması” sözdiziminden değil, aynı problemin daha küçük
örneğine ilerleyen tanım ve durma kanıtından başlar. JavaScript örnek dildir;
özyineleme kavramı dile bağlı değildir.

## 2. Scope and Outcome

| Alan | Değer |
|---|---|
| Blueprint | `V01-C19-BP01` |
| Ön koşullar | `V01-C10`, `V01-C13`, `V01-C14`, `V01-C15` |
| Outcomes | `V01-LO029`, `V01-LO030` |
| Lab | `V01-C19-L01` — Trace Recursive Structures |
| Challenge | `V01-C19-CH01` — Convert Recursion and Iteration |
| Sonraki chapter | `V01-C20` |

## 3. Canonical Mental Model

Bir özyinelemeli çözüm dört parçayla incelenir:

1. **Problem contract:** Geçerli girdi ve beklenen sonuç.
2. **Base case:** Sonucu başka özyinelemeli çağrı yapmadan veren durum.
3. **Recursive case:** Aynı sözleşmedeki daha küçük probleme çağrı ve sonuç birleştirme.
4. **Progress measure:** Her çağrıda base case'e doğru kesin ilerleyen ölçü.

Base case bulunması tek başına termination kanıtı değildir. Recursive case'in bütün
geçerli yollarda progress measure'ı küçültmesi ve ölçünün iyi-temellendirilmiş bir
sınıra ulaşması gerekir.

## 4. Call Stack Model

Her fonksiyon çağrısı parametrelerini, yerel değerlerini ve dönüş noktasını taşıyan
ayrı bir çağrı çerçevesi (call frame) oluşturur. Özyinelemeli çağrı başlatıldığında
dış çağrı bitmez; iç çağrının sonucu için bekler. Base case döndüğünde çerçeveler
son giren ilk çıkar sırasıyla çözülür.

Öğrenci hem iniş (calls/push) hem dönüş (returns/pop) fazını izlemelidir. Yalnız
çıktıyı tahmin etmek `V01-LO029` için yeterli kanıt değildir.

## 5. Structural Recursion

Veri kendine benzer bir tanıma sahipse çözüm de aynı yapıyı izleyebilir. Örneğin
bir sayı listesinin toplamı:

- boş listenin toplamı `0`;
- boş olmayan listenin toplamı ilk değer ile kalan listenin toplamıdır.

Başlangıç düzeyinde array slicing'in maliyeti kavramsal modeli gölgelememeli; çalışan
JavaScript uygulaması indeks taşıyarak aynı yapıyı gereksiz kopya olmadan gösterebilir.

## 6. Recursion and Iteration

Özyineleme ve döngü aynı tekrar davranışlarının çoğunu ifade edebilir. Seçim;
problemin yapısı, okunabilirlik, stack sınırı, dil/runtime özellikleri ve ölçülmüş
maliyetle yapılır. Basit sayaç için döngü genellikle doğrudandır. İç içe veya
kendine benzer yapıda özyineleme yapıyı daha açık ifade edebilir. “Özyineleme daha
zarif” veya “döngü her zaman daha hızlı” evrensel karar değildir.

## 7. Failure Boundary

Başlıca hatalar:

- base case'in eksik veya yanlış yerde olması;
- çağrının problemi küçültmemesi;
- bazı dalların ilerleyip bir dalın ilerlememesi;
- base case dönüşünün yanlış olması;
- recursive result'ın birleştirilmemesi;
- parametrenin yanlış yönde değişmesi;
- çok derin girdi nedeniyle çağrı stack sınırının aşılması;
- Fibonacci gibi dallanan örneklerde aynı alt problemin tekrar tekrar hesaplanması.

Bu chapter dinamik programlama, memoization, ağaç algoritmaları ve karmaşıklık
analizini yalnız sınır olarak adlandırır; bunları öğretmez.

## 8. Assessment Contract

`V01-LO029` için öğrenci en az üç girdi üzerinde çağrı numarası, parametre, bekleyen
iş ve dönüş değerini içeren iz tablosu üretir. `V01-LO030` için base case, progress
measure ve her recursive branch'in ilerleme kanıtını yazar; hatalı örnekte en küçük
karşı örneği bulur.

## 9. Source Register

| Kaynak | Otorite | Kullanım |
|---|---|---|
| [MDN Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion) | Mozilla MDN | Base/recursive case tanımı |
| [MDN Too much recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion) | Mozilla MDN | Stack sınırı ve eksik base case |
| [MIT 6.100L Lecture 15](https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/pages/lecture-15-recursion/) | MIT OpenCourseWare | Recursion–iteration ve inductive reasoning |
| [MIT 6.005 Reading 10](https://ocw.mit.edu/ans7870/6/6.005/s16/classes/10-recursion/) | MIT EECS | Base/recursive step, call stack, trade-off |
| [SICP](https://web.mit.edu/6.001/6.037/sicp.pdf) | MIT Press | Recursive process mental model |
| [How to Design Programs](https://htdp.org/2024-11-6/Book/index.html) | Northeastern University | Structural data definition and design |
| [UC Berkeley CS61A](https://cs61a.org/) | UC Berkeley | Fonksiyon ve recursion öğretim dizisi |
| [ECMAScript Execution Contexts](https://tc39.es/ecma262/2025/multipage/executable-code-and-execution-contexts.html) | TC39 | JavaScript execution context sınırı |

Kaynak metinleri kopyalanmaz. ASEA anlatımı özgündür; kaynaklar iddia doğrulama ve
ileri okuma amacıyla kullanılır.
