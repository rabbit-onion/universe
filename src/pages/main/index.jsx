import React from 'react';
import HorizontalThumbnail from '../../components/main/thumbnail/HorizontalThumbnail';
import Mainslide from '../../components/main/slides/mainslide';
import { MainWrap } from './style';
import UserWatching from '../../components/main/userWatching';
import PopularAnimation from '../../components/main/animation/popularAnimation';
import HotPost from '../../components/main/hotPost';
import IssueAnimation from '../../components/main/animation/issueAnimation';
import BottomBanner from '../../components/banner/bottomBanner';
import FirstMainslide from '../../components/main/slides/firstMainslide';
import DateSlide from '../../components/main/slides/dateSlide';

const Main = () => {
  return (
    <>
      {/* <div>메인페이지</div> */}

      <MainWrap>
        <HorizontalThumbnail />
        <FirstMainslide />
        <DateSlide />
        <UserWatching />
        <Mainslide />
        <Mainslide />
        <PopularAnimation />
        <HotPost />
        <IssueAnimation />
        <BottomBanner />
      </MainWrap>
    </>
  );
};

export default Main;
