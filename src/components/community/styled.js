import styled from 'styled-components';

export const CommunityWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5.2vw;
  margin-top: 100px;
  .button_contain {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    button {
      background-color: #0066ff;
      font-size: 15px;
      color: white;
      padding: 10px 30px;
      border-radius: 40px;
    }
  }
  img {
    width: 16.3vw;
    height: 29.8vh;
    border-radius: 20px;
  }

  .hotpost_img_wrap {
    position: relative;
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
    border-radius: 20px 20px 0px 0px;
  }

  .overlay-div section {
    width: 100%;
    height: 50%;
    background-color: white;
    padding: 20px;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
    border-radius: 0px 0px 20px 20px;
  }

  .overlay-div.active {
    opacity: 1;
  }
`;

export const CommunityBanner = styled.div`
  width: 100vw;
  height: 80vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CommunitySwiperWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
`;

export const HotpostButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  button {
    background-color: white;
    border: none;
    width: 100%;
    height: 50px;
    padding: 0 25px;
    font-size: 24px;
    color: #8a8787;
    text-align: left;
    transition: transform 0.3s ease;
  }
  .active {
    font-weight: bold;
    color: black;
    transform: translateX(20px);
    hr {
      transform: translateX(20px);
      opacity: 1;
    }
  }
  .menu-button {
    position: relative;
    margin: 5px 0;
    z-index: 1; /* 버튼이 선 위에 위치하도록 설정 */
  }
  div {
    display: flex;
    align-items: center;
  }
  hr {
    position: absolute;
    left: -210px;
    width: 200px;
    height: 2px;
    border: 1px solid #0066ff;
    opacity: 0;
    transition: transform 0.5s ease;
  }
`;
export const HotpostContentCover = styled.div`
  position: absolute;
  width: 16.3vw;
  height: 29.8vh;
  background-color: black;
  opacity: 0.2;
  z-index: 5;
  border-radius: 20px;
`;

export const GenrePostWrap = styled.div`
  background-color: #f5f5f5;
  padding: 5.2vw;
  margin-top: 100px;
  button {
    width: 250px;
    height: 250px;
    margin-top: 80px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .swiper-button-prev {
    height: 75%;
    top: 31%;
    left: 1%;
  }
  .swiper-button-next {
    height: 75%;
    top: 31%;
    right: -6%;
  }
`;
export const RecentlyPostContainer = styled.div`
  margin-top: 150px;
  padding-left: 5.2vw;
  padding-right: 5.2vw;
  select {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100px;
    padding: 5px;
    color: #505050;
    background-color: #f5f5f5;
    border: none;
    border-radius: 27px;
  }
`;
export const RecentlyPostSelectWrap = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    gap: 10px;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    button {
      margin: 20px 5px;
      padding: 0px 20px;
    }
  }
`;
export const RecentlyPostWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RecentlyThumbnail = styled.img`
  height: 21.2vh;
  width: 16.7vw;
  border-radius: 10px;
`;

export const RecentlyPostDocSec = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2 {
    font-size: 20px !important;
  }
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  img {
    width: 34px;
    height: 34px;
    border-radius: 30px;
  }
`;
