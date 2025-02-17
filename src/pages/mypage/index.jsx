import React from 'react';
import { ProfileInfo } from '../../components';
import { Inner, MyPageInner, MyPageWrap, ProfileInfoWrap, StorageBoxWrap } from './style';
import { Outlet, useLocation } from 'react-router-dom';

const Mypage = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[2];

  return (
    <>
      <MyPageWrap>
        <h1 className="hide">마이페이지</h1>
        <MyPageInner>
          <ProfileInfoWrap>
            <ProfileInfo />
          </ProfileInfoWrap>

          <StorageBoxWrap>
            <Inner>
              {currentPath === 'storage' ? <h2>보관함</h2> : <h2>저장소</h2>}
              <div>
                <Outlet />
              </div>
            </Inner>
          </StorageBoxWrap>
        </MyPageInner>
      </MyPageWrap>
    </>
  );
};

export default Mypage;
