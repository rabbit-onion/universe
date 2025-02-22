import { Link } from 'react-router-dom';
import { FooterWrap, Txtbottom, TxtBox, TxtTop } from './style';

const Footer = () => {
  return (
    <>
      <FooterWrap>
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/rabbit-onion/universe-resources/refs/heads/main/images/logo-white.svg"
            alt="UNIVERSE 로고"
          />
        </Link>

        <TxtBox>
          <TxtTop>
            <li>
              주식회사 유니버스 <span>/</span> 대표 : 천사랑
            </li>
            <li>주소 : 서울 서초구 서초대로77길 41 대동2빌딩 9층</li>
            <li>
              사업자등록번호 : 777-77-7777 <span>/</span> 통신판매번호 : 제2022-서울강남구-3578호
            </li>
            <li>
              이메일 : universe@naver.com <span>/</span> 대표전화 : 5252-7979
            </li>
            <li>Copyright© 유니버스(주) All rights reserved. </li>
          </TxtTop>
          <Txtbottom>
            <li>
              <Link to="/">이용약관</Link>
            </li>
            <li>
              <Link to="/">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="/">청소년 보호정책</Link>
            </li>
            <li>
              <Link to="/">법적고지</Link>
            </li>
            <li>
              <Link to="/">이벤트</Link>
            </li>
          </Txtbottom>
        </TxtBox>
      </FooterWrap>
    </>
  );
};

export default Footer;
