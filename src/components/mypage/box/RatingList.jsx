import { userActivityMockData } from '../../../assets/api/userActivityMockData';
import { ItemWrap } from '../storage/style';
import RatingItem from './RatingItem';
import { SubTitle } from './style';

const RatingList = () => {
  const ratingsData = userActivityMockData.ratings;

  return (
    <>
      <SubTitle>
        <h3>별점 ({ratingsData.length})</h3>
        <select name="" id="">
          <option value="recent">최신순</option>
          <option value="rate">별점순</option>
        </select>
      </SubTitle>

      <ItemWrap>
        {ratingsData.map((rating) => (
          <RatingItem key={rating.id} rating={rating} />
        ))}
      </ItemWrap>
    </>
  );
};

export default RatingList;
