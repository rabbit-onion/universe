import React from 'react';
import { StartLogo } from './styled';
import { motion } from 'framer-motion';

const StartUniverse = () => {
  return (
    <motion.div
      className="div_top_margin center_wrap"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <StartLogo src="../public/images/pattern/logo.png" />
      <div className="div_top_margin">
        <h2>지금 시작하세요</h2>
      </div>
      <button className="membership_button">멤버쉽 가입하기</button>
    </motion.div>
  );
};

export default StartUniverse;
