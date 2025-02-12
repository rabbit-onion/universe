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
