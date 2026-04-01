# vibe-to-ship

바이브코딩에서 배포까지 — AI 풀사이클 워크숍

## 소개

AI 바이브코딩 도구로 웹앱을 만들고, 데이터베이스를 연결하고, 코드를 개선하고, 배포하는 **전체 사이클**을 경험하는 워크숍 교재입니다.

```
Lovable (프로토타입) → DB 연동 → GitHub → Claude Code (개선) → 배포
```

- 오전: 가이드를 따라 풀사이클 1회전
- 오후: 같은 사이클로 내 업무 앱 직접 만들기

## 기술 스택

- [Nextra 4](https://nextra.site/) + [Next.js 15](https://nextjs.org/)
- TypeScript
- Vercel 배포

## 로컬 실행

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## 콘텐츠 구조

```
content/
├── index.mdx                   # 홈 (타임라인 + 사전 준비)
├── morning/                    # 오전: 풀사이클 체험
│   ├── step-1-lovable.mdx      #   Lovable 프로토타이핑
│   ├── step-2-db.mdx           #   DB 연동 (Lovable Cloud)
│   ├── step-3-claude-code.mdx  #   GitHub → Claude Code
│   └── step-4-deploy.mdx       #   배포 + 교차 체험
├── afternoon/                  # 오후: 내 업무 앱
│   ├── project-define.mdx      #   프로젝트 정의
│   ├── sprint-1.mdx            #   스프린트 1: Lovable MVP
│   ├── sprint-2.mdx            #   스프린트 2: DB + 기능 확장
│   ├── sprint-3.mdx            #   스프린트 3: Claude Code + 배포
│   └── demo.mdx                #   조간 데모 + 클로징
└── reference/                  # 참고 자료
    └── index.mdx               #   도구 가이드
```
