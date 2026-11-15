/* 프로젝트 데이터 — 화면(main.js)과 분리해서 관리합니다. */
window.PROJECTS = [
  {
    id: "donggeuli",
    badge: "🏆 SSAFY 특화프로젝트 1등",
    title: "동글이",
    subtitle: "AI 기반 참여형 전자 동화책",
    period: "2024.02 – 2024.04",
    team: "6명",
    platform: "Tablet App",
    color: "#38B6FF",
    thumb: "assets/img/donggeuli/detail-s.jpg",
    repo: "https://github.com/taehuun/donggeuli",
    role: ["FastAPI 백엔드 100%", "TensorFlow·Keras 모델링 100%", "Teachable Machine 60%", "CI/CD 인프라 100%"],
    highlights: [
      "126개 단어 · <b>33만 장</b> 데이터로 낙서 인식 모델(1D Conv ×3 + LSTM ×2) 직접 학습 → <b>정확도 96.19%</b>",
      "Teachable Machine으로 3가지 행동 · 4,500장 행동 인식 모델 학습",
      "모델 안정성을 위해 <b>FastAPI AI 서버를 분리</b>하고, Spring Security + JWT 인증 적용",
      "Gerrit 도입으로 팀 코드 리뷰 프로세스 정착, Jenkins로 CI/CD 구축",
      "볼륨보다 AI 정확도와 여러 차례의 자체 QA에 집중 → 기술 완성도로 1등 수상"
    ],
    stack: ["FastAPI", "TensorFlow", "Spring Boot", "JPA", "Flutter", "Redis", "AWS EC2·RDS·S3", "Jenkins", "Gerrit"],
    gallery: [
      { src: "assets/img/donggeuli/main.gif", cap: "메인 화면" },
      { src: "assets/img/donggeuli/drawing.gif", cap: "그림 그리기 퀴즈 — 낙서 인식 AI" },
      { src: "assets/img/donggeuli/progress-s.jpg", cap: "동화 진행" },
      { src: "assets/img/donggeuli/notes-s.jpg", cap: "카드 수집" },
      { src: "assets/img/donggeuli/arch.png", cap: "시스템 아키텍처" },
      { src: "assets/img/donggeuli/erd-s.jpg", cap: "ERD" }
    ]
  },
  {
    id: "bizcard",
    badge: "💼 포스코인터내셔널 기업 연계 · 팀장",
    title: "BizCard",
    subtitle: "MS Teams 안에서 쓰는 명함 관리 서비스",
    period: "2024.05",
    team: "6명 (팀장)",
    platform: "MS Teams Web · App",
    color: "#1E6FD9",
    thumb: "assets/img/bizcard/pc.png",
    repo: "https://github.com/taehuun/bizcard",
    role: ["Spring Boot 백엔드 50%", "FastAPI 백엔드 60%", "명함 이미지 후처리 100%", "명함 조회 API 100%"],
    highlights: [
      "<b>임직원 약 2,000명</b>이 쓰는 실사용 서비스를 팀장으로 리드, 페르소나 기반으로 에러 대응까지 기획",
      "Naver CLOVA OCR + OpenCV로 촬영한 명함 이미지 후처리 파이프라인 구현",
      "Prometheus · Grafana 모니터링, <b>Docker Swarm으로 부하 80% 이상 시 오토스케일링</b>",
      "트래픽 증가에 대비한 MSA 구조, 프론트는 Azure에 배포",
      "명함 중복을 막는 단일 테이블 정규화 + 등록·수정 이력 로그 테이블 설계"
    ],
    stack: ["Spring Boot", "FastAPI", "JPA", "QueryDSL", "React", "TypeScript", "MySQL", "AWS", "Azure", "Docker Swarm"],
    gallery: [
      { src: "assets/img/bizcard/pc.png", cap: "PC — 내 명함" },
      { src: "assets/img/bizcard/ocr.gif", cap: "직접 촬영 → OCR 등록" }
    ]
  },
  {
    id: "3dbody",
    badge: "🧍 3D · WebRTC · CI/CD",
    title: "3D Body",
    subtitle: "3D 모델 기반 체형 관리 서비스",
    period: "2024.01 – 2024.02",
    team: "6명",
    platform: "PWA",
    color: "#0E9384",
    thumb: "assets/img/3dbody/logo-s.jpg",
    fit: "contain",
    repo: "https://github.com/taehuun/3Dbody",
    role: ["Spring Boot 백엔드 40%", "식단·운동 루틴 API 100%", "CI/CD 인프라 100%"],
    highlights: [
      "인바디 정보로 인체 3D 모델 생성(Blender · Flask), 목표 체형 예측",
      "Jenkins + Docker로 서비스별 컨테이너화한 <b>첫 CI/CD 파이프라인</b>을 직접 구축",
      "JOIN 비용을 분석해 기록 테이블을 <b>비정규화하여 조회 성능 개선</b>",
      "JPA의 정적 쿼리 한계를 QueryDSL 동적 쿼리로 해결",
      "VideoSDK(WebRTC) 화상 챌린지 + 실시간 채팅"
    ],
    stack: ["Spring Boot", "JPA", "QueryDSL", "React", "Three.js", "WebRTC", "Redis", "Docker", "Jenkins", "AWS"],
    gallery: [
      { src: "assets/img/3dbody/model.gif", cap: "3D 체형 모델" },
      { src: "assets/img/3dbody/workout.gif", cap: "운동 관리" },
      { src: "assets/img/3dbody/diet.gif", cap: "식단 관리" }
    ]
  },
  {
    id: "mainboo",
    badge: "🏠 풀스택 · 팀장",
    title: "마인부우동산",
    subtitle: "카카오맵 기반 부동산 실거래가 서비스",
    period: "2023.11",
    team: "2명 (팀장)",
    platform: "Web",
    color: "#EC4899",
    thumb: "assets/img/mainboo/main-s.jpg",
    repo: "https://github.com/taehuun/mainboodongsan",
    role: ["USER 도메인 풀스택 70%", "커뮤니티·공지사항 풀스택 100%"],
    highlights: [
      "공공데이터 실거래가를 카카오맵 위에 표시, 관심 지역 모아보기",
      "JWT 인증 + 카카오 로그인",
      "작성자 · 관리자 권한에 따른 커뮤니티 수정/삭제",
      "프로필 이미지를 리사이즈 → Base64 인코딩해 BLOB으로 저장"
    ],
    stack: ["Spring", "MyBatis", "Vue3", "MySQL", "Redis", "Kakao Map API"],
    gallery: [
      { src: "assets/img/mainboo/main-s.jpg", cap: "메인 화면" },
      { src: "assets/img/mainboo/erd-s.jpg", cap: "ERD" }
    ]
  }
];
