import React from 'react';
import EpisodeItem from './EpisodeItem';

const EpisodeList = ({ seasons }) => {
  return (
    <>
      {seasons.episodes.map((episodeData, idx) => {
        return (
          <React.Fragment key={episodeData.id}>
            <EpisodeItem episodeData={episodeData} still_path={episodeData.still_path} />
            {idx !== seasons.episodes.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
      {/* 마지막 hr은 7D7D7D, height 3px */}
    </>
  );
};

export default EpisodeList;
