import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import VideoInfo from '../components/main/VideoInfo';

export const ModalWrap = styled.div`
  margin: auto;
  margin-top: 60px;
  background-color: #fff;
  width: 1440px;
  border-radius: 60px;
  overflow: hidden;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 64px;
  right: 60px;
  background-color: transparent;
`;

const ModalLayout = () => {
  return (
    <ModalWrap>
      <VideoInfo />
      <CloseBtn>
        <IoClose size={60} color="white" />
      </CloseBtn>
    </ModalWrap>
  );
};

export default ModalLayout;
