import { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import {
  Search, Monitor, Laptop, Smartphone, Bike, Shirt, Footprints,
  Package, Camera, Gamepad2, Armchair, Music, Tent,
  Image as ImageIcon, ChevronLeft, ChevronRight, Clock, X,
  ArrowLeft, Heart, Bell, User, Settings
} from 'lucide-react';

// --- 데이터 영역 ---
const categories = [
  { id: 'pc', name: '컴퓨터', icon: Monitor },
  { id: 'laptop', name: '노트북', icon: Laptop },
  { id: 'phone', name: '핸드폰', icon: Smartphone },
  { id: 'bike', name: '자전거', icon: Bike },
  { id: 'cloth', name: '의류', icon: Shirt },
  { id: 'shoes', name: '신발', icon: Footprints },
  { id: 'goods', name: '굿즈', icon: Package },
  { id: 'camera', name: '카메라', icon: Camera },
  { id: 'game', name: '게임기', icon: Gamepad2 },
  { id: 'furniture', name: '가구', icon: Armchair },
  { id: 'music', name: '악기', icon: Music },
  { id: 'camping', name: '캠핑', icon: Tent },
];

const products = [
  { id: 1, name: 'MacBook Pro 14 M3', brand: 'Apple', price: '2,390,000원' },
  { id: 2, name: 'QuietComfort Ultra', brand: 'Bose', price: '499,000원' },
  { id: 3, name: 'G Pro X Superlight 2', brand: 'Logitech', price: '199,000원' },
  { id: 4, name: 'EOS R6 Mark II', brand: 'Canon', price: '3,190,000원' },
  { id: 5, name: 'PlayStation 5 Slim', brand: 'Sony', price: '558,000원' },
  { id: 6, name: 'Herman Miller Aeron', brand: 'Furniture', price: '2,100,000원' },
  { id: 7, name: 'Instax Mini 12', brand: 'Fujifilm', price: '110,000원' },
  { id: 8, name: 'Keychron Q1 Pro', brand: 'Keychron', price: '240,000원' },
];

// --- 👤 마이페이지 컴포넌트 ---
function MyPage() {
  const wishlistItems = [
    { id: 1, name: 'MacBook Pro 14 M3', price: '2,390,000원', brand: 'Apple' },
    { id: 2, name: 'QuietComfort Ultra', price: '499,000원', brand: 'Bose' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-12 flex flex-col md:flex-row gap-12 animate-in fade-in duration-500">
      <aside className="w-full md:w-64 flex flex-col gap-2">
        <h2 className="text-2xl font-bold mb-6">마이페이지</h2>
        <nav className="flex flex-col gap-1">
          <button className="flex items-center gap-3 p-4 bg-black text-white rounded-2xl font-bold">
            <Heart className="w-5 h-5" /> 찜 목록
          </button>
          <button className="flex items-center gap-3 p-4 hover:bg-gray-100 rounded-2xl text-gray-500 transition-all text-left">
            <Package className="w-5 h-5" /> 최근 본 상품
          </button>
          <button className="flex items-center gap-3 p-4 hover:bg-gray-100 rounded-2xl text-gray-500 transition-all text-left">
            <Bell className="w-5 h-5" /> 알림 설정
          </button>
        </nav>
      </aside>

      <section className="flex-1">
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-2">찜 목록</h3>
          <p className="text-gray-500 text-sm">관심 있는 상품의 최신 가격 정보를 확인하세요.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="group bg-white p-6 rounded-[24px] border border-black/[0.04] shadow-sm hover:shadow-md transition-all flex items-center gap-6">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300">
                <ImageIcon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-gray-400 font-black uppercase">{item.brand}</p>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{item.name}</h4>
                <p className="font-bold text-base">{item.price}</p>
              </div>
              <button className="p-2 text-red-500"><Heart className="w-5 h-5 fill-current" /></button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// --- 🏠 홈 페이지 컴포넌트 ---
function HomePage() {
  const [activeId, setActiveId] = useState('laptop');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main className="flex-1 flex flex-col gap-20 pb-24">
      {/* Search Section */}
      <section className="w-full pt-5 pb-4 relative z-[70]">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="w-full max-w-3xl mx-auto relative">
            <div className="relative z-[75]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="search"
                onFocus={() => setIsSearchOpen(true)}
                placeholder="어떤 상품의 최저가를 찾으시나요?"
                className="w-full py-4 pl-14 pr-6 bg-white border border-black/[0.06] rounded-2xl text-base shadow-sm focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
            {isSearchOpen && (
              <>
                <div className="fixed inset-0 z-[60]" onClick={() => setIsSearchOpen(false)} />
                <div className="absolute left-0 w-full bg-white rounded-2xl shadow-xl border border-black/[0.06] mt-2 z-[80] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-gray-900">최근 검색어</h3>
                    <button className="text-xs font-medium text-[#86868B] hover:text-black">전체 삭제</button>
                  </div>
                  <ul className="space-y-1">
                    {['맥북 air', '나이키 조던', '캠핑 텐트'].map((item, idx) => (
                      <li key={idx}>
                        <button className="w-full flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl text-left">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-base font-medium text-gray-700">{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="w-full px-6 text-center">
        <div className="max-w-[1300px] mx-auto aspect-[21/9] rounded-[32px] bg-gray-100 relative overflow-hidden shadow-sm inline-block w-full">
          <img src="/hama_lowban1.jpg" alt="배너" className="w-full h-full object-cover" />
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full shadow-md flex items-center justify-center"><ChevronLeft className="w-6 h-6"/></button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full shadow-md flex items-center justify-center"><ChevronRight className="w-6 h-6"/></button>
        </div>
      </section>

      {/* Category Section */}
      <section className="w-full">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-12 max-w-[1080px] mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`group flex flex-col items-center justify-center p-8 rounded-3xl transition-all ${
                  cat.id === activeId ? 'bg-[#1D1D1F] text-white shadow-md' : 'bg-transparent text-[#86868B] hover:bg-gray-50'
                }`}
              >
                <cat.icon className={`w-10 h-10 mb-4 ${cat.id === activeId ? 'text-white' : 'text-[#86868B] group-hover:text-[#1D1D1F]'}`} strokeWidth={1.5} />
                <span className="text-base font-bold">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">추천 상품</h2>
            <div className="flex gap-2">
              <button className="px-5 py-2.5 text-xs font-semibold bg-black text-white rounded-full">인기순</button>
              <button className="px-5 py-2.5 text-xs font-semibold bg-white border border-black/[0.06] text-[#86868B] rounded-full">최신순</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <article key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-black/[0.04] shadow-sm hover:shadow-md transition-all">
                <div className="aspect-[4/3] bg-[#F5F5F7] flex items-center justify-center p-8">
                  <ImageIcon className="w-12 h-12 text-gray-300" strokeWidth={1} />
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#86868B] font-medium uppercase mb-2">{product.brand}</p>
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2 leading-snug">{product.name}</h3>
                  <p className="text-sm font-bold text-gray-900 mt-5">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// --- 🌐 메인 App 컴포넌트 ---
export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isFindPwOpen, setIsFindPwOpen] = useState(false);

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    setIsFindPwOpen(false);
  };

  return (
    <div className="relative font-sans antialiased text-gray-900 bg-[#F9F9FB]">

      {/* --- 모달 시스템 --- */}
      {(isLoginOpen || isSignUpOpen || isFindPwOpen) && (
        <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md transition-all" onClick={closeModals} />
      )}

      {/* 로그인 */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
          <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-10 flex flex-col items-center animate-in fade-in zoom-in duration-300 pointer-events-auto">
            <button onClick={closeModals} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6 text-gray-400" /></button>
            <img src="/hamalogo.png" alt="Logo" className="h-10 mb-8" />
            <h2 className="text-2xl font-bold mb-8 text-center leading-tight">반가워요!<br/>다시 로그인할까요?</h2>
            <form className="w-full space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); closeModals(); }}>
              <input type="email" placeholder="이메일 주소" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all"/>
              <input type="password" placeholder="비밀번호" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all"/>
              <div className="flex justify-end px-1">
                <button type="button" onClick={() => { setIsLoginOpen(false); setIsFindPwOpen(true); }} className="text-xs font-medium text-gray-400 hover:text-black">비밀번호를 잊으셨나요?</button>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all mt-2">로그인</button>
            </form>
            <div className="mt-8 text-sm text-gray-500">계정이 없으신가요? <button onClick={() => { setIsLoginOpen(false); setIsSignUpOpen(true); }} className="ml-2 text-black font-bold underline">회원가입</button></div>
          </div>
        </div>
      )}

      {/* 비밀번호 찾기 */}
      {isFindPwOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
          <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-10 flex flex-col items-center animate-in fade-in zoom-in duration-300 pointer-events-auto">
            <button onClick={() => { setIsFindPwOpen(false); setIsLoginOpen(true); }} className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-full"><ArrowLeft className="w-5 h-5 text-gray-400" /></button>
            <button onClick={closeModals} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6 text-gray-400" /></button>
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6"><Search className="w-6 h-6 text-black" /></div>
            <h2 className="text-2xl font-bold mb-3 text-center">비밀번호 찾기</h2>
            <p className="text-sm text-gray-500 text-center mb-8 leading-relaxed">가입하신 이메일 주소를 입력하시면<br/>비밀번호 재설정 링크를 보내드립니다.</p>
            <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="이메일 주소 입력" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all"/>
              <button className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all mt-4">재설정 링크 보내기</button>
            </form>
          </div>
        </div>
      )}

      {/* 회원가입 */}
      {isSignUpOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
          <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-10 flex flex-col items-center animate-in fade-in zoom-in duration-300 pointer-events-auto">
            <button onClick={closeModals} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"><X className="w-6 h-6 text-gray-400" /></button>
            <h2 className="text-2xl font-bold mb-6 text-center leading-tight">새로운 시작,<br/>함께해 보세요!</h2>
            <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="이름" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-black outline-none"/>
              <input type="email" placeholder="이메일 주소" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-black outline-none"/>
              <input type="password" placeholder="비밀번호" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-black outline-none"/>
              <button className="w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all mt-4">시작하기</button>
            </form>
            <div className="mt-8 text-sm text-gray-500">이미 회원이신가요? <button onClick={() => { setIsSignUpOpen(false); setIsLoginOpen(true); }} className="text-black font-bold underline">로그인</button></div>
          </div>
        </div>
      )}

      {/* --- 레이아웃 --- */}
      <div className="w-full min-h-screen flex flex-col">
        <header className="sticky top-0 z-[65] w-full bg-white/80 backdrop-blur-lg border-b border-black/[0.04]">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-8">
            <Link to="/"><img src="/hamalogo.png" className="h-10 cursor-pointer" alt="Logo" /></Link>
            <nav className="flex items-center gap-4">
              {isLoggedIn ? (
                <button onClick={() => navigate('/mypage')} className="flex items-center gap-2 px-5 py-2.5 font-bold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all">
                  <User className="w-5 h-5" /> 마이페이지
                </button>
              ) : (
                <>
                  <button onClick={() => setIsSignUpOpen(true)} className="px-5 py-2.5 font-bold text-gray-700 hover:text-black">회원가입</button>
                  <button onClick={() => setIsLoginOpen(true)} className="px-5 py-2.5 font-bold text-white bg-black rounded-xl hover:bg-gray-800 transition-all">로그인</button>
                </>
              )}
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>

        <footer className="w-full bg-white border-t border-black/[0.04] py-12 mt-auto">
          <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center">
            <div>© 2026 Eolmaji. All rights reserved.</div>
            <nav className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-900">이용약관</a>
              <a href="#" className="hover:text-gray-900">개인정보처리방침</a>
              <a href="#" className="hover:text-gray-900">고객센터</a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}