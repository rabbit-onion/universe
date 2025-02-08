import { EpisodeDesc, EpisodeInfo, EpisodeItemWrap, EpisodeNum, EpisodeTitle } from './style';

const EpisodeItem = ({ still_path, episodeData }) => {
  const bgurl = 'https://image.tmdb.org/t/p/w500/';
  const { episode_number, name, runtime, overview } = episodeData;

  return (
    <>
      <EpisodeItemWrap>
        <EpisodeNum>{episode_number}</EpisodeNum>
        <div>
          <img src={`${bgurl}${still_path}`} alt="" />
        </div>
        <EpisodeInfo>
          <EpisodeTitle>
            <div>
              <span>{episode_number}화</span>
              <h3>{name}</h3>
            </div>
            <span>{runtime}분</span>
          </EpisodeTitle>
          <EpisodeDesc>{overview}</EpisodeDesc>
        </EpisodeInfo>
      </EpisodeItemWrap>
    </>
  );
};

export default EpisodeItem;
