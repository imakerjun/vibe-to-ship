import type { ReactNode } from 'react'

type ToggleProps = {
  title: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

export function Toggle({ title, children, defaultOpen = false }: ToggleProps) {
  return (
    <details className="notion-toggle" open={defaultOpen}>
      <summary>{title}</summary>
      <div className="notion-toggle-body">{children}</div>
    </details>
  )
}
