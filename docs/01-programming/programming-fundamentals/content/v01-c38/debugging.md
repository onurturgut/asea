---
document_type: "debugging-guide"
document_id: "V01-C38-DBG01"
title: "V01-C38 Hata Ayıklama Rehberi"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# V01-C38 Hata Ayıklama Rehberi

## Altı Kanıt Sırası

Bir program çalışmadığında aynı anda her şeyi değiştirmeyin:

1. **Runtime erişimi:** `node --version`
2. **Çalışma klasörü:** PowerShell `Get-Location`
3. **Dosya varlığı:** `Get-ChildItem`
4. **Tam komut:** Kopyalanabilir biçimde kaydedin
5. **Runtime girdisi:** Geçici olarak `console.log(process.argv)`
6. **Program davranışı:** İlk yanlış değer veya ilk hata satırı

## Belirti → Kök Neden Haritası

| Belirti | Önce bakılacak katman | Muhtemel kök neden |
|---|---|---|
| `node` tanınmıyor | Tool/runtime | Kurulum veya `PATH` |
| `Cannot find module` | Entry point/cwd | Yanlış klasör veya dosya adı |
| `SyntaxError` | Kaynak kod/dil | Geçersiz JavaScript |
| `document is not defined` | Host | Tarayıcı API'si Node'da kullanılmış |
| `process is not defined` | Host | Node API'si tarayıcıda kullanılmış |
| Değer dosya yolu çıktı | `argv` | `[0]` veya `[1]` kullanıcı girdisi sanılmış |
| `"855"` görüldü | Tür sınırı | String sayı gibi toplanmış |
| `NaN` görüldü | Dönüşüm girdisi | Metin sayısal dönüşüme uygun değil |
| Hata mesajı var, CI yeşil | Exit contract | Sıfır dışı exit status belirlenmemiş |

## Hata Kayıt Şablonu

```text
Beklenen:
Gerçekleşen:
Runtime sürümü:
Çalışma klasörü:
Tam komut:
İlk hata satırı:
Hata sınıfı (tool/entry/dil/host/girdi/iş mantığı):
En küçük yeniden üretim:
Kök neden:
En küçük düzeltme:
Yeniden çalışma kanıtı:
```

## Hata Avı Görevi

Şu dosyayı `node broken.js 50` ile çalıştırın:

```js
const rawScore = process.argv[1];
const finalScore = rawScore + 5;
console.log(document.title);
console.log(finalScore);
```

Birden fazla hata vardır. Hepsini aynı anda düzeltmeyin:

1. İlk gözlenen hatayı kaydedin.
2. Hangi katmana ait olduğunu belirleyin.
3. En küçük düzeltmeyi yapın.
4. Yeniden çalıştırın.
5. Sonraki hatayı aynı döngüyle ele alın.

Beklenen kök neden sırası: Node host'unda `document` yok; sonra yanlış `argv`
indeksi; sonra string dönüşüm sınırı. Hata sırası, kaynak satırlarının yürütme
sırasına bağlıdır.
