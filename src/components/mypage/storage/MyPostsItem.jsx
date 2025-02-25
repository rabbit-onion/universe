import { Link } from 'react-router-dom';
import { Card, ImgBox, PostTxtBox, SubSmallTxt, SubText } from './style';

const MyPostsItem = ({ mypost }) => {
  const { id, title, content, thumbnail, date, heartCount, commentCount } = mypost;

  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img src={thumbnail} alt="게시글 썸네일" />
          </ImgBox>
        </Link>
        <Link>
          <PostTxtBox>
            <p>
              <strong>{title}</strong>
            </p>
            <SubText>
              <span>{date} 작성</span>
              <SubSmallTxt>
                <span>
                  <img
                    src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/heart.svg"
                    alt="좋아요"
                  />
                  {heartCount}
                </span>
                <span>
                  <img
                    src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/comment.svg"
                    alt="댓글"
                  />
                  {commentCount}
                </span>
              </SubSmallTxt>
            </SubText>
          </PostTxtBox>
        </Link>
      </Card>
    </>
  );
};

export default MyPostsItem;
