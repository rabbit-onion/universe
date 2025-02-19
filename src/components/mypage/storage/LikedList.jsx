import { userActivityMockData } from '../../../assets/api/userActivityMockData';
import LikedItem from './LikedItem';
import { ItemWrap } from './style';

const LikedList = () => {
  const likedData = userActivityMockData.favorites;

  return (
    <>
      <h3>찜한작품 ({likedData.length})</h3>

      <ItemWrap>
        {likedData.map((liked) => (
          <LikedItem key={liked.id} liked={liked} />
        ))}
      </ItemWrap>
    </>
  );
};

export default LikedList;
