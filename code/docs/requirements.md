# 프로젝트 구조 및 파일 작성 가이드

이 문서는 프로젝트의 기본 폴더 구조와 각 위치에 작성해야 할 코드 및 문서의 역할을 정리한 가이드입니다.

## 전체 구조

```text
code
├── backend
│   └── src/main
│       ├── java/com/used/service
│       └── resources
├── frontend
│   └── src
└── docs
    ├── requirements.md
    ├── document_checklist.md
    ├── api_spec.md
    ├── db_schema.sql
    ├── ERD.drawio.png
    └── 데이터 명세서.xlsx
```

## Backend

백엔드는 Java Spring Boot 기반 서버 영역입니다. 사용자, 상품, 찜, 추천, 크롤링, 데이터베이스 연동 기능을 담당합니다.

### `backend/src/main/java/com/used/service/config`

Supabase, 보안, CORS 등 프로젝트 공통 설정 클래스를 작성합니다.

들어갈 수 있는 파일 예시:

- `SecurityConfig.java`: 로그인, 인증, 인가, 비밀번호 암호화 설정
- `CorsConfig.java`: 프론트엔드와 백엔드 간 CORS 허용 설정
- `SupabaseConfig.java`: Supabase API URL, Key, 클라이언트 설정
- `WebConfig.java`: 공통 웹 MVC 설정

주의사항:

- API Key, DB 비밀번호 같은 민감 정보는 코드에 직접 작성하지 않습니다.
- 민감 정보는 `application.yml` 또는 환경 변수로 관리합니다.

### `backend/src/main/java/com/used/service/controller`

클라이언트 요청을 받는 REST API 컨트롤러를 작성합니다.

들어갈 수 있는 파일 예시:

- `UserController.java`: 회원가입, 로그인, 회원 정보 조회/수정 API
- `ItemController.java`: 상품 등록, 조회, 검색, 상세 조회 API
- `WishController.java`: 찜 등록, 찜 취소, 찜 목록 조회 API
- `RecommendationController.java`: 추천 상품 조회 API

작성 기준:

- 요청 URL, HTTP Method, 요청값 검증을 담당합니다.
- 실제 비즈니스 로직은 `service` 계층으로 위임합니다.
- 응답 데이터는 가능하면 `dto` 객체로 반환합니다.

### `backend/src/main/java/com/used/service/service`

핵심 비즈니스 로직을 작성합니다.

들어갈 수 있는 파일 예시:

- `UserService.java`: 회원 관련 로직
- `ItemService.java`: 상품 등록, 검색, 조회 로직
- `WishService.java`: 찜 기능 처리 로직
- `RecommendationService.java`: 사용자 행동 또는 상품 데이터를 기반으로 추천 결과 생성
- `CrawlingService.java`: 외부 사이트 또는 데이터 소스에서 상품 정보 수집

작성 기준:

- 컨트롤러에서 받은 요청을 실제 기능으로 처리합니다.
- DB 접근은 직접 하지 않고 `repository` 계층을 사용합니다.
- 추천, 크롤링처럼 복잡한 로직은 이 계층에 모읍니다.

### `backend/src/main/java/com/used/service/scheduler`

정기적으로 실행되어야 하는 백엔드 작업을 작성합니다.

들어갈 수 있는 파일 예시:

- `PriceUpdateScheduler.java`: 수집된 상품 가격을 주기적으로 갱신
- `LowestPriceAlertScheduler.java`: 찜 상품의 역대 최저가 또는 현재 최저가 변동 확인
- `SearchRankingScheduler.java`: 검색 키워드 순위 집계

작성 기준:

- 사용자가 직접 호출하지 않는 배치성 작업을 둡니다.
- 가격 변동, 알림 생성, 검색 순위 집계처럼 주기적 실행이 필요한 기능을 담당합니다.

### `backend/src/main/java/com/used/service/notification`

사용자 알림 관련 로직을 작성합니다.

들어갈 수 있는 파일 예시:

- `NotificationService.java`: 알림 생성, 조회, 읽음 처리
- `NotificationType.java`: 알림 종류 정의

작성 기준:

- 찜 상품 가격 하락, 역대 최저가 갱신, 현재 최저가 변경 알림을 관리합니다.
- 알림 저장은 `repository`와 `entity` 계층의 알림 테이블과 연결합니다.

