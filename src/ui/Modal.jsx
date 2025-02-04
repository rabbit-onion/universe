import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 1440px;
  height: 300px;
  border-radius: 60px;
  padding: 0 60px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 64px;
  right: 60px;
  background-color: transparent;
`;

const Modal = () => {
  return (
    <ModalWrap>
      <CloseBtn>
        <IoClose size={60} color="white" />
      </CloseBtn>
    </ModalWrap>
  );
};

export default Modal;
