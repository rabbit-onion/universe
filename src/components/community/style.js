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

export const AllWrap = styled.div`
  width: 1920px;
  height: 5405px;
  background-color: #ffffff;
`;

export const Container = styled.div`
  padding: 80px 120px;
  h2 {
    font-family: 'Pretendard';
    font-size: 50px;
    font-weight: bold;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 123px;
    height: 46px;
    border-radius: 27px;
    background-color: #f5f5f5f5;
    margin-left: 20px;
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
    font-size: 20px;
    font-family: 'Pretendard';
    font-weight: 600;
  }

  hr {
    margin: 17px 0px 33px 0px;
  }

  li {
    font-size: 24px;
    font-family: 'Pretendard';
    margin-bottom: 28px;
  }
`;
export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 413px;
  height: 334px;
  background-color: pink;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 25px;
`;
export const CardImage = styled.div`
  width: 413px;
  height: 266px;
  border-radius: 30px;
  overflow: hidden;
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
`;
export const Right = styled.div`
  span {
    font-size: 15px;
    font-family: 'Pretendard';
    margin-right: 10px;
  }

  p {
    font-size: 15px;
    font-family: 'Pretendard';
  }
`;
