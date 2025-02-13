// 마이페이지에 내가 본 작품 재생시간 보이는 부분
import styled from 'styled-components';
import ProgressBar from '../ProgressBar';

export const Watching = styled.div`
  position: relative;
  width: 340px;
  height: 508px;
  background-color: #fff;
  border-radius: 10px;
`;

const WatchingCard = ({ children }) => {
  return (
    <>
      <Watching>
        {children}
        <ProgressBar />
      </Watching>
    </>
  );
};

export default WatchingCard;
