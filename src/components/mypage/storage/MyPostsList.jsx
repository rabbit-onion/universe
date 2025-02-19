import { userActivityMockData } from '../../../assets/api/userActivityMockData';
import MyPostsItem from './MyPostsItem';
import { ItemWrap } from './style';

const MyPostsList = () => {
  const mypostsData = userActivityMockData.myPosts;

  return (
    <>
      <h3>나의 게시글 ({mypostsData.length})</h3>

      <ItemWrap>
        {mypostsData.map((mypost) => (
          <MyPostsItem key={mypost.id} mypost={mypost} />
        ))}
      </ItemWrap>
    </>
  );
};

export default MyPostsList;
