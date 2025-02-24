import React from 'react';
import { motion } from 'framer-motion';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import animationData from '../../assets/api/animationdata';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SlideTitle } from './styled';

const FirstHomeSlide = () => {
  return (
    <>
      <motion.div
        className="div_top_margin center_wrap double_line_slides"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <SlideTitle>
          <h2>요즘 뜨는 모든 애니메이션</h2>
          <h3>뜨거운 관심을 받는 애니메이션들이 모두 유니버스에</h3>
        </SlideTitle>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={20}
            centeredSlides={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={'auto'}
            allowTouchMove={false}
            modules={[Autoplay]}
            dir={'rtl'}
          >
            {animationData.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={20}
            centeredSlides={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={'auto'}
            allowTouchMove={false}
            modules={[Autoplay]}
          >
            {animationData.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </>
  );
};

export default FirstHomeSlide;
