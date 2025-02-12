import { ItemWrap } from '../storage/style';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  return (
    <>
      <ItemWrap>
        <ReviewItem />
        <ReviewItem />
      </ItemWrap>
    </>
  );
};

export default ReviewList;
