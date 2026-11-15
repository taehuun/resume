# 웹 이력서 개발 계획서 — UGC KOREA 지원용

작성일: 2026-11-15 · 대상: ugckorea.com (UGC 크리에이터·숏폼 플랫폼) 개발자 포지션

---

## 1. 결론: 어떤 방식으로 보낼 것인가

**추천: 순수 HTML/CSS/JS 한 장짜리 페이지 → GitHub Pages로 배포 → "링크 + 저장소 + PDF" 세 가지를 함께 전달**

| 방식 | 장점 | 단점 | 판단 |
|---|---|---|---|
| HTML 파일 첨부 | 간단함 | 메일 첨부 HTML은 보안상 열지 않거나 차단되는 경우가 많고, 이미지 경로가 깨짐 | ❌ |
| **정적 사이트 배포 (GitHub Pages)** | 클릭 한 번이면 열림, 모바일에서도 확인 가능, **저장소 자체가 "작업물"** | 배포 설정 10분 정도 | ✅ **추천** |
| Next.js/React로 제작 후 Vercel 배포 | UGC KOREA와 같은 스택(Next.js)이라 어필 가능 | 콘텐츠만 있는 페이지에 비해 과함, 제작 기간이 늘어남 | 2차 옵션 |

**왜 이 조합인가**
- 회사가 원한 건 "간단한 작업 내용"입니다. **배포된 링크 = 결과물**, **GitHub 저장소 = 코드 품질**, **PDF = 인사담당자용 보관본**으로 세 가지 필요를 한 번에 채웁니다.
- 프레임워크 없이 만들면 Lighthouse 100점에 가까운 성능, 빌드 없음, 코드가 짧아 리뷰어가 읽기 쉽습니다.
- `@media print` 스타일을 넣으면 같은 페이지에서 PDF가 바로 나옵니다(Chrome → 인쇄 → PDF로 저장).
- 2차로 Next.js 버전을 만들고 싶다면 같은 디자인 토큰과 섹션 구조를 그대로 옮기면 됩니다(아래 9장).

---

## 2. 레퍼런스 분석: ugckorea.com

브라우저로 직접 확인한 값입니다.

### 2.1 디자인 토큰
| 토큰 | 값 | 용도 |
|---|---|---|
| `--brand` | `#3158EF` (rgb 49,88,239) | 강조 텍스트, 링크 |
| `--brand-grad` | `linear-gradient(105deg, #315FF4 0%, #4169F5 45%, #3B36CC 100%)` | 주요 CTA 버튼 |
| `--ink` | `#17171A` | 본문/제목 |
| `--muted` | `#82828E` / `#797E89` | 보조 텍스트 |
| `--navy` | `#192333` | 숫자(stat) 카드 배경 |
| `--line` | `#DDDDDD` | 구분선 |
| `--bg` | `#FFFFFF` (페이지 바깥 `#EFEFEF`) | 배경 |
| 폰트 | `DM Sans` (영문/숫자) + `Noto Sans KR` (한글) | Google Fonts |
| H1 | 약 55px / 700 / letter-spacing −2.5px, 2줄 중 둘째 줄만 brand 색 | Hero |
| 버튼 | radius 13px, 600, 그림자 `0 10px 30px rgba(49,88,239,.19)` + inset 하이라이트 | CTA |

### 2.2 섹션 구성 → 이력서 섹션 매핑
| ugckorea 섹션 | 형태 | 이력서에서 쓰는 방식 |
|---|---|---|
| `onboarding-nav` | 고정 헤더, 로고 + 우측 링크 + 그라데이션 버튼 | 이름 로고 + 경력/프로젝트/스킬 앵커 + "PDF 받기" |
| `onboarding-hero` | pill 배지 → 2줄 큰 제목 → 부제 → CTA 2개 | 슬로건 + 한 줄 소개 + PDF/GitHub 버튼 |
| `home-community` | 크리에이터 아바타가 흩어진 배경 + "2,000명이 넘는…" | 기술 스택 아이콘이 흩어진 배경 + "N개 기술로…" |
| `home-campaigns` | 가로 스크롤 캠페인 카드 | **프로젝트 카드 캐러셀** (썸네일 + 태그 + 자세히 보기) |
| `onboarding-showcase` | 세로형 숏폼 카드 줄 | 프로젝트 스크린샷(앱 화면) 갤러리 |
| `onboarding-proof` | 다크 네이비 카드 + 큰 숫자 3개 | **숫자로 보는 김태훈** (4곳 / 96.19% / 2,000명 / 1등) |
| `home-story` | 2단 텍스트 + 이미지 | **엠지엘코리아 실무 경력** 상세 |
| `onboarding-how` | 1-2-3 단계 | 일하는 방식(요구사항 분석 → 구현 → 안정화) |
| `onboarding-faq` | 아코디언 | "면접관이 궁금해할 질문" |
| `onboarding-final` | 큰 문구 + CTA | "함께 만들 준비가 되어 있습니다" + 연락처 |
| `onboarding-footer` | 링크 그리드 | GitHub / 블로그 / 이메일 |
| 공통 | `scroll-reveal` 스크롤 등장 애니메이션 | IntersectionObserver로 같은 효과 |

