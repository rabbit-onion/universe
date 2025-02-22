import styled from 'styled-components';
import { device } from '../../styled/Device';

export const MembershipWrap = styled.div`
  background-color: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 131.4667rem;

  @media (max-width: 51.2rem) {
    height: 110.8667rem;
  }
`;

export const MembershipBox = styled.div`
  height: 131.4667rem;

  h2 {
    font-size: 2.6667rem;
    font-weight: bold;
    font-family: 'Pretendard';
    color: #ffffff;
  }

  @media ${device.tabletMX} {
    height: 116.2rem;
    width: 51.2rem;

    h2 {
      font-size: 1.6667rem;
      font-weight: bold;
      font-family: 'Pretendard';
      color: #ffffff;
    }
  }
`;

export const MembershipAd = styled.div`
  width: 100vw;
  height: 32.1333rem;
  background-color: #4d94ff;
  margin-bottom: 6.5333rem;

  img {
    width: 100%;
    height: 100%;
  }
  @media ${device.laptopMX} {
    width: 51.2rem;
    height: 21.2667rem;
    background-color: #4d94ff;
    margin-bottom: 2.7333rem;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const DivWrap = styled.div`
  width: 50rem;
  height: 34.1333rem;
  border-radius: 2rem;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3.6667rem;
  gap: 1.6rem;

  span {
    font-size: 1.6667rem;
    font-weight: 700;
    color: #ffffff;
  }

  @media ${device.tabletMX} {
    width: 40.4rem;
    height: 27.6rem;
    border-radius: 2rem;

    margin: 0rem 2.6667rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 1.6667rem;
  line-height: 2rem;
  color: #ffffff;

  div {
    display: flex;
    align-items: center;
    gap: 1.1333rem;
  }
  img {
    height: 0.8rem;
  }
  @media ${device.laptopMX} {
    font-size: 1.2rem;
  }
`;

export const Ad = styled.div`
  font-size: 2.6667rem;
  font-weight: bold;
  color: #0066ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.6667rem;

  @media ${device.laptopMX} {
    font-size: 2rem;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  gap: 4rem;

  @media ${device.laptopMX} {
    display: flex;
    flex-direction: column;
    gap: 2.2667rem;
  }
`;

export const ContInner = styled.div`
  padding: 0 8.2rem;

  h2 {
    margin-bottom: 4.3333rem;
  }

  @media ${device.laptopMX} {
    padding: 0 2.6667rem;
    h2 {
      margin-bottom: 4.7333rem;
    }
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6.2667rem;

  h1 {
    font-size: 2.6667rem;
    font-weight: bold;
    font-family: 'Pretendard';
    color: #ffffff;
  }
  p {
    font-size: 1.6667rem;
    font-weight: bold;
    font-family: 'Pretendard';
    color: #ffffff;
  }

  @media ${device.laptopMX} {
    margin-bottom: 3.6667rem;

    h1 {
      font-size: 1.3333rem;
      font-weight: 700;
    }
    p {
      font-size: 1rem;
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
    width: 29.9333rem;
    height: 5.4667rem;
    border-radius: 3.6667rem;
    background-color: #0066ff;
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-family: 'Pretendard';
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    font-weight: 700;
    line-height: 2.4rem;

    margin-bottom: 5.7333rem;
    margin-top: 6.2667rem;
  }

  @media ${device.laptopMX} {
    button {
      width: 17.6667rem;
      height: 2.8667rem;
      border-radius: 2.5333rem;
      font-size: 1.0667rem;

      margin-bottom: 4rem;
      margin-top: 3.2667rem;
    }
  }
`;

export const ShortcutBox = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 112.2rem;
    height: 6.1333rem;
    background-color: #4d94ff;
    border-radius: 1.2rem;
    color: #ffffff;
    font-family: 'Pretendard';
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  @media ${device.laptopMX} {
    button {
      width: 45.8667rem;
      height: 2rem;
      border-radius: 0.4667rem;
      font-size: 0.6667rem;
      font-weight: 600;
    }
  }
`;
