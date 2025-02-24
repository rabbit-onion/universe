import styled from 'styled-components';

export const SlideTitle = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;
export const BlackBlur = styled.div`
  width: 90%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  border-radius: 25px;
`;
export const VideoMainWrap = styled.div`
  margin-top: 50px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;

  video {
    width: 95%;
    height: 90%;
    opacity: 0.7;
    border-radius: 25px;
  }
  h2 {
    position: absolute;
    font-size: 45px !important;
    font-weight: 700 !important;
  }
`;

export const CommunitySection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 50%;
    height: 100%;
  }
`;
export const StartLogo = styled.img`
  width: 46.3vw;
  height: 13vh;
  object-fit: contain;
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
  img {
    width: 100%;
    transform: translate(-50%, -50%);
    opacity: 0.4;
    border-radius: 20px;
  }
`;
export const RightAniPic = styled.div`
  position: absolute;
  top: 52%;
  left: 24%;
  width: 76%;
  img {
    width: 100%;
    transform: translate(50%, -50%);
    opacity: 0.4;
    border-radius: 20px;
  }
`;

export const MainAniPic = styled.div`
  position: relative;
  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
`;
