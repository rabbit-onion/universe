import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import VideoInfo from '../components/main/VideoInfo';

export const Dimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-width: 1920px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWrap = styled.div`
  position: relative;
  margin: auto;
  margin-top: 130px;
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
