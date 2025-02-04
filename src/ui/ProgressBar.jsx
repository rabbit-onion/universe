// 재생바
import React from 'react';
import styled from 'styled-components';

export const FullBar = styled.div`
  width: 340px;
  height: 12px;
  background-color: #d9d9d9;
  position: absolute;
  top: 80%;
`;

export const Progress = styled.div`
  width: 222px;
  height: 12px;
  background-color: #0088ff;
`;

const ProgressBar = () => {
  return (
    <>
      <FullBar>
        <Progress></Progress>
      </FullBar>
    </>
  );
};

export default ProgressBar;
