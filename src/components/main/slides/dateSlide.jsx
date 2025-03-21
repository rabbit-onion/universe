import React, { useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { dateslideActions } from '../../../store/modules/dateslideSlice';
import { DateButtonGroup } from '../style';

const DateSlide = () => {
  const { dateslideData, currentDate } = useSelector((state) => state.dateslideR);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(null); // 타이머를 저장할 ref
  const dispatch = useDispatch();
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

  const currentData = dateslideData[currentDate];
  return (
    <>
      <div className="inner div_top_margin">
        <h2>요일별 신작</h2>
        <DateButtonGroup>
          {Object.keys(dateslideData).map((day) => (
            <button
              key={day}
              onClick={() => dispatch(dateslideActions.onDateChange(day))}
              className={currentDate === day ? 'active' : ''}
            >
              {day}
            </button>
          ))}
        </DateButtonGroup>

        <div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={15}
            loop={true}
            navigation
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
            {currentData.map((image, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => handleMouseEnter(index)} // 마우스 오버 핸들러 호출
                onMouseLeave={handleMouseLeave} // 마우스 아웃 핸들러 호출
                className={`swiper-slide ${hoveredIndex === index ? 'hovered' : ''}`}
              >
                <div className={`overlay-div ${hoveredIndex === index ? 'active' : ''}`}>
                  <img src={image.src} alt={image.alt} className="slide-image" />
                  <div className={` age_img15 ${image.age === 15 ? 'visible' : ''}`}>
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
                  </div>

                  <img className="play_btn" src="/images/pattern/playbtn.png"></img>

                  <img className="plus_btn" src="/images/pattern/plusbtn.png"></img>

                  <section>
                    {image.title}
                    <p>판타지·액션 | TVA·완결</p>
                  </section>
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

export default DateSlide;
