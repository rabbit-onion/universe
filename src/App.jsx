import GlobalStyle from './styled/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import { Home, Main, NotFile, Search, Community, Membership, Login, Join, Profile, Video, Mypage } from './pages';
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

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/tagsearch" element={<Search />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community">
            <Route index element={<Community />} />
            <Route path="posts" element={<PostsAll />} />
            <Route path="viewpost" element={<ViewPost />} />
            <Route path="write" element={<WritePost />} />
          </Route>
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
          <Route path=":page/videoinfo" element={null} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="findid" element={<FindId />} />
          <Route path="findpw" element={<FindPw />} />
        </Route>

        <Route path="/video" element={<NonHeaderLayout />}>
          {/* 추후 path=':작품id' element={<Video/>} 로 변경 */}
          <Route path="play" element={<Video />} />
        </Route>

        <Route path="*" element={<NotFile />} />
      </Routes>
    </>
  );
};

export default App;
