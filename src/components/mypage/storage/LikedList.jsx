import LikedItem from './LikedItem';
import { ItemWrap } from './style';

const LikedList = () => {
  return (
    <>
      <h3>찜한작품 (5)</h3>

      <ItemWrap>
        <LikedItem />
        <LikedItem />
        <LikedItem />
        <LikedItem />
        <LikedItem />
      </ItemWrap>
    </>
  );
};

export default LikedList;
