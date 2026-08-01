# Örnekler

## Ölçülemeyen istekten kritere

“İlerlemeyi güzel göster” yerine:

```text
Given 100 planlanan ve 80 tamamlanan dakika
When haftalık özet üretildiğinde
Then completionPercentage 80 ve status "on-track" olmalıdır
```

## Modüler orkestrasyon

```js
function createWeeklySummary(tasks) {
  validateTasks(tasks);
  const totals = calculateTotals(tasks);
  const completionPercentage = calculatePercentage(totals);
  return {
    ...totals,
    completionPercentage,
    status: determineStatus(completionPercentage),
  };
}
```

Ana fonksiyon iş sırasını gösterir; doğrulama, hesap ve karar ayrı kanıtlanır.

## İzlenebilirlik

`REQ-05 → özel eşik önce → determineStatus → T-01/T-02/T-03 → review sonucu`
zinciri, gereksinimin yalnız yazılmadığını ve gerçekten doğrulandığını gösterir.
