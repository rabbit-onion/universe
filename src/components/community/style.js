import styled from 'styled-components';
import { device } from '../../styled/Device';

export const WriteWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 120px;
`;

export const WritBox = styled.div`
  flex-grow: 1;
  margin-top: 105px;
`;

export const TitleBox = styled.div`
  hr {
    width: 51px;
    height: 7px;
    margin-right: 100%;
    border: none;
    border-radius: 7px;
    background-color: #0068ff;
  }
  textarea {
    border: none;
    padding: 5px;
    &:focus {
      outline: none;
    }
  }
`;

export const Title = styled.textarea`
  width: 90%;
  height: auto;
  margin-bottom: 32px;
  resize: none;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
`;

export const SubTitle = styled.textarea`
  width: 90%;
  margin-top: 30px;
  margin-bottom: 40px;
  resize: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const EditorContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  // 에디터 내부 스타일 오버라이드
  .toastui-editor-defaultUI {
    width: 100% !important;
    border: none !important;

    &-toolbar {
      background-color: transparent;
      border: none;
      padding: 0 25px 0 0;
    }
    // 에디터 내용 영역 스타일 오버라이드
    .ProseMirror {
      width: 760px;
      padding: 20px;
      padding-bottom: 200px;
      font-size: 16px;
      line-height: 1.6;
      min-height: 600px;
      white-space: normal;
    }
    .toastui-editor-toolbar-icons {
      &:hover {
        background-color: #e9ecef;
      }
      &[aria-pressed='true'] {
        background-color: #333;
      }
      &.active {
        background-color: #333;
      }
    }
  }
`;

export const PreviewBox = styled.div`
  width: 852px;
  height: auto;
  background-color: #f5f5f5;
  padding: 50px;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 20px;
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  div {
    margin-top: 20px;
    padding-bottom: 100px;
    font-size: 16px;
    line-height: 1.6;
    overflow-x: auto;
  }
`;

// ==========================================
// 전체 게시글
export const AllWrap = styled.div`
  position: relative;
  display: block;
  padding: 80px 120px;
  height: 5405px;
  background-color: #ffffff;
  @media ${device.laptopMX} {
    padding: 40px 48px;
    height: 2255px;
  }

  @media ${device.tabletMX} {
    padding: 25px 25px;
    height: 2255px;
  }
`;

export const Container = styled.div`
  h2 {
    font-family: 'Pretendard';
    font-size: 50px;
    font-weight: bold;
  }

  @media ${device.laptopMX} {
    h2 {
      font-size: 30px;
    }
  }
`;

export const ContentTitle = styled.div`
  @media ${device.laptopMX} {
    margin-left: 15px;
  }
`;

export const PaginationAll = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    font-size: 30px;
    font-weight: 500;
    justify-content: center;
  }

  @media ${device.laptopMX} {
    display: none;
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

  @media ${device.laptopMX} {
    bottom: 2%;
    div {
      display: flex;
      width: 665px;
      height: 31px;
      border-radius: 8px;
      padding: 8px 13px;
    }
    ul {
      font-size: 12px;
    }

    li {
      font-size: 8px;
      margin-left: 19px;
    }
  }

  @media ${device.tabletMX} {
    bottom: 2%;
    div {
      display: flex;
      width: 340px;
      height: 16px;
      border-radius: 2px;
      padding: 5px 7px;
    }
    ul {
      font-size: 5px;
    }

    li {
      font-size: 4px;
      margin-left: 19px;
    }
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

  @media ${device.laptopMX} {
    display: none;
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
    align-items: center;
  }

  hr {
    margin: 17px 0px 33px 0px;
    background-color: #a1a1a1;
  }

  li {
    font-size: 24px;
    font-family: 'Pretendard';
    margin-bottom: 28px;
    list-style: none;
  }
  span {
    font-size: 13px;
    color: #595959;
    font-weight: 500;
  }

  @media ${device.laptopMX} {
    display: none;
  }
`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 68px 39px;

  @media ${device.laptopMX} {
    gap: 35px 11px;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 413px;
  height: 334px;

  @media ${device.laptopMX} {
    width: 222px;
    height: 182px;
  }

  /* @media ${device.tabletMX} {
    width: 164px;
    height: 182px;
  } */
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 25px;

  @media ${device.laptopMX} {
    padding: 0px 12px;
  }
`;
export const CardImage = styled.div`
  width: 413px;
  height: 266px;
  border-radius: 30px;
  overflow: hidden;

  @media ${device.laptopMX} {
    width: 222px;
    height: 145px;
    border-radius: 14px;

    img {
      width: 100%;
      height: auto;
    }
  }
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

  @media ${device.laptopMX} {
    h1 {
      font-size: 10px;
      font-weight: 500;
    }

    p {
      font-size: 9px;
    }
  }
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-size: 15px;
    font-family: 'Pretendard';
    gap: 10px;
  }

  p {
    font-size: 15px;
    font-family: 'Pretendard';
  }

  @media ${device.laptopMX} {
    span {
      font-size: 8px;
    }

    p {
      font-size: 8px;
    }
  }
