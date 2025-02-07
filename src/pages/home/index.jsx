import React from 'react';
import FirstHomeSlide from '../../components/home/firstHomeSlide';
import { DarkMode, HomeWrap } from './style';
import NewAnimation from '../../components/home/newAnimation';
import VideoMain from '../../components/home/videoMain';
import KidsAnimationSlide from '../../components/home/kidsAnimationSlide';
import CommunityAds from '../../components/home/communityAds';
import ReviewSlide from '../../components/home/reviewSlide';
import StartUniverse from '../../components/home/startUniverse';

const Home = () => {
  return (
    <DarkMode>
      <>
        <HomeWrap>
          <div>
            <VideoMain />
            <NewAnimation />
            <FirstHomeSlide />
            <KidsAnimationSlide />
            <CommunityAds />
            <ReviewSlide />
            <StartUniverse />
          </div>
        </HomeWrap>
      </>
    </DarkMode>
  );
};

export default Home;
