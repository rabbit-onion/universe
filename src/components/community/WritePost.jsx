import { Line, TitleBox, WritBox, WriteWrap } from './style';

const WritePost = () => {
  return (
    <>
      <WriteWrap>
        <WritBox>
          <TitleBox>
            <h2>제목을 입력하세요</h2>
            <Line />
            <h1>부제목을 입력하세요</h1>
          </TitleBox>
          <textarea name="" id=""></textarea>
        </WritBox>
      </WriteWrap>
    </>
  );
};

export default WritePost;
