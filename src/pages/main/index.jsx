import React, { useEffect } from 'react';
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
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideo } from '../../store/modules/getThunk';

const Main = () => {
  const { videoData } = useSelector((state) => state.videoR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideo());
  }, []);

  const firstSlideData = videoData.slice(0, 10);
  const secondSlideData = videoData.slice(10, 20);
  const thirdSlideData = videoData.slice(20, 30);

  if (!videoData || videoData.length === 0) {
    return <div>Loading . . . </div>;
  }

  return (
    <>
      <MainWrap>
        <HorizontalThumbnail />
        <FirstMainslide firstSlideData={firstSlideData} />
        <DateSlide />
        <UserWatching />
        <Mainslide secondSlideData={secondSlideData} />
        <Mainslide thirdSlideData={thirdSlideData} />
        <PopularAnimation />
        <HotPost />
        <IssueAnimation />
        <BottomBanner />
      </MainWrap>

      <Outlet />
    </>
  );
};

export default Main;
