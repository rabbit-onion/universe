import React from 'react';
import { motion } from 'framer-motion';

const DeviceMockup = () => {
  return (
    <motion.div
      className="div_top_margin center_wrap"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2>원하는 기기로 자유롭게 감상</h2>
      <h3>스마트폰, 테블릿, PC, TV까지!</h3>
      <img className="device_mockup_img" src="/images/pattern/all_mockup.png"></img>
    </motion.div>
  );
};

export default DeviceMockup;
