// reset이나 전역 공통 스타일 작성

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Pretendard', sans-serif;
    color:#333;
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
  width : 345px;
  height : 223px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
}
  
.swiper-slide:hover {
transform: scale(1.7); 
  z-index: 10;
}

.swiper-slide img {
border-radius : 10px;

  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mainthumbnail {
  width : 100%;
  height : 100%;
}
.grow {
 z-index : 10;
  width: 500px !important;
  height: 300px;

}
  
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
