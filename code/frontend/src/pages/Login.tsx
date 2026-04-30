import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* 로고 영역 (이미지의 로고 파일 경로에 맞게 수정하세요) */}
        <div className="flex justify-center mb-8">
          <img src="/hamalogo.png" alt="Hama Logo" className="h-10" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">로그인</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
              placeholder="example@hama.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 mt-6"
          >
            로그인하기
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          아직 회원이 아니신가요?
          <a href="/signup" className="ml-2 text-black font-bold underline">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
