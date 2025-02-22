import { userActivityMockData } from '../../../assets/api/userActivityMockData';
import RecentsItem from './RecentsItem';
import { ItemWrap } from './style';

const RecentsList = () => {
  const recentsData = userActivityMockData.recentlyViewed;

  return (
    <>
      <h3>작품 (8)</h3>

      <ItemWrap>
        {recentsData.map((recent) => (
          <RecentsItem key={recent.id} recent={recent} />
        ))}
      </ItemWrap>
    </>
  );
};

export default RecentsList;
