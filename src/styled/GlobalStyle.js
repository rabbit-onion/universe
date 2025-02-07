// reset이나 전역 공통 스타일 작성

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Pretendard', sans-serif;
    color:#333;
    overflow-x : hidden;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
h2 {
margin-bottom : 35px;
font-size : 35px;
font-weight : 600;

}
  
.swiper {
  width: 100%;
  height: 100%;
  overflow : visible;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  width : 18vw;
  height : 24.2vh;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
transition: transform 0.5s ease;
}

.swiper-slide img {
border-radius : 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  .swiper-button-prev {
  opacity : 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: transform 0.5s ease;
  }
    .swiper-button-prev:hover {
    transition: transform 0.8s ease;
  opacity : 1;
  } 
    .swiper-button-prev::after {
color : white;
    }

  .swiper-button-next {
  padding : 10vh 2vw ;
  background-color: rgba(0, 0, 0, 0.4);
  opacity : 0;

  } 
  .swiper-button-next:hover {
    transition: transform 0.8s ease;
  opacity : 1;
  } 
    .swiper-button-next::after {
color : white;
    }
.bottombanner {
width : 85vw;
height : 8vh; 
background-color : #4D94FF;
border-radius : 10px;
} 
.bottombanner_title_wrap {
    display: flex;
    margin-left : 2vw;
    gap : 2vw;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    align-items: center;
    color : white;
}
.div_top_margin {
margin-top : 150px;
}

img {
object-fit: cover;
}
 .black_blur {
      position: absolute;
      background-color: transparent;
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 8%, 0) 0,
        hsla(0, 0%, 8%, 0.15) 15%,
        hsla(0, 0%, 8%, 0.35) 29%,
        hsla(0, 0%, 8%, 0.58) 44%,
        #141414 68%,
        #141414
      );
  
  /* .inner { width:1400px; margin:auto; box-sizing:border-box; position:relative; padding:120px 0; } */
  .main { width: 100%; }

  button { border:none; cursor: pointer; }
  .hide{
     overflow: hidden;
     text-indent: -9999px;
     width: 0;
     height: 0;
     font-size: 0;
     line-height: 0;
  }

  
`;

export default GlobalStyle;
