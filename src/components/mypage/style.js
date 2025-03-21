import styled from 'styled-components';

// Storage, Mybox.jsx style
export const CategoryTab = styled.div`
  position: relative;
  ul {
    position: relative;
    display: flex;
    gap: 40px;
    z-index: 2;
    a {
      li {
        padding: 15px 2px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #676767;
      }
      // link to가 현재 페이지인 경우
      &[aria-current='page'] {
        li:after {
          display: block;
          content: '';
          width: calc(100% + 2px);
          height: 7px;
          margin-top: 15px;
          background-color: #0068ff;
          border-radius: 7px;
        }
      }
    }
  }
  hr {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 2px;
    border: none;
    border-radius: 2px;
    background-color: #ededed;
    z-index: 1;
  }
`;

export const ContentsBox = styled.div`
  margin-top: 37px;
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #565656;
  }
`;

// ==========================================
// ProfileInfo.jsx style
export const ProfileInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 31px 24px;
  text-align: center;
  h2 {
    margin-bottom: 48px;
  }
`;

export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const ProfileImgWrap = styled.div`
  position: relative;
  width: fit-content;
  margin-bottom: 20px;
  button {
    position: absolute;
    bottom: 0;
    right: -3px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #2b96ff;
  }
`;

export const ProfileImg = styled.img`
  width: 151px;
  height: 151px;
  border-radius: 100%;
  overflow: hidden;
`;

export const UserInfo = styled.div`
  color: #000000;
  margin-bottom: 72px;
  strong {
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
  }
  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin-top: 12px;
    img {
      margin-right: 8px;
    }
  }
`;

export const MyBoxInfo = styled.ul`
  display: flex;
  gap: 89px;
  margin-bottom: 53px;
  span,
  strong {
    display: block;
  }
  span {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #1a1a1a;
    margin-bottom: 4px;
  }
  strong {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #565656;
  }
`;

export const GotoBtn = styled.button`
  width: 457px;
  height: 89px;
  background: #0068ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  img {
    width: 22px;
    height: auto;
    margin-right: 17px;
  }
`;
