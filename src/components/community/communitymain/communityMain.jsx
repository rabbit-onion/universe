import React from 'react';
import { CommunityBanner, CommunityWrap, HotpostButtonGroup } from '../styled';
import { hotpostmainData } from '../../../assets/api/hotpostmaindata';
import { useDispatch, useSelector } from 'react-redux';
import { hotpostActions } from '../../../store/modules/hotpostSlice';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CommunityMain = () => {
  const { hotpostmainData, currentMenu } = useSelector((state) => state.hotpostR);
  const dispatch = useDispatch();
  const currentMenuData = hotpostmainData[currentMenu];
  return (
    <CommunityWrap>
      <CommunityBanner>
        <img src="../public/images/pattern/horizon/chihiro.webp"></img>
      </CommunityBanner>
      <div className="div_top_margin inner">
        <h2>오늘의 HOT 게시글 </h2>
        <h3>덕후 심장을 울린 게시글 </h3>
        <HotpostButtonGroup>
          {Object.keys(hotpostmainData).map((menu) => (
            <>
              <button
                type="button"
                key={menu}
                onClick={() => dispatch(hotpostActions.onMenuChange(menu))}
                className={currentMenu === menu ? 'active' : ''}
              >
                {menu}
              </button>
            </>
          ))}
        </HotpostButtonGroup>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            loop={true}
            navigation
            breakpoints={{
              390: {
                slidesPerView: 2.75,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3.25,
                slidesPerGroup: 3,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 5.25,
                slidesPerGroup: 5,
                spaceBetween: 30,
              },
            }}
          >
            {currentMenuData.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="button_contain">
          <button>게시물 전체보기</button>
        </div>
      </div>
    </CommunityWrap>
  );
};

export default CommunityMain;

// 전체로 시작해서 끝까지 4개의 버튼을 누르면 각각에 해당하는 게시물들이 표현된다 .

// 그렇게 하려면 ..................................................................  onchange  ??
