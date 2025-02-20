import React, { useState, useRef } from 'react';
import {
  CommunityBanner,
  CommunitySwiperWrap,
  CommunityWrap,
  HotpostButtonGroup,
  HotpostContentCover,
} from '../styled';

import { useDispatch, useSelector } from 'react-redux';
import { hotpostActions } from '../../../store/modules/hotpostSlice';

const CommunityMain = () => {
  const { hotpostmainData, currentMenu } = useSelector((state) => state.hotpostR);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(null); // 타이머를 저장할 ref

  const dispatch = useDispatch();
  const currentMenuData = hotpostmainData[currentMenu];

  const handleMouseEnter = (index) => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(index); // 딜레이 후 상태 업데이트
    }, 500); // 500ms 딜레이
  };

  // 마우스 아웃 핸들러
  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current); // 타이머 취소
    setHoveredIndex(null); // 상태 초기화
  };

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

          {currentMenuData.map((image, index) => {
            return (
              <>
                {' '}
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)} // 마우스 오버 핸들러 호출
                  onMouseLeave={handleMouseLeave} // 마우스 아웃 핸들러 호출
                  className={` ${hoveredIndex === index ? 'hovered' : ''}`} // 조건부 클래스 추가
                >
                  <HotpostContentCover />
                  <div className={`overlay-div ${hoveredIndex === index ? 'active' : ''}`}>
                    <img src={image.src} alt={image.alt} />
                    <section>{image.title}</section>
                  </div>
                  <img src={image.src} alt={image.alt} />
                </div>
              </>
            );
          })}
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
