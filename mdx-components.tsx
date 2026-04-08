import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { Callout, Mermaid } from 'nextra/components'
import type { ComponentProps } from 'react'

const docsComponents = getDocsMDXComponents()

// Notion-style default emojis per Callout type.
// Nextra's default uses GitHub-flavored SVG icons; we replace with real emojis
// so callouts feel like Notion blocks across the entire site.
const defaultEmojiByType: Record<string, string> = {
  default: '💡',
  info: 'ℹ️',
  warning: '⚠️',
  error: '🚫',
  important: '📌'
}

function NotionCallout({
  type = 'default',
  emoji,
  ...rest
}: ComponentProps<typeof Callout>) {
  const finalEmoji = emoji ?? defaultEmojiByType[type] ?? '💡'
  return <Callout type={type} emoji={finalEmoji} {...rest} />
}

export function useMDXComponents(components?: Record<string, unknown>) {
  return {
    ...docsComponents,
    Mermaid,
    Callout: NotionCallout,
    ...components
  }
}
