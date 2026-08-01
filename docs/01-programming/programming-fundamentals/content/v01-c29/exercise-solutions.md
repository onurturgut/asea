# Alıştırma Çözümleri

## Grouping

`"7" + 2 + 1`: önce `"72"`, sonra `"721"`. `"7" + (2 + 1)`: önce number `3`,
sonra string `"73"`.

## Numeric failure

`"7" - 2` number `5`; `"7px" - 2` `NaN` üretir. `typeof NaN` number'dır;
`Number.isNaN` failure değerini doğrular.

## Equality

Strict equality farklı type'larda false döner. Loose equality `"5"` değerini
number 5'e, false değerini number 0'a dönüştürebilir.

## Kimlik type'ı

`"00125"` arithmetic değil exact identity taşır. Number dönüşümü baştaki sıfırları
kaybeder; bu nedenle string domain anlamını korur.

## Conversion policy

Empty ve whitespace önce reddedilir; integer grammar doğrulanır; sonra `Number`
uygulanır. Boolean yalnız exact `"true"`/`"false"` tokenlarından üretilir.
