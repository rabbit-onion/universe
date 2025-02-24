import { Link } from 'react-router-dom';
import { AllWrap, BottomAdd, ButtonBox, Container, ContentTitle, ContentWrap, ListWrap, PaginationAll } from '../style';
import PostList from './PostList';

const PostsAll = () => {
  return (
    <>
      <AllWrap>
        <Container>
          <ContentTitle>
            <h2>전체게시글</h2>
          </ContentTitle>
          <ButtonBox>
            <button>최신순</button>
            <button>
              <Link to="/community/write">글쓰기</Link>
            </button>
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
            <PostList />
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
