import { useSelector } from 'react-redux';
import { EpisodeItem } from './style';

const EpisodeList = () => {
  return (
    <>
      <EpisodeItem>
        <EpisodeNum>1</EpisodeNum>
        <div>
          <img src={`${bgurl}${backdrop_path}`} alt="" />
        </div>
        <EpisodeInfo>
          <EpisodeTitle>
            <div>
              <span>1화</span>
              <h3>괴수가 된 남자</h3>
            </div>
            <span>60분</span>
          </EpisodeTitle>
          <EpisodeDesc>
            일상적인 괴수의 위협에 노출된 일본.
            <br />
            괴수를 토벌하는 「일본 방위대」 입대를 지망했던 히비노 카프카는 꿈을 포기하고 괴수 전문 청소업자로서 일하고
            있었다.
            <br />
            방위대 제3부대의 대장으로서 활약하는 소꿉친구･아시로 미나와 나눴던 함께 괴수와 싸우자는 약속을 떠올리며
            안타까움을 느끼는 나날을 보내던 중,
            <br />
            카프카는 방위 대원을 지망하는 후배 이치카와 레노를 만났는데.
          </EpisodeDesc>
        </EpisodeInfo>
      </EpisodeItem>
      <hr />
      {/* 마지막 hr은 7D7D7D, height 3px */}
    </>
  );
};

export default EpisodeList;
