import styled from 'styled-components';
import { device } from '../../styled/Device';

export const MembershipWrap = styled.div`
  background-color: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1972px;

  @media (max-width: 768px) {
    height: 1663px;
  }
`;

export const MembershipBox = styled.div`
  height: 1972px;

  h2 {
    font-size: 40px;
    font-weight: bold;
    font-family: 'Pretendard';
    color: #ffffff;
  }

  @media ${device.tabletMX} {
    height: 1743px;
    width: 768px;

    h2 {
      font-size: 25px;
      font-weight: bold;
      font-family: 'Pretendard';
      color: #ffffff;
    }
  }
`;

export const DivWrap = styled.div`
  width: 750px;
  height: 512px;
  border-radius: 30px;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 55px;
  gap: 24px;

  span {
    font-size: 25px;
    font-weight: 700;
    color: #ffffff;
  }

  @media ${device.tabletMX} {
    width: 606px;
    height: 414px;
    border-radius: 30px;

    margin: 0px 40px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;

  div {
    display: flex;
    align-items: center;
    gap: 17px;
  }
  img {
    height: 12px;
  }
  @media ${device.laptopMX} {
    font-size: 18px;
  }
`;

export const Ad = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #0066ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media ${device.laptopMX} {
    font-size: 30px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  gap: 60px;

  @media ${device.laptopMX} {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }
`;

export const ContInner = styled.div`
  padding: 0 123px;

  h2 {
    margin-bottom: 65px;
  }

  @media ${device.laptopMX} {
    padding: 0 40px;
    h2 {
      margin-bottom: 71px;
    }
  }
`;

export const MembershipAd = styled.div`
  width: 1927px;
  height: 482px;
  background-color: #4d94ff;
  margin-bottom: 98px;

  img {
    width: 100%;
    height: auto;
  }
  @media ${device.laptopMX} {
    width: 768px;
    height: 319px;
    background-color: #4d94ff;
    margin-bottom: 41px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 94px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    font-family: 'Pretendard';
    color: #ffffff;
  }
  p {
    font-size: 25px;
    font-weight: bold;
    font-family: 'Pretendard';
    color: #ffffff;
  }

  @media ${device.laptopMX} {
    margin-bottom: 55px;

    h1 {
      font-size: 20px;
      font-weight: 700;
    }
    p {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;

export const DivBox = styled.div`
  justify-content: center;

  @media ${device.laptopMX} {
    display: flex;
    flex-direction: column;
  }
`;

export const PayBox = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 449px;
    height: 82px;
    border-radius: 55px;
    background-color: #0066ff;
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: 'Pretendard';
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    font-weight: 700;
    line-height: 36px;

    margin-bottom: 86px;
    margin-top: 94px;
  }

  @media ${device.laptopMX} {
    button {
      width: 265px;
      height: 43px;
      border-radius: 38px;
      font-size: 16px;

      margin-bottom: 60px;
      margin-top: 49px;
    }
  }
`;

export const ShortcutBox = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 1683px;
    height: 92px;
    background-color: #4d94ff;
    border-radius: 18px;
    color: #ffffff;
    font-family: 'Pretendard';
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  @media ${device.laptopMX} {
    button {
      width: 688px;
      height: 30px;
      border-radius: 7px;
      font-size: 10px;
      font-weight: 600;
    }
  }
`;
