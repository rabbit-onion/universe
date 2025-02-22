import React from 'react';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { review_fir, review_sec } from '../../assets/api/reviewdata';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ReviewName, ReviewTitle } from './styled';

const ReviewSlide = () => {
  return (
    <>
      <motion.div
        className="div_top_margin center_wrap double_line_slides "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>180만 유저들의 생생한 후기들</h2>
        <h3>유저들의 사이트 만족도 4.8점</h3>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={30}
            centeredSlides={true}
            speed={8000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={'auto'}
            allowTouchMove={false}
            modules={[Autoplay]}
          >
            {review_fir.map((review, index) => (
              <SwiperSlide key={index} className="review_swiper_slides">
                <ReviewName>{review.name}</ReviewName>
                <ReviewTitle>{review.title}</ReviewTitle>
                <h3 className="review_doc">{review.doc}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={30}
            centeredSlides={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={'auto'}
            allowTouchMove={false}
            modules={[Autoplay]}
          >
            {review_sec.map((review, index) => (
              <SwiperSlide key={index} className="review_swiper_slides">
                <ReviewName>{review.name}</ReviewName>
                <ReviewTitle>{review.title}</ReviewTitle>
                <h3 className="review_doc">{review.doc}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </>
  );
};

export default ReviewSlide;
