import { Link } from 'react-router-dom';
import { Card } from '../storage/style';
import { ImgBox, TxtBox } from './style';

const RatingItem = () => {
  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/kamisama.webp"
              alt="나의 별점 오늘부터 신령님 썸네일"
            />
          </ImgBox>

          <TxtBox>
            <p>
              <strong>오늘부터 신령님</strong>
              <span>2024년 12월 5일 평가함</span>
            </p>

            <div>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/star.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/star.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/star.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/star.svg"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/star-default.svg"
                alt=""
              />
            </div>
          </TxtBox>
        </Link>
      </Card>
    </>
  );
};

export default RatingItem;
