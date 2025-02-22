import styled from 'styled-components';

export const FindWrap = styled.div`
  background-color: black;
  width: 1920px;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-family: 'Pretendard';
  font-size: 40px;
  color: #ffffff;
  font-weight: bold;
`;

export const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 70px;
`;

export const SubTitle = styled.p`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
`;

export const SubText = styled.p`
  font-family: 'Pretendard';
  font-size: 15px;
  color: #747474;
`;

export const MailBox = styled.div`
  width: 609px;
  height: 64px;
  border-radius: 6px;
  background-color: #2d2d2d;
  color: #707070;
  font-family: 'Pretendard';
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const Line = styled.span`

  hr{
    width: 282px;
   1px solid #383838;
  }
`;

export const FindBtn = styled.button`
  width: 609px;
  height: 64px;
  border-radius: 6px;
  background-color: #545454;
  font-family: 'Pretendard';
  font-size: 20px;
  color: #ffffff;
`;

export const AuthBtn = styled.button`
  width: 609px;
  height: 64px;
  border-radius: 6px;
  background-color: #0066ff;
  font-family: 'Pretendard';
  font-size: 20px;
  color: #ffffff;
  margin-top: 30px;
`;
