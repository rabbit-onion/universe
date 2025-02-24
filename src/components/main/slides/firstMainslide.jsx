import React, { useState, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const FirstMainslide = ({ firstSlideData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(null); // 타이머를 저장할 ref
  const pathUrl = 'https://image.tmdb.org/t/p/original';

  const thumbnailsData = [
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/lvUp.png',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/doraemon.webp',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/ninja.jpg',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/mom.webp',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/invincible.jpg',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/keroro.jpg',
    },
    {
      url: '',
    },
    {
      url: '',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/duel.webp',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/sakaday.png',
    },
  ];

  const addedSlideData = firstSlideData.map((data, idx) => {
    return {
      ...data,
      thumb: thumbnailsData[idx]?.url || `${pathUrl}/${data.backdrop_path}`,
    };
  });

  // ========================================================
  // const thumbnails = [
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/blackmaid.webp',
  //     alt: 'thumbnail 1',
  //     title: '흑집사',
  //     age: 18,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/blade.webp',
  //     alt: 'thumbnail 2',
  //     title: '귀멸의 칼날',
  //     age: 15,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/bleach.webp',
  //     alt: 'thumbnail 3',
  //     title: '블리치',
  //     age: 15,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/chainsawman.webp',
  //     alt: 'thumbnail 4',
  //     title: '체인소맨',
  //     age: 18,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/doraemon.webp',
  //     alt: 'thumbnail 5',
  //     title: '도라에몽',
  //     age: 0,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/dungeon.jpg',
  //     alt: 'thumbnail 6',
  //     title: '던전밥',
  //     age: 12,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/evangelion.webp',
  //     alt: 'thumbnail 7',
  //     title: '에반게리온',
  //     age: 18,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/moruka.webp',
  //     alt: 'thumbnail 8',
  //     title: '모루카',
  //     age: 12,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/sinjjang.webp',
  //     alt: 'thumbnail 9',
  //     title: '짱구는 못말려',
  //     age: 0,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/slamdunk.webp',
  //     alt: 'thumbnail 10',
  //     title: '슬램덩크',
  //     age: 12,
  //   },
  // ];

  // 마우스 오버 핸들러
  const handleMouseEnter = (index) => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(index); // 딜레이 후 상태 업데이트
    }, 350); // 300ms 딜레이
  };

  // 마우스 아웃 핸들러
  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current); // 타이머 취소
    setHoveredIndex(null); // 상태 초기화
  };

  return (
    <>
      <div className="inner controlZidx">
        <h2>유니버스 독점작</h2>
        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            loop={true}
            navigation
            loopFillGroupWithBlank={false}
            breakpoints={{
              390: {
                slidesPerView: 2.75,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 3.25,
                slidesPerGroup: 3,
                spaceBetween: 15,
              },
              1440: {
                slidesPerView: 5.25,
                slidesPerGroup: 5,
                spaceBetween: 30,
              },
            }}
          >
            {addedSlideData.map((data, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => handleMouseEnter(index)} // 마우스 오버 핸들러 호출
                onMouseLeave={handleMouseLeave} // 마우스 아웃 핸들러 호출
                className={`swiper-slide ${hoveredIndex === index ? 'hovered' : ''}`} // 조건부 클래스 추가
              >
                <div className={`overlay-div ${hoveredIndex === index ? 'active' : ''}`}>
                  <img src={data.thumb} alt={data.name} className="slide-image" />

                  <div className={` age_img18 ${data.adult ? 'visible' : ''}`}>
                    {' '}
                    <img src="/images/pattern/18.svg"></img>
                  </div>
                  {/* <div className={` age_img15 ${image.age === 15 ? 'visible' : ''}`}>
                    {' '}
                    <img src="/images/pattern/15.svg"></img>
                  </div>
                  <div className={` age_img12 ${image.age === 12 ? 'visible' : ''}`}>
                    {' '}
                    <img src="/images/pattern/12.svg"></img>
                  </div>
                  <div className={` age_img18 ${image.age === 18 ? 'visible' : ''}`}>
                    {' '}
                    <img src="/images/pattern/18.svg"></img>
                  </div>
                  <div className={` age_imgall ${image.age === 0 ? 'visible' : ''}`}>
                    {' '}
                    <img src="/images/pattern/all.png"></img>
                  </div> */}

                  <img className="play_btn" src="/images/pattern/playbtn.png"></img>

                  <img className="plus_btn" src="/images/pattern/plusbtn.png"></img>
                  <section>
                    {data.name}
                    <p>판타지·액션 | TVA·완결</p>
                  </section>
                </div>
                <img src={data.thumb} alt={data.name} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FirstMainslide;
