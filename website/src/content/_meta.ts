import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: {
    display: 'hidden',
    theme: {
      breadcrumb: false,
      pagination: false,
      sidebar: false,
      timestamp: false,
      toc: false
    }
  },
  academy: {
    title: 'Academy',
    type: 'page'
  },
  volumes: {
    title: 'Volumes',
    type: 'page'
  },
  labs: {
    title: 'Labs',
    type: 'page'
  },
  projects: {
    title: 'Projects',
    type: 'page'
  },
  roadmap: {
    title: 'Roadmap',
    type: 'page'
  }
}

export default meta
