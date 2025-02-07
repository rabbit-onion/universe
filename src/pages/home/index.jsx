import React from 'react';
import FirstHomeSlide from '../../components/home/firstHomeSlide';
import { HomeWrap } from './style';

const Home = () => {
  return (
    <>
      <HomeWrap>
        <div>
          <FirstHomeSlide />
        </div>
      </HomeWrap>
    </>
  );
};

export default Home;