`;

export const Reaction = styled.div`
  display: flex;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;

// 게시글 상세 부분
export const ViewInner = styled.div`
  padding: 117px 121px;
  @media ${device.tabletMX} {
    padding: 40px 24px;
  }
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

  @media ${device.tabletMX} {
    h2 {
      font-size: 13px;
      font-weight: 600;
      font-family: 'Pretendard';
      color: #0066ff;
    }

    span {
      font-size: 18px;
      font-weight: 600;
      font-family: 'Pretendard';
      color: #252525;
    }

    p {
      font-size: 8px;
      font-weight: 500;
      font-family: 'Pretendard';
      color: #252525;
    }
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
  @media ${device.tabletMX} {
    gap: 9px;
    h1 {
      font-size: 10px;
      font-weight: 500;
      font-family: 'Pretendard';
      color: #252525;
    }

    p {
      font-size: 10px;
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
  }
`;

export const ViewText = styled.div`
  p {
    font-size: 20px;
    font-family: 'Pretendard';
    line-height: 60px;
    color: #252525;
  }

  @media ${device.tabletMX} {
    p {
      font-size: 10px;
      font-family: 'Pretendard';
      line-height: 30px;
      color: #252525;
    }
  }
`;
export const ViewImg = styled.div`
  background-color: pink;
  margin: 65px 0px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }

  @media ${device.tabletMX} {
    background-color: pink;
    margin: 22px 0px;
    overflow: hidden;
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

  p {
    color: #4d94ff;
  }

  @media ${device.tabletMX} {
    margin: 48px 0px;
    div {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      border: 2px solid #4d94ff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    p {
      font-size: 7px;
    }
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

  @media (max-width: 768px) {
    li {
      height: 29px;
      background-color: #f5f5f5;
      font-size: 10px;
      color: #5c5b5b;
      font-family: 'Pretendard';
      padding: 8px;
      margin-right: 4px;
      border-radius: 30px;
      line-height: 1.25;
    }
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

  @media ${device.tabletMX} {
    margin: 16px 0px;
    button {
      width: 57px;
      height: 24px;
      border-radius: 57px;
      background-color: #ffffff;
      border: 1px solid #0066ff;
      font-family: 'Pretendard';
      font-size: 10px;
      font-weight: 600;
      color: #0066ff;
    }
  }
`;

export const UserLine = styled.div`
  margin-bottom: 20px;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    background-color: #a1a1a1;
    flex-grow: 1;
  }

  @media ${device.tabletMX} {
    margin-bottom: 15px;
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

  @media ${device.tabletMX} {
    p {
      margin: 13px;
      font-family: 'Pretendard';
      font-size: 10px;
      font-weight: 500;
    }
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

  @media ${device.tabletMX} {
    width: 42px;
    height: 42px;
    border-radius: 45px;
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

  @media ${device.tabletMX} {
    p {
      font-family: 'Pretendard';
      font-size: 10px;
      font-weight: 500;
      color: #252525;
    }
  }
`;

export const CommentForm = styled.div`
  margin: 25px 0px;

  div {
    border-radius: 17px;
    border: 1px solid #0066ff;
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 500;
    color: #7c7c7c;

    padding: 22px 25px;
  }

  @media ${device.tabletMX} {
    margin: 15px 0px;

    div {
      width: 340px;
      height: 44px;
      border-radius: 6px;
      border: 1px solid #0066ff;
      font-family: 'Pretendard';
      font-size: 8px;
      font-weight: 500;
      color: #7c7c7c;

      padding: 22px 25px;
    }
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

  @media ${device.tabletMX} {
    button {
      width: 57px;
      height: 24px;
      border-radius: 5px;
      background-color: #0066ff;
      border: 1px solid #ffffff;
      font-family: 'Pretendard';
      font-size: 10px;
      font-weight: 600;
      color: #ffffff;
    }
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
  div {
    display: flex;
    margin-left: 59px;
    align-items: center;
  }
  button {
    background-color: #ffffff;
    font-family: 'Pretendard';
    font-size: 12px;
    font-weight: 500;
    color: #0066ff;
  }

  div:nth-child(2) button {
    color: #252525;
  }

  @media ${device.tabletMX} {
    button {
      background-color: #ffffff;
      font-family: 'Pretendard';
      font-size: 10px;
      font-weight: 500;
      color: #0066ff;
    }
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

  @media ${device.tabletMX} {
    h2 {
      font-size: 10px;
    }

    p {
      font-size: 8px;
    }
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

  @media ${device.tabletMX} {
    width: 25px;
    height: 25px;
    border-radius: 30px;
    overflow: hidden;
    margin-right: 6px;
  }
`;

export const AtherComment = styled.div`
  font-size: 18px;
  padding: 21px 58px;
  @media ${device.tabletMX} {
    padding: 8px 31px;

    font-size: 9px;
  }
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

  @media ${device.tabletMX} {
    ul {
      display: flex;
      justify-content: center;
      gap: 5px;
      margin-top: 38px;
    }

    li {
      font-family: 'Pretendard';
      font-size: 13px;
      font-weight: 500;
      color: #666666;
    }
  }
`;
