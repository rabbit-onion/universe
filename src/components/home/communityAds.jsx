import React from 'react';
import { CommunitySection } from '../../pages/home/style';

const CommunityAds = () => {
  return (
    <div className="home_comm_wrap div_top_margin">
      <p className="uni_back_typo">UNIVERSE</p>
      <CommunitySection>
        <div>
          <h2>덕질 커뮤니티</h2>
          <h3>덕질 커뮤니티에서</h3>
          <h3>다양한 사람들과 함께 덕질을 공유하면서</h3>
          <h3>즐거움을 느껴보세요</h3>
        </div>
        <img src="../public/images/pattern/mac_mockup.png" alt="mac_mockup" />
      </CommunitySection>
    </div>
  );
};

export default CommunityAds;
