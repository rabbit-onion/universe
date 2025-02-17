import CommentItem from './CommentItem';
import { ReviewItemWrap, SubTitle } from './style';

const CommentList = () => {
  return (
    <>
      <SubTitle>
        <h3>댓글 (1)</h3>
        <select name="" id="">
          <option value="recent">최신순</option>
          <option value="rate">인기순</option>
        </select>
      </SubTitle>

      <ReviewItemWrap>
        <CommentItem />
      </ReviewItemWrap>
    </>
  );
};

export default CommentList;
