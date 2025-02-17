import { ItemWrap } from '../storage/style';
import RatingItem from './RatingItem';
import { SubTitle } from './style';

const RatingList = () => {
  return (
    <>
      <SubTitle>
        <h3>별점 (2)</h3>
        <select name="" id="">
          <option value="recent">최신순</option>
          <option value="rate">별점순</option>
        </select>
      </SubTitle>

      <ItemWrap>
        <RatingItem />
        <RatingItem />
      </ItemWrap>
    </>
  );
};

export default RatingList;
