import { AllWrap, ButtonBox, Card, CardImage, CardWrap, Container, ContentWrap, Left, ListWrap, Right } from './style';

const PostsAll = () => {
  return (
    <>
      <AllWrap>
        <Container>
          <h2>전체게시글</h2>
          <ButtonBox>
            <button>최신순</button>
            <button>글쓰기</button>
          </ButtonBox>
          <ContentWrap>
            <ListWrap>
              <ul>
                <p>장르</p>
                <hr />
                <li>로맨스</li>
                <li>드라마</li>
                <li>판타지</li>
                <li>로맨스 판타지</li>
                <li>모험</li>
                <li>무협</li>
                <li>미스터리</li>
                <li>SF</li>
                <li>GL</li>
                <li>BL</li>
                <li>SF</li>
              </ul>
            </ListWrap>
            <CardWrap>
              <CardImage>
                <img src="/public/images/pattern/horizon/doit.jpg" alt="" />
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
          </ContentWrap>
        </Container>
      </AllWrap>
    </>
  );
};

export default PostsAll;
