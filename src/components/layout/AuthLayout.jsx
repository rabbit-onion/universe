import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export const LoginBg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url('https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/login/loginbg.png')
    no-repeat 0 0;
  background-size: cover;
`;

export const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const AuthLayout = () => {
  return (
    <div>
      <LoginBg>
        <Dimmed>
          {/* 라우터 페이지 들어오는 곳 */}
          <Outlet />
        </Dimmed>
      </LoginBg>
    </div>
  );
};

export default AuthLayout;
