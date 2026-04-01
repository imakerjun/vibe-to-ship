import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './global.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'vibe-to-ship',
  description: '바이브코딩에서 배포까지 — AI 풀사이클 워크숍'
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const navbar = (
    <Navbar
      logo={
        <span className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            V
          </span>
          <span className="brand-text">
            <strong>vibe-to-ship</strong>
            <small>AI Full-Cycle Workshop</small>
          </span>
        </span>
      }
      projectLink="https://github.com/imakerjun/vibe-to-ship"
    >
      <ThemeSwitch lite className="navbar-theme-switch" />
    </Navbar>
  )
  const footer = (
    <Footer className="site-footer">
      <div className="footer-copy">
        <strong>vibe-to-ship</strong>
        <span>바이브코딩에서 배포까지, 풀사이클 실습 가이드</span>
      </div>
    </Footer>
  )
  const pageMap = await getPageMap()

  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/imakerjun/vibe-to-ship/tree/main"
          feedback={{ content: null }}
          editLink=""
          search={<Search placeholder="문서 검색" />}
          toc={{ title: '목차', backToTop: null }}
          sidebar={{ defaultMenuCollapseLevel: 2 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
