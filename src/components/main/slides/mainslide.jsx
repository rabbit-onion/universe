import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Mainslide = ({ secondSlideData, thirdSlideData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(null); // 타이머를 저장할 ref
  const pathUrl = 'https://image.tmdb.org/t/p/original';

  // const thumbnails = [
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/blade.webp',
  //     alt: 'thumbnail 1',
  //     title: '귀멸의 칼날',
  //     age: 15,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/hell.webp',
  //     alt: 'thumbnail 2',
  //     title: '지옥락',
  //     age: 15,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/horimiya.webp',
  //     alt: 'thumbnail 3',
  //     title: '호리미야',
  //     age: 12,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/jusul.webp',
  //     alt: 'thumbnail 4',
  //     title: '주술회전',
  //     age: 18,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/mashle.webp',
  //     alt: 'thumbnail 5',
  //     title: '마슐',
  //     age: 15,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/frieren.webp',
  //     alt: 'thumbnail 6',
  //     title: '장송의 프리렌',
  //     age: 15,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/hosinoko.webp',
  //     alt: 'thumbnail 7',
  //     title: '최애의 아이',
  //     age: 15,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/moruka.webp',
  //     alt: 'thumbnail 8',
  //     title: '뿌이뿌이 모루카',
  //     age: 0,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/sinjjang.webp',
  //     alt: 'thumbnail 9',
  //     title: '짱구는 못말려(극장판) ~ 초시공! 태풍을 부르는 나의 신부',
  //     age: 0,
  //   },
  //   {
  //     src: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/thumnails/animation-horizon/slamdunk.webp',
  //     alt: 'thumbnail 10',
  //     title: '슬램덩크',
  //     age: 15,
  //   },
  // ];

  // 마우스 오버 핸들러

  const secondThumbsData = [
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/duel.webp',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/1stSlides/sakaday.png',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/2ndSlides/Group 5.png',
    },
    {
      url: '',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/2ndSlides/prpr.jpg',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/2ndSlides/maruko.jpg',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/2ndSlides/Group 4.png',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/2ndSlides/dictionary.png',
    },
    {
      url: '',
    },
    {
      url: '',
    },
  ];

  const thirdThumbsData = [
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/lion.png',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/moana.webp',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/sonic.webp',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/dogman.jpg',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/lvUp.png',
    },
    {
      url: '',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/superbad.webp',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/Group 5.png',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/wildrobot.jpg',
    },
    {
      url: 'https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/main/3rdSlides/flow.jpg',
    },
  ];

  let addedSlideData = [];

  if (secondSlideData) {
    addedSlideData = secondSlideData.map((data, idx) => {
      return {
        ...data,
        thumb: secondThumbsData[idx]?.url || `${pathUrl}/${data.backdrop_path}`,
      };
    });
  } else if (thirdSlideData) {
    addedSlideData = thirdSlideData.map((data, idx) => {
      return {
        ...data,
        thumb: thirdThumbsData[idx]?.url || `${pathUrl}/${data.backdrop_path}`,
      };
    });
  }

  const handleMouseEnter = (index) => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(index); // 딜레이 후 상태 업데이트
    }, 350); // 350ms 딜레이
  };

  // 마우스 아웃 핸들러
  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current); // 타이머 취소
    setHoveredIndex(null); // 상태 초기화
  };

  return (
    <>
      <div className="inner div_top_margin">
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
                  <img src={data.thumb} alt={data.name || data.title} className="slide-image" />

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
                    {data.name || data.title}
                    <p>판타지·액션 | TVA·완결</p>
                  </section>
                </div>
                <img src={data.thumb} alt={data.name || data.title} className="slide-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Mainslide;
