import styled from 'styled-components';
import { device } from '../../styled/Device';

export const MainWrap = styled.div`
  h2 {
    font-size: 2.3333rem;
    font-weight: 600;
    margin-bottom: 3.3333rem;
  }
  .controlZidx {
    position: relative;
    z-index: 2;
    margin-top: -4%;
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
    gap: 1.3333rem;
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
    border-radius: 1.3333rem 1.3333rem 0rem 0rem;
  }

  .overlay-div section {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 1.3333rem;
    filter: drop-shadow(0 0 0.3333rem rgba(0, 0, 0, 0.5));
    border-radius: 0rem 0rem 1.3333rem 1.3333rem;
    p {
      margin-top: 6px;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      color: #4b4b4b;
    }
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
    bottom: -0.0667rem;
    top: 1.4667rem;
    left: 0;
    border-top-left-radius: 1.3333rem;
    border-bottom-left-radius: 1.3333rem;
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
    bottom: -0.0667rem;
    top: 1.4667rem;
    right: 0;
    border-top-right-radius: 1.3333rem;
    border-bottom-right-radius: 1.3333rem;
  }
  .swiper-button-next:hover {
    transition: transform 0.8s ease;
    opacity: 1;
  }
  .age_img15 {
    display: none;
    position: absolute;
    top: -10%;
    left: 5%;
  }
  .age_img12 {
    display: none;
    position: absolute;
    top: -10%;
    left: 5%;
  }
  .age_img18 {
    display: none;
    position: absolute;
    top: -10%;
    left: 5%;
  }
  .age_imgall {
    display: none;
    position: absolute;
    top: -10%;
    left: 5%;
  }
  .visible {
    display: flex;
  }
`;

export const VerticalUserWatching = styled.div`
  div {
    position: relative;
    div {
      position: absolute;
      top: 0;
      left: 0;
      height: 12px;
      padding: 0;
      border-radius: 0;
      background: #d6d5d5;
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) => props.w}%;
        height: 12px;
        padding: 0;
        background: #0068ff;
        border-radius: 0px 20px 20px 0px;
      }
    }
  }
  @media ${device.desktop} {
    width: 15.8vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    filter: drop-shadow(0rem 0.2667rem 0.2rem rgba(0, 0, 0, 0.1));
  }
  @media ${device.laptopMX} {
    width: 20.8vw;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    filter: drop-shadow(0rem 0.2667rem 0.2rem rgba(0, 0, 0, 0.1));
  }
  @media ${device.tabletMX} {
    width: 27.7vw;
  }
  img {
    width: 100%;
    height: 50vh;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  div {
    width: 100%;
    padding: 1.3333rem;
    background-color: white;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: flex;
    align-items: center;
  }
  p {
    font-size: 1.3333rem;
    margin-left: 1.3333rem;
  }
`;

export const MainThumbnailWrap = styled.div`
  position: relative;
  overflow: hidden;
  iframe {
    scale: 1.15;
    transform: translateY(-4%);
  }
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
  bottom: -0.0667rem;
  height: 14.7vw;
  opacity: 1;
  top: auto;
  width: 100%;
  z-index: 2;
`;

export const PlayBtnImg = styled.img``;
export const InfoBtnImg = styled.img``;

export const TxtBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding-left: 85px;
  padding-bottom: 200px;
  > img {
    width: 31.2667rem;
    height: 15.6667rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: 0.8667rem;
    margin-top: 11.4rem;
    a {
      position: relative;
      z-index: 2;
    }
    ${PlayBtnImg} {
      width: 10.6667rem;
      height: 4.5333rem;
    }
    ${InfoBtnImg} {
      width: 14.3333rem;
      height: 4.5333rem;
    }
  }
`;

// ==========================================
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
  border-radius: 1.6667rem;
  h2 {
    font-size: 5.3333rem;
    font-weight: bold;
    color: white;
    margin: 4rem 3.3333rem 0rem;
  }
  p {
    font-size: 2.6667rem;
    font-weight: 400;
    color: white;
    margin: 0rem 3.3333rem;
  }
  .release-playBtn {
    display: block;
    margin: auto;
    margin-top: 7%;
  }
  @media ${device.laptopMX} {
    height: 48vh;
    p {
      font-size: 1rem;
    }
    h2 {
      font-size: 2rem;
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
    backdrop-filter: blur(1rem);
    border-top-right-radius: 1.6667rem;
    border-bottom-right-radius: 1.6667rem;
    z-index: 5;
  }
  img {
    position: absolute;
    height: 43.5vh;
    width: 14vw;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
  }
  button {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    width: 14vw;
    height: 6vh;
    border: 0.1333rem solid #0066ff;
    background-color: transparent;
    color: white;
    font-size: 1.6rem;
  }
  @media ${device.laptopMX} {
    div {
      width: 32vw;
      height: 48vh;
    }
    img {
      height: 23.5vh;
      width: 19.0625vw;
      border-radius: 1rem;
    }
  }
`;

export const IssueAnimationImg = styled.img`
  width: 78.125vw;
  height: 87vh;
  border-radius: 1.6667rem;
  @media ${device.laptopMX} {
    height: 48vh;
  }
`;
