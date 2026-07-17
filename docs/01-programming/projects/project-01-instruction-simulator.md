---
document_type: "project"
project_id: "V01-P01"
project_type: "Mini Project"
title: "Instruction Simulator"
version: "0.1.0"
status: "Draft"
volume_id: "V01"
difficulty: "Beginner"
estimated_time: "6-8 hours"
prerequisites:
  - "V01-C04"
learning_outcomes:
  - "V01-LO001"
  - "V01-LO002"
  - "V01-LO003"
  - "V01-LO004"
  - "V01-LO005"
  - "V01-LO006"
assessment_id: "V01-AS010"
allowed_technologies:
  - "pseudocode"
  - "plain-text-trace-tables"
  - "language-taught-through-v01-c04"
deliverables:
  - "project-specification"
  - "implementation"
  - "test-evidence"
  - "decision-log"
---

# Instruction Simulator

## Goal

Kesin bir talimat dilini okuyup küçük bir sanal karakterin konum ve yön durumunu adım adım değiştiren, sonucu ve execution trace'i üreten bir program tasarlamak. Chapter 01 yalnızca kavram ve talimat sözleşmesi kilometre taşını sağlar; tam uygulama `V01-C04` tamamlandıktan sonra başlar.

## Scope

Girdi, satır başına bir talimat içerir: `MOVE`, `TURN_LEFT`, `TURN_RIGHT`, `REPORT`. Sanal alan sınırlıdır. Program her adımda konum ve yönü kaydeder. Dosya sistemi, ağ, grafik arayüz veya framework kapsam dışıdır.

## Features

- Başlangıç konumu ve yönü
- Dört komutun kesin sözleşmesi
- Sınır dışına çıkmayı engelleyen davranış
- Bilinmeyen komutta açıklayıcı hata
- Adım adım trace
- Son durum raporu

## Technical Requirements

- Önce dil bağımsız pseudocode ve durum tablosu hazırlanır.
- Uygulama yalnızca Chapter 04'e kadar öğretilen dil özelliklerini kullanır.
- En az sekiz test: normal, dönüş, sınır, boş girdi ve bilinmeyen komut dâhil.
- Her test beklenen ve gerçek sonucu kaydeder.
- Program aynı başlangıç durumu ve komutlarda deterministik sonuç üretir.

## Constraints

- Haricî paket yoktur.
- Kalıcı veri yoktur.
- Öğretilmemiş nesne yönelimli tasarım veya async özellik zorunlu değildir.
- AI, ilk algoritma ve testler tamamlanmadan çözüm üretmek için kullanılmaz.

## Deliverables

1. Gereksinim ve komut sözleşmesi
2. Pseudocode
3. Çalıştırılabilir uygulama
4. Sekiz test ve sonuçları
5. En az üç karar içeren decision log
6. Kullanım ve doğrulama açıklaması

## Evaluation

| Boyut | Ağırlık |
|---|---:|
| Gereksinim ve komut kesinliği | %20 |
| Davranış doğruluğu | %30 |
| Test kanıtı | %25 |
| Trace açıklığı | %15 |
| Karar gerekçesi | %10 |

## References

- [What Is Programming?](../chapters/01-what-is-programming.md)
- [Volume 01 Project Plan](../projects.md)
- [Volume 01 Assessment Plan](../assessment.md)
