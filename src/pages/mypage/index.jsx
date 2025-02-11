import React from 'react';
import { MyBox, MyStorage, ProfileInfo } from '../../components';
import { MyPageInner, MyPageWrap, ProfileInfoWrap, StorageBoxWrap } from './style';

const Mypage = () => {
  return (
    <>
      <MyPageWrap>
        <h1 className="hide">마이페이지</h1>
        <MyPageInner>
          <ProfileInfoWrap>
            <ProfileInfo />
          </ProfileInfoWrap>
          <StorageBoxWrap>
            <MyStorage />
            {/* <MyBox /> */}
          </StorageBoxWrap>
        </MyPageInner>
      </MyPageWrap>
    </>
  );
};

export default Mypage;
