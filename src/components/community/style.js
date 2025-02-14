import styled from 'styled-components';

export const WriteWrap = styled.div`
  width: 1920px;
  height: 1080px;
  background-color: #f5f5f5;
  margin-left: 120px;
  margin-top: 100px;
`;

export const WritBox = styled.div`
  width: 1068px;
  height: 1080px;
  background-color: #fff;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-family: 'Pretendard';
    font-size: 20px;
  }

  h2 {
    font-family: 'Pretendard';
    font-size: 40px;
    margin-bottom: 0;
    font-weight: bold;
  }
`;

export const Line = styled.div`
  width: 60px;
  height: 7px;
  background-color: #0068ff;
  border-radius: 7px;
  margin-top: 42px;
  margin-bottom: 32px;
`;

// 전체 게시글
export const AllWrap = styled.div`
  position: relative;
  display: block;
  padding: 80px 120px;
  width: 1920px;
  height: 5405px;
  background-color: #ffffff;

  ul {
    list-style: none;
  }
`;

export const Container = styled.div`
  h2 {
    font-family: 'Pretendard';
    font-size: 50px;
    font-weight: bold;
  }
`;

export const BottomAdd = styled.div`
  position: absolute;
  bottom: 71px;
  div {
    display: flex;
    width: 1680px;
    height: 76px;
    background-color: #4d94ff;
    border-radius: 10px;
    padding: 23px 43px;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 25px;
    font-weight: 600;
    color: #ffffff;
  }

  li {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    margin-left: 30px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    font-size: 20px;
    font-weight: 500;
    width: 123px;
    height: 46px;
    border-radius: 27px;
    background-color: #f5f5f5f5;
    margin-left: 20px;
  }
`;

export const ContentWrap = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
`;
export const ListWrap = styled.div`
  ul {
    width: 221px;
  }
  p {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 20px;
    font-family: 'Pretendard';
    font-weight: 600;
  }

  hr {
    margin: 17px 0px 33px 0px;
    background-color: #a1a1a1;
  }

  li {
    font-size: 24px;
    font-family: 'Pretendard';
    margin-bottom: 28px;
  }

  span {
    font-size: 13px;
  }
`;
export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 413px;
  height: 334px;
  background-color: pink;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 25px;
`;
export const CardImage = styled.div`
  width: 413px;
  height: 266px;
  border-radius: 30px;
  overflow: hidden;
`;

export const Left = styled.div`
  h1 {
    font-size: 20px;
    font-family: 'Pretendard';
    font-weight: 500;
  }

  p {
    font-size: 15px;
    font-family: 'Pretendard';
  }
`;
export const Right = styled.div`
  span {
    font-size: 15px;
    font-family: 'Pretendard';
    margin-right: 10px;
  }

  p {
    font-size: 15px;
    font-family: 'Pretendard';
  }
`;

// 게시글 상세 부분
export const ViewInner = styled.div`
  padding: 117px 121px;
`;

export const ViewTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 59px;

  h2 {
    font-size: 32px;
    font-weight: 600;
    font-family: 'Pretendard';
    color: #0066ff;
  }

  span {
    font-size: 40px;
    font-weight: 600;
    font-family: 'Pretendard';
    color: #252525;
  }

  p {
    font-size: 25px;
    font-weight: 500;
    font-family: 'Pretendard';
    color: #252525;
  }
`;
export const ViewLine = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  h1 {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Pretendard';
    color: #252525;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Pretendard';
    color: #a1a1a1;
  }

  hr {
    width: 60%;
    height: 1px;
    border: none;
    background-color: #a1a1a1;
    flex-grow: 1;
  }
`;

export const ViewText = styled.div`
  p {
    font-size: 20px;
    font-family: 'Pretendard';
    line-height: 60px;
    color: #252525;
  }
`;
export const ViewImg = styled.div`
  width: 1680px;
  height: 842px;
  background-color: pink;
  margin: 65px 0px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

export const HartCount = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0px;
  div {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    border: 4px solid #4d94ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const BottomUtility = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagList = styled.div`
  ul {
    display: flex;
    font-family: 'Pretendard';
  }

  li {
    height: 43px;
    background-color: #f5f5f5;
    font-size: 15px;
    color: #5c5b5b;
    font-family: 'Pretendard';
    padding: 13px;
    margin-right: 8px;
    border-radius: 50px;
    line-height: 1.25;
  }
`;

export const UtilityButtons = styled.div`
  ul {
    display: flex;
  }

  li {
    height: 18px;
  }

  button {
    background-color: transparent;
  }
`;

// 댓글 영역

export const CommentArea = styled.div``;
export const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 67px 0px;

  button {
    width: 122px;
    height: 52px;
    border-radius: 50px;
    background-color: #ffffff;
    border: 1px solid #0066ff;
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 600;
    color: #0066ff;
  }
`;

export const UserLine = styled.div`
  margin-bottom: 45px;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: #a1a1a1;
    flex-grow: 1;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 30px;
    font-family: 'Pretendard';
    font-size: 25px;
    font-weight: 500;
  }
`;

export const ProfileImg = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 90px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }
`;

export const CommentWrap = styled.div``;

export const CommentCount = styled.div`
  display: flex;
  p {
    font-family: 'Pretendard';
    font-size: 25px;
    font-weight: 500;
    color: #252525;
  }
`;

export const CommentForm = styled.div`
  margin: 25px 0px;

  div {
    width: 1680px;
    height: 188px;
    border-radius: 17px;
    border: 1px solid #0066ff;
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 500;
    color: #7c7c7c;

    padding: 22px 25px;
  }
`;

export const CommentBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 122px;
    height: 52px;
    border-radius: 13px;
    background-color: #0066ff;
    border: 1px solid #ffffff;
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }
`;

export const CommentAther = styled.div`
  hr {
    width: 100%;
    height: 1px;
    margin-top: 20px;
    background-color: #a1a1a1;
    border: none;
  }
`;

export const AtherBtn = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: #ffffff;
    font-family: 'Pretendard';
    font-size: 12px;
    font-weight: 500;
    color: #0066ff;
    margin-left: 59px;
    padding: 0px;
  }
`;

export const AtherProfile = styled.div`
  display: flex;
  align-items: flex-start;

  h2 {
    margin: 0px;
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 500;
    color: #252525;
  }

  p {
    font-family: 'Pretendard';
    font-size: 10px;
    font-weight: 500;
    color: #666666;
  }
`;
export const AtherImg = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 43px;
  overflow: hidden;
  margin-right: 14px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const AtherComment = styled.div`
  padding: 21px 58px;
`;

export const PagiNation = styled.div`
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 98px;
  }

  li {
    font-family: 'Pretendard';
    font-size: 30px;
    font-weight: 600;
    color: #666666;
  }
`;
