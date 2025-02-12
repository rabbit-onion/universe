import { Link } from 'react-router-dom';
import { Card, ImgBox, PostTxtBox, SubText } from './style';

const DraftPostsItem = () => {
  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/draftThumb.png"
              alt="임시저장글 애니보니까 온천가고 싶ㄷr.. 썸네일"
            />
          </ImgBox>
        </Link>
        <Link>
          <PostTxtBox>
            <p>
              <strong>애니보니까 온천가고 싶ㄷr..</strong>
            </p>
            <SubText>
              <span>2025년 2월 1일 임시저장</span>
            </SubText>
          </PostTxtBox>
        </Link>
      </Card>
    </>
  );
};

export default DraftPostsItem;
