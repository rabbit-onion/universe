import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import Main from './pages/main';
import PlayBtn from './ui/button/PlayBtn';
import InfoBtn from './ui/button/InfoBtn';
import GotoPreviewBtn from './ui/button/GotoPreviewBtn';
import DayBtn from './ui/button/DayBtn';
import AllBtn from './ui/button/AllBtn';
import PlusBtn from './ui/button/PlusBtn';
import GoodBtn from './ui/button/GoodBtn';
import MuteBtn from './ui/button/MuteBtn';
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
        </Route>
      </Routes>
      {/* </ThemeProvider> */}
      <PlayBtn />
      <InfoBtn />
      <GotoPreviewBtn />
      <DayBtn />
      <AllBtn />
      <PlusBtn />
      <GoodBtn />
      <MuteBtn />
    </>
  );
};

export default App;
