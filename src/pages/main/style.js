import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MainWrap = styled.div`
  .slick-slide {
    width: 500px;
    height: 500px;
  }
  .inner {
    padding-left: 5.2vw;
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
  .main_thumbnail_wrap {
    position: relative;
  }
  .white_blur {
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
  }
  .mainthumbnail {
    width: 100%;
    height: 100%;
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
  .vertical_watching_content {
    width: 15.7vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
  }
  .vertical_userwatching_content_img {
    width: 100%;
    height: 38vh;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  .vertical_userwatching_content_title_container {
    width: 100%;
    height: 9.8vh;
    background-color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    align-items: center;
    font-size: 20px;
  }
  .vertical_userwatching_content_title {
    margin-left: 20px;
  }
  .hotpost_content {
    width: 26.5vw;
    height: 61vh;
    border-radius: 25px;
  }
  .hotpost_content_oplow {
    position: absolute;
    width: 26.5vw;
    height: 34.5vh;
    background-color: black;
    opacity: 0.2;
    z-index: 5;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  .hotpost_content_img {
    width: 26.5vw;
    height: 34.5vh;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  .hotpost_content_title {
    width: 26.5vw;
    height: 25.4vh;
    background-color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 2vw;
  }
  .hotpost_content_maintitle {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 30px;
  }
  .hotpost_label_div {
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
  .issue_content_wrap {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .issueAnimation_img {
    width: 78.125vw;
    height: 87vh;
    border-radius: 25px;
  }
  .black_ophalf {
    position: absolute;
    width: 78.125vw;
    height: 87vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 5;
    border-radius: 25px;
  }
  .issue_title {
    font-size: 80px;
    font-weight: bold;
    color: white;
    margin: 60px 50px 0px;
  }
  .issue_subtitle {
    font-size: 40px;
    font-weight: 400;
    color: white;
    margin: 0px 50px;
  }
  .issue_right_blur {
    position: absolute;
    width: 26vw;
    height: 87vh;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.4;
    backdrop-filter: blur(5px);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 15;
  }
  .swiper-slide .hovered {
    z-index: 10; /* 마우스 오버 시 z-index 증가 */
  }
  /* 앞쪽 div (초기 상태) */
  .overlay-div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* 반투명 검정색 배경 */
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0; /* 기본적으로 숨김 */
    transform: scale(1); /* 초기 크기 */
    transition: transform 0.5s ease-in-out, opacity 0.3s; /* 부드러운 전환 효과 */
  }
  .overlay-div img {
    width: 18vw;
    height: 24.2vh;
  }
  /* 마우스 오버 시 동작 */
  .overlay-div.active {
    opacity: 1; /* 보이도록 설정 */
    transform: scale(1.3); /* 확대 효과 */
  }
`;
