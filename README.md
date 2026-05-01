readme
=======
- 조이름 : 집에가고싶조
- git : https://github.com/shortKDT
- notion : https://suave-kip-fd7.notion.site/KDT-350c2695cef080ec881ad5a86bdd8da8

=======
# 팀원 정보
- **정지원**
  - 역할
      - 팀장
      - Back-end & DB 설계
        - 11개 테이블 아키텍처 설계 및 데이터 명세서(Data Dictionary) 표준화
        - 사용자 검색 로그 기반 맞춤 상품 추천 알고리즘 및 가중치 로직 설계
      - 깃 관리자
        - GitHub 레포지토리 환경 구축 및 SQL 스크립트 형상 관리 총괄
  - GIT URL: https://github.com/jiwon-jung323
- **정우진**
  - 역할
      - 프로젝트 매니저
      - Back-end
        - 플랫폼별(번개장터, 중고나라 등) 데이터 수집 파이프라인 및 중복 매물 방지 로직 설계
        - 시세 추적을 위한 일 단위 가격 데이터 수집 주기 및 저장 구조 최적화
      - Front-end & UI/UX
        - Vite 및 React 기반의 프로젝트 아키텍처 설계 및 최적화된 초기 구조 구축
        - CSS 기반 커스텀 디자인 시스템(컬러셋, 폰트, 그리드) 및 공통 컴포넌트
        - KREAM/Apple 스타일의 미니멀한 UI 구현 및 고도화된 반응형 레이아웃 퍼블리싱
  - GIT URL: https://github.com/rainstorm0907
- **김다은**
  - 역할
      - 프론트엔드
        - Hama 프론트엔드 Vite 앱 구조 구성
        - 홈 화면 컴포넌트(`Header`, `HeroBanner`, `SearchPanel`, `CategoryGrid`, `ProductGrid`, `Footer`) 구현
        - 카테고리/상품 더미 데이터와 타입 정의 분리
  - GIT URL: https://github.com/rlekdm
- **이준호**
  - 역할
      - 백엔드
  - GIT URL: https://github.com/dlwnsgh1130

=======
# 프로젝트 설명

본 프로젝트는 중고거래 플랫폼의 상품 데이터를 수집하고, 사용자의 검색 이력과 찜 정보를 기반으로 상품 검색, 가격 비교, 최저가 알림, 맞춤 추천 기능을 제공하는 웹 서비스입니다.

주요 데이터는 Python 크롤링/전처리 작업을 통해 수집한 뒤 DB에 저장하고, Spring Boot 백엔드가 DB 데이터를 조회하여 React 프론트엔드에 API로 제공합니다.

## 주요 기능

- 회원가입 및 로그인
- 개인 페이지 및 찜 목록 관리
- 찜 상품의 현재 가격, 가격 변동, 역대 최저가 정보 제공
- 가격 갱신 시 최저가 알림 제공
- 검색 키워드 기반 상품 검색
- 검색 결과 상단 가격 대시보드 제공
- 최근 검색어 및 검색 순위 제공
- 최근 검색 결과 기반 맞춤 상품 추천
- 챗봇 기능
- 홈 화면 배너 및 카테고리 제공

## 기술 구성

- Backend: Java, Spring Boot
- Frontend: Vite, React, TypeScript, CSS
- Crawling/Preprocessing: Python
- Database: PostgreSQL 또는 Supabase
- Docs: DB 스키마, ERD, API 명세, 요구사항 문서, 구현 파일 체크리스트

## `code` 폴더 구조

