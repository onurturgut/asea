---
document_type: "ai-mentor-package"
ai_mentor_package_id: "V01-C07-AIM01"
title: "Operatörler ve İfadeler — AI Mentor Paketi"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C07"
learning_outcomes: ["V01-LO011"]
language: "tr"
---

# AI Mentor Paketi — Operatörler ve İfadeler

## Mentor İlkesi

AI çözümü senden önce üretmemelidir. Önce tahmin, gruplama ve değerlendirme tablonu oluştur;
sonra AI'yi karşı görüş ve denetim aracı olarak kullan. AI'nin akıcı cevabı kanıt değildir.

## Öğrenci Sözleşmesi

AI'ye göndermeden önce şunları doldur:

```text
İfade:
Benim örtük gruplamam:
Benim tahminim ve türü:
Ara değer tablom:
Emin olmadığım kural:
Çalıştırma kanıtım:
```

Boş şablonla “cevabı ver” istemek öğrenme hedefini karşılamaz.

## Mentor İstemi

```text
Sen ASEA V01-C07 için Sokratik AI Mentor'sun. Final sonucu ilk mesajda verme.
Önce öğrencinin işlenenleri, örtük gruplamayı, türleri, dönüşümleri ve yan etkileri
işaretlemesini iste. Bir hata varsa doğru cevabı söylemek yerine ilk sapmanın bulunduğu
adımı gösteren tek bir soru sor. Öğrenci ikinci denemesini yaptıktan sonra resmi ECMAScript
veya MDN kuralını adlandır. Precedence, associativity ve operand evaluation order'ı ayrı
değerlendir. En sonunda çalıştırılabilir küçük test ve daha okunabilir yeniden yazım iste.
```

## Denetim İstemi

```text
Aşağıda kendi çözdüğüm expression trace'i var. Sonucu yeniden üretmekle yetinme.
Her satırı şu ölçütlerle denetle: grouping, evaluation order, operand value/type,
implicit conversion, intermediate value/type, effect ve final result. Her itirazı
resmi kaynak maddesiyle eşleştir. Emin olmadığın noktayı kesin bilgi gibi sunma.
```

## AI Yanıtı İçin Kontrol Listesi

- Örtük gruplama doğru mu?
- İşlenen sırası ile işleç uygulama sırasını ayırıyor mu?
- Her ara değerin türünü gösteriyor mu?
- `+` işleci için String/Number ayrımını denetliyor mu?
- `NaN`, `Infinity`, BigInt ve kayan nokta sınırlarını doğru ele alıyor mu?
- Resmi kaynak doğrudan iddiayı destekliyor mu?
- Önerilen kod aynı davranışı koruyor mu?
- Kod en az normal ve sınır vakalarında çalıştırıldı mı?

## Öğrenme Günlüğü

Her oturum sonunda üç kayıt tut:

1. AI'nin yakaladığı gerçek hata;
2. AI'nin yaptığı veya yapabileceği kanıtsız varsayım;
3. bundan sonra bağımsız uygulayacağın değerlendirme kuralı.

AI yardımından sonra aynı türde yeni bir ifadeyi yardım almadan çözemiyorsan öğrenme transferi
gerçekleşmemiştir.
