import styled from 'styled-components';

export const MyPageWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: lavender;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #000000;
    text-align: left;
  }
`;

export const MyPageInner = styled.div`
  display: flex;
  gap: 21px;
  margin: 0 120px;
  margin-top: 173px;
  margin-bottom: 171px;
`;

export const ProfileInfoWrap = styled.div`
  width: 525px;
  height: 656px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.3);
  border-radius: 18px;
  overflow: hidden;
`;

export const StorageBoxWrap = styled.div`
  width: 1134px;
  max-width: 1134px;
  height: 1202px;
  max-height: 1202px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.3);
  border-radius: 18px;
  overflow: hidden;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 31px 36px 47px 41px;
`;
export const Desc = styled.div``;

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
  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #565656;
    margin-top: 37px;
  }
`;
