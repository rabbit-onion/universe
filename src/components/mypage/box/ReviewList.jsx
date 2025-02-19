import { userActivityMockData } from '../../../assets/api/userActivityMockData';
import ReviewItem from './ReviewItem';
import { ReviewItemWrap, SubTitle } from './style';

const ReviewList = () => {
  const reviewsData = userActivityMockData.reviews;

  return (
    <>
      <SubTitle>
        <h3>리뷰 ({reviewsData.length})</h3>
        <select name="" id="">
          <option value="recent">최신순</option>
          <option value="rate">인기순</option>
        </select>
      </SubTitle>

      <ReviewItemWrap>
        {reviewsData.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
        <hr />
      </ReviewItemWrap>
    </>
  );
};

export default ReviewList;
