import styled from 'styled-components';

export const TagWrap = styled.div`
  display: flex;
  margin-left: 150px;
  gap: 50px;
`;
export const TagContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CheckBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CheckLabel = styled.label`
  display: flex;
  p {
    width: 100px;
  }
`;

export const ImgWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  height: 100%;
  img {
    border-radius: 25px;
    width: 320px;
    height: 210px;
  }
`;
