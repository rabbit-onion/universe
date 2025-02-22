import styled from 'styled-components';

export const FooterWrap = styled.div`
  width: 100%;
  background-color: #4b4b4b;
  color: #fff;
  padding: 2.8667rem 8rem;
  > a {
    display: inline-block;
    margin-top: 0.8667rem;
    margin-bottom: 3.4rem;
  }
`;

export const TxtBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const TxtTop = styled.ul`
  line-height: 19.9995px;
  span {
    margin: 0 7px;
  }
`;

export const Txtbottom = styled.ul`
  display: flex;
  gap: 3.3333rem;
  font-weight: 600;
  font-size: 19.9995px;
  line-height: 24px;
  a {
    color: #fff;
  }
`;
