import React from 'react';

const NewAnimation = () => {
  return (
    <div className="center_wrap new_animation_wrap">
      <h2>다양한 신작 애니메이션</h2>
      <h3>매일 요일별로 업데이트 되는 애니메이션과</h3>
      <h3>금주에 새로 나오는 애니메이션까지</h3>
      <img className="new_animation_thumb" src="../public/images/pattern/thunail.png"></img>
      {/* <img className="new_animation_thumb_sec" src="../public/images/pattern/bg_newani.png"></img> */}
    </div>
  );
};

export default NewAnimation;
