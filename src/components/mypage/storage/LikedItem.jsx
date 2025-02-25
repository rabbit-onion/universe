import { Link } from 'react-router-dom';
import { Card, IconBox, ImgBox, TxtBox } from './style';
import { userActivityMockData } from '../../../assets/api/userActivityMockData';

const LikedItem = ({ liked }) => {
  const { id, tmdbId, title, thumbnail, addedDate } = liked;

  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img src={thumbnail} alt={title} />
            <IconBox>
              <img src="" alt="" />
              <img src="" alt="" />
            </IconBox>
          </ImgBox>
        </Link>
        <Link>
          <TxtBox>
            <p>
              <strong>{title}</strong>
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
