import EpisodeItem from './EpisodeItem';

const EpisodeList = ({ seasons }) => {
  return (
    <>
      {seasons[1].episodes.map((episodeData) => (
        <EpisodeItem key={episodeData.id} />
      ))}
      <EpisodeItem />
      <hr />
      {/* 마지막 hr은 7D7D7D, height 3px */}
    </>
  );
};

export default EpisodeList;
