import { Link, useLocation } from 'react-router-dom';
import { GotoBtn, MyBoxInfo, ProfileDesc, ProfileImg, ProfileImgWrap, ProfileInner, UserInfo } from './style';

const ProfileInfo = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[2];

  return (
    <>
      <ProfileInner>
        <h2>프로필 정보</h2>
        <ProfileDesc>
          <ProfileImgWrap>
            <ProfileImg
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/profilePic.png"
              alt=""
            />
            <button>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/profilePicEditIcon.svg"
                alt=""
              />
            </button>
          </ProfileImgWrap>

          <UserInfo>
            <strong>박준용</strong>
            <p>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/lvIcon.svg"
                alt=""
              />
              Lv.5 귀요미
            </p>
          </UserInfo>

          <MyBoxInfo>
            <Link to="/mypage/box/ratings">
              <li>
                <span>2</span>
                <strong>별점</strong>
              </li>
            </Link>
            <Link to="/mypage/box/reviews">
              <li>
                <span>3</span>
                <strong>리뷰</strong>
              </li>
            </Link>
            <Link to="/mypage/box/comments">
              <li>
                <span>1</span>
                <strong>댓글</strong>
              </li>
            </Link>
          </MyBoxInfo>

          <Link to={`/mypage/${currentPath === 'storage' ? 'box/ratings' : 'storage/recent'}`}>
            <GotoBtn>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/storageIcon.svg"
                alt=""
              />
              {currentPath === 'storage' ? '저장소' : '보관함'}
            </GotoBtn>
          </Link>
        </ProfileDesc>
      </ProfileInner>
    </>
  );
};

export default ProfileInfo;
