import styled from 'styled-components';

// RatingItem.jsx style
export const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  width: 340px;
  height: 223px;
  border-radius: 25px;
  overflow: hidden;
  img {
    height: 100%;
    width: auto;
    object-fit: cover;
    margin-left: 15%;
  }
`;

export const TxtBox = styled.div`
  padding: 23px 21px;
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #252525;
    font-weight: 500;
    margin-bottom: 6px;
    strong {
      font-size: 20px;
      line-height: 24px;
    }
    span {
      font-size: 12px;
      line-height: 14px;
    }
  }
  div {
    margin-left: -1px;
  }
`;

// ====================================
// ReviewList.jsx style

export const ReviewItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 25px;
  hr {
    width: 100%;
    width: 1055px;
    height: 2px;
    border: none;
    background-color: #ededed;
  }
`;

// ====================================
// ReviewItem.jsx style

export const ReviewCard = styled.div`
  width: 1059px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ReviewTxtBox = styled.div`
  width: 70%;
`;

export const TxtTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 25px;
  strong {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #252525;
  }
`;

export const TxtBottom = styled.div`
  font-weight: 500;
  p {
    margin-bottom: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 20px;
    line-height: 24px;
    color: #252525;
  }
  span {
    font-size: 12px;
    line-height: 14px;
    color: #a6a6a6;
  }
`;

export const ReviewImgBox = styled.div`
  width: 186px;
  height: 120px;
  border-radius: 10px;
  overflow: hidden;
  img {
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;
