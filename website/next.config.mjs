import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: true
  },
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'github-dark',
        light: 'github-light'
      }
    }
  }
})

const nextConfig = withNextra({
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.tsx'
    }
  }
})

const legacyTurbopack = nextConfig.experimental?.turbo

if (legacyTurbopack) {
  nextConfig.turbopack = {
    ...legacyTurbopack,
    ...nextConfig.turbopack,
    rules: {
      ...legacyTurbopack.rules,
      ...nextConfig.turbopack?.rules
    },
    resolveAlias: {
      ...legacyTurbopack.resolveAlias,
      ...nextConfig.turbopack?.resolveAlias
    }
  }

  const experimental = { ...nextConfig.experimental }
  delete experimental.turbo
  nextConfig.experimental = experimental
}

export default nextConfig
