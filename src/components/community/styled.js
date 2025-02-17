import styled from 'styled-components';

export const CommunityWrap = styled.div`
  width: 100%;
  height: 100%;
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
`;

export const CommunityBanner = styled.div`
  width: 100vw;
  height: 80vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HotpostButtonGroup = styled.button`
  button {
    background-color: white;
    border: none;
    .active {
      background-color: blue;
    }
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

export const RecentlyPostWrap = styled.div`
  display: flex;
  justify-content: space-around;
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
