import styled from 'styled-components';
export const DarkMode = styled.body`
  background-color: #141414;
`;
export const HomeWrap = styled.div`
  h2,
  h3,
  h4,
  h5 {
    color: white;
  }
  .new_animation_wrap {
    position: relative;
  }
  .new_animation_thumb {
    width: 43.5vw;
    height: 50vh;
    border-radius: 30px;
  }
  .new_animation_thumb_sec {
    position: absolute;
    width: 76vw;
    height: 43.5vh;
    z-index: -1;
    transform: translateX(15%);
  }
  .swiper-container .swiper-wrapper {
    transition-timing-function: linear !important;
    position: relative;
  }
  .video_main_wrap {
    position: relative;
  }
  .video_thumbnail {
    height: 80%;
    width: 100%;
  }
  .mac_mockup_img {
    width: 50%;
    height: 100%;
  }
  .device_mockup_img {
    width: 50%;
    height: 100%;
  }
  .review_swiper_slides {
    display: flex;
    flex-direction: column;
    width: 29.6vw;
    height: 26.6vh;
    background-color: #3e3e3e;
    color: white;
    border-radius: 20px;
  }

  .review_doc {
    font-size: 16px;
  }
  .start_univ_logo {
    width: 46.3vw;
    height: 13vh;
    object-fit: contain;
  }
`;

export const ReviewTitle = styled.h1`
  font-size: 20px;
`;

export const ReviewName = styled.h2`
  font-size: 12px;
  margin-bottom: 10px;
`;
