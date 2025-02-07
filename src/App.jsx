import GlobalStyle from './styled/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import { Home, Main, NotFile, Search, DailyAni, Community, Membership } from './pages';
import { VideoInfo } from './components';
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
          <Route path="/tagSearch" element={<Search />} />
          <Route path="/dailyAni" element={<DailyAni />} />
          <Route path="/community" element={<Community />} />
          <Route path="/membership" element={<Membership />} />

          {/* 최종 path는 작품ID로 들어갈듯 */}
          <Route path="/videoInfo" element={<VideoInfo />} />
        </Route>

        <Route path="*" element={<NotFile />} />
      </Routes>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
