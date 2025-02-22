import React from 'react';
import EpisodeItem from './EpisodeItem';

const EpisodeList = ({ viewEpisodes }) => {
  return (
    <>
      {viewEpisodes.map((episode, idx) => {
        return (
          <React.Fragment key={episode.id}>
            <EpisodeItem key={episode.id} episode={episode} still_path={episode.still_path} />
            {idx !== viewEpisodes.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default EpisodeList;
