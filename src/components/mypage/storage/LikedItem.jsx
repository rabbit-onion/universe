import { Link } from 'react-router-dom';
import { Card, IconBox, ImgBox, TxtBox } from './style';

const LikedItem = () => {
  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/likedThumb.webp"
              alt="체인소맨"
            />
            <IconBox>
              <img src="" alt="" />
              <img src="" alt="" />
            </IconBox>
          </ImgBox>
        </Link>
        <Link>
          <TxtBox>
            <p>
              <strong>체인소맨</strong>
            </p>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/info.svg"
              alt="영상 상세정보 보기"
            />
          </TxtBox>
        </Link>
      </Card>
    </>
  );
};

export default LikedItem;
