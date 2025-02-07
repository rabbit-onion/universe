import React from 'react';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ReviewName, ReviewTitle } from '../../pages/home/style';

const ReviewSlide = () => {
  const review_fir = [
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
    {
      name: 'JUNJUN**',
      title: '유니버스를 알고나서 제 인생의 만족도가 달라졌어요 ',
      doc: '제가 좋아하는 애니메이션을 이렇게 전문적으로 다루는 사이트가 별로 없었는데 유니버스 덕분에 제 덕질 만족도가 달라졌습니다',
    },
    {
      name: '천개의**',
      title: 'UI가 깔끔해서 보기 좋아요.',
      doc: '애니메이션 사이트들 중에 이렇게 UI가 깔끔하고 이용하기 편한 사이트 별로 없는데, 유니버스 좋아요 앞으로 유지부탁드립니다.',
    },

    {
      name: '천개의**',
      title: 'UI가 깔끔해서 보기 좋아요.',
      doc: '애니메이션 사이트들 중에 이렇게 UI가 깔끔하고 이용하기 편한 사이트 별로 없는데, 유니버스 좋아요 앞으로 유지부탁드립니다.',
    },
    {
      name: '천개의**',
      title: 'UI가 깔끔해서 보기 좋아요.',
      doc: '애니메이션 사이트들 중에 이렇게 UI가 깔끔하고 이용하기 편한 사이트 별로 없는데, 유니버스 좋아요 앞으로 유지부탁드립니다.',
    },
    {
      name: '천개의**',
      title: 'UI가 깔끔해서 보기 좋아요.',
      doc: '애니메이션 사이트들 중에 이렇게 UI가 깔끔하고 이용하기 편한 사이트 별로 없는데, 유니버스 좋아요 앞으로 유지부탁드립니다.',
    },

    {
      name: '천개의**',
      title: 'UI가 깔끔해서 보기 좋아요.',
      doc: '애니메이션 사이트들 중에 이렇게 UI가 깔끔하고 이용하기 편한 사이트 별로 없는데, 유니버스 좋아요 앞으로 유지부탁드립니다.',
    },
  ];

  const review_sec = [
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
    {
      name: '오하*',
      title: '저 원래 별점 5개 잘 안주는데; 여기라서 줍니다.',
      doc: '저 원래 좀 까다로워서 별점 5개 잘 안드리는데 유니버스라서 드립니다. 당당해지십쇼.',
    },
  ];
  return (
    <>
      <div className="div_top_margin center_wrap double_line_slides ">
        <h2>180만 유저들의 생생한 후기들</h2>
        <h3>유저들의 사이트 만족도 4.8점</h3>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={30} // 슬라이드 간격
            centeredSlides={true} // 슬라이드 가운데 정렬
            speed={8000} // 슬라이드 전환 속도
            autoplay={{
              delay: 0, // 자동 재생 딜레이 (1ms)
              disableOnInteraction: false, // 사용자 상호작용 후에도 autoplay 유지
            }}
            loop={true} // 무한 반복
            slidesPerView={'auto'} // 한 번에 보여줄 슬라이드 개수 (자동 크기)
            allowTouchMove={false} // 터치 이동 비활성화
            modules={[Autoplay]} // Autoplay 모듈 활성화
          >
            {review_fir.map((review, index) => (
              <SwiperSlide key={index} className="review_swiper_slides">
                <ReviewName>{review.name}</ReviewName>
                <ReviewTitle>{review.title}</ReviewTitle>
                <h3 className="review_doc">{review.doc}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={30} // 슬라이드 간격
            centeredSlides={true} // 슬라이드 가운데 정렬
            speed={6000} // 슬라이드 전환 속도
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop={true} // 무한 반복
            slidesPerView={'auto'} // 한 번에 보여줄 슬라이드 개수 (자동 크기)
            allowTouchMove={false} // 터치 이동 비활성화
            modules={[Autoplay]} // Autoplay 모듈 활성화
          >
            {review_sec.map((review, index) => (
              <SwiperSlide key={index} className="review_swiper_slides">
                <ReviewName>{review.name}</ReviewName>
                <ReviewTitle>{review.title}</ReviewTitle>
                <h3 className="review_doc">{review.doc}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewSlide;
