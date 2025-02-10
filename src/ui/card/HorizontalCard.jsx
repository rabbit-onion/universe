import React from 'react';
import styled from 'styled-components';
export const Horizon = styled.div`
  width: 345.3px;
  height: 223px;
  border-radius: 25px;
  background-color: #fff;
`;

const HorizontalCard = ({ children }) => {
  return (
    <>
      <Horizon>{children}</Horizon>
    </>
  );
};

export default HorizontalCard;
