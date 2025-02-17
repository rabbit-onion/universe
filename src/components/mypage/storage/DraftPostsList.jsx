import { ItemWrap } from './style';
import DraftPostsItem from './DraftPostsItem';

const DraftPostsList = () => {
  return (
    <>
      <h3>임시저장 (1)</h3>

      <ItemWrap>
        <DraftPostsItem />
        <DraftPostsItem />
      </ItemWrap>
    </>
  );
};

export default DraftPostsList;
