import styled from 'styled-components';

export const PlayingBtn = styled.button`
  width: 215px;
  height: 68px;
  left: 20px;
  top: 20px;
  background: #4b4b4b;
  background: color(display-p3 0.294 0.294 0.294);
  border-radius: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 16px, 28px;
  color: #ffffff;
`;

const InfoBtn = () => {
  return (
    <>
      <PlayingBtn>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.0274 34C26.7351 34 33.7941 26.8366 33.7941 18C33.7941 9.16344 26.7351 2 18.0274 2C9.31972 2 2.26074 9.16344 2.26074 18C2.26074 26.8366 9.31972 34 18.0274 34Z"
            stroke="white"
            strokeOpacity="1"
            strokeWidth="3"
          />
          <path d="M18.0273 17V27" stroke="white" strokeOpacity="1" strokeWidth="3" strokeLinecap="round" />
          <path
            d="M18.0271 14.0008C19.2038 14.0008 20.1577 13.0328 20.1577 11.8387C20.1577 10.6445 19.2038 9.67651 18.0271 9.67651C16.8504 9.67651 15.8965 10.6445 15.8965 11.8387C15.8965 13.0328 16.8504 14.0008 18.0271 14.0008Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
        상세정보
      </PlayingBtn>
    </>
  );
};

export default InfoBtn;
