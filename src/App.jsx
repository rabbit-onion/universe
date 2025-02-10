import GlobalStyle from './styled/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import { Home, Main, NotFile, Search, DailyAni, Community, Membership, Login, Join, Video } from './pages';
import ModalLayout from './common/ModalLayout';
import { AuthLayout, NonHeaderLayout } from './components';
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
          <Route path="/community" element={<Community />} />
          <Route path="/membership" element={<Membership />} />

          {/* 최종 path는 작품ID로 들어갈듯 */}
          <Route path="/videoinfo" element={<ModalLayout />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="join" element={<Join />} />
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
