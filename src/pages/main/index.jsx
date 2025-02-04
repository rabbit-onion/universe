import React from 'react';
import styled from 'styled-components';
import Modal from '../../ui/Modal';

export const Wrap = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 100vh;
`;

const Main = () => {
  return (
    <Wrap>
      <Modal />
    </Wrap>
  );
};

export default Main;