### 2.3 하지 말 것
- UGC KOREA **로고·회사명·이미지·문구를 그대로 쓰지 않습니다.** 레이아웃·색감·타이포 *분위기*만 참고하고 브랜드는 "김태훈"으로 둡니다. (그대로 복제하면 표절로 보이고, 회사 쪽에서도 좋게 보지 않습니다.)
- 그 대신 상단에 작게 "For UGC KOREA" 같은 맞춤 문구를 넣어 이 회사를 위해 만든 페이지라는 점을 보여주는 건 좋습니다.

---

## 3. 콘텐츠

- 원본 → md 변환본: [docs/source/portfolio.md](docs/source/portfolio.md), [docs/source/thesis.md](docs/source/thesis.md)
- 페이지에 들어갈 원고(화려한 버전): [docs/resume-content.md](docs/resume-content.md)

**구성 순서 (최신·임팩트 순)**
1. Hero — "현장의 니즈를 읽고 / **코드로 완성합니다**"
2. 숫자 카드 — 4곳 · 2년+ · 96.19% · 2,000명 · 1등
3. 실무 경력 — 엠지엘코리아 (EMR/ERP 패키지, 대학병원 ERP 급여 4건, WYD 물류, DRM)
4. 외주 백엔드 — Node.js/Spring Boot 서버 7건
5. 프로젝트 카드 — 동글이 → BizCard → 3D Body → 마인부우동산 → HANTTEU(논문)
6. 기술 스택
7. 학력·교육·자격
8. FAQ
9. Final CTA

---

## 4. 기술 스택 & 구조

```
resume/                     ← GitHub 저장소: taehuun/resume
├─ index.html               ← 시맨틱 HTML, 섹션별 <section id>
├─ css/
│  ├─ tokens.css            ← 2.1의 디자인 토큰 (:root 변수)
│  ├─ base.css              ← 리셋, 타이포, 컨테이너
│  ├─ sections.css          ← hero / proof / cards / faq …
│  └─ print.css             ← PDF 출력용 (애니메이션 제거, 1단 배치)
├─ js/
│  ├─ reveal.js             ← IntersectionObserver 스크롤 등장
│  ├─ counter.js            ← 숫자 카운트업 (0 → 96.19)
│  ├─ carousel.js           ← 프로젝트 카드 가로 스크롤 + 드래그
│  └─ modal.js              ← 프로젝트 상세(ERD·아키텍처) 모달
├─ data/projects.json       ← 프로젝트 데이터 (카드를 JS로 렌더)
├─ assets/
│  ├─ img/projects/…        ← 썸네일·스크린샷 (WebP 변환)
│  ├─ img/profile.webp
│  └─ resume.pdf
└─ README.md                ← 제작 의도, 사용 기술, 스크린샷
```

- **의존성 0개**: 외부는 Google Fonts만 사용. 아이콘은 인라인 SVG.
- 프로젝트 카드는 `projects.json` → JS 렌더 방식으로 만들어 "데이터와 화면 분리"를 보여줍니다(백엔드 개발자 어필 포인트).
- 반응형: 1200px / 768px / 375px 세 구간. 모바일에서는 카드 캐러셀이 스와이프로 바뀝니다.
- 접근성·SEO: `alt`, `aria-expanded`(FAQ), Open Graph 메타태그(카톡·슬랙에 링크를 붙이면 미리보기 카드가 뜸).

---

## 5. 이미지 에셋 수급 계획

