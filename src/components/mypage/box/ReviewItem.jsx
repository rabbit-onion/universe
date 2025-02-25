import { Link } from 'react-router-dom';
import { ReviewCard, ReviewImgBox, ReviewTxtBox, TxtBottom, TxtTop } from './style';

const ReviewItem = ({ review }) => {
  const { id, tmdbId, title, reviewContent, date, rating, thumbnail, likes, comments } = review;
  return (
    <>
      <ReviewCard>
        <Link>
          <ReviewTxtBox>
            <TxtTop>
              <strong>{title}</strong>
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
              <p>{reviewContent}</p>
              <span>{date} 평가함</span>
            </TxtBottom>
          </ReviewTxtBox>

          <ReviewImgBox>
            <img src={thumbnail} alt={`${title} 썸네일`} />
          </ReviewImgBox>
        </Link>
      </ReviewCard>
    </>
  );
};

export default ReviewItem;
