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
    gap: 150px;
    display: flex;
    flex-direction: row;
  }
  .content_wrap {
    gap: 20px;
    display: flex;
    flex-direction: row;
  }
  .vertical_watching_content {
    width: 340px;
    height: 506px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
  }
  .vertical_userwatching_content_img {
    width: 340px;
    height: 406px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  .vertical_userwatching_content_title_container {
    width: 340px;
    height: 90px;
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
    width: 22.5vw;
    height: 17.4vh;
    background-color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 2vw;
  }
  .hotpost_label_div {
    display: flex;
    gap: 10px;
  }
  label {
    padding: 0.5vw;
    background-color: #4d94ff;
    color: white;
    border-radius: 10px;
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
  }
  .issue_right_blur {
    position: absolute;
    width: 26vw;
    height: 87vh;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.4;
    filter: blur(40px);

    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 15;
  }
`;
