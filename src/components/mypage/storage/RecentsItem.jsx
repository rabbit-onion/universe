import { Link } from 'react-router-dom';
import { IconBox, RecentCard, RecentImgBox, RecentTxt } from './style';

const RecentsItem = () => {
  return (
    <>
      <RecentCard>
        <Link>
          <RecentImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/monster8.webp"
              alt="괴수 8호"
            />
            <IconBox>
              <img src="" alt="" />
              <img src="" alt="" />
            </IconBox>
          </RecentImgBox>
        </Link>
        <Link>
          <RecentTxt>
            <p>
              <strong>괴수 8호</strong>
              <strong>1기 11화</strong>
            </p>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/info.svg"
              alt="영상 상세정보 보기"
            />
          </RecentTxt>
        </Link>
      </RecentCard>
    </>
  );
};

export default RecentsItem;
