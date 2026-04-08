import type { ReactNode } from 'react'

type ColumnsProps = {
  cols?: 2 | 3
  children: ReactNode
}

export function Columns({ cols = 2, children }: ColumnsProps) {
  return <div className={`notion-columns cols-${cols}`}>{children}</div>
}
