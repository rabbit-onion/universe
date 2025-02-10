import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #000;
`;

const NonHeaderLayout = () => {
  return (
    <>
      <Wrap>
        {/* 라우터 페이지 들어오는 곳 */}
        <Outlet />
      </Wrap>
    </>
  );
};

export default NonHeaderLayout;
