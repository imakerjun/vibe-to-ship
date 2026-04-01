import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Mermaid } from 'nextra/components'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...docsComponents,
    Mermaid,
    ...components
  }
}
