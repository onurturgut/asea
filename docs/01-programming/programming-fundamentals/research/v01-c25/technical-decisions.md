# V01-C25 Teknik Kararlar

## TD-01 — Fix en son

Ana akış failure → reproduction → minimal case → observations → hypotheses →
experiments → root cause → fix → verification olarak sabitlendi.

## TD-02 — En az üç hipotez

Outcome gereği öğrenci ilk açıklamaya bağlanmadan en az üç yanlışlanabilir
hipotez üretir. Her birinin elenme veya desteklenme kanıtı korunur.

## TD-03 — Minimal case aynı failure ölçütünü korur

Kod küçülürken başka bir boundary failure’a dönüşen örnek kabul edilmez. Expected
ve observed çifti her azaltma adımında yeniden kontrol edilir.

## TD-04 — Araçlar soru odaklıdır

Log, breakpoint ve debugger genel “bakınma” aracı olarak değil, önceden yazılmış
hipotezin ölçüm aracı olarak kullanılır.

## TD-05 — C26 kapsamı korunur

C25 manuel verification tablosu ve regression riskini üretir. Test framework,
assertion tasarımı ve otomatik suite C26’ya bırakılır.
