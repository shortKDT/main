import { Clock, Search, X } from 'lucide-react';

type SearchPanelProps = {
  isOpen: boolean;
  recentSearches: string[];
  onFocus: () => void;
  onClose: () => void;
};

export function SearchPanel({
  isOpen,
  recentSearches,
  onFocus,
  onClose,
}: SearchPanelProps) {
  return (
    <section className="search-section" role="search" aria-label="상품 검색">
      <div className="container">
        <div className="search-box">
          <label htmlFor="main-search" className="sr-only">
            검색어 입력
          </label>
          <Search className="search-icon" aria-hidden="true" />
          <input
            id="main-search"
            type="search"
            onFocus={onFocus}
            placeholder="어떤 상품의 최저가를 찾으시나요?"
            aria-autocomplete="list"
            aria-expanded={isOpen}
            aria-controls={isOpen ? 'search-popup' : undefined}
            className="search-input"
          />

          {isOpen && (
            <div id="search-popup" className="search-popup">
              <div className="search-popup-header">
                <h2>최근 검색어</h2>
                <button className="text-button" onClick={onClose}>
                  전체 삭제
                </button>
              </div>
              <ul className="recent-list" role="listbox" aria-label="최근 검색어 목록">
                {recentSearches.map((item) => (
                  <li key={item}>
                    <button className="recent-item" role="option" aria-selected="false">
                      <Clock className="recent-icon" aria-hidden="true" />
                      <span>{item}</span>
                      <X className="recent-remove-icon" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
