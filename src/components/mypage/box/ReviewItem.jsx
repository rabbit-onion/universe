import { Link } from 'react-router-dom';
import { Card } from '../storage/style';
import { ImgBox, TxtBox } from './style';

const ReviewItem = () => {
  return (
    <>
      <Card>
        <Link>
          <TxtBox>
            <p>
              <strong>스킵과 로퍼</strong>
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

          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/reviewThumb.png"
              alt="나의 리뷰 스킵과 로퍼 썸네일"
            />
          </ImgBox>
        </Link>
      </Card>
    </>
  );
};

export default ReviewItem;
