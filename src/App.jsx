import GlobalStyle from './styled/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import Layout from './common/Layout';
import { Home, Main, NotFile, Search, DailyAni, Community, Membership, Login, Join, Logout } from './pages';
import ModalLayout from './common/ModalLayout';
import GotoPreviewBtn from './ui/button/GotoPreviewBtn';
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
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />

          {/* 최종 path는 작품ID로 들어갈듯 */}
          <Route path="/videoInfo" element={<ModalLayout />} />
        </Route>

        <Route path="*" element={<NotFile />} />
      </Routes>

      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
