import RecentsItem from './RecentsItem';
import { ItemWrap } from './style';

const RecentsList = () => {
  return (
    <>
      <h3>작품 (8)</h3>

      <ItemWrap>
        <RecentsItem />
        <RecentsItem />
        <RecentsItem />
        <RecentsItem />
        <RecentsItem />
        <RecentsItem />
        <RecentsItem />
        <RecentsItem />
      </ItemWrap>
    </>
  );
};

export default RecentsList;
