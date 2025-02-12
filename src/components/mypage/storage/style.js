import styled from 'styled-components';

// MyStorage.jsx style
export const StorageInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 31px 36px 47px 41px;
`;
export const StorageDesc = styled.div``;

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

// ========================================
// RecentsList.jsx style
export const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: 13px;
  grid-row-gap: 68px;
  margin-top: 25px;
`;

// ========================================
// RecentsItem.jsx style
export const Card = styled.div`
  width: 340px;
`;

export const ImgBox = styled.div`
  width: 340px;
  height: 223px;
  background: rgba(0, 0, 0, 0.54);
  border-radius: 25px;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconBox = styled.div``;

export const TxtBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  margin: auto;
  padding-top: 18px;
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #252525;
  p {
    display: flex;
    gap: 11px;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;
