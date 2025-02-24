import { HeaderWrap } from './style';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.authR);

  return (
    <>
      <HeaderWrap>
        <h1>
          <Link to={isAuthenticated ? '/main' : '/'}>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/logo.svg"
              alt=""
            />
          </Link>
        </h1>
        <NavBar />
      </HeaderWrap>
    </>
  );
};

export default Header;
