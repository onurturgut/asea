# Hata Ayıklama

## Vaka: yüzde 100 yanlış status üretiyor

```js
function determineStatus(completionPercentage) {
  if (completionPercentage >= 80) return "on-track";
  if (completionPercentage === 100) return "completed";
  return "in-progress";
}
```

### Symptom

100 input'u `on-track` döndürür; syntax ve 80 testi geçer.

### Smallest failing input

`determineStatus(100)`.

### Cause

Genel `>= 80` dalı özel `=== 100` dalından önce return eder.

### Etkilenen iz

`REQ-05 → determineStatus → T-03`.

### Düzeltme ve prevention

Özel koşulu öne alın; 79, 80, 99 ve 100 testlerini birlikte çalıştırın. Review
checklist'e overlapping condition order maddesi ekleyin.
