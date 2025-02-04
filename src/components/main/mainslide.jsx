import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Mainslide = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      {' '}
      <h2>유니버스 독점작</h2>
      <div>
        <Swiper modules={[Navigation]} spaceBetween={15} slidesPerView={5} slidesPerGroup={5} loop="true" navigation>
          <SwiperSlide>
            <img src="../public/images/pattern/thunail.png"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../public/images/pattern/thunail.png"></img>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 55</SwiperSlide>
          <SwiperSlide>Slide 54</SwiperSlide>
          <SwiperSlide>Slide 522</SwiperSlide>
          <SwiperSlide>Slide 522</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Mainslide;
