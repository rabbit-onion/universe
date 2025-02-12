import { DraftPostsList, LikedList, MyPostsList, RecentsList } from '../mypage';

const ContBoxLayout = () => {
  return (
    <>
      {/* 저장소 컨텐츠 */}
      {/* <h3>작품 (8)</h3>
      <RecentsList /> */}
      {/* <h3>찜한작품 (5)</h3>
      <LikedList /> */}
      {/* <h3>나의 게시글 (3)</h3>
      <MyPostsList /> */}
      {/* <h3>임시저장 (1)</h3>
      <DraftPostsList /> */}

      {/* 보관함 컨텐츠 */}
      <h3>작품 (8)</h3>
      <RecentsList />
      {/* <h3>찜한작품 (5)</h3> */}
      {/* <LikedList /> */}
      {/* <h3>나의 게시글 (3)</h3> */}
      {/* <MyPostsList /> */}
    </>
  );
};

export default ContBoxLayout;
