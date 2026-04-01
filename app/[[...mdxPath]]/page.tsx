import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from 'nextra-theme-docs'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props: {
  params: Promise<{ mdxPath: string[] }>
}) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

export default async function Page(props: {
  params: Promise<{ mdxPath: string[] }>
}) {
  const params = await props.params
  const { default: MDXContent, metadata, toc, sourceCode } = await importPage(params.mdxPath)
  const Wrapper = useMDXComponents({}).wrapper as React.FC<any>
  if (Wrapper) {
    return (
      <Wrapper metadata={metadata} toc={toc} sourceCode={sourceCode}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )
  }
  return <MDXContent {...props} params={params} />
}
