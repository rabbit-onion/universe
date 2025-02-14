import React from 'react';
import { CommnuniyBanner, CommunityWrap } from '../styled';

const CommunityMain = () => {
  return (
    <CommunityWrap>
      <CommnuniyBanner>
        <img src="../public/images/pattern/horizon/chihiro.webp"></img>
      </CommnuniyBanner>
      <div className="div_top_margin inner">
        <h2>오늘의 HOT 게시글 </h2>
        <h3>덕후 심장을 울린 게시글 </h3>
      </div>
    </CommunityWrap>
  );
};

export default CommunityMain;
