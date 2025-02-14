import { Link } from 'react-router-dom';
import {
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
import { useState } from 'react';
import SearchContList from './SearchContList';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearching(true);
  };

  const handleBlur = () => {
    if (!searching) {
      setClicked(false);
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
              <form onSubmit={handleSubmit}>
                <img
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/search.svg"
                  alt=""
                />
                <label htmlFor="search" className="hide">
                  검색어
                </label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="제목, 제작사, 감독으로 검색(초성)"
                  autoFocus="true"
                  onBlur={handleBlur}
                />
              </form>

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
              />
            </ProfileIcons>
            <MenuBox>
              <div>
                <div className="pic"></div>
                <div className="txt"></div>
              </div>
              <div></div>
              <div></div>
            </MenuBox>
          </ProfileBox>
        </NavRight>
      </NavBarWrap>
    </>
  );
};

export default NavBar;
