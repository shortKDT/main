# 구현 파일 작성 체크리스트

이 문서는 `backend`와 `frontend`에 실제 코드 파일이 작성되었는지 확인하기 위한 체크리스트입니다. `docs` 폴더에 보관하지만, 체크 대상은 문서 파일이 아니라 구현 파일입니다.

## 사용 방법

- 실제 기능 코드가 작성된 파일은 `[x]`로 체크합니다.
- 폴더만 있고 `.gitkeep`만 있는 경우는 아직 구현 파일이 없는 상태이므로 `[ ]`로 둡니다.
- 새 파일을 만들면 올바른 위치에 있는지 확인한 뒤 체크 항목을 추가합니다.
- 기능 코드가 들어간 폴더의 `.gitkeep`은 삭제해도 됩니다.

## 전체 진행 상태

- [ ] Backend Java 기본 구조 구현
- [x] Backend Python 크롤링 파일 작성
- [ ] Backend Python 전처리 파일 작성
- [ ] Frontend Vite 실행 진입 파일 구성
- [x] Frontend 기본 App 컴포넌트 작성
- [x] Frontend 페이지 컴포넌트 일부 작성
- [ ] Frontend API, 공통 컴포넌트, 훅, 상태 관리 파일 작성

## Backend Java

기준 위치: `code/backend/src/main/java/com/used/service`

### `config`

- [ ] `SecurityConfig.java`: 인증, 인가, 비밀번호 암호화 설정
- [ ] `CorsConfig.java`: 프론트엔드 요청 허용 설정
- [ ] `WebConfig.java`: 공통 Web MVC 설정
- [ ] `SupabaseConfig.java`: Supabase 연동이 필요할 경우 설정

현재 상태:

- [ ] `config` 폴더에는 아직 `.gitkeep`만 있음

### `controller`

- [ ] `UserController.java`: 회원가입, 로그인, 회원 정보 API
- [ ] `ItemController.java`: 상품 검색, 목록, 상세 API
- [ ] `WishController.java`: 찜 등록, 취소, 목록 API
- [ ] `RecommendationController.java`: 추천 상품 API
- [ ] `NotificationController.java`: 알림 조회, 읽음 처리 API
- [ ] `ChatbotController.java`: 챗봇 요청 API

현재 상태:

- [ ] `controller` 폴더에는 아직 `.gitkeep`만 있음

### `service`

- [ ] `UserService.java`: 회원 관련 비즈니스 로직
- [ ] `ItemService.java`: 상품 조회, 검색 로직
- [ ] `WishService.java`: 찜 기능 로직
- [ ] `RecommendationService.java`: 맞춤 추천 로직
- [ ] `NotificationService.java`: 알림 생성, 조회, 읽음 처리 로직
- [ ] `ChatbotService.java`: 챗봇 응답 처리 로직

현재 상태:

- [ ] `service` 폴더에는 아직 `.gitkeep`만 있음

### `repository`

- [ ] `UserRepository.java`: 사용자 테이블 접근
- [ ] `ItemRepository.java`: 상품 테이블 접근
- [ ] `WishRepository.java`: 찜 테이블 접근
- [ ] `SearchLogRepository.java`: 검색 로그 테이블 접근
- [ ] `RecommendationRepository.java`: 추천 상품 테이블 접근
- [ ] `NotificationRepository.java`: 알림 관련 테이블 접근

현재 상태:

- [ ] `repository` 폴더에는 아직 `.gitkeep`만 있음

### `dto`

- [ ] `UserRequestDto.java`: 회원가입, 로그인 요청 데이터
- [ ] `UserResponseDto.java`: 사용자 응답 데이터
- [ ] `ItemResponseDto.java`: 상품 응답 데이터
- [ ] `WishResponseDto.java`: 찜 목록 응답 데이터
- [ ] `RecommendationResponseDto.java`: 추천 상품 응답 데이터
- [ ] `ErrorResponseDto.java`: 공통 에러 응답 데이터

현재 상태:

- [ ] `dto` 폴더에는 아직 `.gitkeep`만 있음

### `entity`

