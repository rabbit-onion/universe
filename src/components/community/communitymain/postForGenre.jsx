import React from 'react';
import { GenrePostWrap } from '../styled';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const PostForGenre = () => {
  const buttondata = [
    { src: '/images/pattern/genre_drama.png' },
    { src: '/images/pattern/genre_sf.png' },
    { src: '/images/pattern/genre_fantasy.png' },
    { src: '/images/pattern/genre_romance.png' },
    { src: '/images/pattern/genre_romance_fantasy.png' },
    { src: '/images/pattern/genre_mystery.png' },
    { src: '/images/pattern/genre_travel.png' },
    { src: '/images/pattern/genre_bl.png' },
    { src: '/images/pattern/genre_fight.png' },
  ];
  return (
    <div>
      <GenrePostWrap>
        <h2>장르별 게시글 모아보기</h2>
        <h3>우리 함께 덕질생활 토크해보자 !</h3>
        <Swiper modules={[Navigation]} spaceBetween={15} navigation loopFillGroupWithBlank={false} slidesPerView={6}>
          {buttondata.map((item, index) => (
            <SwiperSlide key={index}>
              <button type="button">
                <img src={item.src}></img>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </GenrePostWrap>
    </div>
  );
};

export default PostForGenre;
