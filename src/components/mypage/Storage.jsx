import { NavLink, Outlet } from 'react-router-dom';
import { CategoryTab, ContentsBox } from './style';

const Storage = () => {
  return (
    <>
      <CategoryTab>
        <ul>
          <NavLink to="/mypage/storage/recent">
            <li>최근 본</li>
          </NavLink>
          <NavLink to="/mypage/storage/liked">
            <li>찜한작품</li>
          </NavLink>
          <NavLink to="/mypage/storage/myposts">
            <li>나의 게시글</li>
          </NavLink>
          <NavLink to="/mypage/storage/mydrafts">
            <li>임시저장</li>
          </NavLink>
        </ul>
        <hr />
      </CategoryTab>
      <ContentsBox>
        <Outlet />
      </ContentsBox>
    </>
  );
};

export default Storage;
