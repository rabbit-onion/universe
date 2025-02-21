import styled from 'styled-components';
import { device } from '../../styled/Device';

export const MainWrap = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 50px;
  }
  .center_wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

  .bg-gr {
    background-color: #f5f5f5;
    padding: 5.2vw;
  }

  .user_content_wrap {
    gap: 7.8vw;
    display: flex;
    flex-direction: row;
  }

  .content_wrap {
    gap: 20px;
    display: flex;
    flex-direction: row;
  }

  .swiper-slide .hovered {
    z-index: 10; /* 마우스 오버 시 z-index 증가 */
  }

  .overlay-div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(1);
    transition: transform 0.2s ease-in-out, opacity 0.2s;
  }

  .overlay-div img {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0px 0px;
  }

  .overlay-div section {
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 20px;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    border-radius: 0px 0px 20px 20px;
  }

  .overlay-div.active {
    opacity: 1;
    transform: scale(1.2);
  }

  .vertical_watching_content .swiper-button-prev {
    height: 100%;
    padding: 0 2vw;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: transform 0.5s ease;
    position: absolute;
    bottom: -1px;
    top: 22px;
    left: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .swiper-button-prev:hover {
    transition: transform 0.8s ease;
    opacity: 1;
  }

  .vertical_watching_content .swiper-button-next {
    height: 100%;
    padding: 0 2vw;
    background-color: rgba(0, 0, 0, 0.4);
    transition: transform 0.5s ease;
    position: absolute;
    bottom: -1px;
    top: 22px;
    right: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .swiper-button-next:hover {
    transition: transform 0.8s ease;
    opacity: 1;
  }
`;

export const VerticalUserWatching = styled.div`
  @media ${device.desktop} {
    width: 15.8vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.1));
  }
  @media ${device.laptopMX} {
    width: 20.8vw;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.1));
  }
  @media ${device.tabletMX} {
    width: 27.7vw;
  }
  img {
    width: 100%;
    height: 50vh;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  div {
    width: 100%;
    padding: 20px;
    background-color: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    align-items: center;
  }
  p {
    font-size: 20px;
    margin-left: 20px;
  }
`;

export const MainThumbnailWrap = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const WhiteBlur = styled.div`
  position: absolute;
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    hsla(0, 0%, 92.5%, 0) 0,
    hsla(0, 0%, 92.5%, 0.15) 15%,
    hsla(0, 0%, 92.5%, 0.35) 29%,
    hsla(0, 0%, 92.5%, 0.58) 44%,
    #ffffff 68%,
    #ffffff
  );
  background-position: 0 top;
  background-repeat: repeat-x;
  background-size: 100% 100%;
  bottom: -1px;
  height: 14.7vw;
  opacity: 1;
  top: auto;
  width: 100%;
`;

export const IssueContentWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
export const BlackBlur = styled.div`
  position: absolute;
  width: 78.125vw;
  height: 87vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  border-radius: 25px;
  h2 {
    font-size: 80px;
    font-weight: bold;
    color: white;
    margin: 60px 50px 0px;
  }
  p {
    font-size: 40px;
    font-weight: 400;
    color: white;
    margin: 0px 50px;
  }
  @media ${device.laptopMX} {
    height: 48vh;
    p {
      font-size: 15px;
    }
    h2 {
      font-size: 30px;
    }
  }
`;

export const IssueContain = styled.div`
  position: relative;
  div {
    position: absolute;
    width: 28vw;
    height: 87vh;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 5;
  }
  img {
    position: absolute;
    height: 43.5vh;
    width: 14vw;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
  }
  button {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    width: 14vw;
    height: 6vh;
    border: 2px solid #0066ff;
    background-color: transparent;
    color: white;
    font-size: 24px;
  }
  @media ${device.laptopMX} {
    div {
      width: 32vw;
      height: 48vh;
    }
    img {
      height: 23.5vh;
      width: 19.0625vw;
      border-radius: 15px;
    }
  }
`;

export const IssueAnimationImg = styled.img`
  width: 78.125vw;
  height: 87vh;
  border-radius: 25px;
  @media ${device.laptopMX} {
    height: 48vh;
  }
`;
