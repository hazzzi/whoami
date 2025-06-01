# 🧑‍💻 whoami

> "whoami"는 당신의 정체성을 감성 있게 표현할 수 있는 **웹 명함 생성기**입니다.

CLI 스타일, Notion 스타일, VSCode 스타일 등 **감성 충만한 테마**로  
자기소개를 만들고, 복사해서 트위터, 디스코드, README 어디든 붙일 수 있어요.

## ✨ 주요 기능

- 다양한 테마 선택: Terminal / Notion / VSCode / Web3 Hacker 등
- 이름, 직함, 소개글, 링크 커스터마이징
- Markdown / HTML 복사 버튼
- 폰트 및 컬러 자동 적용
- 완전 클라이언트 기반, 배포 즉시 사용 가능

## 🧱 기술 스택

| 구성 요소 | 설명 |
|-----------|------|
| **React** | 컴포넌트 UI |
| **TypeScript** | 타입 안정성 |
| **Tailwind CSS** | 빠른 테마별 스타일 구성 |
| **Zustand** | 커스터마이징 상태 관리 |
| **Vite** | 빠른 개발 서버 |

## 🚀 시작 방법

### 1. 의존성 설치
```bash
pnpm install
# 또는
npm install
```

### 2. 개발 서버 실행
```bash
pnpm dev
# 또는
npm run dev
```

### 3. 빌드
```bash
pnpm build
# 또는
npm run build
```

## 📁 폴더 구조
```
src/
  ├─ App.tsx            # 메인 페이지
  ├─ main.tsx           # 앱 진입점
  ├─ index.css          # 글로벌 스타일
  ├─ themes/            # 테마별 카드 컴포넌트
  │   ├─ TerminalCard.tsx
  │   ├─ NotionCard.tsx
  │   ├─ VSCodeCard.tsx
  │   └─ Web3Card.tsx
  ├─ components/        # 공통 컴포넌트
  │   ├─ CardEditor.tsx
  │   ├─ ThemeSelector.tsx
  │   └─ ExportButtons.tsx
  └─ store/             # 상태 관리
      └─ useCardStore.ts
```

## 📌 사용 예시
```
$ whoami
> haeun
> Frontend Engineer
> https://haeun.dev
```

## 🎨 테마 소개

### 💻 Terminal
해커 감성의 터미널 스타일로, CLI 환경을 재현합니다.

### 📝 Notion  
깔끔하고 모던한 Notion 문서 스타일입니다.

### 👨‍💻 VSCode
개발자를 위한 VSCode 에디터 스타일입니다.

### 🔗 Web3
미래지향적인 블록체인/Web3 해커 스타일입니다.

## 🧩 향후 기능 제안
- [ ] 명함 PNG 다운로드
- [ ] 공유용 URL 슬러그 (?user=haeun)
- [ ] Twitter Card용 메타 태그
- [ ] "랜덤 감성 생성" 버튼
- [ ] 추가 테마 (Matrix, Cyberpunk 등)

## 🤝 기여하기

1. 이 레포지토리를 Fork 하세요
2. 새로운 기능 브랜치를 만드세요 (`git checkout -b feature/새기능`)
3. 변경사항을 커밋하세요 (`git commit -am '새 기능 추가'`)
4. 브랜치에 Push 하세요 (`git push origin feature/새기능`)
5. Pull Request를 만드세요

## 📄 라이선스

MIT License

## 🎨 아이콘 추천
🧑‍💻 개발자용 명차  
🪪 Identification 느낌  
👾 해커 감성용  
🔗 링크와 연결된 정체성  

---

*"명함 하나에도, 정체성이 담긴다." — whoami*