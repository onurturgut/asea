---
document_type: "exercise-set"
document_id: "V01-C16-EX01"
title: "V01-C16 Exercises"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C16"
learning_outcomes: ["V01-LO024"]
last_updated: "2026-07-23"
---

# Alıştırmalar

Her görevde yalnız kod değil, boundary gerekçesi ve doğrulama kanıtı üretin.

## Uygulamalar

### Alıştırma 1 — Sorumluluk fiilleri

Bir kayıt formu workflow'unu “doğrula, normalize et, hesapla, biçimlendir, yaz” biçiminde sorumluluklara ayırın.

### Alıştırma 2 — Syntax ile outcome

“Döngüyü helper'a çıkar” ve “geçerli satırları topla” önerilerini karşılaştırıp hangisinin anlamlı abstraction ürettiğini açıklayın.

### Alıştırma 3 — Responsibility map

Bir kütüphane gecikme raporu için input, output, failure, effect ve change reason sütunlarıyla harita hazırlayın.

### Alıştırma 4 — Function map

Alıştırma 3'ü function nodes ve data/failure arrows içeren bir haritaya dönüştürün.

### Alıştırma 5 — Abstraction level

Yüksek seviye workflow ile düşük seviye string/index işlemlerini karıştıran örnek yazıp düzeltin.

### Alıştırma 6 — Cohesion testi

Bir `validateSaveAndPrintUser` fonksiyonunun üç change reason'ını ve önerilen boundaries'i yazın.

### Alıştırma 7 — Kısa ama düşük cohesion

Altı satırdan kısa, iki ilgisiz effect taşıyan function oluşturun ve satır sayısının neden yeterli ölçüt olmadığını açıklayın.

### Alıştırma 8 — Uzun ama cohesive

Tek bir algoritmik outcome'a hizmet eden uzun function örneğini inceleyip hangi durumda extraction yapmayacağınızı savunun.

### Alıştırma 9 — Coupling inventory

İki function arasında data, state, temporal, failure ve environment coupling kanallarını tabloya yazın.

### Alıştırma 10 — Hidden coupling

Global ara değer üzerinden haberleşen iki function'ı explicit parameter/return contract'ına dönüştürün.

### Alıştırma 11 — Dependency direction

Calculator'ın formatter'a bağlı olduğu tasarımı tersine çevirip domain result → formatter akışı kurun.

### Alıştırma 12 — Helper contract

`doPart(a,b,c,d,e)` fonksiyonuna domain outcome, meaningful parameters ve testable result contract kazandırın.

### Alıştırma 13 — Orchestrator

Parse, validate, calculate ve format adımlarını koordine eden fakat internal hesap yapmayan orchestrator yazın.

### Alıştırma 14 — Pipeline compatibility

Boolean, exception ve result object kullanan üç adımı tek açık failure contract'ında birleştirin.

### Alıştırma 15 — Composition

Üç küçük string transformation fonksiyonunu input/output contracts'iyle pipeline hâline getirin.

### Alıştırma 16 — Gerçek reuse

İki caller'ın aynı invariant'ı kullandığı örnek verin; shared function ve contract tests yazın.

### Alıştırma 17 — Tesadüfi duplication

Aynı formula fakat farklı business reason taşıyan iki kodu neden birleştirmediğinizi change scenario ile savunun.

### Alıştırma 18 — Characterization tests

En az üç responsibility taşıyan mevcut bir function için refactoring öncesi on davranış testi yazın.

### Alıştırma 19 — İki alternative

Aynı report workflow için üç ve beş function'lı map üretin; beş change scenario ile karşılaştırın.

### Alıştırma 20 — AI decomposition audit

AI'dan büyük bir function'ı refactor etmesini isteyin. Gereksiz helper, hidden dependency, premature abstraction ve eksik tests bulup en az bir öneriyi reddedin.

## Tamamlanma Ölçütü

En az 16 görev tamamlanmalıdır. 3, 4, 6, 9, 13, 18, 19 ve 20 zorunludur.
Her zorunlu görev responsibility/contract/dependency/test kanıtından en az ikisini içermelidir.
