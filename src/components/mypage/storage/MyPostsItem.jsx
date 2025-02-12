import { Link } from 'react-router-dom';
import { Card, ImgBox, PostTxtBox, SubText } from './style';

const MyPostsItem = () => {
  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/myPostThumb.png"
              alt="괴수 8호"
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
              <div>
                <span>
                  <img
                    src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/heart.svg"
                    alt="영상 상세정보 보기"
                  />
                  20
                </span>
                <span>
                  <img
                    src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/icons/comment.svg"
                    alt="영상 상세정보 보기"
                  />
                  15
                </span>
              </div>
            </SubText>
          </PostTxtBox>
        </Link>
      </Card>
    </>
  );
};

export default MyPostsItem;
