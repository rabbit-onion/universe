// reset이나 전역 공통 스타일 작성

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Pretendard', sans-serif;
    color:#000;
  }
  a {
    text-decoration: none;
    color:#000;
  }
  li { list-style:none }
  img { vertical-align: top; }
  


  
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


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
