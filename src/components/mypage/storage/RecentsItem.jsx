import { Link } from 'react-router-dom';
import { Card, IconBox, ImgBox, TxtBox } from './style';

const RecentsItem = ({ recent }) => {
  const { id, tmdbId, title, episodeInfo, thumbnail, lastWatched } = recent;

  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/monster8.webp"
              alt={title}
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
              <strong>{title}</strong>
              <strong>{episodeInfo}</strong>
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

export default RecentsItem;
