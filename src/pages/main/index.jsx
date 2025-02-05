import styled from 'styled-components';
import ModalLayout from '../../common/ModalLayout';

export const Wrap = styled.div`
  position: relative;
  background: url('/images/video/pageBg.png') no-repeat 0 0 / cover;
  width: 100%;
  height: 6926px;
  min-height: 100vh;
`;

const Main = () => {
  return (
    <Wrap>
      <ModalLayout />
    </Wrap>
  );
};

export default Main;
