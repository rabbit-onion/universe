import { ItemWrap } from '../storage/style';
import RatingItem from './RatingItem';

const RatingList = () => {
  return (
    <>
      <ItemWrap>
        <RatingItem />
        <RatingItem />
      </ItemWrap>
    </>
  );
};

export default RatingList;
