---
document_type: "examples"
document_id: "V01-C20-EXAMPLES"
title: "V01-C20 Kademeli Örnekler"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C20"
---

# V01-C20 Kademeli Örnekler

## Sınır Whitespace

```js
const rawText = "\t ASEA \n";
const trimmedText = rawText.trim();
```

`rawText` korunur; `trimmedText` `"ASEA"` olur. İç whitespace bu işlemin
kapsamında değildir.

## Türkçe Case

```js
const cities = ["İSTANBUL", "ISPARTA"];
const searchCities = cities.map((city) =>
  city.toLocaleLowerCase("tr-TR"),
);
```

Beklenen: `["istanbul", "ısparta"]`. Locale, ürün politikasının parçasıdır.

## Unicode Eşdeğerliği

```js
const first = "\u00E9";
const second = "e\u0301";

console.log(first === second);
console.log(first.normalize("NFC") === second.normalize("NFC"));
```

Çıktı sırasıyla `false`, `true`.

## Empty Input

```js
function tokenize(text) {
  if (text === "") {
    return [];
  }
  return text.split(/\s+/);
}

console.log(tokenize(""));
console.log(tokenize("iki   kelime"));
```

Çıktı: `[]` ve `["iki", "kelime"]`.

## Pipeline Kaydı

```js
function summarize(rawText) {
  const displayText = rawText.trim().normalize("NFC");
  const searchText = displayText.toLocaleLowerCase("tr-TR");
  const tokens = searchText === "" ? [] : searchText.split(/\s+/);

  return {
    rawText,
    displayText,
    searchText,
    tokens,
    tokenCount: tokens.length,
  };
}
```

Her alan farklı bir kanıt taşır; biri diğerinin gereksiz kopyası değildir.
