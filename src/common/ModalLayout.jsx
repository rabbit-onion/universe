import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import VideoInfo from '../components/main/videoInfoModal/VideoInfo';

export const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 5426px;
  min-width: 1920px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

export const ModalWrap = styled.div`
  position: relative;
  width: 1440px;
  min-width: 1440px;
  margin: auto;
  top: 50px;
  background-color: #fff;
  border-radius: 60px;
  overflow: hidden;
  button {
    border: none;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 64px;
  right: 60px;
  background-color: transparent;
  z-index: 2;
`;

const ModalLayout = () => {
  return (
    <Dimmed>
      <ModalWrap>
        <VideoInfo />
        <CloseBtn>
          <IoClose size={60} color="white" />
        </CloseBtn>
      </ModalWrap>
    </Dimmed>
  );
};

export default ModalLayout;
