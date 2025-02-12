import { DraftPostsList, LikedList, MyPostsList, RatingList, RecentsList, ReviewList } from '../mypage';
import { SubTitle } from './style';

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
      {/* <SubTitle>
        <h3>별점 (2)</h3>
        <select name="" id="">
          <option value="recent">최신순</option>
          <option value="rate">별점순</option>
        </select>
      </SubTitle>
      <RatingList /> */}
      <SubTitle>
        <h3>리뷰 (3)</h3>
        <select name="" id="">
          <option value="recent">최신순</option>
          <option value="rate">인기순</option>
        </select>
      </SubTitle>
      <ReviewList />
      {/* <h3>나의 게시글 (3)</h3> */}
      {/* <MyPostsList /> */}
    </>
  );
};

export default ContBoxLayout;
