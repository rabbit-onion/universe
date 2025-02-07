import styled from 'styled-components';

export const HomeWrap = styled.div`
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
`;
