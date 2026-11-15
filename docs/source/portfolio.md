# 포트폴리오 — 김태훈 (원본: 포트폴리오_김태훈.pdf, 35p)

> 원본 PDF를 텍스트로 옮긴 자료입니다. 이미지(ERD·아키텍처·스크린샷)는 `이미지:` 항목에 페이지 번호로 표시했고, 이력서 제작 시 GitHub 저장소 또는 PDF에서 추출해 사용합니다.

---

## 1. 표지 (p1)
- 슬로건: **"니즈를 파악하여 기술적 창의력을 발휘하는 개발자, 김태훈입니다."**
- 이미지: 프로필 사진(#소프트웨어 피켓) — p1

## 2. 기본 정보 (p2)

| 구분 | 내용 |
|---|---|
| 이름 | 김태훈 |
| 연락처 | 010-4151-7264 |
| 이메일 | xogns5@naver.com |
| GitHub | https://github.com/taehuun |
| 블로그 | https://taehuun.tistory.com |

### 학력
- 2023.07 ~ 2024.07 · 삼성 청년 SW 아카데미 (SSAFY 10기)
- 2013.03 ~ 2019.02 · 강원대학교 컴퓨터정보통신공학과

### 자격 / 수상
- 정보처리기사
- SSAFY 특화프로젝트 우수상 (1등)
- 삼성전자 SW 역량평가 모의 A형 취득 (알고리즘 역량 테스트)

### 대외활동
- 2024.01 ~ 2024.06 · 삼성 청년 SW 아카데미 지역 대표
- 2017.01 ~ 2017.12 · 강원대학교 학과 학생회 체육부장
- 2016.10 ~ 2017.09 · 학과 축구동아리 'CLASS' 회장 겸 주장

### 개발 경력
- 2024.08 ~ 현재 · ERP 소프트웨어 개발 및 유지보수

### 비개발 경력
- 2021.03 ~ 2022.10 · 차박용품 대여 '이지 차박' 대표
- 2019.02 ~ 2020.08 · 한전KDN 전력통신사업부 계약직
- 2018.09 ~ 2018.12 · 이앤지테크 인턴

## 3. 기술 스택 (p3)

| 분류 | 스택 |
|---|---|
| 언어 | Java (중상), C (중), C# (중), Python (중하) |
| 프레임워크 | Vue3, Spring, Spring Boot, FastAPI, MyBatis, JPA, XtraForm |
| 서버/인프라 | Apache, Apache Tomcat, AWS EC2, Amazon RDS, Jenkins, Docker, Docker Hub, Gerrit, Nginx |
| 데이터베이스 | MySQL, MariaDB, Oracle |
| 협업 툴 | Git, GitHub, GitLab, Notion, Figma, ERDCloud, Jira, MS Teams |

## 4. 프로젝트 타임라인 (p4)

| 기간 | 프로젝트 | 한 줄 설명 | 페이지 |
|---|---|---|---|
| 24.04 ~ 24.05 | BizCard | 포스코인터내셔널 기업 연계 프로젝트 | p5~11 |
| 24.02 ~ 24.04 | 동글이 | AI 기술 활용 참여형 동화책 학습 | p12~20 |
| 24.01 ~ 24.02 | 3D Body | 3D 모델 기반 유저 체형 관리 | p21~27 |
| 23.11 | 마인부우동산 | 카카오맵 API 부동산 시세 정보 | p28~34 |
| 18.09 ~ 18.11 | 운동경기 오토매칭 서비스 | 학사 졸업 논문 | p35 |

---

## 5. BizCard — MS Teams 내 명함 관리 서비스 (p5~11)
- GitHub: https://github.com/taehuun/bizcard

| 항목 | 내용 |
|---|---|
| 개발 기간 | 2024.05.07 ~ 2024.05.17 |
| 플랫폼 | MS Teams Web, App |
| 인원 | 6명 (**팀장**) |
| 담당 | Spring Boot 백엔드 (50%), FastAPI 백엔드 (60%), 촬영 명함 이미지 후처리 (100%), 내 명함·명함 지갑·공유 명함 조회 API (100%) |
| 언어 | Java (JDK 17), Python, HTML/CSS, TypeScript |
| 서버 | AWS EC2, Ubuntu, Azure |
| 프레임워크 | Spring Boot, JPA, React |
| DB | MySQL, Amazon RDS, S3 |
| API/라이브러리 | Naver CLOVA OCR API, MS Toolkit, OpenCV, QueryDSL |
| 협업 | Git, GitLab, Notion, Postman, Jira, Figma, MS Teams, ERDCloud |

### 서비스 기획
- **ERD**: 명함 중복을 막기 위해 명함을 단일 테이블로 관리. 명함 지갑/팀 명함 지갑은 각각 필터를 쓰지만 하나의 테이블로 정규화. 등록·수정 API 요청은 로그 테이블에 별도 저장. (이미지: p6)
- **아키텍처** (이미지: p7)
  - 서버 부하 대응: Prometheus로 메트릭 수집, Grafana로 시각화
  - 오토스케일링: Docker Swarm으로 부하 80% 이상 시 자동 스케일링
  - MSA: 트래픽 증가에 대비해 서버를 분리한 마이크로서비스 아키텍처

### 주요 기능
- **OCR 기능**: 직접 촬영 시 OCR로 명함 저장 (이미지: p8)
- **직접 입력**: 명함이 없는 파견직·신입은 직접 입력 → 실물/디지털 명함으로 등록 (이미지: p9)
- **공유 기능**: 이메일·팀원·링크 공유, 엑셀 내보내기/불러오기로 타 앱 명함 즉시 이관 (이미지: p10)

### 리뷰 (p11)
- 소감: SSAFY 기업 연계 프로젝트는 우수 교육생에게만 주어지는 기회
- 성과: 포스코인터내셔널과 협업하며 기업 개발 프로세스·문화 학습 / **약 2,000명 임직원 대상** 서비스로 페르소나 기반 에러 대응 기획 / Front는 Azure 배포
- 회고: MSA 장점(무중단 배포 등)을 충분히 살리지 못함 → 캐싱, 샤딩/레플리케이션으로 DB 부하 분산 고려 예정

---

## 6. 동글이 — AI 기반 참여형 전자 동화책 (p12~20)
- GitHub: https://github.com/taehuun/donggeuli (🎉 SSAFY 10기 특화프로젝트 광주 1반 최우수상)

| 항목 | 내용 |
|---|---|
| 개발 기간 | 2024.02.19 ~ 2024.04.05 |
| 플랫폼 | Tablet App |
| 인원 | 6명 |
| 담당 | FastAPI 백엔드 (100%), TensorFlow Keras 모델링 (100%), Teachable Machine 활용 (60%), 인프라 CI/CD (100%) |
| 언어 | Java (JDK 17), Python, Dart |
| 서버 | AWS EC2, Ubuntu |
| 프레임워크 | Spring Boot, JPA, Flutter |
| DB | MySQL, Amazon RDS, S3, Redis |
| API/라이브러리 | OpenCV, QueryDSL, TensorFlow |
| 협업 | Gerrit, Git, GitLab, Notion, Postman, Jira, Figma, ERDCloud |

### 서비스 기획
- ERD (이미지: p13)
- 아키텍처 (이미지: p14)
  - Spring Security + JWT 인증으로 사용자 정보 보호
  - Gerrit 도입으로 코드 리뷰 프로세스 정착
  - 모델 안정성을 위해 FastAPI AI 서버 분리

### 주요 기능
- **동화책**: 읽기 전 획득 가능한 카드 목록 → 중간 퀴즈로 카드 수집, 그림·글·성우 음성 진행 (이미지: p15)
- **퀴즈**: 동화 중간 퀴즈(그림 그리기 포함), 완료 후 모아 풀기 (이미지: p16)
- **수집**: 획득 카드에서 당시 풀이 확인, 개인 갤러리 저장 (이미지: p17)

### 담당 주요 기술
- **낙서 인식 모델**: 126개 단어, **33만 장** 학습. 파인튜닝 결과 epoch 20 / batch 256에서 **정확도 96.19%**. 1D Conv ×3 + LSTM ×2 + Softmax 구조 (이미지: p18)
- **행동 인식 모델**: Google Teachable Machine, 3가지 행동 **4,500장** 이미지 학습 (이미지: p19)

### 리뷰 (p20)
- 소감: 여러 차례 자체 QA로 완성도·서버 안정성 향상. 볼륨 대신 AI 정확도와 QA에 집중
- 성과: **SSAFY 특화프로젝트 1등 수상**, 첫 AI 담당으로 딥러닝 모델링 성공
- 회고: 이미지 전송을 WebSocket으로 처리, 모델 출력-정답 자동 판정 로직 개선 예정

---

## 7. 3D Body — 3D 모델 기반 체형 관리 서비스 (p21~27)
- GitHub: https://github.com/taehuun/3Dbody , https://github.com/taehuun/3dbodysub

| 항목 | 내용 |
|---|---|
| 개발 기간 | 2024.01.03 ~ 2024.02.16 |
| 플랫폼 | PWA App |
| 인원 | 6명 |
| 담당 | Spring Boot 백엔드 (40%), 식단·운동 루틴 관리 API (100%), 인프라 CI/CD (100%) |
| 언어 | Java (JDK 17), Python, HTML/CSS, JavaScript |
| 서버 | AWS EC2, Ubuntu |
| 프레임워크 | Spring Boot, JPA, React |
| DB | MySQL, Amazon RDS, S3, Redis |
| API/라이브러리 | QueryDSL, WebRTC |
| 협업 | Gerrit, Git, GitLab, Notion, Postman, Jira, Figma, ERDCloud |

### 서비스 기획
- ERD (이미지: p22)
- 아키텍처 (이미지: p23)
  - Jenkins + Docker로 각 서비스 컨테이너화, CI/CD 구축
  - Blender로 체형 3D 모델화 (Flask 서버)
  - VideoSDK(WebRTC)로 화상 통화 기능

### 주요 기능
- **3D 모델링**: 신체·인바디 정보로 인체 3D 모델 생성, 체중·골격근량·체지방량 변경으로 목표 체형 설정 (이미지: p24)
- **관리**: 날짜별 운동·식단 기록, 세트별 운동/휴식 시간 기록, 끼니별 칼로리 확인 (이미지: p25)
- **챌린지**: WebRTC 화상 챌린지 + 채팅 응원 (이미지: p26)

### 리뷰 (p27)
- 소감: 첫 CI/CD — 파이프라인 단계별 로그 확인으로 문제 해결. JPA로 반복 작업 감소
- 성과: QueryDSL로 JPA 동적 쿼리 한계 극복 / JOIN 비용을 고려해 식단·루틴 테이블을 **비정규화하여 조회 속도 향상**
- 회고: RESTful API 설계, 영속성 컨텍스트·JPA 생명주기 학습 다짐

---

## 8. 마인부우동산 — 부동산 실거래가 제공 서비스 (p28~34)
- GitHub: https://github.com/taehuun/mainboodongsan

| 항목 | 내용 |
|---|---|
| 개발 기간 | 2023.11.10 ~ 2023.11.24 |
| 플랫폼 | Web |
| 인원 | 2명 (**팀장**) |
| 담당 | USER 도메인 풀스택 (70%), 커뮤니티·공지사항 도메인 풀스택 (100%) |
| 언어 | Java (JDK 17), HTML/CSS, JavaScript |
| 서버 | Apache Tomcat |
| 프레임워크 | Spring, MyBatis, Vue3 |
| DB | MySQL, Redis |
| API | Kakao Map API |
| 협업 | Git, GitLab, Postman, Figma |

### 서비스 기획
- ERD (이미지: p29), 아키텍처: Vue(Bootstrap) ↔ Spring Boot ↔ DB(공공데이터 실거래가·회원·게시판), Kakao Map API (이미지: p30)

### 주요 기능
- **JWT 로그인** + 카카오 로그인 (이미지: p31)
- **거래 정보 제공**: 실거래가를 카카오맵에 표시, 관심 지역 모아보기 (이미지: p32)
- **커뮤니티**: 매물 정보 공유, 작성자/관리자만 수정·삭제 (이미지: p33)

### 리뷰 (p34)
- 성과: Git 협업, 풀스택 역량 강화, 프로필 이미지를 리사이즈 후 Base64로 인코딩해 BLOB 저장
- 회고: 다음엔 CI/CD 적용, 형상 관리·기획 명세서 상세화

---

## 9. 안드로이드 운동경기 오토매칭 서비스 — 학사 논문 (p35)
- 개요: Elo Rating System으로 비슷한 실력대 팀을 자동 매칭
- 경기 기록 → Elo 점수 변환 → DB 기록. 경기 수·현재 점수·가중치·**개별 선수 가중치**로 정확도 향상
- 같은 날짜·장소 신청 팀 중 점수가 가장 가까운 팀과 매칭. 점수 차가 크면 하위 팀 패배 시 감점 축소
- 실험·성능 평가 후 논문화
- 논문 링크: https://drive.google.com/drive/folders/1uSJLHMPDWrSsHhM-tU0xm7dPwaRHhi2H
- 상세: [thesis.md](thesis.md)
