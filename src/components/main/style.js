import styled from 'styled-components';

export const ModalTop = styled.div`
  position: relative;
  width: 1440px;
  height: 1079px;
`;

export const VideoBox = styled.iframe`
  position: relative;
  margin-top: -70px;
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 455px;
  width: 1440px;
  height: 425px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1) 4%, transparent 100%);
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

export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  img {
    height: 68px;
    width: auto;
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
  align-items: center;
  > p {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.02em;
  }
`;

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  font-size: 15px;
  strong {
    font-weight: 600;
    color: #1c1c1c;
    margin-right: 17px;
  }
  p {
    color: #5f5f5f;
    line-height: 18px;
  }
`;

export const ModalMain = styled.div`
  width: 1440px;
  padding: 17px 60px;
  background-color: lavender;
  h2 {
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
  }
`;

export const EpisodeSec = styled.div`
  hr {
    border: none;
    height: 1px;
    background-color: #c5c5c5;
  }
`;

export const EpisodeTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EpisodeItem = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 14px;
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
  padding: 0 18px 0 28px;
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
`;

export const SeasonSelect = styled.select`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  border: none;
  padding: 0 20px;
`;
