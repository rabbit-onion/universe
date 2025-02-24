import styled from 'styled-components';
export const DarkMode = styled.body`
  background-color: #141414;
`;
export const HomeWrap = styled.div`
  overflow: hidden;
  h2,
  h3,
  h4,
  h5 {
    color: white;
  }
  h2 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 1rem;
  }
  .new_animation_wrap {
    position: relative;
  }

  .swiper-container .swiper-wrapper {
    transition-timing-function: linear !important;
    position: relative;
  }

  .video_thumbnail {
    height: 80%;
    width: 100%;
  }
  .home_comm_wrap {
    position: relative;
  }
  .uni_back_typo {
    font-size: 500px;
    font-weight: 700;
    color: #333333;
    line-height: normal;
  }
  .device_mockup_img {
    width: 50%;
    height: 100%;
  }
  .review_swiper_slides {
    display: flex;
    flex-direction: column;
    width: 29.6vw !important;
    height: 26.6vh;
    background-color: #3e3e3e;
    color: white;
    border-radius: 20px;
  }
  .review_doc {
    font-size: 16px;
  }
  .membership_button {
    padding: 2vh 4vw;
    background-color: #0066ff;
    color: white;
    border-radius: 40px;
    font-size: 20px;
    margin-bottom: 100px;
  }
`;
