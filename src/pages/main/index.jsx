import React from 'react';

import HorizontalThumbnail from '../../components/main/HorizontalThumbnail';
import Mainslide from '../../components/main/mainslide';
import { MainWrap } from './style';
import UserWatching from '../../components/main/userWatching';
import PopularAnimation from '../../components/main/popularAnimation';
import HotPost from '../../components/main/hotPost';
import IssueAnimation from '../../components/main/issueAnimation';
import BottomBanner from '../../components/banner/bottomBanner';
import FirstMainslide from '../../components/main/Firstmainslide';
import Footer from '../../common/footer';
import DateSlide from '../../components/main/dateSlide';

const Main = () => {
  return (
    <>
      <div>메인페이지</div>

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
