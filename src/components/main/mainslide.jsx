import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Mainslide = () => {
  return (
    <div>
      <Swiper modules={[Navigation]} spaceBetween={15} slidesPerView={5} navigation>
        <SwiperSlide>
          <img src="../public/images/pattern/thunail.png"></img>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 55</SwiperSlide>
        <SwiperSlide>Slide 54</SwiperSlide>
        <SwiperSlide>Slide 522</SwiperSlide>
        <SwiperSlide>Slide 1115</SwiperSlide>
        <SwiperSlide>Slide 51213</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Mainslide;
