import React from 'react';
import { CommunityBanner, CommunitySwiperWrap, CommunityWrap, HotpostButtonGroup } from '../styled';
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
    <>
      <CommunityBanner>
        <img src="../public/images/pattern/community_banner.png"></img>
      </CommunityBanner>
      <CommunityWrap>
        <section>
          <h2>오늘의</h2>
          <h2>HOT 게시글</h2>
          <h3>덕후 심장을 울린 게시글 </h3>
        </section>
        <CommunitySwiperWrap>
          <HotpostButtonGroup>
            {Object.keys(hotpostmainData).map((menu) => (
              <>
                <div>
                  {' '}
                  <button
                    type="button"
                    key={menu}
                    onClick={() => dispatch(hotpostActions.onMenuChange(menu))}
                    className={`menu-button ${currentMenu === menu ? 'active' : ''}`}
                  >
                    <hr></hr>
                    {menu}
                  </button>
                </div>
              </>
            ))}
          </HotpostButtonGroup>

          {currentMenuData.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </CommunitySwiperWrap>
        <div className="button_contain">
          <button>게시물 전체보기</button>
        </div>
      </CommunityWrap>
    </>
  );
};

export default CommunityMain;

// 전체로 시작해서 끝까지 4개의 버튼을 누르면 각각에 해당하는 게시물들이 표현된다 .

// 그렇게 하려면 ..................................................................  onchange  ??
