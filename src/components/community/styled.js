import styled from 'styled-components';

export const CommunityWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5.2vw;
  margin-top: 150px;
  .button_contain {
    display: flex;
    justify-content: center;
    button {
      background-color: #0066ff;
      color: white;
      padding: 10px 30px;
      border-radius: ;
    }
  }
  img {
    width: 200px !important;
    height: 150px;
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
`;

export const HotpostButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: white;
  button {
    background-color: white;
    border: none;
    writing-mode: vertical-lr;
    height: 30px;
  }
  .active {
    background-color: blue;
    color: white;
    .menu-button::before {
      background-color: white;
    }
  }
  .menu-button {
    position: relative; /* 버튼을 기준으로 ::before를 배치 */
    margin: 10px 0; /* 버튼 간격 */
    padding-left: 50px; /* 버튼과 선 사이 간격 */
    z-index: 1; /* 버튼이 선 위에 위치하도록 설정 */
  }

  .menu-button::before {
    content: '';
    position: absolute;
    top: 50%; /* 버튼의 세로 중심에 선 배치 */
    left: 0; /* 버튼의 왼쪽 시작점에서 선 시작 */
    transform: translateY(-50%); /* 세로 중심 정렬 */
    width: 45px; /* 가로선 길이 */
    height: 1px; /* 선 두께 */
    background-color: black; /* 선 색상 */
    z-index: -1; /* 선을 버튼 뒤로 배치 */
  }
`;

export const GenrePostWrap = styled.div`
  background-color: #f5f5f5;
  padding: 5.2vw;
  margin-top: 100px;
  button {
    width: 200px;
    height: 200px;
    margin-top: 80px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const RecentlyPostContainer = styled.div`
  margin-top: 150px;
  padding-left: 5.2vw;
  padding-right: 5.2vw;
`;
export const RecentlyPostWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RecentlyThumbnail = styled.img`
  height: 21.2vh;
  width: 16.7vw;
`;

export const RecentlyPostDocSec = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
