import React from 'react';
import styled from 'styled-components';

export const Day7Btn = styled.button`
  width: 64px;
  height: 64px;
  left: 105px;
  top: 20px;
  background: #0068ff;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border-radius: 64px;
`;

const DayBtn = () => {
  return (
    <>
      <Day7Btn>월</Day7Btn>
    </>
  );
};

export default DayBtn;