| 프로젝트 | 출처 | 필요한 이미지 |
|---|---|---|
| 동글이 | github.com/taehuun/donggeuli README, PDF p12~19 | 로고, 태블릿 화면 3장, 모델 구조도 |
| BizCard | github.com/taehuun/bizcard, PDF p5~10 | 로고, 노트북/모바일 목업, 아키텍처 |
| 3D Body | github.com/taehuun/3Dbody, PDF p21~26 | 로고, 3D 모델 화면, 아키텍처 |
| 마인부우동산 | github.com/taehuun/mainboodongsan, PDF p28~33 | 로고, 지도 화면 |
| HANTTEU | 논문 PDF p2~3 | 메인 화면, 랭킹 화면 |
| 프로필 | 포트폴리오 PDF p1~2 | 정장 증명사진 |

- 저장소 README에 이미지가 없으면 PDF 페이지를 캡처해서 잘라 씁니다.
- 모두 WebP, 가로 1200px 이하로 변환해 페이지 용량을 2MB 아래로 유지합니다.
- 엠지엘코리아 실무 화면은 **고객사 보안 문제로 쓰지 않고**, 도메인 아이콘 + 고객사 이름만 표시합니다.

---

## 6. 일정 (총 2~3일)

| 단계 | 작업 | 산출물 | 예상 |
|---|---|---|---|
| 0 | 원고 확정: `resume-content.md`의 ⚠️ 항목 채우기 | 확정 원고 | 0.5일 |
| 1 | 디자인 토큰 + 레이아웃 뼈대 (nav·hero·footer) | `index.html`, `tokens.css` | 0.5일 |
| 2 | 섹션 구현: proof, 경력, 프로젝트 카드, 스킬, FAQ, CTA | 전체 페이지 | 1일 |
| 3 | 인터랙션: 스크롤 등장, 카운트업, 캐러셀, 모달 | `js/*` | 0.5일 |
| 4 | 이미지 정리·최적화, 반응형·인쇄 CSS, Lighthouse 점검 | 최종본 + `resume.pdf` | 0.5일 |
| 5 | GitHub Pages 배포, OG 이미지, README 작성 | 공개 URL | 1시간 |

---

## 7. 배포

1. GitHub에 `resume` 저장소 생성 → 푸시
2. Settings → Pages → Branch `main` / root
3. 주소: `https://taehuun.github.io/resume/`
4. (선택) GitHub Actions로 HTML 검사 + Lighthouse CI → README에 배지 표시 (CI/CD 경험 어필)

**개인정보**: 본인 확인에 따라 전화번호도 공개 페이지에 포함합니다(2026-11-15 결정).

> **진행 상태 (2026-11-15)**: 1차 구현 완료 — `index.html`, `css/`, `js/`, `assets/img/`. 엠지엘코리아 2024.08 입사, 프리랜서 2019–2020 반영. 남은 것: 프로필 사진(`assets/img/profile.jpg`), GitHub Pages 배포.

---

## 8. 전달 메일 예시

> 제목: [개발자 지원] 김태훈 — 웹 이력서 및 작업물 링크
>
> 안녕하세요, 개발자 포지션에 지원하는 김태훈입니다.
> 요청하신 작업 내용을 UGC KOREA 서비스의 디자인을 참고해 웹 이력서로 직접 만들어 보았습니다.
>
> - 웹 이력서: https://taehuun.github.io/resume/
> - 소스 코드: https://github.com/taehuun/resume
> - PDF 이력서: 첨부 파일
>
> 감사합니다.

---

## 9. (선택) 2차 확장 — Next.js 버전
UGC KOREA는 Next.js로 만들어져 있습니다. 더 어필하고 싶다면:
- `projects.json`을 그대로 쓰고 Next.js App Router + CSS Modules로 옮김
- 프로젝트별 상세 페이지(`/projects/donggeuli`)를 정적 생성(SSG)
- Vercel에 배포

1차 버전을 먼저 보내고, 면접 단계에서 "같은 스택으로 옮긴 버전"을 보여주는 방식을 추천합니다.

---

## 10. 본인 확인이 필요한 사항
1. 엠지엘코리아 **입사 시기·직함** (포트폴리오에는 "2024.08 ~ 현재 ERP 개발"로 적혀 있음 — 같은 경력인지)
2. Node.js/Spring Boot **CRUD API 7건**의 기간과 형태(외주/프리랜스/사이드), 대표 1~2건 이름
3. 급여 담당 4개 기관별 **참여 기간**, 규모(사용자 수 등)를 공개해도 되는지
4. WYD 물류 시스템·DRM 서비스에서 **본인이 맡은 범위**와 사용 언어
5. 공개 페이지에 넣을 **프로필 사진**(정장 증명사진 vs 피켓 사진)
