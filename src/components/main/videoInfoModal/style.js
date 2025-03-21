import styled from 'styled-components';

// ====================================
//
export const ModalWrap = styled.div`
  position: relative;
  width: 1440px;
  min-width: 1440px;
  margin: auto;
  top: 50px;
  background-color: #fff;
  border-radius: 60px;
  overflow: hidden;
  button {
    border: none;
  }
`;

export const ModalTop = styled.div`
  position: relative;
  width: 1440px;
  height: 1079px;
`;

export const VideoWrap = styled.div`
  width: 100%;
  height: 878px;
  overflow: hidden;
`;

export const VideoBox = styled.iframe`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  scale: 1.3;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 758px;
  width: 1440px;
  height: 120px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 13%, rgba(255, 255, 255, 0.2) 70%, transparent 100%);
  z-index: 2;
`;

export const TopInner = styled.div`
  position: absolute;
  bottom: 0;
  width: 1440px;
  height: 596px;
  padding: 0 60px;
  z-index: 2;
  img {
    width: 401px;
    height: 155px;
  }
`;

export const ProgressBar = styled.div`
  width: 515px;
  height: 8px;
  background: #ffffff;
  border-radius: 9px;
  margin-top: 65px;
  margin-bottom: 30px;
  div {
    width: 305px;
    height: 8px;
    background: #0068ff;
    border-radius: 9px;
  }
`;

export const TopBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  button {
    background-color: transparent;
    img {
      height: 68px;
      width: auto;
    }
  }
`;

export const VideoDesc = styled.div`
  > strong {
    font-size: 21px;
    font-weight: 600;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  > p {
    width: 743px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
    white-space: pre-wrap;
    flex-grow: 1;
    padding-right: 165px;
  }
`;

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  font-size: 15px;
  div {
    display: flex;
    color: #5f5f5f;
    line-height: 18px;
    white-space: pre;
    &:last-child p {
      display: flex;
    }
  }
  strong {
    font-weight: 600;
    color: #1c1c1c;
    margin-right: 17px;
  }

  span {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ModalMain = styled.div`
  width: 1440px;
  h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 50px;
  }
`;

export const EpisodeSec = styled.div`
  position: relative;
  padding: 37px 60px 74px 60px;
  width: 100%;
  overflow: hidden;
  hr {
    border: none;
    height: 1px;
    background-color: #c5c5c5;
    &:last-of-type {
      height: 3px;
      background-color: #7d7d7d;
    }
  }
`;

export const EpisodeTop = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    margin-bottom: 0;
  }
`;

// =========================================
// EpisodeItem.jsx style??

export const EpisodeItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0;
  &:first-child {
    padding: 26px 0 50px 0;
  }
  div {
    img {
      width: 186px;
      height: 120px;
      border-radius: 10px;
    }
  }
`;

export const EpisodeNum = styled.div`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  padding: 0 28px 0 18px;
`;

export const EpisodeInfo = styled.div`
  flex-grow: 1;
  padding-left: 41px;
`;

export const EpisodeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 15px;
    line-height: 18px;
  }
  div {
    display: flex;
    gap: 15px;
    span,
    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

export const EpisodeDesc = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  margin-top: 11px;
  width: 80%;
`;

export const SeasonSelect = styled.select`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  border: none;
  padding: 0 20px;
`;

export const MoreBtn = styled.button`
  display: block;
  margin: auto;
  margin-top: 75px;
  background-color: transparent;
`;

export const RecContentSec = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1388px;
  padding: 50px 60px 24px 60px;
  background: #f1f1f1;
  overflow: hidden;
`;

export const MoreBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 171px;
  padding-top: 42px;
  padding-bottom: 24px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 70%, transparent 100%);
  hr {
    border: none;
    height: 3px;
    background-color: #c5c5c5;
  }
  button {
    display: block;
    margin: auto;
    margin-top: 68px;
    background-color: transparent;
  }
`;

export const RecList = styled.div``;
export const RecItem = styled.div``;

export const RecCard = styled.div`
  width: 398px;
  height: 418px;
  background-color: #fff;
  border-radius: 25px;
`;

export const RecCardTop = styled.div`
  width: 100%;
  height: 244px;
  img {
    width: 100%;
    height: auto;
  }
`;
export const RecCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 44px 25px 49px 29px;
  h4 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 21px;
  }
  span {
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
  }
  button {
    background-color: transparent;
    img {
      width: 18px;
      height: 18px;
      margin-top: -24px;
    }
  }
`;

// ============================================
// RecommendList.jsx style

export const RecItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  height: 1144px;
  padding: 0 13px;
  /* overflow: hidden; */
`;

export const ListOverlay = styled.div`
  /* background: linear-gradient(to top, rgba(255, 255, 255, 1) 4%, transparent 100%); */
`;

export const PvSec = styled.div`
  width: 100%;
  height: 447px;
  padding: 45px 60px 49px 60px;
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const PvCard = styled.div`
  width: 345px;
  height: 223px;
  margin-bottom: 20px;
  border-radius: 25px;
  background-color: gray;
  img {
    width: 100%;
    height: auto;
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  background-color: #4b4b4b;
  color: white;
  padding: 45px 60px;
  h2 {
    font-weight: 600;
    font-size: 35px;
    line-height: 42px;
    margin-bottom: 20px;
  }
`;

export const ModalFooterDesc = styled.div`
  p {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 15px;
    strong {
      margin-right: 10px;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
