import { close, createIndex } from 'pagefind'

const sourcePath = '.next/server/app'
const outputPath = 'public/_pagefind'

const { errors, index } = await createIndex({
  rootSelector: '[data-pagefind-body]'
})

if (errors.length > 0 || !index) {
  throw new Error(`Pagefind başlatılamadı: ${errors.join(', ')}`)
}

try {
  const result = await index.addDirectory({ path: sourcePath })

  if (result.errors.length > 0) {
    throw new Error(`Pagefind indeksleme hatası: ${result.errors.join(', ')}`)
  }

  if (result.page_count === 0) {
    console.log('Pagefind: Henüz indekslenecek dokümantasyon içeriği yok.')
  } else {
    const written = await index.writeFiles({ outputPath })

    if (written.errors.length > 0) {
      throw new Error(`Pagefind yazma hatası: ${written.errors.join(', ')}`)
    }

    console.log(`Pagefind: ${result.page_count} sayfa indekslendi.`)
  }
} finally {
  await close()
}
