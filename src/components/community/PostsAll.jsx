import {
  AllWrap,
  BottomAdd,
  ButtonBox,
  Card,
  CardImage,
  CardWrap,
  Container,
  ContentWrap,
  Left,
  ListWrap,
  PaginationAll,
  Right,
} from './style';

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
                <p>
                  장르 <span>전체 초기화</span>
                </p>
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
        <PaginationAll>
          <ul>
            <li>&lt;&lt;</li>
            <li>&lt;</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>&gt;</li>
            <li>&gt;&gt;</li>
          </ul>
        </PaginationAll>
        <BottomAdd>
          <div>
            <ul>
              공지
              <li>2025년 판권 종료되는 애니메이션 안내 </li>
            </ul>
          </div>
        </BottomAdd>
      </AllWrap>
    </>
  );
};

export default PostsAll;
