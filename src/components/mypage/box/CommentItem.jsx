import { Link } from 'react-router-dom';
import { CommentInfo, CommentTxtBox, InfoBottom, InfoTop, ProfilePic, ReviewCard, ReviewImgBox } from './style';

const CommentItem = () => {
  return (
    <>
      <ReviewCard>
        <Link>
          <CommentTxtBox>
            <ProfilePic>
              <img
                src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/profilePic.png"
                alt=""
              />
            </ProfilePic>
            <CommentInfo>
              <InfoTop>
                <h4>괴수 8호</h4>
                <h5>3화 리벤지매치</h5>
              </InfoTop>
              <InfoBottom>
                <p>와 소름이 쫙 돋음; 작화 미친거 아님?</p>
                <span>2025년 1월 25일 작성함</span>
              </InfoBottom>
            </CommentInfo>
          </CommentTxtBox>

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

export default CommentItem;
