import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { dateslideActions } from '../../../store/modules/dateslideSlice';

const DateSlide = () => {
  const { dateslideData, currentDate } = useSelector((state) => state.dateslideR);
  const dispatch = useDispatch();

  const currentData = dateslideData[currentDate];
  return (
    <>
      <div className="inner div_top_margin">
        <div className="button-group">
          {/* Render buttons for each day */}
          {Object.keys(dateslideData).map((day) => (
            <button
              key={day}
              onClick={() => dispatch(dateslideActions.onDateChange(day))}
              className={currentDate === day ? 'active' : ''}
            >
              {day}
            </button>
          ))}
        </div>

        <h2>유니버스 독점작</h2>
        <div>
          <Swiper modules={[Navigation]} spaceBetween={15} slidesPerView={5} slidesPerGroup={5} loop="true" navigation>
            {currentData.map((image, index) => (
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

export default DateSlide;
