import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    // 페이지가 변경될 때마다 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]); // 경로가 바뀔 때마다 실행

  return null;
};

export default ScrollToTop;
