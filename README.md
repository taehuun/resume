# 김태훈 · 웹 이력서

> 백엔드 개발자 김태훈의 웹 이력서입니다.
> 프레임워크·번들러·패키지 매니저 없이 **HTML5 · CSS3 · Vanilla JavaScript(ES2020)** 만으로 직접 만들었습니다.

🔗 **Live** — https://taehuun.github.io/resume/

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=githubpages&logoColor=white)
![Dependencies](https://img.shields.io/badge/dependencies-0-3158EF?style=flat)

---

## 목차
1. [한눈에 보기](#1-한눈에-보기)
2. [기술 스택](#2-기술-스택)
3. [아키텍처](#3-아키텍처)
4. [HTML](#4-html)
5. [CSS](#5-css)
6. [JavaScript](#6-javascript)
7. [이미지 · 에셋 처리](#7-이미지--에셋-처리)
8. [반응형 · 접근성 · 인쇄](#8-반응형--접근성--인쇄)
9. [개발 환경 · 배포](#9-개발-환경--배포)
10. [폴더 구조](#10-폴더-구조)
11. [설계하면서 내린 결정들](#11-설계하면서-내린-결정들)
12. [알려진 한계 · 다음에 할 일](#12-알려진-한계--다음에-할-일)

---

## 1. 한눈에 보기

| 항목 | 내용 |
|---|---|
| 형태 | 단일 페이지 정적 사이트 (SPA 아님 — 앵커 이동 방식의 원페이지) |
| 런타임 의존성 | **0개** (외부 리소스는 Google Fonts만 사용) |
| 빌드 과정 | 없음 — 저장소 파일이 그대로 배포됨 |
| 코드 규모 | HTML 353줄 · CSS 431줄(화면 384 + 인쇄 47) · JS 289줄(로직 181 + 데이터 108) |
| 호스팅 | GitHub Pages (`main` 브랜치 루트, HTTPS 강제) |
| 디자인 레퍼런스 | [ugckorea.com](https://ugckorea.com)의 톤(블루 그라데이션 · 네이비 · DM Sans)을 참고, 브랜드 요소는 쓰지 않음 |

**페이지 구성**

`Nav` → `Hero` → `Profile` → `숫자로 보는 김태훈` → `Career` → `Projects(캐러셀 + 모달)` → `Live Screens(마퀴)` → `Research(학사 논문)` → `How I Work` → `Skills` → `Education` → `FAQ` → `Contact` → `Footer`

---

## 2. 기술 스택

| 영역 | 사용 기술 | 비고 |
|---|---|---|
| 마크업 | HTML5 시맨틱 태그 | `header` · `nav` · `main` · `section` · `article` · `footer` · `details/summary` · `figure` |
| 스타일 | CSS3 | Custom Properties, Grid, Flexbox, `clamp()`, Scroll Snap, `backdrop-filter`, `mask-image`, `@keyframes`, `@media print` |
| 스크립트 | Vanilla JavaScript (ES2020) | IIFE 모듈 패턴, Template Literal 렌더링, Pointer Events, `requestAnimationFrame` |
| 폰트 | Google Fonts — **DM Sans**(영문·숫자) + **Noto Sans KR**(한글) | `preconnect` + `display=swap` |
| 아이콘 | 인라인 SVG(파비콘, data URI) · 유니코드 기호 | 아이콘 라이브러리 미사용 |
| 이미지 처리 | PowerShell + .NET `System.Drawing` | 리사이즈, JPEG 재압축(품질 80~88), EXIF 제거 |
| 로컬 서버 | PowerShell `System.Net.HttpListener` (`serve.ps1`) | Node.js · Python 없이 미리보기 |
| 버전 관리 | Git · GitHub CLI(`gh`) | 저장소 생성, push, Pages 활성화까지 CLI로 처리 |
| 배포 | GitHub Pages | `gh api repos/{owner}/resume/pages`로 활성화 |

---

## 3. 아키텍처

```
┌──────────────────────── index.html ────────────────────────┐
│  정적 섹션 (Hero · Career · Research · Skills · FAQ …)       │
│  빈 컨테이너  #projectRail   #showcaseTrack   #modal          │
└───────────────▲───────────────────────────▲─────────────────┘
                │ 렌더링                      │ 이벤트
┌───────────────┴──────────┐     ┌──────────┴────────────────┐
│ js/data.js               │ ──▶ │ js/main.js                │
│ window.PROJECTS = [ … ]  │     │ · 카드 / 모달 / 마퀴 렌더  │
│ (프로젝트 데이터만 보관)   │     │ · 캐러셀 드래그            │
└──────────────────────────┘     │ · 스크롤 등장 · 카운트업    │
                                 │ · 내비 활성화 · 재직기간    │
                                 └───────────────────────────┘
┌──────────────── css/style.css ──────────────┐ ┌─ css/print.css ─┐
│ :root 디자인 토큰 → 컴포넌트 → 반응형 → 모션 │ │ A4 PDF 레이아웃 │
└─────────────────────────────────────────────┘ └─────────────────┘
```

- **데이터와 화면의 분리**: 프로젝트 정보(제목, 기간, 역할, 성과, 스택, 갤러리)는 `js/data.js`에만 있습니다. 프로젝트를 추가하거나 고칠 때 HTML을 건드리지 않고 객체 하나만 추가하면 카드 · 모달 · 화면 갤러리에 자동으로 반영됩니다. 백엔드에서 API 응답(DTO)과 뷰를 나누는 것과 같은 생각입니다.
- **전역 오염 최소화**: `main.js`는 즉시 실행 함수(IIFE) + `"use strict"`로 감싸 전역 변수를 만들지 않습니다. 전역에 노출되는 것은 데이터(`window.PROJECTS`) 하나뿐입니다.
- **`fetch` 대신 `<script>` 데이터**: JSON을 `fetch`하면 `file://`로 열 때 CORS로 막힙니다. 데이터를 JS 파일로 두어 파일을 더블클릭해도, 서버로 열어도 똑같이 동작하게 했습니다.

---

## 4. HTML

| 기법 | 적용 위치 | 이유 |
|---|---|---|
| 시맨틱 구조 | 섹션마다 `section` + `aria-label` 또는 제목 | 스크린리더 탐색, 검색엔진 구조 파악 |
| `details` / `summary` | FAQ 아코디언 | JS 없이 열고 닫기, 키보드 기본 지원 |
| `role="dialog"` · `aria-modal` · `aria-labelledby` | 프로젝트 상세 모달 | 보조기기에 모달임을 알림 |
| `loading="lazy"` | 카드 썸네일, 모달 갤러리, 마퀴 이미지 | 첫 화면 밖 GIF(수 MB)를 지연 로드 |
| `onerror="this.remove()"` | 프로필 사진 | 사진이 없으면 이미지만 제거하고 아래 "TH" 이니셜이 보이게 함 |
| Open Graph 메타태그 | `<head>` | 카카오톡 · 슬랙에 링크를 붙였을 때 제목/설명 미리보기 |
| SVG data URI 파비콘 | `<link rel="icon">` | 파일 추가 없이 브랜드 그라데이션 아이콘 |
| `tel:` · `mailto:` 링크 | 프로필, Contact | 모바일에서 바로 전화 · 메일 |
| `rel="noopener"` | 모든 외부 링크 | 새 탭에서 `window.opener` 접근 차단 |

---

## 5. CSS

### 5-1. 디자인 토큰 (`:root`)

모든 색 · 반경 · 그림자 · 폰트를 CSS 변수로 한 곳에서 관리합니다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `--brand` | `#3158EF` | 강조 텍스트, 링크, 활성 메뉴 |
| `--grad` | `linear-gradient(105deg, #315FF4, #4169F5 45%, #3B36CC)` | 주요 버튼, 그라데이션 텍스트, 아바타 |
| `--ink` / `--muted` | `#17171A` / `#82828E` | 본문 / 보조 텍스트 |
| `--navy` | `#192333` | 숫자 카드, Elo 공식 카드 |
| `--tint` / `--line` | `#F6F7FB` / `#E6E6EA` | 섹션 배경 / 구분선 |
| `--radius` · `--radius-sm` | `20px` · `13px` | 카드 · 버튼 모서리 |
| `--shadow-brand` | inset 하이라이트 + 블루 글로우 | 그라데이션 버튼 입체감 |
| `--container` | `1160px` | 최대 콘텐츠 폭 |

### 5-2. 레이아웃 · 타이포

- **Grid**: 숫자 카드(5열 → 3열 → 2열), 경력 카드(사이드 280px + 본문), 고객사 · 스킬 · 학력 · FAQ · 푸터
- **Flexbox**: 내비게이션, 버튼 그룹, 프로필 줄, 태그 목록
- **유동 타이포그래피**: `font-size: clamp(38px, 6.2vw, 64px)`처럼 화면 폭에 따라 미디어쿼리 없이 제목 크기가 바뀝니다.
- **한글 줄바꿈**: `word-break: keep-all`로 단어 중간이 잘리지 않게 했습니다.
- **숫자 정렬**: 날짜 · 통계에 `font-variant-numeric: tabular-nums`(고정폭 숫자)

### 5-3. 효과

| 효과 | 구현 |
|---|---|
| 그라데이션 텍스트 | `background: var(--grad)` + `background-clip: text` + `color: transparent` |
| 반투명 고정 내비 | `position: sticky` + `backdrop-filter: saturate(180%) blur(14px)`, 스크롤 시 하단 선 표시 |
| 떠다니는 기술 태그 | CSS 변수(`--x`, `--y`, `--d`)로 위치 · 지연을 태그마다 다르게 주고 `@keyframes float` |
| 프로젝트 캐러셀 | `overflow-x: auto` + `scroll-snap-type: x mandatory`, 스크롤바 숨김, 좌우 여백을 `max()`/`calc()`로 컨테이너에 정렬 |
| 무한 마퀴 | 트랙을 두 벌 이어 붙이고 `translateX(-50%)` 애니메이션, 양끝은 `mask-image` 그라데이션으로 페이드, 마우스를 올리면 일시정지 |
| 모달 | 배경 `backdrop-filter: blur`, 패널은 `cubic-bezier` 상승 애니메이션, 모바일에서는 바텀시트 형태 |
| 스크롤 등장 | `.js .reveal { opacity:0; transform:translateY(24px) }` → `.is-in`에서 원위치. **JS가 꺼져 있으면 `.js` 클래스가 없어 내용이 그대로 보임** |

---

## 6. JavaScript

`js/main.js` 한 파일, 기능별로 나뉘어 있습니다.

| 기능 | 구현 방식 |
|---|---|
| **프로젝트 카드 렌더링** | `PROJECTS.map()` + Template Literal로 HTML 문자열을 만들어 한 번에 `innerHTML` (DOM 조작 1회) |
| **캐러셀 이동** | 이전/다음 버튼은 카드 폭 + gap만큼 `scrollBy({ behavior: "smooth" })` |
| **마우스 드래그** | Pointer Events(`pointerdown/move/up`). 마우스일 때만 동작하고 터치는 브라우저 기본 스크롤에 맡김. 5px 이상 움직이면 드래그로 보고, 드래그 직후의 클릭 한 번을 캡처 단계에서 막아 모달이 잘못 열리지 않게 함 |
| **프로젝트 모달** | 이벤트 위임(레일에 리스너 1개), 열 때 `body` 스크롤 잠금 + 닫기 버튼 포커스, 닫을 때 원래 카드로 포커스 복귀, `Esc` · 배경 클릭으로 닫기 |
| **실제 화면 마퀴** | 각 프로젝트 갤러리에서 ERD · 아키텍처를 뺀 화면만 모아 렌더. 무한 루프용 복제본은 `alt=""` + `aria-hidden`으로 스크린리더에 두 번 읽히지 않게 함 |
| **숫자 카운트업** | `requestAnimationFrame` + easeOutCubic(`1 - (1-k)^3`), 1.4초. 소수점 자릿수(`data-decimals`)와 천 단위 구분(`data-sep`, `toLocaleString("ko-KR")`) 지원. 탭이 백그라운드라 rAF가 멈춰도 `setTimeout`으로 최종 값을 반드시 표시 |
| **스크롤 등장** | 스크롤 이벤트를 60ms로 묶고(throttle) `getBoundingClientRect()`로 화면 92% 안에 들어온 요소만 `is-in` 처리, 다 보이면 리스너 해제. 순서대로 0/60/120/180ms 지연을 줘 계단식으로 등장 |
| **재직 기간 자동 계산** | `data-tenure="2024-08"`과 오늘 날짜로 "재직 N년 M개월"을 계산 — 시간이 지나도 고칠 필요 없음 |
| **내비게이션 상태** | 스크롤 위치로 현재 섹션을 찾아 메뉴에 `is-active`, 8px 이상 내리면 내비에 하단 선 |
| **인쇄 대비** | `beforeprint` 이벤트에서 아직 안 보인 요소를 모두 펼쳐 PDF에 빠짐없이 출력 |

---

## 7. 이미지 · 에셋 처리

| 단계 | 내용 |
|---|---|
| 수집 | 각 프로젝트 GitHub 저장소(README · `wiki/` · `images/` · `exec/`)에 있던 원본 화면을 사용 |
| 리사이즈 | PowerShell + `System.Drawing`으로 가로 최대 1200~1400px, 고품질 바이큐빅 보간 |
| 압축 | JPEG 품질 80 (예: 동글이 화면 5,020KB → 218KB, ERD 573KB → 85KB) |
| 개인정보 | 프로필 사진은 다시 인코딩해 카메라 기종 등 EXIF 메타데이터 제거 (117KB → 26KB) |
| GIF | 애니메이션 유지를 위해 원본을 그대로 두고 `loading="lazy"`로 지연 로드 |
| 정리 | 사이트에서 쓰지 않는 이미지는 저장소에서 제외 |

에셋 용량: 총 약 8.6MB (3D Body 4.8MB · 동글이 2.5MB · BizCard 1.1MB · 마인부우동산 0.2MB) — 대부분 GIF입니다.

---

## 8. 반응형 · 접근성 · 인쇄

### 반응형
| 구간 | 변화 |
|---|---|
| `> 1024px` | 숫자 5열, 경력 2단, 논문 2단, 스킬 3열 |
| `≤ 1024px` | 숫자 3열, 경력 · 논문 1단, 스킬 2열 |
| `≤ 768px` | 메뉴 숨김, 기술 태그 2개만 표시, 숫자 2열, 모든 그리드 1열, 캐러셀 버튼 대신 스와이프, 모달은 바텀시트, 좌우 여백 16px |

375px(아이폰 SE~14 폭)에서 **가로 스크롤이 생기지 않는 것**을 확인했습니다.

### 접근성
- `prefers-reduced-motion: reduce`이면 모든 애니메이션 · 전환을 끄고 숫자도 바로 최종 값으로 표시
- 모달 열고 닫을 때 포커스 이동 · 복귀, `Esc` 닫기
- 카드는 `<button>`이라 키보드(Tab → Enter)로 열 수 있음
- 장식용 요소(떠다니는 태그, 마퀴 복제본)는 `aria-hidden`
- 이미지마다 `alt` 제공

### 인쇄 / PDF (`css/print.css`)
- `@page { size: A4; margin: 14mm 12mm }`
- 내비 · 버튼 · 마퀴 · 모달 · FAQ 숨김, 애니메이션 제거
- 가로 캐러셀을 **2열 그리드**로 바꿔 모든 프로젝트가 종이에 나오게 함
- 카드가 페이지 중간에서 잘리지 않게 `break-inside: avoid`
- `print-color-adjust: exact`로 네이비 카드 · 그라데이션 색 유지

> Chrome → `Ctrl + P` → 대상 **PDF로 저장** → 설정 더보기 → **배경 그래픽** 체크

---

## 9. 개발 환경 · 배포

### 로컬 미리보기
Node.js나 Python 없이 Windows 기본 PowerShell만으로 정적 서버를 띄웁니다. (`serve.ps1`, 18줄)

```bash
powershell -ExecutionPolicy Bypass -File serve.ps1
```
→ http://localhost:5500

- `System.Net.HttpListener`로 요청을 받아 확장자별 `Content-Type`을 붙여 응답
- 요청 경로를 `GetFullPath`로 정규화한 뒤 루트 폴더 밖이면 거부 → `../` 경로 탐색 차단

### 배포 (GitHub Pages)
```bash
gh repo create taehuun/resume --public --source . --remote origin --push
gh api -X POST repos/taehuun/resume/pages -f "source[branch]=main" -f "source[path]=/"
```
- `main`에 push하면 1~2분 안에 자동 재배포
- 빌드 상태 확인: `gh api repos/taehuun/resume/pages/builds/latest`
- 커밋 작성자 이메일은 GitHub `noreply` 주소를 사용

---

## 10. 폴더 구조

```
resume/
├─ index.html            페이지 마크업 (정적 섹션 + 렌더링 컨테이너)
├─ css/
│  ├─ style.css          디자인 토큰 → 컴포넌트 → 반응형 → 모션
│  └─ print.css          A4 PDF 출력용
├─ js/
│  ├─ data.js            프로젝트 데이터 (window.PROJECTS)
│  └─ main.js            렌더링 · 인터랙션
├─ assets/img/
│  ├─ profile.jpg        프로필 (EXIF 제거)
│  ├─ donggeuli/         동글이 화면 · ERD · 아키텍처
│  ├─ bizcard/           BizCard 화면 · OCR GIF
│  ├─ 3dbody/            3D Body 로고 · GIF
│  └─ mainboo/           마인부우동산 화면 · ERD
├─ docs/
│  ├─ source/portfolio.md  포트폴리오 PDF(35p) → Markdown 변환본
│  ├─ source/thesis.md     학사 논문 PDF → Markdown 변환본
│  └─ resume-content.md    페이지 원고
├─ PLAN.md               개발 계획서 (방식 비교, 디자인 분석, 일정)
├─ serve.ps1             로컬 정적 서버
└─ README.md
```

### 프로젝트 추가하기
`js/data.js`의 배열에 객체 하나를 추가하면 카드 · 모달 · 마퀴에 자동으로 나타납니다.

```js
{
  id: "new",
  badge: "🚀 배지 문구",
  title: "프로젝트명",
  subtitle: "한 줄 설명",
  period: "2026.01 – 2026.03",
  team: "4명",
  platform: "Web",
  thumb: "assets/img/new/thumb.jpg",
  fit: "contain",            // 로고처럼 잘리면 안 되는 썸네일일 때만
  repo: "https://github.com/…",
  role: ["담당 1", "담당 2"],
  highlights: ["성과 (<b>강조</b> 가능)"],
  stack: ["Spring Boot", "MySQL"],
  gallery: [{ src: "assets/img/new/1.gif", cap: "설명" }]
}
```

---

## 11. 설계하면서 내린 결정들

| 고민 | 선택 | 이유 |
|---|---|---|
| React/Next.js vs 순수 HTML | **순수 HTML · CSS · JS** | 콘텐츠 위주의 한 페이지라 프레임워크는 과함. 빌드 없이 바로 배포되고, 리뷰어가 코드를 처음부터 끝까지 읽기 쉬움 |
| JSON `fetch` vs JS 데이터 파일 | **JS 데이터 파일** | `file://`로 열어도 동작 (CORS 회피) |
| IntersectionObserver vs 스크롤 위치 계산 | **스크롤 위치 계산 + 스로틀** | 일부 임베드 뷰에서 IO 콜백이 오지 않아 내용이 안 보이는 문제를 실제로 겪음. 요소 35개 규모라 `getBoundingClientRect` 비용은 무시할 수준 |
| 카운트업이 rAF에만 의존 | **rAF + `setTimeout` 최종값 보장** | 백그라운드 탭에서는 rAF가 멈춰 숫자가 0으로 남을 수 있음 |
| 외부 레퍼런스 디자인 | **톤만 참고, 로고 · 문구 · 이미지는 미사용** | 표절로 보이지 않도록 브랜드는 "김태훈"으로 |
| 고객사 실무 화면 | **넣지 않음** | 병원 · 대학 ERP는 보안 대상이라 기관명과 담당 범위만 표기 |

---

## 12. 알려진 한계 · 다음에 할 일

- [ ] GIF(총 약 8MB)를 MP4/WebM `<video>`로 바꿔 용량을 크게 줄이기
- [ ] JPEG/PNG를 WebP/AVIF로 변환하고 `<picture>`로 대체 포맷 제공
- [ ] `og:image` 공유용 썸네일 추가 (지금은 링크 미리보기에 이미지가 없음)
- [ ] 다크 모드 (`prefers-color-scheme`)
- [ ] GitHub Actions로 HTML 검사 + Lighthouse CI
- [ ] 같은 데이터로 Next.js(SSG) 버전 만들어 프로젝트별 상세 페이지 분리

---

📮 xogns5@naver.com · 010-4151-7264 · [GitHub](https://github.com/taehuun) · [Blog](https://taehuun.tistory.com)