### `backend/src/main/java/com/used/service/chatbot`

챗봇 기능과 관련된 로직을 작성합니다.

들어갈 수 있는 파일 예시:

- `ChatbotService.java`: 사용자 질문 처리
- `ChatbotController.java`: 챗봇 API 요청 처리
- `ChatbotPromptBuilder.java`: 챗봇 응답 생성을 위한 프롬프트 구성

작성 기준:

- 상품 추천, 검색 도움, 서비스 이용 안내처럼 챗봇 전용 기능을 분리합니다.
- 외부 AI API를 사용할 경우 API Key는 환경 변수로 관리합니다.

### `backend/src/main/java/com/used/service/exception`

백엔드 공통 예외 처리 코드를 작성합니다.

들어갈 수 있는 파일 예시:

- `GlobalExceptionHandler.java`: 공통 에러 응답 처리
- `ErrorCode.java`: 에러 코드 정의
- `BusinessException.java`: 서비스 로직 예외

작성 기준:

- 컨트롤러마다 중복으로 try-catch를 작성하지 않도록 공통 처리합니다.
- 프론트엔드가 이해하기 쉬운 에러 응답 형식을 유지합니다.

### `backend/src/main/java/com/used/service/repository`

PostgreSQL 또는 Supabase DB 접근 코드를 작성합니다.

들어갈 수 있는 파일 예시:

- `UserRepository.java`: 사용자 테이블 접근
- `ItemRepository.java`: 상품 테이블 접근
- `WishRepository.java`: 찜 테이블 접근
- `SearchHistoryRepository.java`: 검색 기록 테이블 접근

작성 기준:

- Spring Data JPA를 사용할 경우 `JpaRepository`를 상속합니다.
- SQL 직접 작성이 필요한 경우 Query Method 또는 `@Query`를 사용합니다.
- DB 테이블과 직접 연결되는 로직만 작성합니다.

### `backend/src/main/java/com/used/service/dto`

요청과 응답에 사용하는 데이터 전송 객체를 작성합니다.

들어갈 수 있는 파일 예시:

- `UserRequestDto.java`: 회원가입, 로그인 요청 데이터
- `UserResponseDto.java`: 회원 정보 응답 데이터
- `ItemRequestDto.java`: 상품 등록/수정 요청 데이터
- `ItemResponseDto.java`: 상품 목록/상세 응답 데이터
- `WishResponseDto.java`: 찜 목록 응답 데이터
- `RecommendationResponseDto.java`: 추천 상품 응답 데이터

작성 기준:

- Entity를 그대로 API 응답으로 노출하지 않기 위해 사용합니다.
- 프론트엔드와 주고받는 데이터 형태를 명확히 정의합니다.
- 요청 DTO에는 검증 어노테이션을 사용할 수 있습니다.

### `backend/src/main/java/com/used/service/entity`

DB 테이블과 매핑되는 JPA Entity 클래스를 작성합니다.

들어갈 수 있는 파일 예시:

- `User.java`: 사용자 테이블 매핑
- `Item.java`: 상품 테이블 매핑
- `Wish.java`: 찜 테이블 매핑
- `Category.java`: 카테고리 테이블 매핑
- `SearchHistory.java`: 검색 기록 테이블 매핑

작성 기준:

- `db_schema.sql`의 테이블 구조와 필드명을 기준으로 작성합니다.
- 테이블 간 관계가 있다면 `@ManyToOne`, `@OneToMany` 등을 사용합니다.
- API 응답용 필드는 Entity에 직접 추가하지 않고 DTO에서 처리합니다.

### `backend/src/main/python/crawling`

Python 기반 크롤링 스크립트와 입력 데이터를 관리합니다.

들어갈 수 있는 파일 예시:

- `crawling_20260429.py`: 번개장터, 중고나라 상품 데이터 수집 스크립트
- `keyword_list.csv`: 크롤링에 사용할 검색 키워드 목록
- `archive/integrated_crawling_initial.py`: 초기 크롤링 코드 보관본

작성 기준:

- 크롤링 결과는 CSV로 저장하거나 DB 저장 로직으로 확장할 수 있습니다.
- Spring Boot가 직접 Python 코드를 포함하지 않고, DB를 통해 수집 결과를 조회하는 구조를 권장합니다.
- 실행에 필요한 Python 패키지는 `backend/src/main/python/requirements.txt`에 정리합니다.
- 개선 전 코드나 Colab 원본에서 변환한 초기 코드는 `archive` 폴더에 보관합니다.

