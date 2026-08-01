# V01-C26 Kaynak Notları

## Araştırma sorusu

Başlangıç seviyesindeki öğrenciye framework sözdiziminden önce contract, oracle,
boundary ve risk coverage zihinsel modeli nasıl kazandırılır?

## Bulgular

- Node.js test runner senkron test fonksiyonunu exception atarsa fail, normal
  tamamlanırsa pass olarak işler ve yerleşik test keşfi/raporlama sunar.
- `node:assert` invariant doğrulama işlevleri sağlar; strict mode tür dönüşümünü
  gizlemeyen karşılaştırmalar ve nesneler için deep equality sunar.
- ISTQB CTFL, equivalence partitioning’i aynı işlenmesi beklenen çakışmayan girdi
  sınıfları kurma; boundary value analysis’i davranış sınırlarına odaklanma tekniği
  olarak ele alır.
- Coverage öğelerine değmek, oracle kalitesini veya yüksek riskli davranışların
  doğru seçildiğini tek başına kanıtlamaz.

## Öğretim kararı

Öğrenci önce contract → partition → input → oracle → expected tablosunu kurar.
Framework bağımsız assertion ile mekanizmayı görür, ardından test runner’ın bu
işi nasıl ölçeklediğini öğrenir. Suite teslimi kör nokta raporu olmadan tamamlanmaz.
