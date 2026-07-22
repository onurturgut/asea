---
document_type: "challenge"
document_id: "V01-C09-CH01"
title: "Karmaşık Dağıtım Kuralını Sadeleştirme"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C09"
---

# Karmaşık Dağıtım Kuralını Sadeleştirme

## Problem

Bir sürüm, sistem etkin ve bakım modunda değilse; ayrıca kullanıcı iç ekipteyse veya hem beta grubunda hem doğrulanmışsa gösterilsin.

Başlangıçta şu okunması zor ifade verilmiştir:

```js
const canSeeRelease =
  systemEnabled && !maintenance &&
  (internal || beta && verified);
```

## Görev

1. Gereksinimdeki bütün önermeleri adlandır.
2. Operatör önceliğine göre başlangıç ifadesinin gerçek gruplamasını yaz.
3. Gereksinimin amaçlanan gruplamasını yaz.
4. Dört girdi yerine anlamlı alt gruplar kullanarak doğruluk tablosunu yönetilebilir parçalara böl.
5. En az 16 kritik birleşimi otomatik olarak sınayan kod oluştur.
6. Başlangıç ifadesi amaçlanan davranışla aynıysa bunu kanıtla; değilse karşı örnek göster.
7. İfadeyi adlandırılmış yüklemler ve açık parantezlerle yeniden yaz.
8. `shouldHideRelease` adlı eşdeğer olumsuz kural üret.
9. İki kuralın testlerde eşdeğer olduğunu göster.
10. Hangi sürümün kod incelemede daha güvenli olduğunu 300–500 kelimeyle savun.

## Kısıtlar

- Sonuçları elle seçilmiş iki örnekle sınırlama.
- `if/else` kullanma; bu bölümün sınırı mantıksal ifadedir.
- Gerçek bir güvenlik sistemi kurduğunu iddia etme.
- AI kullanacaksan önce kendi çözümünü ve tahminlerini kaydet.

## Beklenen Kanıt

Teslim; gereksinim çözümlemesi, tablolar, çalışan JavaScript, terminal çıktısı, karşı örnek veya eşdeğerlik kanıtı ve mühendislik gerekçesinden oluşmalıdır.
