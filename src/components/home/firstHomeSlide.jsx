import React from 'react';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const FirstHomeSlide = () => {
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
      <div className="div_top_margin center_wrap ">
        <h2>요즘 뜨는 모든 애니메이션</h2>
        <h3>뜨거운 관심을 받는 애니메이션들이 모두 유니버스에</h3>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={20} // 슬라이드 간격
            centeredSlides={true} // 슬라이드 가운데 정렬
            speed={4000} // 슬라이드 전환 속도
            autoplay={{
              delay: 0, // 자동 재생 딜레이 (1ms)
              disableOnInteraction: false, // 사용자 상호작용 후에도 autoplay 유지
            }}
            loop={true} // 무한 반복
            slidesPerView={'auto'} // 한 번에 보여줄 슬라이드 개수 (자동 크기)
            allowTouchMove={false} // 터치 이동 비활성화
            modules={[Autoplay]} // Autoplay 모듈 활성화
          >
            {thumbnails.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.src} alt={image.alt} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={20} // 슬라이드 간격
            centeredSlides={true} // 슬라이드 가운데 정렬
            speed={4000} // 슬라이드 전환 속도
            autoplay={{
              delay: 0, // 자동 재생 딜레이 (1ms)
              disableOnInteraction: false, // 사용자 상호작용 후에도 autoplay 유지
            }}
            loop={true} // 무한 반복
            slidesPerView={'auto'} // 한 번에 보여줄 슬라이드 개수 (자동 크기)
            allowTouchMove={false} // 터치 이동 비활성화
            modules={[Autoplay]} // Autoplay 모듈 활성화
          >
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

export default FirstHomeSlide;
