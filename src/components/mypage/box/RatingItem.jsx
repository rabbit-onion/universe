import { Link } from 'react-router-dom';
import { Card } from '../storage/style';
import { ImgBox, TxtBox } from './style';

const RatingItem = ({ rating: ratingData }) => {
  const { id, tmdbId, title, rating, date, thumbnail } = ratingData;
  // const starArr = new Array(rating);
  // const nonStarArr = new Array(5 - rating);

  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/kamisama.webp"
              alt={`${title} 썸네일`}
            />
          </ImgBox>

          <TxtBox>
            <p>
              <strong>{title}</strong>
              <span>{date} 평가함</span>
            </p>

            <div>
              {/* {starArr.map((_, index) => (
                <img
                  key={index}
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/star.svg"
                  alt=""
                />
              ))} */}

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
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/star.svg"
                alt=""
              />

              {/* {nonStarArr.map((_, index) => (
                <img
                  key={index}
                  src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/star-default.svg"
                  alt=""
                />
              ))} */}
            </div>
          </TxtBox>
        </Link>
      </Card>
    </>
  );
};

export default RatingItem;
