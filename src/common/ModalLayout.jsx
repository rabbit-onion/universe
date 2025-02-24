import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import VideoInfo from '../components/main/videoInfoModal/VideoInfo';
import { useNavigate } from 'react-router-dom';

export const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-width: 1920px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  padding-bottom: 10%;
  overflow-y: auto;
`;

export const ModalWrap = styled.div`
  position: relative;
  width: 1440px;
  margin: auto;
  top: 10%;
  background-color: #fff;
  border-radius: 60px;
  overflow-y: auto;
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
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  // Dimmed 영역 클릭시 모달 닫기
  const handleDimmedClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <Dimmed>
      <ModalWrap>
        <VideoInfo />
        <CloseBtn onClick={handleClose}>
          <IoClose size={60} color="white" />
        </CloseBtn>
      </ModalWrap>
    </Dimmed>
  );
};

export default ModalLayout;
