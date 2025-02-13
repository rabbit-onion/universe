import ReviewItem from './ReviewItem';
import { ReviewItemWrap } from './style';

const ReviewList = () => {
  return (
    <>
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
