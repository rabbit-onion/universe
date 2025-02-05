import React from 'react';

import HorizontalThumbnail from '../../components/main/HorizontalThumbnail';
import Mainslide from '../../components/main/mainslide';
import { MainWrap } from './style';
import UserWatching from '../../components/main/userWatching';
import PopularAnimation from '../../components/main/popularAnimation';
import HotPost from '../../components/main/hotPost';
import IssueAnimation from '../../components/main/issueAnimation';

const Main = () => {
  return (
    <>
      <div>메인페이지</div>
      <HorizontalThumbnail />
      <MainWrap>
        <Mainslide />
        <UserWatching />

        <Mainslide />
        <Mainslide />
        <PopularAnimation />
        <HotPost />
        <IssueAnimation />
      </MainWrap>
    </>
  );
};

export default Main;
