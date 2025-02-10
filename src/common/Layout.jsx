import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="main">
        {/* 라우터 페이지 들어오는 곳 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
