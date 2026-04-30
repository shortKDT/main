import { ChevronLeft, ChevronRight } from 'lucide-react';

export function HeroBanner() {
  return (
    <section className="banner-section" aria-label="프로모션 배너">
      <div className="container banner-frame">
        <button className="banner-arrow banner-arrow-left" aria-label="이전 배너">
          <ChevronLeft aria-hidden="true" />
        </button>
        <img
          src="/hama_lowban1.jpg"
          alt="여름 맞이 인테리어 특가 프로모션"
          className="banner-image"
        />
        <button className="banner-arrow banner-arrow-right" aria-label="다음 배너">
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
