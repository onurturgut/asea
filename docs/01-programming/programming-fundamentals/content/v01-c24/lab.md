---
document_type: "lab"
document_id: "V01-C24-L01"
chapter_id: "V01-C24"
title: "Failure'ı Sınıflandır ve Sınırla"
---

# Lab — Failure'ı Sınıflandır ve Sınırla

## Senaryo

Küçük bir ASEA ilerleme uygulamasında syntax, runtime, logic, contract ve
environmental failure örnekleri bulunmaktadır.

## Görevler

1. Her olay için beklenen, gözlenen, girdi ve ortam kanıtını yazın.
2. Birincil failure sınıfını ve varsa ikincil etkisini belirleyin.
3. Kusurdan kullanıcı belirtisine propagation path çizin.
4. Bir input boundary için çalışan error contract uygulayın.
5. Kullanıcı mesajı, diagnostic bağlam ve recovery policy'yi ayırın.
6. Düzeltme sonrası güvenli veri değişmezini kanıtlayın.

Teslimde normal, boundary ve invalid örneklerin çalışma izleri bulunmalıdır.
Bonus: fail-fast ile graceful degradation seçeneklerini bağlama göre karşılaştırın.
