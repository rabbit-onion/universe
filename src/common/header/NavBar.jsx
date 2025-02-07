import { Link } from 'react-router-dom';
import {
  MenuBox,
  NavBarWrap,
  NavLeft,
  NavRight,
  ProfileBox,
  ProfileIcons,
  ProfilePic,
  SearchBar,
  SearchContBox,
  SearchIcon,
} from './style';

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
            <SearchIcon className="clicked">
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/search.svg"
                alt=""
                crossOrigin="anonymous"
              />
            </SearchIcon>
            <form role="search" className="clicked">
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/search.svg"
                alt=""
                crossOrigin="anonymous"
              />
              <label className="hide">검색</label>
              <input
                type="search"
                placeholder="제목, 제작사, 감독으로 검색(초성)"
                aria-description="검색어 입력 후 엔터키를 눌러 검색하세요."
              />
            </form>
          </SearchBar>
          <SearchContBox className="clicked"></SearchContBox>

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
