import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import Main from './pages/main';
import { Home } from './pages';
import VideoInfo from './components/main/videoInfoModal/VideoInfo';
import NotFile from './pages/notfile';
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
