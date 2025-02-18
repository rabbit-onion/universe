import { Outlet } from 'react-router-dom';
import { Dimmed, LoginBg } from './style';

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
