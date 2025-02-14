import React from 'react';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const PopularAnimation = () => {
  const thumbnails = [
    { src: '../public/images/pattern/vertical/bleach.jpg', alt: 'thumbnail 1' },
    { src: '../public/images/pattern/vertical/digimon.jpg', alt: 'thumbnail 2' },
    { src: '../public/images/pattern/vertical/magic.jpg', alt: 'thumbnail 3' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/digimon.jpg', alt: 'thumbnail 5' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/vertical/wakako.jpg', alt: 'thumbnail 4' },
  ];

  return (
    <div className="inner div_top_margin">
      <h2>실시간 인기 애니메이션</h2>
      <Swiper
        className="vertical_watching_content"
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerGroup={5}
        loop={true}
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
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularAnimation;