### `backend/src/main/python/preprocessing`

Python 기반 데이터 전처리 스크립트를 관리합니다.

들어갈 수 있는 파일 예시:

- 중복 상품 제거 스크립트
- 가격, 날짜, 상태값 정규화 스크립트
- DB 저장 전 데이터 검증 스크립트

작성 기준:

- 크롤링 원본 데이터를 서비스에서 사용하기 좋은 형태로 정제합니다.
- DB 테이블 구조와 맞는 컬럼명, 데이터 타입으로 변환합니다.

### `backend/src/main/resources/application.yml`

Spring Boot 설정 파일입니다.

들어갈 내용:

- 서버 포트 설정
- PostgreSQL 또는 Supabase DB 연결 정보
- JPA 설정
- Supabase URL 및 API Key 참조
- JWT Secret 같은 인증 관련 설정

주의사항:

- 실제 비밀번호, API Key, Secret Key는 GitHub에 올리지 않습니다.
- 민감 정보는 환경 변수로 분리하고, 예시 값만 문서화합니다.

## Frontend

프론트엔드는 Vite + React 기반 사용자 화면 영역입니다. 상품 검색, 상세 조회, 로그인, 마이페이지, 찜 기능 화면을 담당합니다.

### 프론트엔드 파일 배치 기준

프론트엔드 코드는 반드시 `frontend/src` 아래에 작성합니다. `frontend` 바로 아래에는 설정 파일만 두고, 화면 코드나 컴포넌트 코드는 두지 않습니다.

기본 원칙:

- 앱 전체를 시작하고 페이지를 연결하는 최상위 파일은 `frontend/src/App.tsx`에 둡니다.
- URL로 이동하는 화면 단위 컴포넌트는 `frontend/src/pages`에 둡니다.
- 여러 페이지에서 반복해서 쓰는 UI 조각은 `frontend/src/components`에 둡니다.
- API 호출 함수는 `frontend/src/api`에 둡니다.
- React 커스텀 훅은 `frontend/src/hooks`에 둡니다.
- 전역 상태 관리는 `frontend/src/contexts`에 둡니다.
- 전역 CSS, Tailwind CSS 진입 파일, 공통 스타일은 `frontend/src/styles`에 둡니다.
- 순수 함수나 포맷팅 함수는 `frontend/src/utils`에 둡니다.
- 라우팅 설정이 커져서 `App.tsx`에서 분리해야 할 때만 `frontend/src/routes`에 둡니다.

헷갈리기 쉬운 위치:

- `frontend/src/App.tsx`: 맞는 위치입니다. 앱 전체 레이아웃과 라우팅 연결을 담당합니다.
- `frontend/src/pages/Login.tsx`: 맞는 위치입니다. 로그인 “페이지 화면”을 담당합니다.
- `frontend/src/pages/Mypage.tsx`: 맞는 위치입니다. 마이페이지 “페이지 화면”을 담당합니다.
- `frontend/App.tsx`: 잘못된 위치입니다. `src` 밖에 화면 코드를 두지 않습니다.
- `frontend/pages/Login.tsx`: 잘못된 위치입니다. `pages` 폴더는 반드시 `src` 안에 있어야 합니다.
- `frontend/src/pages/App.tsx`: 보통 잘못된 위치입니다. `App.tsx`는 페이지가 아니라 앱 최상위 컴포넌트입니다.

예시:

```text
frontend
├── src
│   ├── App.tsx
│   ├── pages
│   │   ├── Login.tsx
│   │   ├── Mypage.tsx
│   │   └── SearchResult.tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ItemCard.tsx
│   ├── api
│   │   ├── userApi.ts
│   │   └── itemApi.ts
│   ├── hooks
│   │   └── useAuth.ts
│   ├── routes
│   │   └── AppRouter.tsx
│   ├── layouts
│   │   └── MainLayout.tsx
│   ├── contexts
│   │   └── AuthContext.tsx
│   ├── styles
│   │   └── global.css
│   └── utils
│       └── formatPrice.ts
├── tailwind.config.js
└── vite.config.js
```

새 파일을 만들 때 확인 순서:

