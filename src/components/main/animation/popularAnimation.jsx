import React from 'react';

const PopularAnimation = () => {
  return (
    <div className="inner div_top_margin">
      <h2>실시간 인기 애니메이션</h2>
      <div className="user_content_wrap">
        <div className="vertical_watching_content">
          <img className="vertical_watching_content" src="../public/images/pattern/vertical/bleach.jpg"></img>
        </div>
        <div className="vertical_watching_content">
          <img className="vertical_watching_content" src="../public/images/pattern/vertical/digimon.jpg"></img>
        </div>
        <div className="vertical_watching_content">
          <img className="vertical_watching_content" src="../public/images/pattern/vertical/magic.jpg"></img>
        </div>
        <div className="vertical_watching_content">
          <img className="vertical_watching_content" src="../public/images/pattern/vertical/wakako.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default PopularAnimation;
