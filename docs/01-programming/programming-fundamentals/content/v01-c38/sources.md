---
document_type: "source-map"
document_id: "V01-C38-SRC01"
title: "V01-C38 Kaynak Haritası"
version: "0.1.0"
status: "Draft"
chapter_id: "V01-C38"
---

# V01-C38 Kaynak Haritası

| Ders iddiası | Kaynak | Kullanım sınırı |
|---|---|---|
| Engine ve host sorumlulukları ayrıdır | [MDN Execution Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) | İç engine mimarisi öğretilmez |
| Runtime/host girdi-çıktı imkânları sağlar | [MDN Language Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview) | Tarayıcı/Node API listesi ezberletilmez |
| `console` uygulaması ortama göre değişebilir | [MDN Console API](https://developer.mozilla.org/en-US/docs/Web/API/console) | Yaygın API, dil çekirdeği diye sunulmaz |
| Node CLI entry point ve argüman sözleşmesi | [Node.js CLI](https://nodejs.org/api/cli.html) | İleri CLI bayrakları kapsam dışı |
| `argv`, `cwd`, `exitCode` davranışı | [Node.js Process](https://nodejs.org/api/process.html) | Event loop ayrıntısı kapsam dışı |
| Desteklenen LTS kullanımı | [Node.js Releases](https://nodejs.org/en/about/previous-releases) | Sabit son sürüm iddiası yazılmaz |
| npm scripts ve paket kökü | [npm Scripts](https://docs.npmjs.com/cli/using-npm/scripts/) | Lifecycle ayrıntıları kapsam dışı |
| `--` sonrası argüman aktarımı | [npm run-script](https://docs.npmjs.com/cli/commands/npm-run-script/) | Yalnız start script örneği |

## İzlenebilirlik

- `V01-LO065`: MDN Execution Model, Language Overview, Console API.
- `V01-LO066`: Node.js CLI/Process/Releases ve npm Scripts/run-script.
- Teknik kararların ayrıntılı özeti:
  [Research Packet](../../research/v01-c38/research-packet.md).

ASEA metni kaynakların çevirisi değildir. Kaynaklar teknik sınırı doğrular;
öğrenci anlatısı, örnekler ve uygulama merdiveni özgün olarak üretilir.