1. 브라우저 주소와 직접 연결되는 화면인가?
   맞다면 `frontend/src/pages`에 둡니다. 예: `Login.tsx`, `Mypage.tsx`, `SearchResult.tsx`
2. 여러 화면에서 재사용되는 버튼, 카드, 헤더 같은 UI인가?
   맞다면 `frontend/src/components`에 둡니다. 예: `Header.tsx`, `ItemCard.tsx`, `Modal.tsx`
3. 서버와 통신하는 함수인가?
   맞다면 `frontend/src/api`에 둡니다. 예: `userApi.ts`, `wishApi.ts`
4. 여러 컴포넌트에서 반복되는 React 상태 로직인가?
   맞다면 `frontend/src/hooks`에 둡니다. 예: `useAuth.ts`, `useWish.ts`
5. 앱 전체에서 공유하는 로그인 상태나 알림 상태인가?
   맞다면 `frontend/src/contexts`에 둡니다. 예: `AuthContext.tsx`
6. 가격 표시, 날짜 표시 같은 화면과 무관한 순수 함수인가?
   맞다면 `frontend/src/utils`에 둡니다. 예: `formatPrice.ts`

### `frontend/src/App.tsx`

React 앱의 최상위 컴포넌트와 기본 라우팅 연결을 작성합니다.

들어갈 내용:

- 전체 앱 레이아웃 연결
- React Router 기반 페이지 라우팅
- 전역 모달 또는 공통 화면 상태 연결

작성 기준:

- 페이지 단위 화면은 `frontend/src/pages`에 분리하고, `App.tsx`에서는 라우팅과 최상위 조합을 담당합니다.
- 라우팅 설정이 커지면 `frontend/src/routes`로 분리할 수 있습니다.
- `App.tsx`는 `frontend/src/pages` 안에 넣지 않습니다.
- `App.tsx` 안에 모든 페이지 코드를 길게 작성하기보다, 페이지 컴포넌트를 `pages`에서 import해 연결합니다.

예시:

```tsx
import LoginPage from './pages/Login';
import MyPage from './pages/Mypage';

<Routes>
  <Route path="/login" element={<LoginPage />} />
  <Route path="/mypage" element={<MyPage />} />
</Routes>
```

### `frontend/src/api`

백엔드 또는 Supabase와 통신하는 API 모듈을 작성합니다.

들어갈 수 있는 파일 예시:

- `axios.ts`: Axios 기본 URL, 공통 헤더, 인터셉터 설정
- `userApi.ts`: 회원가입, 로그인, 회원 정보 API
- `itemApi.ts`: 상품 목록, 상품 검색, 상품 상세 API
- `wishApi.ts`: 찜 등록, 찜 취소, 찜 목록 API
- `recommendationApi.ts`: 추천 상품 API

작성 기준:

- 화면 컴포넌트에서 직접 `fetch` 또는 `axios`를 반복 작성하지 않도록 API 호출을 모읍니다.
- 토큰이 필요한 요청은 공통 설정에서 처리합니다.
- JSX 화면을 반환하지 않는 API 함수 파일은 `.ts` 확장자를 사용합니다.

### `frontend/src/assets`

이미지, 로고, 아이콘, 폰트 등 정적 파일을 저장합니다.

들어갈 수 있는 파일 예시:

- 로고 이미지
- 기본 상품 이미지
- 아이콘 이미지
- 폰트 파일

작성 기준:

- 코드에서 import해서 사용하는 정적 리소스를 보관합니다.
- 사용하지 않는 이미지 파일은 불필요하게 추가하지 않습니다.

### `frontend/src/components`

여러 페이지에서 재사용하는 공통 컴포넌트를 작성합니다.

들어갈 수 있는 파일 예시:

- `Header.tsx`: 상단 메뉴
- `Footer.tsx`: 하단 영역
- `ItemCard.tsx`: 상품 카드
- `SearchBar.tsx`: 검색창
- `Button.tsx`: 공통 버튼
- `Modal.tsx`: 공통 모달

작성 기준:

- 특정 페이지에만 강하게 묶인 컴포넌트는 `pages` 내부에서 관리할 수 있습니다.
- 여러 화면에서 재사용되면 `components`에 둡니다.
- URL 경로와 직접 연결되는 화면 전체는 `components`가 아니라 `pages`에 둡니다.

