import React from 'react';
import FirstHomeSlide from '../../components/home/firstHomeSlide';
import { HomeWrap } from './style';
import NewAnimation from '../../components/home/newAnimation';
import VideoMain from '../../components/home/videoMain';
import KidsAnimationSlide from '../../components/home/kidsAnimationSlide';
import CommunityAds from '../../components/home/communityAds';

const Home = () => {
  return (
    <>
      <HomeWrap>
        <div>
          <VideoMain />
          <NewAnimation />
          <FirstHomeSlide />
          <KidsAnimationSlide />
          <CommunityAds />
        </div>
      </HomeWrap>
    </>
  );
};

export default Home;
