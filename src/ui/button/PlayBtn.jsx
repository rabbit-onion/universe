import React from 'react';
import styled from 'styled-components';
export const PlayingBtn = styled.button`
  width: 160px;
  height: 68px;
  left: 20px;
  top: 20px;
  background: #ffffff;
  background: color(display-p3 1 1 1);
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
  padding: 10px;
`;

export const Bgdiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: #000;
`;

const PlayBtn = () => {
  return (
    <Bgdiv>
      <PlayingBtn>
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25.1916 10.662C25.8642 11.0323 26.4268 11.5852 26.8192 12.2613C27.2115 12.9374 27.4188 13.7113 27.4188 14.5C27.4188 15.2888 27.2115 16.0627 26.8192 16.7388C26.4268 17.4149 25.8642 17.9677 25.1916 18.3381L7.25002 28.4399C4.36105 30.0682 0.8125 27.9513 0.8125 24.6033V4.39817C0.8125 1.04876 4.36105 -1.06672 7.25002 0.558679L25.1916 10.662Z"
            fill="#151515"
          />
        </svg>
        재생
      </PlayingBtn>
    </Bgdiv>
  );
};

export default PlayBtn;
