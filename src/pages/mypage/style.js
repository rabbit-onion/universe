import styled from 'styled-components';

export const MyPageWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    color: #000000;
    text-align: left;
  }
`;

export const MyPageInner = styled.div`
  display: flex;
  gap: 1.4rem;
  margin: 0 8rem;
  margin-top: 5.6667rem;
  margin-bottom: 11.4rem;
`;

export const ProfileInfoWrap = styled.div`
  width: 35rem;
  height: 43.7333rem;
  background: #ffffff;
  box-shadow: 0rem 0.2667rem 3.3333rem rgba(0, 0, 0, 0.3);
  border-radius: 1.2rem;
  overflow: hidden;
`;

export const StorageBoxWrap = styled.div`
  width: 75.6rem;
  max-width: 75.6rem;
  min-height: 80.1333rem;
  background: #ffffff;
  box-shadow: 0rem 0.2667rem 3.3333rem rgba(0, 0, 0, 0.3);
  border-radius: 1.2rem;
  overflow: hidden;
`;

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.0667rem 2.4rem 3.1333rem 2.7333rem;
  h2 {
    margin-bottom: 20px;
  }
`;
