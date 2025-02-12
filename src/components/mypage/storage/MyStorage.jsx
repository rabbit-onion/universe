import { NavLink } from 'react-router-dom';
import { CategoryTab, ContentsBox, StorageDesc, StorageInner } from './style';
import RecentsList from './RecentsList';
import LikedList from './LikedList';
import MyPostsList from './MyPostsList';
import DraftPostsList from './DraftPostsList';

const MyStorage = () => {
  return (
    <>
      <StorageInner>
        <h2>저장소</h2>
        <StorageDesc>
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
            <hr />
          </CategoryTab>
          <ContentsBox>
            {/* <h3>작품 (8)</h3> */}
            {/* <RecentsList /> */}
            {/* <h3>찜한작품 (5)</h3> */}
            {/* <LikedList /> */}
            {/* <h3>나의 게시글 (3)</h3> */}
            {/* <MyPostsList /> */}
            <h3>임시저장 (2)</h3>
            <DraftPostsList />
          </ContentsBox>
        </StorageDesc>
      </StorageInner>
    </>
  );
};

export default MyStorage;
