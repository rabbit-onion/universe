import styled from 'styled-components';
import { device } from '../../styled/Device';
export const HotpostContent = styled.div`
  width: 26.5vw;
  height: 61vh;
  border-radius: 25px;
  filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.1));
  img {
    width: 26.5vw;
    height: 34.5vh;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  @media ${device.laptopMX} {
    height: 36vh;
    img {
      height: 20.5vh;
    }
  }
`;

export const HotpostContentCover = styled.div`
  position: absolute;
  width: 26.5vw;
  height: 34.5vh;
  background-color: black;
  opacity: 0.2;
  z-index: 5;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  @media ${device.laptopMX} {
    height: 20.5vh;
  }
`;

export const HotpostContentTitle = styled.div`
  width: 26.5vw;
  height: 25.4vh;
  background-color: white;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 2vw;
  div {
    display: flex;
    gap: 10px;
  }
  label {
    padding-right: 0.5vw;
    padding-left: 0.5vw;
    padding-top: 0.2vw;
    padding-bottom: 0.2vw;
    background-color: #4d94ff;
    color: white;
    border-radius: 7px;
    font-size: 12px;
  }
  h2 {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 30px;
  }
  @media ${device.laptopMX} {
    height: 10.4vh;
    label {
      font-size: 7px;
      border-radius: 2px;
    }
    h2 {
      font-size: 10px;
    }
    p {
      font-size: 7px;
    }
  }
`;
