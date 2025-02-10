import React from 'react';
import styled from 'styled-components';

export const Vertical = styled.div`
  width: 340px;
  height: 506px;
  border-radius: 30px;
  background-color: #fff;
`;

const VerticalCard = ({ children }) => {
  return (
    <>
      <Vertical>{children}</Vertical>
    </>
  );
};

export default VerticalCard;
