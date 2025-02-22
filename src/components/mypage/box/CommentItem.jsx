import { Link } from 'react-router-dom';
import { CommentInfo, CommentTxtBox, InfoBottom, InfoTop, ProfilePic, ReviewCard, ReviewImgBox } from './style';

const CommentItem = ({ comment }) => {
  const { id, tmdbId, title, commentContent, date, episodeInfo, thumbnail, likes } = comment;

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
                <h4>{title}</h4>
                <h5>{episodeInfo} 리벤지매치</h5>
              </InfoTop>
              <InfoBottom>
                <p>{commentContent}</p>
                <span>{date} 작성함</span>
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
