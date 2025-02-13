import MyPostsItem from './MyPostsItem';
import { ItemWrap } from './style';

const MyPostsList = () => {
  return (
    <>
      <ItemWrap>
        <MyPostsItem />
        <MyPostsItem />
        <MyPostsItem />
      </ItemWrap>
    </>
  );
};

export default MyPostsList;
