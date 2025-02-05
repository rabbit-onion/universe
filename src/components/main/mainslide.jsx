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
      <div className="inner div_top_margin">
        <h2>유니버스 독점작</h2>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={5.5}
            slidesPerGroup={5.5}
            loop="true"
            navigation
          >
            <SwiperSlide>
              <img src="../public/images/pattern/horizon/chihiro.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../public/images/pattern/horizon/hell.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../public/images/pattern/horizon/horimiya.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../public/images/pattern/horizon/jusul.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="../public/images/pattern/horizon/mashle.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src="../public/images/pattern/horizon/frieren.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src="../public/images/pattern/horizon/hosinoko.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src="../public/images/pattern/horizon/moruka.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src="../public/images/pattern/horizon/sinjjang.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src="../public/images/pattern/horizon/slamdunk.webp"></img>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src="../public/images/pattern/horizon/slamdunk.webp"></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Mainslide;
