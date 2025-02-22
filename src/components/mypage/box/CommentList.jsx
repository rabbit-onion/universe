import { userActivityMockData } from '../../../assets/api/userActivityMockData';
import CommentItem from './CommentItem';
import { ReviewItemWrap, SubTitle } from './style';

const CommentList = () => {
  const commentsData = userActivityMockData.comments;

  return (
    <>
      <SubTitle>
        <h3>댓글 ({commentsData.length})</h3>
        <select name="" id="">
          <option value="recent">최신순</option>
          <option value="rate">인기순</option>
        </select>
      </SubTitle>

      <ReviewItemWrap>
        {commentsData.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ReviewItemWrap>
    </>
  );
};

export default CommentList;
