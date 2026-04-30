# Hama Frontend

중고거래 플랫폼의 상품 가격을 한 화면에서 비교하고, 사용자가 원하는 상품의 최저가와 플랫폼별 차이를 직관적으로 확인할 수 있도록 돕는 프론트엔드 앱입니다.

## 현재 범위

- 메인 화면 UI
- 검색창 및 최근 검색어 팝업
- 프로모션 배너
- 카테고리 선택 UI
- 추천 상품 카드 그리드
- 로그인/회원가입 진입 버튼

아직 실제 검색 실행, API 연동, 라우팅, 상품 상세, 가격 비교, AI 챗봇 기능은 구현 전입니다.

## 폴더 구조

```text
src/
  components/   화면을 구성하는 UI 컴포넌트
  data/         임시 mock data
  types/        화면 데이터 타입
  App.tsx       메인 화면 조립
  App.css       Hama 화면 스타일
  index.css     전역 reset 및 기본 폰트 설정
```

## 기술 스택

- Vite
- React
- TypeScript
- CSS
- lucide-react

## 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

## 다음 우선순위

1. 라우팅 추가: 메인, 검색 결과, 상품 상세, 로그인, 마이페이지
2. mock data 기반 검색 결과 페이지 구현
3. 백엔드 API 계약에 맞춘 요청/응답 타입 정리
4. 최근 검색어 저장/삭제 상태 연동
5. 상품 상세 및 가격 비교 UI 확장
