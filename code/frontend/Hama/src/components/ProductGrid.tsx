import { Image as ImageIcon } from 'lucide-react';
import type { Product } from '../types/catalog';

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="product-section" aria-label="추천 상품">
      <div className="container">
        <div className="section-heading">
          <h2>추천 상품</h2>
          <div className="sort-actions" aria-label="상품 정렬">
            <button className="sort-button is-active" aria-current="true">
              인기순
            </button>
            <button className="sort-button">최신순</button>
          </div>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <a href={`/product/${product.id}`} className="product-link">
                <div className="product-image-placeholder">
                  <ImageIcon aria-hidden="true" />
                </div>
                <div className="product-body">
                  <div>
                    <p className="product-brand">{product.brand}</p>
                    <h3>{product.name}</h3>
                  </div>
                  <p className="product-price">{product.price}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
