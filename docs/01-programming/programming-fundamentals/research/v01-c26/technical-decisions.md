# V01-C26 Teknik Kararlar

## TD-01 — LO043 canonical kayıtla düzeltildi

Eski blueprint özeti yalnız regression testini vurguluyordu. Learning Outcomes ve
Traceability Matrix uyarınca LO043, suite’in risk kapsamı ve kör noktalarını
açıklamayı ölçer; regression testi bu kanıtın zorunlu parçası olarak korunur.

## TD-02 — Framework bağımsız başlangıç

İlk örnek `expectEqual` yardımcısıyla assertion mekanizmasını açar. Node test
runner profesyonel araç olarak tanıtılır fakat öğrenme outcome’u araç sözdizimine bağlanmaz.

## TD-03 — Oracle implementation’dan bağımsız

Expected result üretmek için test edilen fonksiyon çağrılamaz. Contract, kabul
kriteri, matematik veya doğrulanmış referans bağımsız oracle sağlar.

## TD-04 — Coverage risk raporuyla birlikte

Line/branch oranı tek kalite ölçüsü yapılmaz. Her suite kapsanan risk, güven ve
kör nokta tablosu sunar.

## TD-05 — C27 kapısı

C27 refactoring’e başlamadan C26 suite’i yeşil olmalı; bilinen kör noktalar
değişiklik riskine göre yeniden değerlendirilmelidir.
