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
    .home_comm_wrap {
    position : relative;
    }
    .uni_back_typo {
    font-size : 500px;
    font-weight : 700;
    color : #333333;
    line-height: normal;
    }
  .home_comm_section {
  width : 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    position : absolute;
    top:50%;
    left:50%;
        transform: translate(-50%, -50%);
}
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
    width: 29.6vw !important;
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
  .left_ani_pic {
    width: 100%;
    transform: translate(-50%, -50%);
    opacity: 0.4;
    border-radius: 20px;
  }
  .right_ani_pic {
    width: 100%;
    transform: translate(50%, -50%);
    opacity: 0.4;
    border-radius: 20px;
  }
  .main_ani_pic {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
`;

export const ReviewTitle = styled.h1`
  font-size: 20px;
`;

export const ReviewName = styled.h2`
  font-size: 12px;
  margin-bottom: 10px;
`;

export const AniSection = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 38rem;
  top: 4.15rem;
  margin-bottom: 10rem;
  display: block;
`;
export const LeftAniPic = styled.div`
  position: absolute;
  top: 52%;
  width: 76%;
`;
export const RightAniPic = styled.div`
  position: absolute;
  top: 52%;
  left: 24%;
  width: 76%;
`;

export const MainAniPic = styled.div`
  position: relative;
`;
