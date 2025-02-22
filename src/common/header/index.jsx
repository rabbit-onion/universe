import { HeaderWrap } from './style';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import GotoPreviewBtn from '../../ui/button/GotoPreviewBtn';

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <h1>
          <Link to="/">
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
