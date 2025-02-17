import ReviewItem from './ReviewItem';
import { ReviewItemWrap, SubTitle } from './style';

const ReviewList = () => {
  return (
    <>
      <SubTitle>
        <h3>리뷰 (3)</h3>
        <select name="" id="">
          <option value="recent">최신순</option>
          <option value="rate">인기순</option>
        </select>
      </SubTitle>

      <ReviewItemWrap>
        <ReviewItem />
        <hr />
        <ReviewItem />
        <hr />
        <ReviewItem />
      </ReviewItemWrap>
    </>
  );
};

export default ReviewList;
