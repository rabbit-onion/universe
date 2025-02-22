import React from 'react';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { PopularAnimationWrap } from '../style';
const PopularAnimation = () => {
  const thumbnails = [
    {
      src: '../public/images/pattern/vertical/bleach.jpg',
      alt: 'thumbnail 1',
      num: '../public/images/pattern/popular_1.png',
    },
    {
      src: '../public/images/pattern/vertical/digimon.jpg',
      alt: 'thumbnail 2',
      num: '../public/images/pattern/popular_2.png',
    },
    {
      src: '../public/images/pattern/vertical/magic.jpg',
      alt: 'thumbnail 3',
      num: '../public/images/pattern/popular_3.png',
    },
    {
      src: '../public/images/pattern/vertical/wakako.jpg',
      alt: 'thumbnail 4',
      num: '../public/images/pattern/popular_4.png',
    },
    { src: '../public/images/pattern/vertical/digimon.jpg', alt: 'thumbnail 5' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
  ];

  return (
    <PopularAnimationWrap>
      <h2>실시간 인기 애니메이션</h2>
      <Swiper
        className="vertical_watching_content"
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerGroup={5}
        navigation
        breakpoints={{
          390: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 10,
            loopFillGroupWithBlank: false,
          },

          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 100,
            loopFillGroupWithBlank: false,
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 150,
            loopFillGroupWithBlank: false,
          },
        }}
      >
        {thumbnails.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="popular_num_img" src={image.num}></img>
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </PopularAnimationWrap>
  );
};

export default PopularAnimation;
