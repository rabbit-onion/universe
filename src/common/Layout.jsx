import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet, useLocation } from 'react-router-dom';
import ModalLayout from './ModalLayout';

const Layout = () => {
  const location = useLocation();
  const showModal = location.pathname.includes('/videoinfo');

  return (
    <div>
      <Header />
      <main className="main">
        {/* 라우터 페이지 들어오는 곳 */}
        <Outlet />
      </main>
      <Footer />
      {showModal && <ModalLayout />}
    </div>
  );
};

export default Layout;
