import { Link, useNavigate } from 'react-router-dom';
import {
  LogoutLi,
  MembershipLi,
  MenuBox,
  MenuBoxBottom,
  MenuBoxProfile,
  MenuboxProfilePic,
  MenuBoxTop,
  NavBarWrap,
  NavLeft,
  NavRight,
  ProfileBox,
  ProfileIcons,
  ProfileMoreIcon,
  ProfilePic,
  SearchBox,
  SearchBtn,
  SearchContBox,
  StorageBox,
  Username,
} from './style';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchContList from './SearchContList';
import { searchVideos } from '../../store/modules/getThunk';
import { authActions } from '../../store/modules/authSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
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
            <MenuBox className="menubox">
              <MenuBoxTop>
                <MenuBoxProfile>
                  <Link to="/mypage/storage/recent">
                    <MenuboxProfilePic
                      src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/profilePic.svg"
                      alt=""
                    />
                    <div>
                      <Username>
                        박준용
                        <ProfileMoreIcon
                          src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/rightArrow.svg"
                          alt=""
                        />
                      </Username>
                      <p>
                        <img
                          src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/header/uni.svg"
                          alt=""
                        />
                        Lv.5 귀요미
                      </p>
                    </div>
                  </Link>
                </MenuBoxProfile>
                <StorageBox>
                  <li>
                    <Link to="/mypage/box/ratings">
                      2<span>별점</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/mypage/box/reviews">
                      5<span>리뷰</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/mypage/box/comments">
                      18<span>댓글</span>
                    </Link>
                  </li>
                </StorageBox>
                <button>
                  <Link to="/mypage/storage/recent">보관함</Link>
                </button>
                <hr />
              </MenuBoxTop>
              <MenuBoxBottom>
                <MembershipLi>
                  <Link to="membership">
                    <p>
                      <img
                        src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/card.svg"
                        alt=""
                      />
                      유니버스 멤버십
                    </p>
                    <span>스탠다드</span>
                  </Link>
                </MembershipLi>
                <li>
                  <Link to="/main">
                    <img
                      src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/option.svg"
                      alt=""
                    />
                    설정
                  </Link>
                </li>
                <li>
                  <Link to="/main">
                    <img
                      src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/CScenter.svg"
                      alt=""
                    />
                    고객센터
                  </Link>
                </li>
                <LogoutLi onClick={handleLogout}>
                  <img
                    src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/icons/exit.svg"
                    alt=""
                  />
                  로그아웃
                </LogoutLi>
              </MenuBoxBottom>
            </MenuBox>
          </ProfileBox>
        </NavRight>
      </NavBarWrap>
    </>
  );
};

export default NavBar;
