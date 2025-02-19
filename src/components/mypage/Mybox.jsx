import { NavLink, Outlet } from 'react-router-dom';
import { CategoryTab, ContentsBox } from './style';

const Mybox = () => {
  return (
    <>
      <CategoryTab>
        <ul>
          <NavLink to="/mypage/box/ratings">
            <li>별점</li>
          </NavLink>
          <NavLink to="/mypage/box/reviews">
            <li>리뷰</li>
          </NavLink>
          <NavLink to="/mypage/box/comments">
            <li>댓글</li>
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

export default Mybox;
