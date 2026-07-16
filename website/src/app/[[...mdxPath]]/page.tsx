import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata({
  params
}: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const { mdxPath } = await params
  const { metadata } = await importPage(mdxPath)
  return metadata
}

export default async function Page({
  params
}: {
  params: Promise<{ mdxPath?: string[] }>
}) {
  const resolvedParams = await params
  const { default: MDXContent, toc, metadata } = await importPage(
    resolvedParams.mdxPath
  )
  const Wrapper = getMDXComponents().wrapper

  if (!Wrapper) {
    throw new Error('Nextra MDX wrapper is not available.')
  }

  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent params={resolvedParams} />
    </Wrapper>
  )
}
