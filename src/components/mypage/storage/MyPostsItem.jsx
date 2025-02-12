import { Link } from 'react-router-dom';
import { Card, ImgBox, PostTxtBox, SubSmallTxt, SubText } from './style';

const MyPostsItem = () => {
  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/myPostThumb.png"
              alt="내 게시글 러브 앤드 피스에요 썸네일"
            />
          </ImgBox>
        </Link>
        <Link>
          <PostTxtBox>
            <p>
              <strong>러브 앤드 피스에요</strong>
            </p>
            <SubText>
              <span>2025년 1월 28일 작성</span>
              <SubSmallTxt>
                <span>
                  <img
                    src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/heart.svg"
                    alt="좋아요"
                  />
                  20
                </span>
                <span>
                  <img
                    src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/comment.svg"
                    alt="댓글"
                  />
                  15
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
