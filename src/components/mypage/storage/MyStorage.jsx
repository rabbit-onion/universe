import { NavLink } from 'react-router-dom';
import RecentsList from './RecentsList';
import { CategoryTab, ContentsBox, StorageDesc, StorageInner } from './style';

const MyStorage = () => {
  return (
    <>
      <StorageInner>
        <h2>저장소</h2>
        <StorageDesc>
          <CategoryTab>
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
            <hr />
          </CategoryTab>
          <ContentsBox>
            <h3>작품 (8)</h3>
            <RecentsList />
            {/* <LikedList /> */}
            {/* <MyPostsList /> */}
            {/* <DraftPostsList /> */}
          </ContentsBox>
        </StorageDesc>
      </StorageInner>
    </>
  );
};

export default MyStorage;