### `frontend/src/hooks`

React 커스텀 훅을 작성합니다.

들어갈 수 있는 파일 예시:

- `useAuth.ts`: 로그인 상태, 토큰, 사용자 정보 관리
- `useSearch.ts`: 검색어, 검색 결과, 검색 상태 관리
- `useWish.ts`: 찜 상태 관리

작성 기준:

- 여러 컴포넌트에서 반복되는 상태 관리 로직을 분리합니다.
- API 호출과 화면 상태가 함께 반복될 때 커스텀 훅으로 만들 수 있습니다.
- 훅 파일명은 React 관례에 따라 `use`로 시작합니다.

### `frontend/src/pages`

라우팅 단위의 페이지 컴포넌트를 작성합니다.

들어갈 수 있는 파일 예시:

- `Main.tsx`: 메인 페이지
- `SearchResult.tsx`: 검색 결과 페이지
- `Detail.tsx`: 상품 상세 페이지
- `Mypage.tsx`: 마이페이지
- `Login.tsx`: 로그인 페이지
- `Signup.tsx`: 회원가입 페이지

작성 기준:

- URL 경로와 직접 연결되는 화면을 배치합니다.
- 공통 UI는 `components`에서 가져와 조합합니다.
- 페이지 파일은 `frontend/src/pages` 바로 아래에 두는 것을 기본으로 합니다.
- 같은 이름의 페이지를 `frontend/pages`처럼 `src` 밖에 다시 만들지 않습니다.
- 페이지 안에서만 쓰는 작은 보조 컴포넌트는 같은 파일 안에 둘 수 있지만, 다른 페이지에서도 쓰이면 `components`로 이동합니다.

예시:

```text
frontend/src/pages/Login.tsx
frontend/src/pages/Mypage.tsx
frontend/src/pages/SearchResult.tsx
frontend/src/pages/Detail.tsx
```

### `frontend/src/styles`

전역 스타일과 Tailwind CSS 관련 스타일 파일을 작성합니다.

들어갈 수 있는 파일 예시:

- `tailwind.css`: Tailwind 기본 지시문
- `global.css`: 전체 폰트, body, reset 스타일
- `theme.css`: 색상, 간격 등 디자인 변수

작성 기준:

- 전역으로 적용되는 스타일만 둡니다.
- 컴포넌트별 스타일은 컴포넌트 근처에서 관리할 수 있습니다.

### `frontend/src/utils`

순수 유틸리티 함수를 작성합니다.

들어갈 수 있는 파일 예시:

- `formatPrice.ts`: 가격 표시 형식 변환
- `formatDate.ts`: 날짜 표시 형식 변환
- `storage.ts`: localStorage/sessionStorage 공통 함수
- `validation.ts`: 입력값 검증 함수

작성 기준:

- React 상태나 화면 렌더링에 직접 의존하지 않는 함수를 둡니다.
- 여러 곳에서 재사용되는 작은 기능을 모읍니다.
- JSX를 반환하지 않는 순수 유틸리티는 `.ts` 확장자를 사용합니다.

### `frontend/src/routes`

React Router 라우팅 설정을 작성합니다.

들어갈 수 있는 파일 예시:

- `AppRouter.tsx`: 전체 페이지 라우팅
- `ProtectedRoute.tsx`: 로그인 필요 페이지 접근 제어

작성 기준:

- 홈, 로그인, 회원가입, 검색 결과, 상세 페이지, 마이페이지 경로를 관리합니다.
- 인증이 필요한 페이지는 보호 라우트로 분리합니다.
- 라우팅이 단순하면 `frontend/src/App.tsx`에 두고, 복잡해지면 이 폴더로 분리합니다.

### `frontend/src/layouts`

여러 페이지가 공유하는 화면 레이아웃을 작성합니다.

들어갈 수 있는 파일 예시:

- `MainLayout.tsx`: Header, Footer, 공통 컨테이너 포함
- `AuthLayout.tsx`: 로그인/회원가입 화면 전용 레이아웃

작성 기준:

- 페이지마다 반복되는 Header, Footer, 전체 여백 구조를 관리합니다.
- 실제 페이지 내용은 `pages`에서 작성하고 레이아웃에 끼워 넣습니다.

### `frontend/src/contexts`

