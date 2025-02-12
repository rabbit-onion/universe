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
