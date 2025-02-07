import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
import Layout from './common/Layout';
import Main from './pages/main';
import { Home } from './pages';
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
        </Route>
      </Routes>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
