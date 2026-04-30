import { useState } from 'react';
import './App.css';
import { CategoryGrid } from './components/CategoryGrid';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ProductGrid } from './components/ProductGrid';
import { SearchPanel } from './components/SearchPanel';
import { categories, products, recentSearches } from './data/catalog';

function App() {
  const [activeCategoryId, setActiveCategoryId] = useState('laptop');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="app-shell">
      {isSearchOpen && (
        <button
          className="search-backdrop"
          onClick={() => setIsSearchOpen(false)}
          aria-label="검색 팝업 닫기"
        />
      )}

      <Header />
      <main className="app-main">
        <SearchPanel
          isOpen={isSearchOpen}
          recentSearches={recentSearches}
          onFocus={() => setIsSearchOpen(true)}
          onClose={() => setIsSearchOpen(false)}
        />
        <HeroBanner />
        <CategoryGrid
          categories={categories}
          activeCategoryId={activeCategoryId}
          onSelect={setActiveCategoryId}
        />
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
