import { Link } from 'react-router-dom';
import { GotoBtn, MyBoxInfo, ProfileDesc, ProfileImg, ProfileImgWrap, ProfileInner, UserInfo } from './style';

const ProfileInfo = () => {
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
            <Link>
              <li>
                <span>2</span>
                <strong>별점</strong>
              </li>
            </Link>
            <Link>
              <li>
                <span>3</span>
                <strong>리뷰</strong>
              </li>
            </Link>
            <Link>
              <li>
                <span>1</span>
                <strong>댓글</strong>
              </li>
            </Link>
          </MyBoxInfo>

          <Link to="/">
            <GotoBtn>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/storageIcon.svg"
                alt=""
              />
              보관함
            </GotoBtn>
          </Link>
        </ProfileDesc>
      </ProfileInner>
    </>
  );
};

export default ProfileInfo;
