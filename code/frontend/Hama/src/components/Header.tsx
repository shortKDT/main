export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-link" href="/" aria-label="얼마지 메인으로 가기">
          <img src="/hamalogo.png" alt="" className="brand-logo" />
        </a>
        <nav aria-label="메인 네비게이션" className="header-actions">
          <a className="button button-secondary" href="/signup">
            회원가입
          </a>
          <a className="button button-primary" href="/login">
            로그인
          </a>
        </nav>
      </div>
    </header>
  );
}
