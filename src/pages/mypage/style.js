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
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.3);
  border-radius: 18px;
  overflow: hidden;
`;