```text
code
├── backend
│   └── src/main
│       ├── java/com/used/service
│       │   ├── config
│       │   ├── controller
│       │   ├── service
│       │   ├── repository
│       │   ├── dto
│       │   ├── entity
│       │   ├── scheduler
│       │   ├── notification
│       │   ├── chatbot
│       │   └── exception
│       ├── python
│       │   ├── crawling
│       │   ├── preprocessing
│       │   └── requirements.txt
│       └── resources
│           └── application.yml
├── frontend
│   └── Hama
│       ├── public
│       │   ├── favicon.svg
│       │   ├── hamalogo.png
│       │   ├── hama_lowban1.jpg
│       │   └── icons.svg
│       ├── src
│       │   ├── components
│       │   │   ├── CategoryGrid.tsx
│       │   │   ├── Footer.tsx
│       │   │   ├── Header.tsx
│       │   │   ├── HeroBanner.tsx
│       │   │   ├── ProductGrid.tsx
│       │   │   └── SearchPanel.tsx
│       │   ├── data
│       │   │   └── catalog.ts
│       │   ├── types
│       │   │   └── catalog.ts
│       │   ├── App.css
│       │   ├── App.tsx
│       │   ├── index.css
│       │   └── main.tsx
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
└── docs
    ├── requirements.md
    ├── document_checklist.md
    ├── api_spec.md
    ├── db_schema.sql
    ├── ERD.drawio.png
    └── 데이터 명세서.xlsx
```

## 폴더별 설명

- `code/backend`: Spring Boot 기반 백엔드 코드 영역입니다.
- `code/backend/src/main/java/com/used/service/controller`: 사용자 요청을 받는 REST API 컨트롤러를 작성합니다.
- `code/backend/src/main/java/com/used/service/service`: 회원, 상품, 찜, 추천, 검색 등 핵심 비즈니스 로직을 작성합니다.
- `code/backend/src/main/java/com/used/service/repository`: DB 접근 코드를 작성합니다.
- `code/backend/src/main/java/com/used/service/entity`: DB 테이블과 매핑되는 Entity 클래스를 작성합니다.
- `code/backend/src/main/java/com/used/service/dto`: API 요청/응답 데이터 객체를 작성합니다.
- `code/backend/src/main/java/com/used/service/scheduler`: 가격 갱신, 최저가 알림, 검색 순위 집계 같은 정기 작업을 작성합니다.
- `code/backend/src/main/java/com/used/service/notification`: 알림 생성, 조회, 읽음 처리 로직을 작성합니다.
- `code/backend/src/main/java/com/used/service/chatbot`: 챗봇 관련 API와 서비스 로직을 작성합니다.
- `code/backend/src/main/python`: Python 크롤링 및 전처리 코드를 관리합니다.
- `code/frontend/Hama`: Vite + React + TypeScript 기반 프론트엔드 앱 영역입니다.
- `code/frontend/Hama/src/App.tsx`: 홈 화면 상태와 주요 섹션 컴포넌트를 조합하는 최상위 컴포넌트입니다.
- `code/frontend/Hama/src/components`: Header, Footer, HeroBanner, SearchPanel, CategoryGrid, ProductGrid 등 홈 화면 구성 컴포넌트를 작성합니다.
- `code/frontend/Hama/src/data`: 카테고리, 상품, 최근 검색어 같은 화면 표시용 데이터를 관리합니다.
- `code/frontend/Hama/src/types`: 프론트엔드에서 사용하는 TypeScript 타입을 정의합니다.
- `code/frontend/Hama/public`: 로고, 배너, 아이콘 같은 정적 파일을 보관합니다.
- `code/docs`: 요구사항, 구현 파일 체크리스트, API 명세, DB 스키마, ERD, 데이터 명세서를 보관합니다.

## 참고 문서

- `code/docs/requirements.md`: 프로젝트 구조 및 파일 작성 가이드
- `code/docs/document_checklist.md`: 백엔드/프론트엔드 구현 파일 작성 상태 체크리스트
- `code/docs/api_spec.md`: API 명세서
- `code/docs/db_schema.sql`: DB 테이블 생성 SQL
- `code/docs/ERD.drawio.png`: ERD 이미지
- `code/docs/데이터 명세서.xlsx`: 데이터 명세서
