import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      <main className="main">
        {/* 라우터 페이지 들어오는 곳 */}
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