- [ ] `User.java`: 사용자 테이블 매핑
- [ ] `Platform.java`: 플랫폼 테이블 매핑
- [ ] `Item.java`: 상품 테이블 매핑
- [ ] `PriceHistory.java`: 가격 이력 테이블 매핑
- [ ] `Wishlist.java`: 찜 테이블 매핑
- [ ] `SearchLog.java`: 검색 로그 테이블 매핑
- [ ] `SearchRanking.java`: 검색 순위 테이블 매핑
- [ ] `UserPreference.java`: 사용자 선호 태그 테이블 매핑
- [ ] `Banner.java`: 배너 테이블 매핑
- [ ] `ChatHistory.java`: 챗봇 대화 내역 테이블 매핑
- [ ] `ChatFaq.java`: 챗봇 FAQ 테이블 매핑
- [ ] `RecommendedItem.java`: 추천 상품 연결 테이블 매핑

현재 상태:

- [ ] `entity` 폴더에는 아직 `.gitkeep`만 있음

### `scheduler`

- [ ] `PriceUpdateScheduler.java`: 상품 가격 갱신 작업
- [ ] `LowestPriceAlertScheduler.java`: 최저가 알림 작업
- [ ] `SearchRankingScheduler.java`: 검색 순위 집계 작업

현재 상태:

- [ ] `scheduler` 폴더에는 아직 `.gitkeep`만 있음

### `notification`

- [ ] `NotificationService.java`: 알림 생성, 조회, 읽음 처리
- [ ] `NotificationType.java`: 알림 종류 정의

현재 상태:

- [ ] `notification` 폴더에는 아직 `.gitkeep`만 있음

### `chatbot`

- [ ] `ChatbotService.java`: 챗봇 응답 처리
- [ ] `ChatbotPromptBuilder.java`: 챗봇 프롬프트 생성
- [ ] `ChatbotController.java`: 챗봇 API 요청 처리

현재 상태:

- [ ] `chatbot` 폴더에는 아직 `.gitkeep`만 있음

### `exception`

- [ ] `GlobalExceptionHandler.java`: 공통 예외 처리
- [ ] `ErrorCode.java`: 에러 코드 정의
- [ ] `BusinessException.java`: 비즈니스 예외 정의

현재 상태:

- [ ] `exception` 폴더에는 아직 `.gitkeep`만 있음

### `resources`

기준 위치: `code/backend/src/main/resources`

- [x] `application.yml`: Spring Boot 설정 파일 생성
- [ ] DB 연결 정보 환경 변수 처리 확인
- [ ] JWT Secret 등 민감 정보 직접 기입 여부 확인

## Backend Python

기준 위치: `code/backend/src/main/python`

### `crawling`

- [x] `crawling_20260429.py`: 크롤링 스크립트 작성
- [x] `keyword_list.csv`: 크롤링 키워드 목록 작성
- [x] `archive/integrated_crawling_initial.py`: 초기 크롤링 코드 보관
- [ ] 크롤링 결과 저장 방식 정리
- [ ] DB 저장 연동 방식 정리

### `preprocessing`

- [ ] 중복 상품 제거 스크립트 작성
- [ ] 가격, 날짜, 상태값 정규화 스크립트 작성
- [ ] DB 저장 전 데이터 검증 스크립트 작성

현재 상태:

- [ ] `preprocessing` 폴더에는 아직 `.gitkeep`만 있음

### Python 의존성

- [x] `requirements.txt`: Python 패키지 목록 파일 생성
- [ ] 실제 실행에 필요한 패키지 목록 최신화

## Frontend

기준 위치: `code/frontend`

### Vite 실행 기본 파일

- [ ] `package.json`: 프론트엔드 의존성 및 실행 스크립트
- [ ] `index.html`: Vite HTML 진입 파일
- [ ] `src/main.tsx`: React 렌더링 진입 파일
- [x] `vite.config.js`: Vite 설정 파일 생성
- [x] `tailwind.config.js`: Tailwind CSS 설정 파일 생성

### `src/App.tsx`

- [x] `src/App.tsx`: 앱 최상위 컴포넌트 작성
- [x] `/` 홈 라우트 연결
- [x] `/login` 로그인 페이지 라우트 연결
- [x] `/mypage` 마이페이지 라우트 연결
- [ ] 라우팅 규모가 커질 경우 `src/routes`로 분리

### `src/pages`

