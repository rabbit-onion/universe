import React from 'react';
import { ContBoxLayout, ProfileInfo } from '../../components';
import {
  CategoryTab,
  ContentsBox,
  Desc,
  Inner,
  MyPageInner,
  MyPageWrap,
  ProfileInfoWrap,
  StorageBoxWrap,
} from './style';
import { NavLink } from 'react-router-dom';

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
            <Inner>
              {/* <h2>저장소</h2> */}
              <h2>보관함</h2>
              <Desc>
                <CategoryTab>
                  <ul>
                    <NavLink to="#">
                      <li>최근 본</li>
                    </NavLink>
                    <NavLink to="#">
                      <li>찜한작품</li>
                    </NavLink>
                    <NavLink to="#">
                      <li>나의 게시글</li>
                    </NavLink>
                    <NavLink to="#">
                      <li>임시저장</li>
                    </NavLink>
                  </ul>
                  {/* <ul>
                    <NavLink to="#">
                      <li>별점</li>
                    </NavLink>
                    <NavLink to="#">
                      <li>리뷰</li>
                    </NavLink>
                    <NavLink to="#">
                      <li>댓글</li>
                    </NavLink>
                  </ul> */}
                  <hr />
                </CategoryTab>
                <ContentsBox>
                  <ContBoxLayout />
                </ContentsBox>
              </Desc>
            </Inner>
          </StorageBoxWrap>
        </MyPageInner>
      </MyPageWrap>
    </>
  );
};

export default Mypage;
