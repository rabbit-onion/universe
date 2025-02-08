import { Link } from 'react-router-dom';
import {
  CloseIcon,
  MenuBox,
  NavBarWrap,
  NavLeft,
  NavRight,
  ProfileBox,
  ProfileIcons,
  ProfilePic,
  SearchBox,
  SearchBtn,
  SearchContBox,
} from './style';
import { useEffect, useState } from 'react';
import SearchContList from './SearchContList';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [focused, setFocused] = useState(false);

  const setFocus = () => {
    setFocused(true);
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    if (value === '' || value === null) {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };

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
          {clicked ? (
            <SearchBox>
              <form>
                <img
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/search.svg"
                  alt=""
                  crossOrigin="anonymous"
                />
                <label htmlFor="search" className="hide">
                  검색어
                </label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="제목, 제작사, 감독으로 검색(초성)"
                  onFocus={setFocus}
                  onChange={changeInput}
                />
              </form>

              {focused ? (
                <CloseIcon
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/close.svg"
                  alt=""
                />
              ) : (
                <></>
              )}

              <SearchContBox>
                <SearchContList />
              </SearchContBox>
            </SearchBox>
          ) : (
            <SearchBtn
              onClick={() => {
                setClicked(true);
              }}
            >
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/search.svg"
                alt=""
                crossOrigin="anonymous"
              />
            </SearchBtn>
          )}

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
