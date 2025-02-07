import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Mainslide = () => {
  const thumbnails = [
    { src: '../public/images/pattern/horizon/chihiro.webp', alt: 'thumbnail 1' },
    { src: '../public/images/pattern/horizon/hell.webp', alt: 'thumbnail 2' },
    { src: '../public/images/pattern/horizon/horimiya.webp', alt: 'thumbnail 3' },
    { src: '../public/images/pattern/horizon/jusul.webp', alt: 'thumbnail 4' },
    { src: '../public/images/pattern/horizon/mashle.webp', alt: 'thumbnail 5' },
    { src: '../public/images/pattern/horizon/frieren.webp', alt: 'thumbnail 6' },
    { src: '../public/images/pattern/horizon/hosinoko.webp', alt: 'thumbnail 7' },
    { src: '../public/images/pattern/horizon/moruka.webp', alt: 'thumbnail 8' },
    { src: '../public/images/pattern/horizon/sinjjang.webp', alt: 'thumbnail 9' },
    { src: '../public/images/pattern/horizon/slamdunk.webp', alt: 'thumbnail 10' },
  ];

  return (
    <>
      <div className="inner div_top_margin">
        <h2>유니버스 독점작</h2>
        <div>
          <Swiper modules={[Navigation]} spaceBetween={15} slidesPerView={5} slidesPerGroup={5} loop="true" navigation>
            {thumbnails.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Mainslide;
