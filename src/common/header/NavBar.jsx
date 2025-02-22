import { Link } from 'react-router-dom';
import {
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
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchContList from './SearchContList';
import { searchVideos } from '../../store/modules/getThunk';

const NavBar = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const [searchTxt, setSearchTxt] = useState(null);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        // 참조된 영역이 클릭된 요소를 포함하지 않으면 외부 클릭으로 간주
        setSearchTxt(null);
        setClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTxt) {
      // AbortController 생성 (이전 요청 취소용)
      const controller = new AbortController();

      dispatch(searchVideos(searchTxt, controller.signal));

      // 컴포넌트 언마운트나 searchTerm 변경시 이전 요청 취소
      return () => controller.abort();
    }
  }, [searchTxt]);

  const changeInput = (e) => {
    const { value } = e.target;
    if (!value || value === '') {
      setSearchTxt(null);
    } else {
      setSearchTxt(value);
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
            <Link to="/community">커뮤니티</Link>
          </li>
          <li>
            <Link to="/membership">멤버십</Link>
          </li>
        </NavLeft>

        <NavRight>
          {clicked ? (
            <SearchBox ref={searchBarRef}>
              <form>
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
                  placeholder="제목으로 검색"
                  autoFocus="true"
                  onChange={changeInput}
                  // onBlur={handleBlur}
                />
              </form>

              <SearchContBox>
                <SearchContList searchTxt={searchTxt} />
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
            {/* <MenuBox>
              <div>
                <div className="pic"></div>
                <div className="txt"></div>
              </div>
              <div></div>
              <div></div>
            </MenuBox>    */}
          </ProfileBox>
        </NavRight>
      </NavBarWrap>
    </>
  );
};

export default NavBar;
