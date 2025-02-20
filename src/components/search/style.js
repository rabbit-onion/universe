import styled from 'styled-components';
export const TagButtonWrap = styled.div`
  display: flex;
  gap: 22px;
  width: 100%;
  margin-bottom: 25px;
  div {
    display: flex;
  }
`;
export const TagWrap = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 150px;
`;
export const TagContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CheckBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  hr {
    width: 250px;
  }
`;

export const CheckLabel = styled.label`
  display: flex;
  p {
    width: 100px;
    font-size: 15px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  margin-left: 3.2vw;
  gap: 20px;
  flex-wrap: wrap;
  height: 100%;
  img {
    border-radius: 25px;
    width: 320px;
    height: 210px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.3);
  }
`;
