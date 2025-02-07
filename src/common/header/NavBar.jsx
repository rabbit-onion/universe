import { Link } from 'react-router-dom';
import { MenuBox, NavBarWrap, NavLeft, NavRight, ProfileBox, ProfileIcons, ProfilePic, SearchBar } from './style';

const NavBar = () => {
  return (
    <>
      <NavBarWrap>
        <NavLeft>
          <li>
            <Link to="/tagSearch">태그검색</Link>
          </li>
          <li>
            <Link to="/dailyAni">요일별 애니</Link>
          </li>
          <li>
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="/membership">멤버십</Link>
          </li>
        </NavLeft>

        <NavRight>
          <SearchBar>
            <form>
              <button type="submit">
                <img
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/search.svg"
                  alt=""
                  crossOrigin="anonymous"
                />
              </button>
              <input type="text" placeholder="제목, 제작사, 감독으로 검색(초성)" />
            </form>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/search.svg"
              alt=""
              crossOrigin="anonymous"
            />
          </SearchBar>

          <ProfileBox>
            <ProfileIcons>
              <ProfilePic>
                <img
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/profilePic.svg"
                  alt=""
                />
              </ProfilePic>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/profileArrow.svg"
                alt=""
                crossOrigin="anonymous"
              />
            </ProfileIcons>
            <MenuBox></MenuBox>
          </ProfileBox>
        </NavRight>
      </NavBarWrap>
    </>
  );
};

export default NavBar;
