import { ItemWrap } from './style';
import DraftPostsItem from './DraftPostsItem';
import { userActivityMockData } from '../../../assets/api/userActivityMockData';

const DraftPostsList = () => {
  const draftsData = userActivityMockData.draftPosts;

  return (
    <>
      <h3>임시저장 ({draftsData.length})</h3>

      <ItemWrap>
        {draftsData.map((draft) => (
          <DraftPostsItem key={draft.id} draft={draft} />
        ))}
      </ItemWrap>
    </>
  );
};

export default DraftPostsList;
