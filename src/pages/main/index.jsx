import React from 'react';

import HorizontalThumbnail from '../../components/main/HorizontalThumbnail';
import Mainslide from '../../components/main/mainslide';
import { MainWrap } from './style';
import UserWatching from '../../components/main/userWatching';
import PopularAnimation from '../../components/main/popularAnimation';

const Main = () => {
  return (
    <>
      <div>메인페이지</div>
      <HorizontalThumbnail />
      <MainWrap>
        <div className="inner">
          <Mainslide />
        </div>
        <UserWatching />
        <div className="inner">
          <Mainslide />
          <Mainslide />
          <PopularAnimation />
        </div>
      </MainWrap>
    </>
  );
};

export default Main;
