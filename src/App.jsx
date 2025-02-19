import GlobalStyle from './styled/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import {
  Home,
  Main,
  NotFile,
  Search,
  DailyAni,
  Community,
  Membership,
  Login,
  Join,
  Profile,
  Video,
  Mypage,
} from './pages';
import ModalLayout from './common/ModalLayout';
import { AuthLayout, FindId, FindPw, Mybox, NonHeaderLayout, Storage, ViewPost, WritePost } from './components';
import {
  CommentList,
  DraftPostsList,
  LikedList,
  MyPostsList,
  RatingList,
  RecentsList,
  ReviewList,
} from './components/mypage';
import PostsAll from './components/community/postAll/PostsAll';

// import { ThemeProvider } from 'styled-components';
// import { theme } from './styles/theme';

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tagsearch" element={<Search />} />
          <Route path="/dailyani" element={<DailyAni />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path="storage" element={<Storage />}>
              <Route path="recent" element={<RecentsList />} />
              <Route path="liked" element={<LikedList />} />
              <Route path="myposts" element={<MyPostsList />} />
              <Route path="mydrafts" element={<DraftPostsList />} />
            </Route>
            <Route path="box" element={<Mybox />}>
              <Route path="ratings" element={<RatingList />} />
              <Route path="reviews" element={<ReviewList />} />
              <Route path="comments" element={<CommentList />} />
            </Route>
          </Route>

          <Route path="/community">
            <Route index element={<Community />} />
            <Route path="posts" element={<PostsAll />} />
            <Route path="viewpost" element={<ViewPost />} />
            <Route path="write" element={<WritePost />} />
          </Route>

          {/* 최종 path는 작품ID로 들어갈듯 */}
          <Route path="/videoinfo" element={<ModalLayout />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="findid" element={<FindId />} />
          <Route path="findpw" element={<FindPw />} />
        </Route>

        <Route path="/video" element={<NonHeaderLayout />}>
          {/* 실제로는 path='video/작품id' element={<Video/>} 로 들어갈 듯 */}
          <Route path="play" element={<Video />} />
        </Route>

        <Route path="*" element={<NotFile />} />
      </Routes>

      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
