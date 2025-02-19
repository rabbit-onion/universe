import { Card, CardImage, CardWrap, Left, Right } from '../style';

const PostItem = () => {
  return (
    <>
      <CardWrap>
        <CardImage>
          <img src="/public/images/pattern/horizon/allpost.png" alt="" />
        </CardImage>
        <Card>
          <Left>
            <h1>너에게 닿기를 시즌2 후기</h1>
            <p>오늘은 맑음</p>
          </Left>
          <Right>
            <span>346</span>
            <span>15</span>
            <p>2025. 01. 18</p>
          </Right>
        </Card>
      </CardWrap>
    </>
  );
};

export default PostItem;
