import React from 'react';
import { CommunityBanner, CommunityWrap, HotpostButtonGroup } from '../styled';
import { hotpostmainData } from '../../../assets/api/hotpostmaindata';
import { useDispatch, useSelector } from 'react-redux';
import { hotpostActions } from '../../../store/modules/hotpostSlice';

const CommunityMain = () => {
  // const menuType = [
  //   { id: 1, name: '전체' },
  //   { id: 2, name: '애니메이션리뷰' },
  //   { id: 3, name: '애니메이션추천' },
  //   { id: 4, name: '잡담' },
  // ];
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
                value={menu}
                onClick={() => dispatch(hotpostActions.onMenuChange(menu))}
                className={currentMenu === menu ? 'active' : ''}
              >
                {menu}
              </button>
            </>
          ))}
        </HotpostButtonGroup>
        {currentMenuData.map((item, index) => {
          <img src={item.src} key={index}></img>;
        })}
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
