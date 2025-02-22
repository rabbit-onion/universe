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

const KidsAnimationSlide = () => {
  return (
    <motion.div
      className="div_top_margin center_wrap "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2>어린이들을 위한 키즈 애니메이션</h2>
      <h3>다양한 키즈 애니메이션과</h3>
      <h3>즐거운 캐릭터들과 함께 즐거움이 2배</h3>
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
  );
};

export default KidsAnimationSlide;
