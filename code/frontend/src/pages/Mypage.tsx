import { Heart, Package, Bell, User } from 'lucide-react';

// 찜 목록 가상 데이터
const wishlistItems = [
  { id: 1, name: 'MacBook Pro 14 M3', price: '2,390,000원', brand: 'Apple' },
  { id: 2, name: 'QuietComfort Ultra', price: '499,000원', brand: 'Bose' },
];

export default function MyPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-8 py-12 flex gap-12">
      {/* 사이드바 메뉴 */}
      <aside className="w-64 flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-6">마이페이지</h2>
        <nav className="flex flex-col gap-1">
          <button className="flex items-center gap-3 p-4 bg-black text-white rounded-2xl font-bold">
            <Heart className="w-5 h-5" /> 찜 목록
          </button>
          <button className="flex items-center gap-3 p-4 hover:bg-gray-100 rounded-2xl text-gray-500 transition-all">
            <Package className="w-5 h-5" /> 최근 본 상품
          </button>
          <button className="flex items-center gap-3 p-4 hover:bg-gray-100 rounded-2xl text-gray-500 transition-all">
            <Bell className="w-5 h-5" /> 알림 설정
          </button>
          <div className="h-[1px] bg-gray-100 my-4" />
          <button className="flex items-center gap-3 p-4 hover:bg-gray-100 rounded-2xl text-gray-500 transition-all">
            <User className="w-5 h-5" /> 프로필 수정
          </button>
        </nav>
      </aside>

      {/* 메인 콘텐츠 영역 */}
      <section className="flex-1">
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">찜 목록</h3>
          <p className="text-gray-500">관심 있는 상품의 가격 변동을 확인하세요.</p>
        </div>

        {/* 찜 목록 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group bg-white p-6 rounded-[24px] border border-black/[0.04] shadow-sm hover:shadow-md transition-all flex items-center gap-6">
              <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center">
                <Package className="w-8 h-8 text-gray-300" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-bold uppercase">{item.brand}</p>
                <h4 className="font-bold text-gray-900 mb-2">{item.name}</h4>
                <p className="font-bold text-lg">{item.price}</p>
              </div>
              <button className="p-3 bg-gray-50 rounded-full text-red-500 hover:bg-red-50 transition-colors">
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