- [x] `Login.tsx`: 로그인 페이지 작성
- [x] `Mypage.tsx`: 마이페이지 작성
- [ ] `Main.tsx`: 메인 페이지 분리 작성
- [ ] `Signup.tsx`: 회원가입 페이지 작성
- [ ] `SearchResult.tsx`: 검색 결과 페이지 작성
- [ ] `Detail.tsx`: 상품 상세 페이지 작성
- [ ] `WishList.tsx`: 찜 목록 전용 페이지가 필요할 경우 작성

### `src/components`

- [ ] `Header.tsx`: 상단 메뉴 공통 컴포넌트
- [ ] `Footer.tsx`: 하단 영역 공통 컴포넌트
- [ ] `SearchBar.tsx`: 검색창 공통 컴포넌트
- [ ] `ItemCard.tsx`: 상품 카드 공통 컴포넌트
- [ ] `Modal.tsx`: 공통 모달 컴포넌트
- [ ] `Button.tsx`: 공통 버튼 컴포넌트

현재 상태:

- [ ] `components` 폴더에는 아직 `.gitkeep`만 있음

### `src/api`

- [ ] `axios.ts`: API 기본 설정
- [ ] `userApi.ts`: 회원가입, 로그인, 사용자 API
- [ ] `itemApi.ts`: 상품 검색, 상세 API
- [ ] `wishApi.ts`: 찜 API
- [ ] `recommendationApi.ts`: 추천 API
- [ ] `notificationApi.ts`: 알림 API
- [ ] `chatbotApi.ts`: 챗봇 API

현재 상태:

- [ ] `api` 폴더에는 아직 `.gitkeep`만 있음

### `src/hooks`

- [ ] `useAuth.ts`: 로그인 상태 관리 훅
- [ ] `useSearch.ts`: 검색 상태 관리 훅
- [ ] `useWish.ts`: 찜 상태 관리 훅
- [ ] `useNotification.ts`: 알림 상태 관리 훅

현재 상태:

- [ ] `hooks` 폴더에는 아직 `.gitkeep`만 있음

### `src/routes`

- [ ] `AppRouter.tsx`: 라우팅 설정 분리
- [ ] `ProtectedRoute.tsx`: 로그인 필요 페이지 접근 제어

현재 상태:

- [ ] `routes` 폴더에는 아직 `.gitkeep`만 있음

### `src/layouts`

- [ ] `MainLayout.tsx`: Header, Footer 포함 기본 레이아웃
- [ ] `AuthLayout.tsx`: 로그인, 회원가입 전용 레이아웃

현재 상태:

- [ ] `layouts` 폴더에는 아직 `.gitkeep`만 있음

### `src/contexts`

- [ ] `AuthContext.tsx`: 로그인 사용자 정보와 토큰 상태
- [ ] `NotificationContext.tsx`: 알림 상태
- [ ] `SearchContext.tsx`: 검색 상태

현재 상태:

- [ ] `contexts` 폴더에는 아직 `.gitkeep`만 있음

### `src/styles`

- [ ] `global.css`: 전체 폰트, body, reset 스타일
- [ ] `tailwind.css`: Tailwind CSS 진입 파일
- [ ] `theme.css`: 색상, 간격 등 디자인 변수

현재 상태:

- [ ] `styles` 폴더에는 아직 `.gitkeep`만 있음

### `src/utils`

- [ ] `formatPrice.ts`: 가격 표시 형식 변환
- [ ] `formatDate.ts`: 날짜 표시 형식 변환
- [ ] `storage.ts`: localStorage/sessionStorage 공통 함수
- [ ] `validation.ts`: 입력값 검증 함수

현재 상태:

- [ ] `utils` 폴더에는 아직 `.gitkeep`만 있음

### `src/assets`

- [ ] 로고 이미지 추가
- [ ] 기본 상품 이미지 추가
- [ ] 아이콘 또는 공통 이미지 추가

현재 상태:

- [ ] `assets` 폴더에는 아직 `.gitkeep`만 있음

## 새 구현 파일을 추가할 때

- [ ] `requirements.md`의 폴더 기준에 맞는 위치인지 확인
- [ ] 이 체크리스트에 파일명을 추가
- [ ] 실제 기능 코드가 작성되면 체크
- [ ] 해당 폴더의 `.gitkeep` 필요 여부 확인
- [ ] API, DB, 화면 구조가 바뀌면 관련 문서도 함께 갱신
