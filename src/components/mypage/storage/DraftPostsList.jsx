import { ItemWrap } from './style';
import DraftPostsItem from './DraftPostsItem';

const DraftPostsList = () => {
  return (
    <>
      <ItemWrap>
        <DraftPostsItem />
        <DraftPostsItem />
      </ItemWrap>
    </>
  );
};

export default DraftPostsList;
