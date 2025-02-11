import React, { useState, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const FirstMainslide = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(null); // 타이머를 저장할 ref
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

  // 마우스 오버 핸들러
  const handleMouseEnter = (index) => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(index); // 딜레이 후 상태 업데이트
    }, 500); // 500ms 딜레이
  };

  // 마우스 아웃 핸들러
  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current); // 타이머 취소
    setHoveredIndex(null); // 상태 초기화
  };

  return (
    <>
      <div className="inner">
        <h2>유니버스 독점작</h2>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            slidesPerGroup={5}
            loop={true} // "true" 대신 boolean 값 true 사용
            navigation
            breakpoints={{
              // 모바일 (화면 너비 >= 320px)
              390: {
                slidesPerView: 2.75,
                spaceBetween: 10,
              },
              // 태블릿 (화면 너비 >= 768px)
              768: {
                slidesPerView: 3.25,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 5.25,
                spaceBetween: 30,
              },
            }}
          >
            {thumbnails.map((image, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => handleMouseEnter(index)} // 마우스 오버 핸들러 호출
                onMouseLeave={handleMouseLeave} // 마우스 아웃 핸들러 호출
                className={`swiper-slide ${hoveredIndex === index ? 'hovered' : ''}`} // 조건부 클래스 추가
              >
                <div className={`overlay-div ${hoveredIndex === index ? 'active' : ''}`}>
                  <img src={image.src} alt={image.alt} className="slide-image" />
                  <section>This is some overlay content.</section>
                </div>
                <img src={image.src} alt={image.alt} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FirstMainslide;
