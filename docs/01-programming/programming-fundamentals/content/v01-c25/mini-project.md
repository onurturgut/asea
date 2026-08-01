# Mini Proje — Debugging Dossier Oluşturucu

Kullanıcıdan symptom, expected, observed, steps, input summary, environment ve
hypotheses alanlarını alan küçük bir JavaScript aracı yazın.

Her hipotez `id`, `statement`, `experiment`, `expectedEvidence`, `actualEvidence`
ve `status` taşısın. Araç en az üç hipotez olmadan “root cause ready” sonucu
vermemeli; elenen hipotezlerin kanıtını korumalıdır. Hassas ham girdiyi kaydetmek
yerine güvenli özet alın.
