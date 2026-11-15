# 김태훈 · 웹 이력서

> 백엔드 개발자 김태훈의 웹 이력서입니다. 프레임워크 없이 **HTML · CSS · Vanilla JS**로 직접 만들었습니다.

🔗 **Live**: https://taehuun.github.io/resume/

## 구성
| 섹션 | 내용 |
|---|---|
| Hero · Profile | 한 줄 소개, 연락처 |
| 숫자로 보는 김태훈 | ERP 급여 모듈 4곳 · AI 정확도 96.19% · 임직원 2,000명 · 프리랜서 7건 · SSAFY 1등 |
| Career | 엠지엘코리아(2024.08 –) EMR·ERP / 프리랜서 백엔드(2019 – 2020) |
| Projects | 동글이 · BizCard · 3D Body · 마인부우동산 — 카드를 누르면 상세 모달 |
| Research | 학사 논문 HANTTEU (Elo Rating 오토매칭) |
| Skills · Education · FAQ · Contact | |

## 기술 포인트
- **데이터와 화면 분리**: 프로젝트 정보는 `js/data.js`에만 있고 `js/main.js`가 카드 · 모달 · 화면 갤러리를 렌더링합니다.
- **의존성 0개**: 빌드 없이 정적 파일만으로 동작합니다(외부 리소스는 Google Fonts만 씀).
- **인터랙션**: 스크롤 등장, 숫자 카운트업, 드래그 캐러셀, 키보드(Esc)로 닫히는 모달, 무한 마퀴
- **반응형**: 1024 / 768px 기준, 375px 모바일에서 가로 스크롤 없음
- **접근성**: `prefers-reduced-motion` 대응, 모달 포커스 복귀, 시맨틱 마크업
- **인쇄 / PDF**: `css/print.css` — Chrome에서 `Ctrl+P` → "PDF로 저장"(배경 그래픽 체크)하면 A4 이력서가 나옵니다.

## 폴더
```
index.html
css/style.css     디자인 토큰 + 레이아웃
css/print.css     PDF 출력용
js/data.js        프로젝트 데이터
js/main.js        렌더링 · 인터랙션
assets/img/…      프로젝트 화면 (각 GitHub 저장소에서 가져옴)
docs/…            원본 자료(포트폴리오 · 논문) md 변환본, 원고, 계획서
serve.ps1         로컬 미리보기 서버 (Windows PowerShell)
```

## 로컬에서 보기
```bash
powershell -ExecutionPolicy Bypass -File serve.ps1
```
→ http://localhost:5500

## 배포 (GitHub Pages)
1. GitHub에서 `resume` 저장소를 Public으로 만듭니다.
2. **Add file → Upload files**로 이 폴더의 파일을 전부 올립니다(`.claude` 폴더는 빼도 됩니다).
3. **Settings → Pages → Branch: `main` / `(root)` → Save**
4. 1–2분 뒤 `https://taehuun.github.io/resume/` 에서 열립니다.

프로필 사진을 넣으려면 `assets/img/profile.jpg`(정사각형 권장)를 추가하면 됩니다. 파일이 없으면 "TH" 이니셜이 대신 보입니다.
