import { Routes } from 'react-router-dom';
import GlobalStyle from './styled/GlobalStyle';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './styles/theme';

const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyle />

      <Routes>{/* 라우터 설정 */}</Routes>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
