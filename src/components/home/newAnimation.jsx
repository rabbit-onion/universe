import React from 'react';
import { AniSection, LeftAniPic, MainAniPic, RightAniPic } from '../../pages/home/style';

const NewAnimation = () => {
  return (
    <div className="center_wrap new_animation_wrap">
      <h2>다양한 신작 애니메이션</h2>
      <h3>매일 요일별로 업데이트 되는 애니메이션과</h3>
      <h3>금주에 새로 나오는 애니메이션까지</h3>
      <AniSection>
        <LeftAniPic>
          <picture>
            <img className="left_ani_pic" src="../public/images/pattern/horizon/jusul.webp"></img>
          </picture>
        </LeftAniPic>
        <RightAniPic>
          <picture>
            <img className="right_ani_pic" src="../public/images/pattern/horizon/monster8.webp"></img>
          </picture>
        </RightAniPic>
        <MainAniPic>
          <picture>
            <img className="main_ani_pic" src="../public/images/pattern/horizon/onepiece.webp"></img>
          </picture>
        </MainAniPic>
      </AniSection>
    </div>
  );
};

export default NewAnimation;
