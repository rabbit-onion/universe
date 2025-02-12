import styled from 'styled-components';

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

// =================================================
// MyPostsItem.jsx style

export const PostTxtBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  align-items: flex-start;
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
    width: 100%;
  }
`;

export const SubText = styled.p`
  justify-content: space-between;

  span {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #252525;
  }
  div {
    display: flex;
    gap: 5px;
    span {
      display: flex;
      align-items: center;
      gap: 2px;
      font-size: 13px;
      line-height: 16px;
      img {
        width: 8px;
        height: 7px;
      }
    }
  }
`;
