import { Link } from 'react-router-dom';
import { Card, ImgBox, PostTxtBox, SubText } from './style';

const DraftPostsItem = ({ draft }) => {
  const { id, title, thumbnail, lastSaved } = draft;

  return (
    <>
      <Card>
        <Link>
          <ImgBox>
            <img
              src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/mypage/draftThumb.png"
              alt="임시저장글 썸네일"
            />
          </ImgBox>
        </Link>
        <Link>
          <PostTxtBox>
            <p>
              <strong>{title}</strong>
            </p>
            <SubText>
              <span>{lastSaved} 임시저장</span>
            </SubText>
          </PostTxtBox>
        </Link>
      </Card>
    </>
  );
};

export default DraftPostsItem;
