import { HeaderWrap } from './style';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <h1>
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/logo.svg"
              alt=""
              crossOrigin="anonymous"
            />
          </Link>
        </h1>
        <NavBar />
      </HeaderWrap>
    </>
  );
};

export default Header;
