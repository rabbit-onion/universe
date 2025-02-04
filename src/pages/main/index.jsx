import styled from 'styled-components';
import ModalLayout from '../../common/ModalLayout';

export const Wrap = styled.div`
  position: relative;
  background-color: lightgray;
  width: 100%;
  height: 100%;
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
