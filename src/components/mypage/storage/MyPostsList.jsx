import MyPostsItem from './MyPostsItem';
import { ItemWrap } from './style';

const MyPostsList = () => {
  return (
    <>
      <h3>나의 게시글 (3)</h3>

      <ItemWrap>
        <MyPostsItem />
        <MyPostsItem />
        <MyPostsItem />
      </ItemWrap>
    </>
  );
};

export default MyPostsList;
