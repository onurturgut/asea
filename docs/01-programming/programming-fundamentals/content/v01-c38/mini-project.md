---
document_type: "mini-project"
project_id: "V01-C38-MP01"
title: "Çalışma Oturumu CLI Raporlayıcı"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# Çalışma Oturumu CLI Raporlayıcı

## Ürün İhtiyacı

Bir öğrenci çalışma oturumunun adını, süresini ve tamamlanan soru sayısını
terminalden girecek. Program bu bilgileri yapılandırılmış bir rapor olarak
yazdıracak. Asıl ürün çıktısı yalnız rapor değil; başka bir geliştiricinin
çalıştırabileceği teslimat paketidir.

## Komut Sözleşmesi

```powershell
npm run session -- "JavaScript Runtime" 50 8
```

Beklenen çıktı:

```text
Konu: JavaScript Runtime
Süre: 50 dakika
Tamamlanan soru: 8
```

Komut satırında boşluk içeren konu adının tırnak içinde tek argüman olarak
verildiğine dikkat edin. Kabukların tırnak davranışında ayrıntılı farklılıklar
olabilir; proje yalnız yaygın kullanım sözleşmesini belgeler.

## Zorunlu Dosyalar

```text
study-session-cli/
├── session-report.js
├── package.json
├── README.md
├── expected-output.txt
├── runtime-record.md
└── troubleshooting.md
```

## Teknik Sınır

- Haricî bağımlılık yok.
- Tek entry point.
- Ham ve dönüştürülmüş değerler ayrı adlarda.
- En az iki normal çalışma örneği.
- Eksik ve sayısal olmayan girdi için gözlem kaydı.
- Doğrulama mantığı zorunlu değil; bu davranış C29 ve C10 sonrasında
  geliştirilecektir.

## Profesyonel Savunma

Teslimatta şu sorulara sözlü yanıt verin:

1. Hangi parça JavaScript diline, hangisi Node.js host'una ait?
2. Giriş noktası ve çalışma klasörü nasıl ilişkilidir?
3. `process.argv` indekslerini komuttan nasıl türettiniz?
4. Ham süreyi neden ayrı tuttunuz?
5. Çalışmanın yeniden üretilebilir olduğunu hangi kanıtlar gösteriyor?
6. Bir sonraki chapter'da hangi girdi sınırını sağlamlaştıracaksınız?
