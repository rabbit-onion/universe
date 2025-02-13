import { Link } from 'react-router-dom';
import { ReviewCard, ReviewImgBox, ReviewTxtBox, TxtBottom, TxtTop } from './style';

const ReviewItem = () => {
  return (
    <>
      <ReviewCard>
        <Link>
          <ReviewTxtBox>
            <TxtTop>
              <strong>스킵과 로퍼</strong>
              <span>
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
              </span>
            </TxtTop>
            <TxtBottom>
              <p>우선 재미잇어요. 근데 아직 3화만 나와서 애매해 다보고 별점 남기겠습니다</p>
              <span>2024년 11월 4일 평가함</span>
            </TxtBottom>
          </ReviewTxtBox>

          <ReviewImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/reviewThumb.png"
              alt="나의 리뷰 스킵과 로퍼 썸네일"
            />
          </ReviewImgBox>
        </Link>
      </ReviewCard>
    </>
  );
};

export default ReviewItem;
