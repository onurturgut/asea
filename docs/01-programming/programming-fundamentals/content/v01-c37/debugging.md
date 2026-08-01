---
document_type: "debugging"
document_id: "V01-C37-DBG01"
chapter_id: "V01-C37"
---
# C37 Hata Avı

```js
// state.js
export const state = { completed: 0 };
```

```js
// view.js
import { state } from "./state.js";
state.completed += 1;
```

Sorun import binding'in yeniden atanması değil, exported object'in içinin herkesçe
değiştirilebilmesidir. State sahibinde `advance()` tanımlayın; tüketiciye dondurulmuş
snapshot verin. Ardından iki modülün birbirini import ettiği bir örnekte cycle'ı üçüncü
bir domain modülü çıkararak kırın.
