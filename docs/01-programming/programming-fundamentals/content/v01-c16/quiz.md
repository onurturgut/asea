---
document_type: "quiz"
document_id: "V01-C16-QZ01"
title: "V01-C16 Quiz"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C16"
question_count: 25
passing_score: 75
last_updated: "2026-07-23"
---

# Quiz

[Cevap anahtarını](./quiz-answer-key.md) bağımsız denemenizi kaydetmeden açmayın.

## Sorular

### Soru 1

Functional decomposition'ın temel amacı nedir?

A. Her satırı function yapmak  
B. Büyük davranışı anlamlı responsibility ve contracts'a ayırmak  
C. En fazla dosyayı üretmek  
D. Bütün loops'u kaldırmak

### Soru 2

Responsibility map hangi aşamada üretilmelidir?

A. Fonksiyon isimlerinden önce problem davranışını analiz ederken  
B. Yalnız deployment sonrası  
C. Bütün kod silindikten sonra  
D. Sadece class tasarımında

### Soru 3

Function map'teki ok neyi göstermelidir?

A. Yalnız dosya rengini  
B. Data/control/failure contract'ını  
C. Geliştiricinin adını  
D. Satır sayısını

### Soru 4

Abstraction level neden önemlidir?

A. Workflow ile low-level mechanism'ın aynı anda zihinde taşınmasını azaltır.  
B. Her function'ı tek satır yapar.  
C. Runtime'ı mutlaka hızlandırır.  
D. Tests'i gereksiz kılar.

### Soru 5

Cohesion en iyi nasıl değerlendirilir?

A. Function adının uzunluğuyla  
B. Öğelerin aynı outcome ve change reason'a hizmet etmesiyle  
C. Parametre olmamasıyla  
D. Yalnız call count ile

### Soru 6

Kısa function için hangisi doğrudur?

A. Otomatik yüksek cohesion taşır.  
B. Otomatik reusable'dır.  
C. Satır sayısı tek başına design quality kanıtı değildir.  
D. Contract gerektirmez.

### Soru 7

Coupling yalnız hangi şey değildir?

A. Direct function calls  
B. Shared state  
C. Temporal ordering  
D. Failure model

### Soru 8

Hangisi temporal coupling örneğidir?

A. İkinci function'ın yalnız birincisi çağrıldıktan sonra çalışabilmesi  
B. İki saf function'ın aynı number input alması  
C. Local const kullanmak  
D. Result object döndürmek

### Soru 9

Loose coupling ne demektir?

A. Hiç dependency olmaması  
B. Necessary dependency'nin küçük, explicit ve stable contract üzerinden kurulması  
C. Her şeyi global yapmak  
D. Function calls'u gizlemek

### Soru 10

Extraction sonrası sekiz caller local'ı parameter oluyorsa hangi sinyal vardır?

A. Boundary'nin caller internals'a sıkı bağlı olabileceği  
B. Kesin yüksek cohesion  
C. Kesin performans artışı  
D. Function map gereksizliği

### Soru 11

Dependency direction için uygun akış hangisidir?

A. Calculation → terminal color → input parser  
B. Boundary input → domain calculation → result formatter → output boundary  
C. Global state ↔ bütün functions  
D. Formatter → calculator internals

### Soru 12

Orchestrator'ın ana rolü nedir?

A. Her step'in bütün internal hesaplarını yapmak  
B. Sıra, branching, failure flow ve boundaries'i koordine etmek  
C. Global temporary saklamak  
D. Bütün functions'ı tek satır yapmak

### Soru 13

Pipeline için hangisi zorunlu düşüncedir?

A. Output-input ve failure contract compatibility  
B. Aynı function adı  
C. Global array  
D. Class inheritance

### Soru 14

Composition nedir?

A. Uyumlu küçük contracts'i daha büyük davranışta bağlamak  
B. Duplicate code'u silmek  
C. Bütün effects'i gizlemek  
D. Function'ı inline etmek

### Soru 15

Reuse için en güçlü kanıt hangisidir?

A. İki code block'un bugün aynı görünmesi  
B. Callers'ın aynı invariant ve change reason'ı paylaşması  
C. Function'ın `common` diye adlandırılması  
D. Çok optional parameter olması

### Soru 16

Premature abstraction belirtisi hangisidir?

A. Stable küçük contract  
B. Sürekli büyüyen mode flags ve caller-specific branches  
C. Independent tests  
D. Explicit result

### Soru 17

Characterization test'in görevi nedir?

A. Mevcut observable behavior'ı refactoring öncesi kaydetmek  
B. Her bug'ı doğru kabul etmek  
C. Performance guarantee vermek  
D. Documentation'ı silmek

### Soru 18

Refactoring ile behavior change nasıl yönetilmelidir?

A. Aynı büyük adımda yapılmalı  
B. Ayrı, gözlenebilir adımlar ve tests ile  
C. Tests olmadan  
D. Yalnız AI karar vermeli

### Soru 19

Extracted helper yeni abstraction üretmiyorsa hangi refactoring geçerli olabilir?

A. Inline Function  
B. Global Variable  
C. Random Rename  
D. Delete Tests

### Soru 20

Split Phase neyi ayırabilir?

A. Veriyi hazırlama ile kullanma/hisaplama aşamalarını  
B. Yalnız comments'i  
C. Git branches'i  
D. CPU ve RAM'i

### Soru 21

İki design alternative nasıl karşılaştırılmalıdır?

A. Yalnız function count ile  
B. Change scenarios, contracts, coupling ve tests ile  
C. Dosya rengiyle  
D. En kısa code ile

### Soru 22

Shared global intermediate neden sahte reuse yaratabilir?

A. Hidden state ve ordering coupling oluşturur.  
B. Parameter names kısalır.  
C. Her zaman immutable'dır.  
D. Tests'i otomatik üretir.

### Soru 23

Test setup'ın aşırı büyümesi ne için design sinyali olabilir?

A. Hidden dependencies ve yanlış boundary  
B. Kesin doğru architecture  
C. Yalnız syntax error  
D. Documentation fazlalığı

### Soru 24

AI'ın çok sayıda helper üretmesi neyi kanıtlar?

A. Yüksek cohesion  
B. Low coupling  
C. Tek başına hiçbir design quality'yi kanıtlamaz  
D. Behavior preservation

### Soru 25

C16 başarı kanıtı hangisidir?

A. Yalnız çalışan refactored code  
B. Function map, contracts, alternative comparison ve preserved tests  
C. En az 20 functions  
D. Bütün duplication'ın silinmesi

## Cevap Kaydı

Her soruda seçenek, kısa gerekçe ve güven düzeyi yazın. Düşük güvenli doğru
cevapları da tekrar listesine ekleyin.