전역 상태를 관리하는 React Context를 작성합니다.

들어갈 수 있는 파일 예시:

- `AuthContext.tsx`: 로그인 사용자 정보, 토큰 상태
- `NotificationContext.tsx`: 알림 목록과 읽음 상태
- `SearchContext.tsx`: 최근 검색어, 검색 상태

작성 기준:

- 여러 페이지에서 함께 사용하는 상태를 관리합니다.
- 단일 컴포넌트에서만 쓰는 상태는 Context로 올리지 않습니다.

### `frontend/tailwind.config.js`

Tailwind CSS 설정 파일입니다.

들어갈 내용:

- 프로젝트에서 사용할 파일 경로 설정
- 커스텀 색상
- 폰트 설정
- spacing, borderRadius 등 디자인 시스템 설정

### `frontend/vite.config.js`

Vite 프로젝트 설정 파일입니다.

들어갈 내용:

- React 플러그인 설정
- 개발 서버 포트
- 백엔드 API 프록시 설정
- 경로 alias 설정

## Docs

프로젝트 문서와 데이터베이스 관련 자료를 보관합니다.

### `docs/requirements.md`

프로젝트 요구사항과 구조 가이드를 정리합니다.

들어갈 내용:

- 프로젝트 목적
- 핵심 기능 목록
- 폴더 구조 설명
- 역할 분담
- 화면별 기능 요구사항
- API 요구사항

### `docs/document_checklist.md`

백엔드와 프론트엔드의 구현 파일 작성 상태와 누락된 파일을 확인하기 위한 체크리스트입니다.

들어갈 내용:

- 백엔드 Java 계층별 구현 파일 작성 여부
- Python 크롤링/전처리 파일 작성 여부
- 프론트엔드 페이지, 컴포넌트, API, 훅, 상태 관리 파일 작성 여부
- 아직 `.gitkeep`만 있는 빈 폴더 확인 항목

작성 기준:

- 구현 파일을 추가하거나 기능 코드를 작성할 때마다 체크 상태를 갱신합니다.
- 새 구현 파일이 추가되면 체크리스트에도 항목을 추가합니다.
- 기능 코드가 들어간 폴더의 `.gitkeep` 필요 여부를 함께 확인합니다.

### `docs/api_spec.md`

백엔드 API 명세를 정리합니다.

들어갈 내용:

- 회원가입, 로그인, 사용자 정보 API
- 상품 검색, 상품 상세, 가격 대시보드 API
- 찜 목록, 찜 추가, 찜 삭제 API
- 가격 변동, 역대 최저가, 알림 API
- 최근 검색, 검색 순위 API
- 맞춤 상품 추천 API
- 챗봇 API

작성 기준:

- API URL, HTTP Method, 요청값, 응답값, 에러 응답, 인증 필요 여부를 함께 기록합니다.

### `docs/db_schema.sql`

DB 테이블 생성 SQL과 ERD 기준 정보를 정리합니다.

들어갈 내용:

- 11개 테이블 DDL
- Primary Key, Foreign Key
- 인덱스
- 테이블 관계 설명
- 초기 데이터가 필요하다면 insert 예시
- ERD 이미지와 데이터 명세서 같은 DB 설계 참고 자료

작성 기준:

- 실제 DB 구조와 항상 일치하도록 관리합니다.
- Entity 클래스 작성 시 기준 문서로 사용합니다.

## Git 관리 기준

### `.gitkeep`

Git은 빈 폴더를 추적하지 않기 때문에, 아직 코드가 없는 폴더에는 `.gitkeep` 파일을 둡니다.

작성 기준:

- 폴더 안에 실제 코드 파일이 생기면 `.gitkeep`은 삭제해도 됩니다.
- `.gitkeep`은 기능 코드가 아니라 폴더 구조 유지용 파일입니다.

### `.gitignore`

프로젝트 루트의 `.gitignore` 하나만 사용합니다.

제외해야 할 파일 예시:

- 빌드 결과물
- IDE 설정 중 공유가 필요 없는 파일
- 로그 파일
- 환경 변수 파일
- API Key, DB 비밀번호가 들어간 파일

주의사항:

- 보안 정보가 들어간 파일은 절대 GitHub에 올리지 않습니다.
- 예시 설정은 `application-example.yml` 같은 별도 파일로 관리할 수 있습니다.
