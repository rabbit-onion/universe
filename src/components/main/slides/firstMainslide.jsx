import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FirstMainslide = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
      <div className="inner ">
        <h2>유니버스 독점작</h2>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerView={5.25}
            slidesPerGroup={5}
            loop="true"
            navigation
          >
            {thumbnails.map((image, index) => (
              <>
                <SwiperSlide
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)} // 마우스 오버 시 해당 슬라이드의 index 저장
                  onMouseLeave={() => setHoveredIndex(null)} // 마우스 아웃 시 초기화
                  className={`swiper-slide ${hoveredIndex === index ? 'hovered' : ''}`} // 조건부 클래스 추가
                >
                  <div className={`overlay-div ${hoveredIndex === index ? 'active' : ''}`}>
                    <img src={image.src} alt={image.alt} className="slide-image" />
                    <p>This is some overlay content.</p>
                  </div>
                  <img src={image.src} alt={image.alt} className="slide-image" />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FirstMainslide;
