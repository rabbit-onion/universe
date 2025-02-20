import React from 'react';
import { motion } from 'framer-motion';
import { AniSection, LeftAniPic, MainAniPic, RightAniPic } from './styled';

const NewAnimation = () => {
  return (
    <motion.div
      className="div_top_margin center_wrap double_line_slides"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="center_wrap new_animation_wrap">
        <h2>다양한 신작 애니메이션</h2>
        <h3>매일 요일별로 업데이트 되는 애니메이션과</h3>
        <h3>금주에 새로 나오는 애니메이션까지</h3>
        <AniSection>
          <LeftAniPic>
            <picture>
              <img src="../public/images/pattern/horizon/jusul.webp"></img>
            </picture>
          </LeftAniPic>
          <RightAniPic>
            <picture>
              <img src="../public/images/pattern/horizon/monster8.webp"></img>
            </picture>
          </RightAniPic>
          <MainAniPic>
            <picture>
              <img src="../public/images/pattern/horizon/onepiece.webp"></img>
            </picture>
          </MainAniPic>
        </AniSection>
      </div>
    </motion.div>
  );
};

export default NewAnimation;
