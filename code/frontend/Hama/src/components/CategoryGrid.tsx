import type { Category } from '../types/catalog';

type CategoryGridProps = {
  categories: Category[];
  activeCategoryId: string;
  onSelect: (categoryId: string) => void;
};

export function CategoryGrid({
  categories,
  activeCategoryId,
  onSelect,
}: CategoryGridProps) {
  return (
    <section className="category-section" aria-label="카테고리 선택">
      <div className="container">
        <div className="category-grid">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                className={`category-card ${isActive ? 'is-active' : ''}`}
                onClick={() => onSelect(category.id)}
                aria-pressed={isActive}
              >
                <Icon aria-hidden="true" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
