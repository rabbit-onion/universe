import styled from 'styled-components';
import PlayBtn from '../../ui/button/PlayBtn';
import InfoBtn from '../../ui/button/InfoBtn';
import GotoPreviewBtn from '../../ui/button/GotoPreviewBtn';
import DayBtn from '../../ui/button/DayBtn';
import AllBtn from '../../ui/button/AllBtn';
import PlusBtn from '../../ui/button/PlusBtn';
import GoodBtn from '../../ui/button/GoodBtn';
import MuteBtn from '../../ui/button/MuteBtn';
import HorizontalCard from '../../ui/card/HorizontalCard';
import VerticalCard from '../../ui/card/VerticalCard';
import WatchingCard from '../../ui/card/WatchingCard';

export const Wrap = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Main = () => {
  return (
    <>
      <Wrap>
        <PlayBtn />
        <InfoBtn />
        <GotoPreviewBtn />
        <DayBtn />
        <AllBtn />
        <PlusBtn />
        <GoodBtn />
        <MuteBtn />
        <HorizontalCard />
        <VerticalCard />
        <WatchingCard />
      </Wrap>
    </>
  );
};

export default Main;
